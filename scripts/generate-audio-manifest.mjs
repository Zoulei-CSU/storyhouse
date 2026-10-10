import { build } from 'esbuild';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'docs', 'audio');
const outFile = path.join(outDir, 'voice-manifest.json');
const tmpFile = path.join('/tmp', `story-house-stories-${Date.now()}.mjs`);

async function loadStories() {
  await build({
    stdin: {
      contents: `export { allStories } from '@/data/stories/index';`,
      resolveDir: root,
      sourcefile: 'audio-manifest-entry.ts',
      loader: 'ts',
    },
    bundle: true,
    format: 'esm',
    platform: 'node',
    target: 'node18',
    outfile: tmpFile,
    alias: { '@': path.join(root, 'src') },
    define: { 'import.meta.env.DEV': 'false' },
    logLevel: 'warning',
  });
  const mod = await import(pathToFileURL(tmpFile).href);
  const stories = mod.allStories;
  await fs.rm(tmpFile, { force: true });
  return stories;
}

function toRecord(story) {
  const paragraphs = story.paragraphs.map((p) => p.trim()).filter(Boolean);
  return {
    id: story.id,
    title: story.title,
    categories: story.categories,
    ageGroup: story.ageGroup,
    readMinutes: story.readMinutes,
    paragraphs,
    text: paragraphs.join('\n'),
  };
}

const stories = await loadStories();
const records = stories.map(toRecord).sort((a, b) => a.id.localeCompare(b.id));

const manifest = {
  generatedAt: new Date().toISOString(),
  storyCount: records.length,
  usage:
    '每个音色目录下，用故事 id 作为文件名生成 mp3，例如 voice1/the-tortoise-and-the-hare.mp3；text 字段为需要朗读的完整文本，段落之间用换行分隔。',
  stories: records,
};

await fs.mkdir(outDir, { recursive: true });
await fs.writeFile(outFile, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
console.log(`[audio-manifest] wrote ${records.length} stories -> ${outFile}`);
