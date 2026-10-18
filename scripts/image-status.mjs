/**
 * 统计故事配图的生成进度。
 *
 * 扫描图片目录里存在的 <storyId>.jpg，对照提示词清单统计覆盖率。
 *
 * 用法：
 *   node scripts/image-status.mjs               # 默认扫描 story-images/
 *   node scripts/image-status.mjs --dir ./其他   # 指定目录
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const dirArgIndex = args.indexOf('--dir');
const imageDir =
  dirArgIndex >= 0 && args[dirArgIndex + 1]
    ? path.resolve(root, args[dirArgIndex + 1])
    : path.join(root, 'story-images');

const manifestFile = path.join(root, 'docs', 'story-prompts', 'image-prompts.json');

const CATEGORY_LABELS = {
  fable: '寓言故事',
  idiom: '成语故事',
  bedtime: '睡前故事',
  fairy: '童话故事',
  myth: '神话传说',
  science: '科普启蒙',
  character: '品格教育',
};

async function main() {
  let manifest;
  try {
    manifest = JSON.parse(await fs.readFile(manifestFile, 'utf8'));
  } catch {
    console.error(`[错误] 找不到提示词清单：${manifestFile}`);
    console.error('请先运行：npm run images:prompts');
    process.exit(1);
  }

  let files = [];
  try {
    files = await fs.readdir(imageDir);
  } catch {
    console.log(`图片目录不存在：${imageDir}`);
    console.log('（还没有生成任何图片，或目录尚未创建）');
    files = [];
  }

  const existing = new Set(
    files
      .filter((name) => /\.jpe?g$/i.test(name))
      .map((name) => name.replace(/\.jpe?g$/i, '')),
  );

  const stories = manifest.stories ?? [];
  const stats = new Map();
  const missing = [];

  for (const story of stories) {
    const key = story.primaryCategory;
    if (!stats.has(key)) stats.set(key, { total: 0, done: 0 });
    const entry = stats.get(key);
    entry.total += 1;
    if (existing.has(story.id)) {
      entry.done += 1;
    } else {
      missing.push(story);
    }
  }

  const total = stories.length;
  const done = total - missing.length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  console.log(`图片目录：${imageDir}`);
  console.log(`总进度：${done}/${total}（${percent}%）`);
  console.log('');
  console.log('分类          已完成 / 总数');
  console.log('-------------------------');

  let unknownCount = 0;
  const knownIds = new Set(stories.map((s) => s.id));
  for (const id of existing) {
    if (!knownIds.has(id)) unknownCount += 1;
  }

  for (const [key, label] of Object.entries(CATEGORY_LABELS)) {
    const entry = stats.get(key);
    if (!entry) continue;
    const bar = entry.total ? Math.round((entry.done / entry.total) * 100) : 0;
    console.log(`${label.padEnd(8)} ${String(entry.done).padStart(3)} / ${String(entry.total).padStart(3)}  ${String(bar).padStart(3)}%`);
  }

  if (unknownCount > 0) {
    console.log('');
    console.log(`另有 ${unknownCount} 个文件名不在故事清单里（可能是拼写错误或多出来的图片）`);
  }

  if (missing.length > 0) {
    console.log('');
    console.log('下一批可以先生成这些：');
    for (const story of missing.slice(0, 10)) {
      console.log(`  ${story.file}  ${story.title}`);
    }
    if (missing.length > 10) {
      console.log(`  …… 还有 ${missing.length - 10} 篇`);
    }
  } else if (total > 0) {
    console.log('');
    console.log('全部故事都已有配图。');
  }
}

await main();
