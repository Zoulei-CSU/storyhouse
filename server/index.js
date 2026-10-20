import { createServer } from 'node:http';
import { createReadStream, promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = process.env.STORY_HOUSE_DATA_DIR || path.join(__dirname, 'data', 'users');
const AUDIO_DIR = process.env.STORY_HOUSE_AUDIO_DIR || path.join(__dirname, '..', 'audio-voices');
const IMAGE_DIR = process.env.STORY_HOUSE_IMAGE_DIR || path.join(__dirname, '..', 'story-images');
const PORT = Number(process.env.API_PORT || process.env.PORT || 3001);
const HOST = process.env.API_HOST || '0.0.0.0';

const MAX_NAME_LENGTH = 24;
const MAX_LIST_LENGTH = 500;

const AVATAR_EMOJIS = ['🐣', '🐻', '🦊', '🐼', '🐯', '🦁', '🐰', '🐨', '🐸', '🦄', '🐙', '🐳', '🦉', '🐢', '🌟', '🚀'];
const AVATAR_COLORS = ['#ffd166', '#f78fb3', '#8ecae6', '#95d5b2', '#ffb4a2', '#bde0fe', '#ffc6ff', '#b8f2e6'];

function sendJson(res, status, body) {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload),
    'Cache-Control': 'no-store',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(payload);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > 1_000_000) {
        reject(new Error('payload too large'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      if (chunks.length === 0) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf8')));
      } catch {
        reject(new Error('invalid json'));
      }
    });
    req.on('error', reject);
  });
}

function normalizeName(input) {
  if (typeof input !== 'string') return '';
  return input.normalize('NFKC').replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, MAX_NAME_LENGTH);
}

function nameKey(name) {
  return Buffer.from(name.toLowerCase(), 'utf8').toString('base64url');
}

function hashName(name) {
  let hash = 0;
  for (const char of name) {
    hash = (hash * 31 + char.codePointAt(0)) >>> 0;
  }
  return hash;
}

function sanitizeIdList(value) {
  if (!Array.isArray(value)) return null;
  const result = [];
  const seen = new Set();
  for (const item of value) {
    if (typeof item !== 'string') continue;
    const id = item.trim().slice(0, 80);
    if (!id || seen.has(id)) continue;
    seen.add(id);
    result.push(id);
    if (result.length >= MAX_LIST_LENGTH) break;
  }
  return result;
}

function sanitizeText(value, maxLength) {
  if (typeof value !== 'string') return null;
  return value.normalize('NFKC').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').trim().slice(0, maxLength);
}

// ---- audio voices ----

const AUDIO_EXTENSIONS = ['.mp3', '.m4a', '.ogg'];

/** 合法的路径片段：允许中文等字符，但禁止路径穿越与分隔符。 */
function isSafeSegment(value) {
  if (typeof value !== 'string') return false;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > 100) return false;
  if (trimmed === '.' || trimmed === '..') return false;
  if (trimmed.includes('/') || trimmed.includes('\\') || trimmed.includes('\0')) return false;
  return true;
}

/** 确保解析后的路径仍位于音频根目录内。 */
function isInsideAudioDir(target) {
  const base = path.resolve(AUDIO_DIR);
  const resolved = path.resolve(target);
  return resolved === base || resolved.startsWith(base + path.sep);
}

function audioContentType(file) {
  switch (path.extname(file).toLowerCase()) {
    case '.mp3':
      return 'audio/mpeg';
    case '.m4a':
      return 'audio/mp4';
    case '.ogg':
      return 'audio/ogg';
    default:
      return 'application/octet-stream';
  }
}

async function listVoices() {
  let entries;
  try {
    entries = await fs.readdir(AUDIO_DIR, { withFileTypes: true });
  } catch {
    return [];
  }
  const voices = [];
  for (const entry of entries) {
    if (!entry.isDirectory() || !isSafeSegment(entry.name)) continue;
    const files = await fs.readdir(path.join(AUDIO_DIR, entry.name)).catch(() => []);
    const count = files.filter((file) => AUDIO_EXTENSIONS.includes(path.extname(file).toLowerCase())).length;
    voices.push({ id: entry.name, name: entry.name, count });
  }
  return voices.sort((a, b) => a.id.localeCompare(b.id));
}

