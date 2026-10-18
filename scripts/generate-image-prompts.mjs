/**
 * 生成故事配图的提示词清单。
 *
 * 数据源用 docs/audio/voice-manifest.json——它已经包含全部故事的
 * id / title / categories / ageGroup / 段落文本，直接读取即可，
 * 不需要再跑一次 esbuild 去打包故事模块。
 *
 * 产物：
 *   docs/story-prompts/image-prompts.json   机器可读
 *   docs/story-prompts/prompts/<分类>.md     人工逐条生成用（带复选框）
 *   docs/story-prompts/README.md             使用说明与进度
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sourceFile = path.join(root, 'docs', 'audio', 'voice-manifest.json');
const outDir = path.join(root, 'docs', 'story-prompts');
const promptsDir = path.join(outDir, 'prompts');

/** 分类的展示名、顺序与场景要求。顺序与 taxonomy 保持一致。 */
const CATEGORIES = {
  fable: {
    label: '寓言故事',
    scene: '寓言场景，动物角色拟人化、形象可爱；若画面出现人物，穿着简朴的古代服饰',
  },
  idiom: {
    label: '成语故事',
    scene:
      '中国古代场景，人物身穿中国传统古代服饰（汉服、长袍、襦裙，配发冠或发髻），' +
      '出现古代建筑、器物与街市场景',
  },
  bedtime: {
    label: '睡前故事',
    scene: '安静的夜晚场景，低饱和的暖色与柔和夜色，出现月亮、星星或柔软的被褥',
  },
  fairy: {
    label: '童话故事',
    scene: '经典童话绘本场景，可能出现城堡、森林、魔法光点等元素',
  },
  myth: {
    label: '神话传说',
    scene: '中国神话传说场景，人物穿古代服饰，出现祥云、仙山、神兽等东方神话意象',
  },
  science: {
    label: '科普启蒙',
    scene: '科普卡通插画，用清晰直观的图形解释自然或科学现象，可把对象拟人化',
  },
  character: {
    label: '品格教育',
    scene: '现代儿童日常生活场景，人物穿现代服装，注重情绪表达与人物互动',
  },
};

const CATEGORY_ORDER = Object.keys(CATEGORIES);

const AGE_STYLE = {
  Preschool: '面向 3-6 岁：构图简单，主体大而清晰，细节少，色彩明快',
  Growing: '面向 6-9 岁：构图适中，主体明确，背景简洁并带少量环境细节',
  Explorer: '面向 9-12 岁：构图完整，场景层次与细节更丰富，整体仍保持卡通风格',
};

const STYLE_PREFIX = '儿童绘本插画，卡通风格，圆润可爱的角色造型，线条柔和，明亮温暖的配色';
const LAYOUT_RULE =
  '构图要求：主体居中，四周留出安全边距，重要内容集中在画面中部，横版 16:9，画面中不出现任何文字';

const NEGATIVE_BASE = [
  '写实照片',
  '真实人物肖像',
  '3D 写实渲染',
  '文字',
  '汉字',
  '英文',
  '水印',
  '签名',
  '边框',
  '阴暗恐怖',
  '血腥',
  '暴力',
  '武器',
  '低清晰度',
  '模糊',
  '肢体畸形',
  '多余手指',
  '重复人脸',
].join('，');

/** 成语故事额外排除现代服饰与场景，确保符合「古代服饰」的硬性要求。 */
const NEGATIVE_IDIOM = '现代服装，现代建筑，西装，T恤，牛仔裤，汽车';

/**
 * 取故事首段作为画面内容，裁到 60 字以内并尽量断在标点处。
 * 首段通常就是场景与主角，比摘要更适合直接描述画面。
 */
