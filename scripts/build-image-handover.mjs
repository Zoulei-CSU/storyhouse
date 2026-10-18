/**
 * 导出「交给其他 AI 生图」的资料包内容。
 *
 * 产物：
 *   docs/image-handover/prompts-all.md   全部提示词，按分类分组，便于逐条复制
 *   docs/image-handover/prompts.csv      结构化清单，便于脚本或表格处理
 *
 * README.md 与 reference/ 是手工维护的，本脚本不覆盖。
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sourceFile = path.join(root, 'docs', 'story-prompts', 'image-prompts.json');
const outDir = path.join(root, 'docs', 'image-handover');

const CATEGORY_LABELS = {
  fable: '寓言故事',
  idiom: '成语故事',
  bedtime: '睡前故事',
  fairy: '童话故事',
  myth: '神话传说',
  science: '科普启蒙',
  character: '品格教育',
};

const CATEGORY_ORDER = ['fable', 'idiom', 'bedtime', 'fairy', 'myth', 'science', 'character'];

const AGE_LABELS = {
  Preschool: '3–6 岁',
  Growing: '6–9 岁',
  Explorer: '9–12 岁',
};

const NEGATIVE_GLOBAL =
  '写实照片，真实人物肖像，3D 写实渲染，文字，汉字，英文，数字，水印，签名，边框，' +
  '阴暗恐怖，血腥，暴力，武器，低清晰度，模糊，肢体畸形，多余手指，重复人脸，品牌 logo，商标';

const NEGATIVE_ANCIENT = '现代服装，现代建筑，西装，T恤，牛仔裤，汽车';

function escapeCsv(value) {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

const raw = await fs.readFile(sourceFile, 'utf8');
const manifest = JSON.parse(raw);
const stories = Array.isArray(manifest.stories) ? manifest.stories : [];
if (stories.length === 0) {
  console.error(`[错误] ${sourceFile} 里没有故事数据`);
  process.exit(1);
}

const byCategory = new Map(CATEGORY_ORDER.map((key) => [key, []]));
for (const story of stories) {
  const key = byCategory.has(story.primaryCategory) ? story.primaryCategory : 'fable';
  byCategory.get(key).push(story);
}

// ---- prompts-all.md ----
const lines = [
  '# 故事配图提示词总表',
  '',
  `共 ${stories.length} 条。每条给出：故事名、目标文件名、完整提示词（可直接复制）。`,
  '',
  '## 交付规格',
  '',
  '| 项 | 要求 |',
  '|---|---|',
  '| 画幅 | 16:9 横版，1536×864 或等比更大 |',
  '| 格式 | JPEG，质量 80–85 |',
  '| 体积 | 单张 ≤ 300 KB |',
  '| 命名 | `<storyId>.jpg`，不加序号与前缀 |',
  '| 画面 | 无任何文字、水印、签名、边框 |',
  '| 构图 | 主体居中，重要内容集中在画面中部 |',
  '',
  '## 统一负面提示词',
  '',
  '```text',
  NEGATIVE_GLOBAL,
  '```',
  '',
  '成语 / 神话 / 寓言类额外追加（清单已内置，此处仅作说明）：',
  '',
  '```text',
  NEGATIVE_ANCIENT,
  '```',
  '',
  '## 分类目录',
  '',
];

for (const key of CATEGORY_ORDER) {
  const list = byCategory.get(key) ?? [];
  lines.push(`- [${CATEGORY_LABELS[key]}](#${key}) — ${list.length} 条`);
}
lines.push('', '---', '');

for (const key of CATEGORY_ORDER) {
  const list = byCategory.get(key) ?? [];
  if (list.length === 0) continue;

  lines.push(`<a id="${key}"></a>`, '', `## ${CATEGORY_LABELS[key]}（${list.length} 条）`, '');
  lines.push(`> 分类键：\`${key}\`｜分类要求见 README 第四节。`, '');

  list.forEach((story, index) => {
    const age = AGE_LABELS[story.ageGroup] ?? story.ageGroup;
    lines.push(`### ${index + 1}. ${story.title}`);
    lines.push('');
    lines.push(`- 目标文件：\`${story.file}\``);
    lines.push(`- 年龄段：${age}`);
    lines.push('- 提示词：');
    lines.push('');
    lines.push('```text');
    lines.push(story.prompt);
    lines.push('```');
    lines.push('');
  });

  lines.push('---', '');
}

await fs.mkdir(outDir, { recursive: true });
await fs.writeFile(path.join(outDir, 'prompts-all.md'), lines.join('\n'), 'utf8');

// ---- prompts.csv ----
const csvLines = ['id,title,category,ageGroup,file,prompt,negative'];
for (const story of stories) {
  csvLines.push(
    [
      escapeCsv(story.id),
      escapeCsv(story.title),
      escapeCsv(story.primaryCategory),
      escapeCsv(story.ageGroup),
      escapeCsv(story.file),
      escapeCsv(story.prompt),
      escapeCsv(story.negativePrompt),
    ].join(','),
  );
}
await fs.writeFile(path.join(outDir, 'prompts.csv'), csvLines.join('\n') + '\n', 'utf8');

console.log(`[handover] ${stories.length} 条 -> ${outDir}`);
for (const key of CATEGORY_ORDER) {
  console.log(`  ${CATEGORY_LABELS[key].padEnd(5)} ${String((byCategory.get(key) ?? []).length).padStart(3)}`);
}