async function readVoiceIndex(voiceId) {
  if (!isSafeSegment(voiceId)) return null;
  const dir = path.join(AUDIO_DIR, voiceId);
  if (!isInsideAudioDir(dir)) return null;
  let files;
  try {
    files = await fs.readdir(dir);
  } catch {
    return null;
  }
  return files
    .filter((file) => AUDIO_EXTENSIONS.includes(path.extname(file).toLowerCase()))
    .map((file) => file.slice(0, -path.extname(file).length))
    .sort();
}

async function resolveAudioFile(voiceId, storyId) {
  if (!isSafeSegment(voiceId) || !isSafeSegment(storyId)) return null;
  for (const ext of AUDIO_EXTENSIONS) {
    const file = path.join(AUDIO_DIR, voiceId, `${storyId}${ext}`);
    if (!isInsideAudioDir(file)) continue;
    try {
      const stat = await fs.stat(file);
      if (stat.isFile()) return { file, stat };
    } catch {
      // try the next extension
    }
  }
  return null;
}

function parseRange(header, size) {
  const match = /^bytes=(\d*)-(\d*)$/.exec(header || '');
  if (!match) return null;
  const [, startRaw, endRaw] = match;
  let start;
  let end;
  if (startRaw === '') {
    const suffix = Number(endRaw);
    if (!Number.isFinite(suffix) || suffix <= 0) return null;
    start = Math.max(0, size - suffix);
    end = size - 1;
  } else {
    start = Number(startRaw);
    end = endRaw === '' ? size - 1 : Number(endRaw);
  }
  if (!Number.isFinite(start) || !Number.isFinite(end) || start > end || start >= size) return null;
  return { start, end: Math.min(end, size - 1) };
}

async function serveAudio(req, res, voiceId, storyId) {
  const resolved = await resolveAudioFile(voiceId, storyId);
  if (!resolved) {
    sendJson(res, 404, { error: 'audio not found' });
    return;
  }
  const { file, stat } = resolved;
  const size = stat.size;
  const headers = {
    'Content-Type': audioContentType(file),
    'Accept-Ranges': 'bytes',
    'Cache-Control': 'public, max-age=86400',
    'Access-Control-Allow-Origin': '*',
  };
  const range = parseRange(req.headers.range, size);
  if (range) {
    headers['Content-Range'] = `bytes ${range.start}-${range.end}/${size}`;
    headers['Content-Length'] = String(range.end - range.start + 1);
    res.writeHead(206, headers);
    if (req.method === 'HEAD') {
      res.end();
      return;
    }
    createReadStream(file, { start: range.start, end: range.end }).pipe(res);
    return;
  }
  headers['Content-Length'] = String(size);
  res.writeHead(200, headers);
  if (req.method === 'HEAD') {
    res.end();
    return;
  }
  createReadStream(file).pipe(res);
}

// ---- story images ----

/** 确保解析后的路径仍位于图片根目录内。 */
function isInsideImageDir(target) {
  const base = path.resolve(IMAGE_DIR);
  const resolved = path.resolve(target);
  return resolved === base || resolved.startsWith(base + path.sep);
}

/**
 * 遍历图片目录的一级子目录，按故事 id 聚合。
 * 开发环境每次请求都扫一遍（几百个文件，开销可忽略），
 * 这样新放进去的图片不必重启服务。
 */
async function scanStoryImages() {
  const index = new Map();
  let total = 0;
  let folders;
  try {
    folders = await fs.readdir(IMAGE_DIR, { withFileTypes: true });
  } catch {
    return { index, total };
  }
  for (const folder of folders) {
    if (!folder.isDirectory() || !isSafeSegment(folder.name)) continue;
    let files;
    try {
      files = await fs.readdir(path.join(IMAGE_DIR, folder.name), { withFileTypes: true });
    } catch {
      continue;
    }
    for (const file of files) {
      if (!file.isFile() || !/\.jpe?g$/i.test(file.name)) continue;
      const storyId = file.name.replace(/\.jpe?g$/i, '');
      if (!isSafeSegment(storyId)) continue;
      const items = index.get(storyId) ?? [];
      items.push({ folder: folder.name, file: file.name });
      index.set(storyId, items);
      total += 1;
    }
  }
  // 目录名排序，保证同一故事的图片顺序稳定。
  // 用码位比较而不是 localeCompare：Go 那边是字节序，两者要一致。
  for (const items of index.values()) {
    items.sort((a, b) => (a.folder < b.folder ? -1 : a.folder > b.folder ? 1 : 0));
  }
  return { index, total };
}