function extractScene(story) {
  const first = (story.paragraphs?.[0] ?? '').trim();
  const fallback = story.title;
  if (!first) return fallback;
  if (first.length <= 60) return first;

  const cut = first.slice(0, 60);
  const idx = Math.max(
    cut.lastIndexOf('。'),
    cut.lastIndexOf('！'),
    cut.lastIndexOf('？'),
    cut.lastIndexOf('；'),
    cut.lastIndexOf('，'),
  );
  return idx >= 20 ? cut.slice(0, idx) : cut;
}

/**
 * 人工覆盖：个别故事的内容明显是古代背景，但数据里只打了 character 标签，
 * 按分类规则会落到「现代日常生活场景」，人物穿错衣服。
 * 这里按 id 强制指定场景分类（只影响配图风格，不改故事数据）。
 */
const CATEGORY_OVERRIDES = {
  // 古代中国题材
  'character-an-old-man-loses-his-horse': 'idiom', // 塞翁失马
  'character-grind-iron-into-a-needle': 'idiom', // 铁杵磨成针（李白）
  'character-honest-boy': 'idiom', // 诚实的砍柴娃
  'character-orange-beyond-the-river': 'idiom', // 橘逾淮为枳（晏子使楚）
  'character-su-wu-herds-sheep': 'idiom', // 苏武牧羊
  'character-empty-flower-pot': 'idiom', // 手捧空花盆的孩子（老国王）
  // 动物寓言，不该画成现代儿童生活
  'character-the-crow-feeds-its-parents': 'fable', // 乌鸦反哺
  // 欧洲童话，应走童话场景而非现代日常
  'character-pinocchio-nose': 'fairy', // 皮诺曹的长鼻子
};

/**
 * 多分类故事的主分类优先级。
 *
 * idiom / myth / fable 必须排在 character 前面：否则「盲人摸象」这类
 * 标为 character+fable 的古代寓言会被判成现代生活场景，人物穿错衣服。
 */
const CATEGORY_PRIORITY = ['idiom', 'myth', 'fable', 'fairy', 'bedtime', 'science', 'character'];

/** 取主分类：人工覆盖优先，其次按优先级，都不匹配时退回 fable。 */
function pickCategory(story) {
  const override = CATEGORY_OVERRIDES[story.id];
  if (override) return override;
  const cats = Array.isArray(story.categories) ? story.categories : [];
  return CATEGORY_PRIORITY.find((key) => cats.includes(key)) ?? 'fable';
}

/** 去掉结尾的标点，避免拼接后出现连续句号。 */
function trimEndPunct(text) {
  return String(text ?? '').replace(/[。！？；，、\s]+$/u, '');
}

function buildPrompt(story, categoryKey) {
  const category = CATEGORIES[categoryKey];
  const age = AGE_STYLE[story.ageGroup] ?? AGE_STYLE.Growing;
  const scene = extractScene(story);
  const parts = [
    `${STYLE_PREFIX}。故事《${story.title}》`,
    `画面内容：${trimEndPunct(scene)}`,
    `场景设定：${trimEndPunct(category.scene)}`,
    trimEndPunct(age),
    trimEndPunct(LAYOUT_RULE),
  ];
  return `${parts.join('。')}。`;
}

function buildNegative(categoryKey) {
  return categoryKey === 'idiom' ? `${NEGATIVE_BASE}，${NEGATIVE_IDIOM}` : NEGATIVE_BASE;
}

const raw = await fs.readFile(sourceFile, 'utf8');
const source = JSON.parse(raw);
const stories = Array.isArray(source.stories) ? source.stories : [];
if (stories.length === 0) {
  console.error(`[错误] ${sourceFile} 里没有故事数据`);
  process.exit(1);
}

const records = stories
  .map((story) => {
    const categoryKey = pickCategory(story);
    return {
      id: story.id,
      title: story.title,
      categories: story.categories ?? [],
      ageGroup: story.ageGroup,
      primaryCategory: categoryKey,
      // 是否由人工覆盖表指定（便于日后核对哪些故事偏离了数据分类）
      categoryOverride: Boolean(CATEGORY_OVERRIDES[story.id]),
      file: `${story.id}.jpg`,
      prompt: buildPrompt(story, categoryKey),
      negativePrompt: buildNegative(categoryKey),
    };
  })
  .sort((a, b) => a.id.localeCompare(b.id));

