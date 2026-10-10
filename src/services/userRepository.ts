import { apiUrl } from '@/config';
import type { StorageMode, UserProfile, UserProfilePatch } from '@/types/user';

export interface UserRepository {
  readonly mode: StorageMode;
  getUser(name: string): Promise<UserProfile | null>;
  createOrGetUser(name: string): Promise<UserProfile>;
  updateUser(name: string, patch: UserProfilePatch): Promise<UserProfile>;
}

const LOCAL_KEY_PREFIX = 'story-house:user:';
const HEALTH_TIMEOUT = 2500;

export const AVATAR_EMOJIS = ['🐣', '🐻', '🦊', '🐼', '🐯', '🦁', '🐰', '🐨', '🐸', '🦄', '🐙', '🐳', '🦉', '🐢', '🌟', '🚀'];
export const AVATAR_COLORS = ['#ffd166', '#f78fb3', '#8ecae6', '#95d5b2', '#ffb4a2', '#bde0fe', '#ffc6ff', '#b8f2e6'];
export const MAX_NAME_LENGTH = 24;

export function normalizeName(input: string): string {
  return input
    .normalize('NFKC')
    .replace(/[\u0000-\u001f\u007f]/g, '')
    .trim()
    .slice(0, MAX_NAME_LENGTH);
}

function hashName(name: string): number {
  let hash = 0;
  for (const char of name) {
    hash = (hash * 31 + char.codePointAt(0)!) >>> 0;
  }
  return hash;
}

export function createProfile(name: string): UserProfile {
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

function applyPatch(user: UserProfile, patch: UserProfilePatch): UserProfile {
  const next: UserProfile = {
    ...user,
    bio: typeof patch.bio === 'string' ? patch.bio.slice(0, 200) : user.bio,
    avatarEmoji: patch.avatarEmoji ? patch.avatarEmoji : user.avatarEmoji,
    avatarColor: /^#[0-9a-fA-F]{6}$/.test(patch.avatarColor ?? '') ? patch.avatarColor! : user.avatarColor,
    favorites: Array.isArray(patch.favorites) ? Array.from(new Set(patch.favorites)) : user.favorites,
    history: Array.isArray(patch.history) ? Array.from(new Set(patch.history)) : user.history,
    updatedAt: new Date().toISOString(),
  };
  return next;
}

function readLocal(key: string): UserProfile | null {
  try {
    const raw = window.localStorage.getItem(LOCAL_KEY_PREFIX + key);
    return raw ? (JSON.parse(raw) as UserProfile) : null;
  } catch {
    return null;
  }
}

function writeLocal(user: UserProfile): void {
  try {
    window.localStorage.setItem(LOCAL_KEY_PREFIX + normalizeName(user.name).toLowerCase(), JSON.stringify(user));
  } catch {
    // localStorage may be unavailable; the in-memory store keeps working for this session.
  }
}

export const localUserRepository: UserRepository = {
  mode: 'local',
  async getUser(name) {
    return readLocal(normalizeName(name).toLowerCase());
  },
  async createOrGetUser(name) {
    const key = normalizeName(name).toLowerCase();
    const existing = readLocal(key);
    if (existing) return existing;
    const user = createProfile(normalizeName(name));
    writeLocal(user);
    return user;
  },
  async updateUser(name, patch) {
    const key = normalizeName(name).toLowerCase();
    const existing = readLocal(key) ?? createProfile(normalizeName(name));
    const next = applyPatch(existing, patch);
    writeLocal(next);
    return next;
  },
};

class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

async function apiRequest(path: string, init?: RequestInit): Promise<UserProfile> {
  const response = await fetch(apiUrl(path), {
    ...init,
    headers: { 'Content-Type': 'application/json', Accept: 'application/json', ...(init?.headers ?? {}) },
  });
  if (!response.ok) {
    const data = await response.json().catch(() => null);
    throw new ApiError((data as { error?: string } | null)?.error ?? `request failed (${response.status})`, response.status);
  }
  const data = (await response.json()) as { user: UserProfile };
  return data.user;
}

export const remoteUserRepository: UserRepository = {
  mode: 'server',
  async getUser(name) {
    try {
      return await apiRequest(`/api/users/${encodeURIComponent(normalizeName(name))}`);
    } catch (error) {
      if (error instanceof ApiError && error.status === 404) return null;
      throw error;
    }
  },
  async createOrGetUser(name) {
    return apiRequest('/api/users', { method: 'POST', body: JSON.stringify({ name: normalizeName(name) }) });
  },
  async updateUser(name, patch) {
    return apiRequest(`/api/users/${encodeURIComponent(normalizeName(name))}`, {
      method: 'PUT',
      body: JSON.stringify(patch),
    });
  },
};

let cachedMode: StorageMode | null = null;
let detection: Promise<StorageMode> | null = null;

async function probeServer(): Promise<StorageMode> {
  if (typeof fetch !== 'function') return 'local';
  try {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), HEALTH_TIMEOUT);
    const response = await fetch(apiUrl('/api/health'), {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    });
    window.clearTimeout(timer);
    if (!response.ok) return 'local';
    const contentType = response.headers.get('content-type') ?? '';
    if (!contentType.includes('application/json')) return 'local';
    const data = (await response.json()) as { mode?: string };
    return data?.mode === 'server' ? 'server' : 'local';
  } catch {
    return 'local';
  }
}

export function detectStorageMode(force = false): Promise<StorageMode> {
  if (force) {
    cachedMode = null;
    detection = null;
  }
  if (cachedMode) return Promise.resolve(cachedMode);
  if (!detection) {
    detection = probeServer().then((mode) => {
      cachedMode = mode;
      return mode;
    });
  }
  return detection;
}

export function getCachedStorageMode(): StorageMode | null {
  return cachedMode;
}

export async function getUserRepository(force = false): Promise<UserRepository> {
  const mode = await detectStorageMode(force);
  return mode === 'server' ? remoteUserRepository : localUserRepository;
}