async function listImageIndex() {
  const { index } = await scanStoryImages();
  return [...index.keys()].sort();
}

async function resolveImageFile(folder, name) {
  if (!isSafeSegment(folder) || !isSafeSegment(name) || !/\.jpe?g$/i.test(name)) return null;
  const file = path.join(IMAGE_DIR, folder, name);
  if (!isInsideImageDir(file)) return null;
  try {
    const stat = await fs.stat(file);
    if (stat.isFile()) return { file, stat };
  } catch {
    // not found
  }
  return null;
}

async function serveImage(req, res, folder, name) {
  const resolved = await resolveImageFile(folder, name);
  if (!resolved) {
    sendJson(res, 404, { error: 'image not found' });
    return;
  }
  const { file, stat } = resolved;
  res.writeHead(200, {
    'Content-Type': 'image/jpeg',
    'Content-Length': String(stat.size),
    // 图片可能被重新生成（同名换内容），不用 immutable
    'Cache-Control': 'public, max-age=86400',
    'Last-Modified': stat.mtime.toUTCString(),
    'Access-Control-Allow-Origin': '*',
  });
  if (req.method === 'HEAD') {
    res.end();
    return;
  }
  createReadStream(file).pipe(res);
}

function userPath(key) {
  return path.join(DATA_DIR, `${key}.json`);
}
async function readUserFile(key) {
  try {
    const raw = await fs.readFile(userPath(key), 'utf8');
    return JSON.parse(raw);
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}

async function writeUserFile(user) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(userPath(nameKey(user.name)), JSON.stringify(user, null, 2), 'utf8');
}

function createUser(name) {
  const now = new Date().toISOString();
  const hash = hashName(name);
  return {
    name,
    bio: '',
    avatarEmoji: AVATAR_EMOJIS[hash % AVATAR_EMOJIS.length],
    avatarColor: AVATAR_COLORS[hash % AVATAR_COLORS.length],
    favorites: [],
    history: [],
    createdAt: now,
    updatedAt: now,
  };
}

async function createOrGetUser(name) {
  const key = nameKey(name);
  const existing = await readUserFile(key);
  if (existing) return existing;
  const user = createUser(name);
  await writeUserFile(user);
  return user;
}