await fs.mkdir(promptsDir, { recursive: true });

// ---- 机器可读清单 ----
const manifest = {
  generatedAt: new Date().toISOString(),
  storyCount: records.length,
  spec: {
    size: '1536x864',
    aspect: '16:9',
    format: 'jpg',
    quality: 85,
    maxKB: 300,
    naming: '<storyId>.jpg',
    directory: 'story-images/',
  },
  stylePrefix: STYLE_PREFIX,
  layoutRule: LAYOUT_RULE,
  negativePrompt: NEGATIVE_BASE,
  stories: records,
};
await fs.writeFile(
  path.join(outDir, 'image-prompts.json'),
  JSON.stringify(manifest, null, 2) + '\n',
  'utf8',
);

// ---- 按分类拆分的人工清单 ----
const byCategory = new Map(CATEGORY_ORDER.map((k) => [k, []]));
for (const record of records) {
  byCategory.get(record.primaryCategory)?.push(record);
}

for (const key of CATEGORY_ORDER) {
  const list = byCategory.get(key) ?? [];
  const category = CATEGORIES[key];
  const lines = [
    `# ${category.label} · 配图提示词`,
    '',
    `共 ${list.length} 篇。生成后按文件名放入 \`story-images/\` 目录，然后运行 \`npm run images:status\` 查看进度。`,
    '',
    `统一负面提示词：`,
    '',
    '```text',
    buildNegative(key),
    '```',
    '',
    '---',
    '',
  ];
  for (const record of list) {
    lines.push(`- [ ] ${record.title} \`${record.file}\``);
    lines.push(`  > ${record.prompt}`);
    lines.push('');
  }
  await fs.writeFile(path.join(promptsDir, `${key}.md`), lines.join('\n'), 'utf8');
}

// ---- 索引与说明 ----
const indexLines = [
  '# 故事配图提示词',
  '',
  `由 \`scripts/generate-image-prompts.mjs\` 生成，共 ${records.length} 篇。`,
  '',
  '## 规格',
  '',
  '| 项 | 取值 |',
  '|---|---|',
  '| 尺寸 | 1536×864（16:9 横版） |',
  '| 格式 | JPEG，质量 85 |',
  '| 单张体积 | 建议 ≤ 300 KB |',
  '| 命名 | `<storyId>.jpg` |',
  '| 存放 | 仓库根目录 `story-images/`（不入库，部署时单独上传） |',
  '',
  '## 使用流程',
  '',
  '1. 在下面按分类打开清单，逐条复制提示词到生图工具。',
  '2. 挑选合适的图，下载后重命名为清单里的文件名。',
  '3. 放进 `story-images/`，运行 `npm run images:status` 查看覆盖率。',
  '',
  '> 建议每批 10-20 张，同一批次固定模型与参数，减少风格漂移。',
  '> 成语故事必须是中国古代服饰，提示词已内置该要求并屏蔽现代服饰。',
  '',
  '## 分类清单',
  '',
  '| 分类 | 篇数 | 文件 |',
  '|---|---|---|',
];
for (const key of CATEGORY_ORDER) {
  const list = byCategory.get(key) ?? [];
  indexLines.push(`| ${CATEGORIES[key].label} | ${list.length} | [${key}.md](./prompts/${key}.md) |`);
}
indexLines.push('');
await fs.writeFile(path.join(outDir, 'README.md'), indexLines.join('\n'), 'utf8');

console.log(`[image-prompts] ${records.length} 篇 -> ${outDir}`);
for (const key of CATEGORY_ORDER) {
  console.log(`  ${CATEGORIES[key].label.padEnd(5)} ${String((byCategory.get(key) ?? []).length).padStart(3)}`);
}
