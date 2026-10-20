/**
 * 生成英文版故事配图交接包。
 *
 * 与 docs/image-handover 的区别：提示词不再复述故事情节，而是先为每篇故事
 * 设计一个具体画面场景（docs/story-prompts-en/scenes/<分类>.json），
 * 再由本脚本把场景与风格、分类规则、年龄段、构图规则拼成完整英文提示词。
 *
 * 产物：
 *   docs/image-handover-english/prompts-all.md
 *   docs/image-handover-english/prompts.csv
 *   docs/image-handover-english/scenes.json   展开后的场景数据，便于复核
 *
 * README.md 手工维护，本脚本不覆盖。
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sourceFile = path.join(root, 'docs', 'story-prompts', 'image-prompts.json');
const sceneDir = path.join(root, 'docs', 'story-prompts-en', 'scenes');
const originFile = path.join(root, 'docs', 'story-prompts-en', 'origins.json');
const outDir = path.join(root, 'docs', 'image-handover-english');

const CATEGORY_ORDER = ['fable', 'idiom', 'bedtime', 'fairy', 'myth', 'science', 'character'];

const CATEGORY_LABELS = {
  fable: '寓言故事 · Fables',
  idiom: '成语故事 · Chinese Idioms',
  bedtime: '睡前故事 · Bedtime',
  fairy: '童话故事 · Fairy Tales',
  myth: '神话传说 · Myths & Legends',
  science: '科普启蒙 · Science',
  character: '品格教育 · Character',
};

const ORIGIN_LABELS = {
  cn: '中国',
  eu: '古希腊 / 欧洲',
  ru: '旧俄国',
};

/** 分类风格约束，英文。只讲画面该有什么、不该有什么，不重复情节。 */
const CATEGORY_STYLE = {
  fable:
    'Simple, storybook world with gently anthropomorphised animals; if humans appear, they wear plain simple historical clothing that fits the story\'s own origin, never modern clothes or modern objects',
  idiom:
    'Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving',
  bedtime:
    'Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep',
  fairy:
    'Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story\'s own culture',
  myth:
    'Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts',
  science:
    'Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable',
  character:
    'Present-day children\'s everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language',
};

const AGE_STYLE = {
  Preschool:
    'For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours',
  Growing:
    'For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail',
  Explorer:
    'For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon',
};

/**
 * 来源地风格的覆盖。同一分类里混着不同文化的故事时，不能只按分类给约束。
 * fable 尤其明显：既有中国寓言，也有伊索寓言和克雷洛夫寓言，
 * 只写「中式布衣」会把古希腊、俄国故事画错。
 */
const ORIGIN_STYLE = {
  fable: {
    cn: 'Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, timber buildings with grey tiled roofs and lattice windows',
    eu: 'Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees',
    ru: 'Old Russian countryside setting: belted linen shirts, long coats and felt boots, log cottages with carved window frames, birch trees and wooden carts',
  },
  fairy: {
    cn: 'Ancient Chinese imperial setting: dragon-embroidered silk robes, black gauze crowns, red lacquered columns, carved lattice screens and paper windows',
    ru: 'Old Russian setting: patched coats, felt boots, log houses with carved window frames and a low wooden boat on a grey sea',
  },
};

const STYLE_PREFIX =
  'Children\'s picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture';

const LAYOUT_RULE =
  'Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image';

const NEGATIVE_GLOBAL = [
  'photorealistic',
  'realistic human portrait',
  '3D photoreal render',
  'text',
  'Chinese characters',
  'letters',
  'numbers',
  'watermark',
  'signature',
  'border',
  'frame',
  'collage',
  'split panels',
  'dark horror',
  'gore',
  'blood',
  'violence',
  'weapons',
  'low resolution',
  'blurry',
  'deformed limbs',
  'extra fingers',
  'duplicated faces',
  'brand logo',
  'trademark',
];

const NEGATIVE_ANCIENT =
  'modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers';

/** 拼接用：去掉末尾标点，避免出现连续句号。 */
function trimEnd(text) {
  return String(text ?? '').trim().replace(/[.;:,，。；：\s]+$/u, '');
}

function buildPrompt(record, scene, origin) {
  const age = AGE_STYLE[record.ageGroup] ?? AGE_STYLE.Growing;
  const originStyle = origin ? ORIGIN_STYLE[record.primaryCategory]?.[origin] : null;
  const setting = originStyle ?? CATEGORY_STYLE[record.primaryCategory];
  const parts = [
    `${STYLE_PREFIX}`,
    `Scene: ${trimEnd(scene)}`,
    `Setting and costume: ${trimEnd(setting)}`,
    trimEnd(age),
    LAYOUT_RULE,
  ];
  return `${parts.join('. ')}.`;
}