async function updateUser(name, patch) {
  const key = nameKey(name);
  const existing = (await readUserFile(key)) || createUser(name);

  const bio = sanitizeText(patch.bio, 200);
  if (bio !== null) existing.bio = bio;

  const avatarEmoji = sanitizeText(patch.avatarEmoji, 8);
  if (avatarEmoji) existing.avatarEmoji = avatarEmoji;

  const avatarColor = sanitizeText(patch.avatarColor, 32);
  if (avatarColor && /^#[0-9a-fA-F]{6}$/.test(avatarColor)) existing.avatarColor = avatarColor;

  const favorites = sanitizeIdList(patch.favorites);
  if (favorites) existing.favorites = favorites;

  const history = sanitizeIdList(patch.history);
  if (history) existing.history = history;

  existing.updatedAt = new Date().toISOString();
  await writeUserFile(existing);
  return existing;
}

const server = createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    res.end();
    return;
  }

  const url = new URL(req.url ?? '/', 'http://localhost');
  const pathname = url.pathname;

  try {
    if (req.method === 'GET' && pathname === '/api/health') {
      sendJson(res, 200, {
        ok: true,
        mode: 'server',
        storage: 'file',
        features: {
          audioVoices: (await listVoices()).length > 0,
          coverImages: (await listImageIndex()).length > 0,
        },
        time: new Date().toISOString(),
      });
      return;
    }

    if (req.method === 'GET' && pathname === '/api/voices') {
      sendJson(res, 200, { voices: await listVoices(), storage: 'file' });
      return;
    }

    if ((req.method === 'GET' || req.method === 'HEAD') && pathname.startsWith('/api/voices/')) {
      const rest = pathname.slice('/api/voices/'.length);
      const slash = rest.indexOf('/');
      if (slash > 0) {
        const voiceId = decodeURIComponent(rest.slice(0, slash));
        const tail = rest.slice(slash + 1);
        if (tail === 'index') {
          const storyIds = await readVoiceIndex(voiceId);
          if (!storyIds) {
            sendJson(res, 404, { error: 'voice not found' });
            return;
          }
          sendJson(res, 200, { voiceId, storyIds });
          return;
        }
        if (tail.toLowerCase().endsWith('.mp3')) {
          const storyId = decodeURIComponent(tail.slice(0, -'.mp3'.length));
          await serveAudio(req, res, voiceId, storyId);
          return;
        }
      }
      sendJson(res, 404, { error: 'not found' });
      return;
    }

    if (req.method === 'GET' && pathname === '/api/images') {
      const { index, total } = await scanStoryImages();
      const storyIds = [...index.keys()].sort();
      sendJson(res, 200, { count: storyIds.length, images: total, storyIds });
      return;
    }

    // 单个故事的全部配图：前端据此决定「无图 / 单图 / 轮播」
    if (req.method === 'GET' && pathname.startsWith('/api/story-images/')) {
      const storyId = decodeURIComponent(pathname.slice('/api/story-images/'.length));
      const { index } = await scanStoryImages();
      const images = index.get(storyId) ?? [];
      sendJson(res, 200, { storyId, count: images.length, images });
      return;
    }

    if ((req.method === 'GET' || req.method === 'HEAD') && pathname.startsWith('/api/images/')) {
      const segments = pathname.slice('/api/images/'.length).split('/');
      // 旧地址 /api/images/<id>.jpg：取该故事的第一张
      if (segments.length === 1 && segments[0].toLowerCase().endsWith('.jpg')) {
        const storyId = decodeURIComponent(segments[0].slice(0, -'.jpg'.length));
        const { index } = await scanStoryImages();
        const images = index.get(storyId) ?? [];
        if (images.length === 0) {
          sendJson(res, 404, { error: 'image not found' });
          return;
        }
        await serveImage(req, res, images[0].folder, images[0].file);
        return;
      }
      if (segments.length === 2) {
        await serveImage(req, res, decodeURIComponent(segments[0]), decodeURIComponent(segments[1]));
        return;
      }
      sendJson(res, 404, { error: 'not found' });
      return;
    }

    if (req.method === 'POST' && pathname === '/api/users') {
      const body = await readBody(req);
      const name = normalizeName(body?.name);
      if (!name) {
        sendJson(res, 400, { error: 'name is required' });
        return;
      }
      sendJson(res, 200, { user: await createOrGetUser(name), storage: 'file' });
      return;
    }

    if (pathname.startsWith('/api/users/')) {
      const name = normalizeName(decodeURIComponent(pathname.slice('/api/users/'.length)));
      if (!name) {
        sendJson(res, 400, { error: 'name is required' });
        return;
      }

      if (req.method === 'GET') {
        const user = await readUserFile(nameKey(name));
        if (!user) {
          sendJson(res, 404, { error: 'user not found' });
          return;
        }
        sendJson(res, 200, { user, storage: 'file' });
        return;
      }

      if (req.method === 'PUT') {
        const body = await readBody(req);
        sendJson(res, 200, { user: await updateUser(name, body ?? {}), storage: 'file' });
        return;
      }
    }

    sendJson(res, 404, { error: 'not found' });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'server error';
    sendJson(res, message === 'invalid json' || message === 'payload too large' ? 400 : 500, { error: message });
  }
});

server.listen(PORT, HOST, async () => {
  console.log(`[story-house] API server listening on http://${HOST}:${PORT}`);
  console.log(`[story-house] user data directory: ${DATA_DIR}`);
  console.log(`[story-house] audio voices directory: ${AUDIO_DIR}`);
  const { index, total } = await scanStoryImages();
  console.log(`[story-house] story images directory: ${IMAGE_DIR} (${total} 张 / ${index.size} 个故事)`);
});