function buildNegative(categoryKey) {
  const base = NEGATIVE_GLOBAL.join(', ');
  return categoryKey === 'idiom' || categoryKey === 'myth' || categoryKey === 'fable'
    ? `${base}, ${NEGATIVE_ANCIENT}`
    : base;
}

function escapeCsv(value) {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

// ---- 读取故事清单 ----
const manifest = JSON.parse(await fs.readFile(sourceFile, 'utf8'));
const stories = Array.isArray(manifest.stories) ? manifest.stories : [];
if (stories.length === 0) {
  console.error(`[错误] ${sourceFile} 里没有故事数据`);
  process.exit(1);
}

// ---- 读取场景数据并做完整性校验 ----
const scenes = new Map();
for (const key of CATEGORY_ORDER) {
  const file = path.join(sceneDir, `${key}.json`);
  let list;
  try {
    list = JSON.parse(await fs.readFile(file, 'utf8'));
  } catch (err) {
    console.error(`[错误] 无法读取场景文件 ${file}: ${err.message}`);
    process.exit(1);
  }
  for (const item of list) {
    if (!item.id || !item.s) {
      console.error(`[错误] ${key}.json 中存在缺少 id 或 s 的条目`);
      process.exit(1);
    }
    if (scenes.has(item.id)) {
      console.error(`[错误] 场景 id 重复：${item.id}`);
      process.exit(1);
    }
    scenes.set(item.id, { category: key, scene: item.s });
  }
}

const missing = stories.filter((s) => !scenes.has(s.id)).map((s) => s.id);
if (missing.length > 0) {
  console.error(`[错误] 以下 ${missing.length} 篇故事缺少场景设计：`);
  for (const id of missing) console.error(`  - ${id}`);
  process.exit(1);
}

const extra = [...scenes.keys()].filter((id) => !stories.some((s) => s.id === id));
if (extra.length > 0) {
  console.error(`[错误] 场景文件中有 ${extra.length} 条对不上任何故事：`);
  for (const id of extra) console.error(`  - ${id}`);
  process.exit(1);
}

// 场景所在的分类与故事主分类不一致时提示（不中断，便于发现分类冲突）
for (const story of stories) {
  const hit = scenes.get(story.id);
  if (hit.category !== story.primaryCategory) {
    console.warn(
      `[提示] ${story.id} 场景放在 ${hit.category}.json，但主分类是 ${story.primaryCategory}`,
    );
  }
}

// ---- 读取出处表：决定服饰与建筑文化 ----
const origins = JSON.parse(await fs.readFile(originFile, 'utf8'));
const originOf = new Map();
for (const [category, groups] of Object.entries(origins)) {
  if (category.startsWith('_')) continue;
  for (const [origin, ids] of Object.entries(groups)) {
    for (const id of ids) {
      if (originOf.has(id)) {
        console.error(`[错误] ${id} 在出处表里被重复归类`);
        process.exit(1);
      }
      originOf.set(id, origin);
    }
  }
}

// 出处表里写了但故事不存在的条目，说明改过 id，必须报出来
const strayOrigins = [...originOf.keys()].filter((id) => !stories.some((s) => s.id === id));
if (strayOrigins.length > 0) {
  console.error(`[错误] 出处表中有 ${strayOrigins.length} 条对不上任何故事：`);
  for (const id of strayOrigins) console.error(`  - ${id}`);
  process.exit(1);
}

/**
 * 文化元素检查：非中国故事里出现这些词，几乎一定是把中式器物画进了欧洲场景。
 * 只提示不中断——个别词在英文里另有含义，需要人工判断。
 */
const CHINESE_ONLY = [
  'hanfu',
  'topknot',
  'straw cape',
  'incense sticks',
  'chopsticks',
  'lattice window',
  'grey tiled roof',
  'silk robe',
  'jade',
  'porcelain',
  'lacquer',
  'paper lantern',
  'opera mask',
];
for (const story of stories) {
  // 只在跨文化的分类上检查：成语与神话本来就是中国故事
  if (story.primaryCategory !== 'fable' && story.primaryCategory !== 'fairy') continue;
  if (originOf.get(story.id) === 'cn') continue;
  const hit = scenes.get(story.id);
  const found = CHINESE_ONLY.filter((word) => hit.scene.toLowerCase().includes(word.toLowerCase()));
  if (found.length > 0) {
    console.warn(`[文化检查] ${story.id} 非中国故事，但场景出现：${found.join(', ')}`);
  }
}

// ---- 组装记录 ----
const records = stories
  .map((story) => {
    const hit = scenes.get(story.id);
    return {
      id: story.id,
      title: story.title,
      primaryCategory: story.primaryCategory,
      ageGroup: story.ageGroup,
      file: story.file,
      origin: originOf.get(story.id) ?? null,
      scene: hit.scene,
      prompt: buildPrompt(story, hit.scene, originOf.get(story.id)),
      negativePrompt: buildNegative(story.primaryCategory),
    };
  })
  .sort((a, b) => a.id.localeCompare(b.id));

const byCategory = new Map(CATEGORY_ORDER.map((key) => [key, []]));
for (const record of records) {
  byCategory.get(record.primaryCategory)?.push(record);
}

await fs.mkdir(outDir, { recursive: true });

// ---- prompts-all.md ----
const lines = [
  '# Story Illustration Prompts (English Edition)',
  '',
  `一共 ${records.length} 篇故事，每篇一条可直接复制的英文提示词。`,
  '',
  '> 每条提示词描述的是**为这篇故事单独设计的一个画面**，不是剧情复述。',
  '> 场景描述（Scene）是这一版的核心，模型据此画出具体、可信的一格画面。',
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
  '## 统一负面提示词（Negative prompt）',
  '',
  '```text',
  NEGATIVE_GLOBAL.join(', '),
  '```',
  '',
  '成语 / 神话 / 寓言三类再追加（清单已内置）：',
  '',
  '```text',
  NEGATIVE_ANCIENT,
  '```',
  '',
  '## 提示词结构',
  '',
  '```text',
  '[风格] . Scene: [本篇专属画面] . Setting and costume: [分类约束] . [年龄段构图] . Composition: [版式与禁字]',
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
  lines.push(`> 分类键：\`${key}\`｜场景与服饰约束见 README 第四节。`, '');

  list.forEach((record, index) => {
    lines.push(`### ${index + 1}. ${record.title}`);
    lines.push('');
    lines.push(`- 目标文件：\`${record.file}\``);
    lines.push(`- 年龄段：${record.ageGroup}`);
    if (record.origin) lines.push(`- 出处文化：${ORIGIN_LABELS[record.origin] ?? record.origin}`);
    lines.push(`- 场景：${record.scene}`);
    lines.push('- 提示词（Prompt）：');
    lines.push('');
    lines.push('```text');
    lines.push(record.prompt);
    lines.push('```');
    lines.push('');
    lines.push('- 负面提示词（Negative）：');
    lines.push('');
    lines.push('```text');
    lines.push(record.negativePrompt);
    lines.push('```');
    lines.push('');
  });

  lines.push('---', '');
}

await fs.writeFile(path.join(outDir, 'prompts-all.md'), lines.join('\n'), 'utf8');

// ---- prompts.csv ----
const csvLines = ['id,title,category,origin,ageGroup,file,scene,prompt,negative'];
for (const record of records) {
  csvLines.push(
    [
      escapeCsv(record.id),
      escapeCsv(record.title),
      escapeCsv(record.primaryCategory),
      escapeCsv(record.origin ?? ''),
      escapeCsv(record.ageGroup),
      escapeCsv(record.file),
      escapeCsv(record.scene),
      escapeCsv(record.prompt),
      escapeCsv(record.negativePrompt),
    ].join(','),
  );
}
await fs.writeFile(path.join(outDir, 'prompts.csv'), csvLines.join('\n') + '\n', 'utf8');

// ---- scenes.json ----
const sceneManifest = {
  generatedAt: new Date().toISOString(),
  storyCount: records.length,
  stylePrefix: STYLE_PREFIX,
  layoutRule: LAYOUT_RULE,
  categoryStyle: CATEGORY_STYLE,
  ageStyle: AGE_STYLE,
  negativePrompt: NEGATIVE_GLOBAL.join(', '),
  negativeAncient: NEGATIVE_ANCIENT,
  stories: records,
};
await fs.writeFile(
  path.join(outDir, 'scenes.json'),
  JSON.stringify(sceneManifest, null, 2) + '\n',
  'utf8',
);

console.log(`[handover-en] ${records.length} 条 -> ${outDir}`);
for (const key of CATEGORY_ORDER) {
  console.log(`  ${key.padEnd(9)} ${String((byCategory.get(key) ?? []).length).padStart(3)}`);
}
