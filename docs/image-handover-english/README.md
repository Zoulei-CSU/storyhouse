# 小星星故事屋 · 故事配图生成任务书（英文版提示词）

> 这是一份可以直接交给其他 AI（或人工）执行的任务说明。
> 同目录下的 `prompts-all.md` 是完整提示词清单，`prompts.csv` 是结构化版本，
> `scenes.json` 是展开后的场景数据（便于复核）。
>
> **任务一句话：为 361 篇儿童故事各生成一张 16:9 横版卡通插画，按 `<storyId>.jpg` 命名交付。**

本目录与 `docs/image-handover` 的区别只有一条：**提示词的写法不同**。
旧版把故事的第一段搬进提示词，实际是在让模型「读故事然后自己决定画什么」；
本版对每篇故事**先定一个具体画面**，再用英文把这个画面描述出来。
其余规格、命名、验收标准完全一致。
这个版本的提示词限定更为明确，交给AI发挥的空间较小，适合能力较弱的AI使用。

---

## 一、背景

这些图用于儿童故事网站的「故事详情页」顶部封面。每篇故事一张，内容要能对应故事本身。
读者是 3–12 岁的孩子，画面必须温暖、友好、无恐怖元素。

---

## 二、交付规格（硬性）

| 项 | 要求 |
|---|---|
| 画幅 | **16:9 横版** |
| 像素 | 1536×864（或等比更大，如 1920×1080） |
| 格式 | **JPEG** |
| 体积 | 单张 **≤ 300 KB**（质量 80–85） |
| 命名 | **`<storyId>.jpg`**，完全照抄清单，不加序号、不加前缀 |
| 文字 | 画面中**不得出现任何文字**：汉字、字母、数字、签名、水印、logo 都不行 |
| 边框 | 不要边框、不要白边、不要拼图或多格分镜 |
| 主体 | 居中，四周留安全边距，**重要内容集中在画面中部** |

**为什么强调居中**：前端封面容器是宽扁条（桌面端约 3.2:1），显示时会按 `object-cover`
裁掉上下部分。人物头部或关键动作一旦贴边就会被切掉。

---

## 三、风格总则

- 儿童绘本插画风格，**卡通**
- 角色造型圆润可爱，线条柔和，明亮温暖的配色
- 扁平或轻质感插画，**不要 3D 写实渲染、不要照片感**
- **原创角色**，不模仿任何现有动画、影视、游戏形象
- 儿童友好：无恐怖、无血腥、无暴力、无武器

按年龄段调整构图：

| 年龄段 | 构图要求 |
|---|---|
| 3–6 岁（Preschool） | 构图简单，主体大而清晰，细节少，色彩明快 |
| 6–9 岁（Growing） | 构图适中，主体明确，背景简洁并带少量环境细节 |
| 9–12 岁（Explorer） | 构图完整，场景层次与细节更丰富，整体仍保持卡通 |

---

## 四、场景与服饰要求（本版重点）

每条提示词里都有一段 **`Scene:`**，那是为这篇故事单独选定的一个画面：
某个时刻、某几个人物、一个具体的动作和一瞬间的表情。

选场景的三条原则：

1. **选一个能让人想起整个故事的时刻**，不必覆盖全部情节。通常取最关键的转折或最有画面感的一格。
2. **只画此刻，不画时间线。** 不写「他先……然后……最后……」，那会退化成剧情复述。
3. **场景要能独立看懂。** 孩子只看图也能猜到发生了什么，靠的是人物动作、表情和道具，而不是文字。

按分类的角色与环境要求：

| 分类 | 场景与服饰要求 |
|---|---|
| **成语故事**（idiom） | **中国古代场景，人物必须穿中国传统古代服饰**：交领汉服、长袍、襦裙、腰带、布鞋，配发冠、发髻或头巾；出现古代建筑、器物、街市 |
| **神话传说**（myth） | 中国神话场景，人物穿古代服饰或甲胄，出现祥云、仙山、宫殿、东方神兽 |
| **寓言故事**（fable） | 动物角色拟人化、形象可爱。**人物服饰按故事出处走，不能一律用中式**，详见下面的「出处文化」 |
| **童话故事**（fairy） | 经典欧洲童话绘本场景，可能出现城堡、森林、石径、魔法光点。**少数例外按出处走**（如《夜莺》） |
| **睡前故事**（bedtime） | 安静的夜晚场景，深蓝与暖灯的对比，低饱和，出现月亮、星星或柔软的被褥 |
| **科普启蒙**（science） | 科普卡通插画，用清晰直观的图形或剖面解释原理，对象可拟人化，图解释义部分保持干净可读 |
| **品格教育**（character） | **现代**儿童日常生活场景，人物穿现代服装、校服，注重情绪表达与人物互动 |

### 出处文化（寓言与童话必读）

寓言里混着三个文化圈的故事，**一件中式长袍出现在伊索寓言里是明显错误**。
本版按故事真实出处分别约束服饰与建筑，每条提示词的 `Setting and costume:` 段已经写好对应内容：

| 出处 | 服饰与建筑 | 典型故事 |
|---|---|---|
| 中国（`cn`） | 汉服、交领长袍、腰带、布鞋、发髻；木构建筑、灰瓦、格窗 | 盲人摸象、东郭先生和狼、守株待兔、曾子杀猪 |
| 古希腊 / 欧洲（`eu`） | 羊毛 chiton、himation、短袍、皮凉鞋或靴、斗篷；石屋、橄榄树、橡树 | 伊索寓言绝大多数、《龟兔赛跑》 |
| 旧俄国（`ru`） | 束腰亚麻衬衫、长外套、毡靴；带雕花窗框的木刻楞房、白桦、木车 | 杰米扬的鱼汤、四重奏、天鹅大虾和梭鱼、大象和哈巴狗、渔夫和金鱼 |

童话默认欧洲，两个例外：

| 故事 | 实际背景 | 处理 |
|---|---|---|
| 《夜莺》 | **故事发生在中国**（安徒生） | 皇帝穿龙纹袍、戴黑纱冠，红漆柱、格栅窗、纸窗 |
| 《渔夫和金鱼》 | 俄国 | 毡靴、木刻楞房、雕花窗框 |

出处表在 `docs/story-prompts-en/origins.json`。新增故事或发现判断有误时改这里，
生成脚本会自动套用对应的服饰与建筑约束，并把出处写进清单和 CSV。

> ⚠️ **最容易出错的一条：成语故事不能出现现代服装。**
> 西装、T 恤、牛仔裤、运动鞋、汽车、现代楼房都不允许出现在成语故事的画面里。
>
> ⚠️ **第二条：不要把中式器物写进欧洲故事。**
> 已经踩过的坑：蓑衣（伊索寓言）、戏曲脸谱（应为希腊戏剧面具）、石坛线香（应为希腊祭坛）、
> 木质写字板（应为蜡板）、卷轴配毛笔（应为纸草卷）。
>
> ⚠️ **第三条：科普类的提示词不要写「加号减号」「ABCD」这类符号**，
> 它们是文字，模型容易真的画出来，违反「画面无文字」的要求。用「光点」「箭头」「色带」代替。

---

## 五、统一负面提示词（英文）

每条提示词末尾都可以追加以下内容（清单里已经内置）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters,
letters, numbers, watermark, signature, border, frame, collage, split panels,
dark horror, gore, blood, violence, weapons, low resolution, blurry,
deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

成语、神话、寓言类再加：

```text
modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

---

## 六、提示词的组成

每条提示词是五段拼接，用句号分隔，顺序固定：

```text
[风格前缀] . Scene: [本篇专属画面] . Setting and costume: [分类约束] . [年龄段构图] . Composition: [版式与禁字]
```

实际效果（以《画龙点睛》为例）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs,
soft clean linework, bright warm palette, gentle flat colouring with light texture.
Scene: An artist in a loose ink-grey robe and topknot kneels on a low stool before a
white plastered wall, brush lifted mid-stroke, eyes bright with mischief; four black ink
dragons coil across the wall without pupils, while two finished dragons peel away from
the plaster into swirls of cloud, pupils glinting, mouths open, trailing ink droplets.
A stunned crowd in simple robes clutches at their hats in the doorway.
Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth
shoes, topknots or buns, and traditional timber architecture with grey tiled roofs,
lattice windows, wooden pillars and stone paving.
For ages 6-9: balanced composition, clearly readable subject, simple background with a
little environment detail.
Composition: main subject centred, generous safe margin on all sides, all important
content kept in the middle band of the frame, landscape 16:9, absolutely no text,
letters, numbers, logos or watermarks anywhere in the image.
```

**为什么要拆成 Scene 单独一段**：只有把「画什么」从「风格是什么」「尺寸怎么排」里
分离出来，改场景时才不会连带动到风格；反过来调整风格也不会破坏场景。

---

## 七、如何使用这份清单

1. 打开 `prompts-all.md`，按分类分批处理，**建议每批 10–20 条**。
2. 每条包含四样东西：故事名、目标文件名、场景描述、可直接复制的完整提示词（含负面提示词）。
3. **先只生成 3 条**（建议各选一个分类），确认风格与尺寸无误，再批量执行。
4. 同一批次固定模型、尺寸与参数，减少风格漂移。
5. 生成后按「第九节」验收。

如果工具支持参考图（img2img / style reference），把 `reference/` 里的样图喂给它，
风格一致性会明显更好。

**如果某个场景生成效果不好**：不要去改风格前缀，只改写 `Scene:` 那一段。
把动作写得更具体、把表情写得更明确、把道具写得更少，通常一次就能收敛。

---

## 八、交付结构

```text
story-images/
  fairy-cinderella.jpg
  idiom-add-eyes-to-the-dragon.jpg
  science-ants-move-home.jpg
  ...
```

- 所有文件平铺在一个目录，不要分子目录（按分类分批时可临时分，最终合并平铺）
- 文件名必须与清单完全一致，**区分大小写和连字符**
- 不要用「1.jpg」「灰姑娘.jpg」这类临时命名

---

## 九、验收清单

- [ ] 文件名与清单逐条一致，无遗漏、无多余
- [ ] 画幅 16:9（1536×864 或等比）
- [ ] 格式为 JPEG，单张 ≤ 300 KB
- [ ] 画面中没有任何文字、水印、签名
- [ ] **成语故事人物为古代服饰**，没有现代物件
- [ ] **画面确实对应清单里那段 `Scene:`**，不是另画了一个故事
- [ ] 人物表情与服饰符合分类要求
- [ ] 主体居中，重要内容没有被裁切
- [ ] 儿童友好：无恐怖、无暴力
- [ ] 同一批次的风格基本一致

---

## 十、后处理（工具达不到规格时）

1. **只能输出 1536×1024（3:2）**
   中心裁切到 1536×864：上下各去掉 80px。若想保留更多上方内容，
   可以按「上 64px、下 96px」的比例裁。

2. **右下角带 AI 水印**
   把裁切窗口整体上移（例如保留 y=64 至 y=928），水印会落在裁切区之外。

3. **体积超过 300 KB**
   JPEG 质量按 85 → 82 → 78 → 72 逐级下调，直到达标。不要用降分辨率的方式硬压。

4. **不要做**：放大插值伪造分辨率、加锐化滤镜、二次压缩多次。

---

## 十一、风格参考图

`reference/` 下三张是已生成的合格样例，可作为风格锚点：

| 文件 | 说明 |
|---|---|
| `reference/idiom.jpg` | 成语故事：古代服饰、市集场景 |
| `reference/character.jpg` | 品格教育：现代服装、日常生活 |
| `reference/bedtime.jpg` | 睡前故事：夜色、柔和暖调 |

优先把参考图作为 image-to-image 的输入，或作为 style reference。

---

## 十二、文件索引

| 文件 | 内容 |
|---|---|
| `README.md` | 本任务书 |
| `prompts-all.md` | **全部 361 条提示词**，按分类分组，含场景、目标文件名、正面与负面提示词 |
| `prompts.csv` | 结构化清单：`id,title,category,origin,ageGroup,file,scene,prompt,negative` |
| `scenes.json` | 展开后的场景与拼接结果，含每篇的出处文化，便于逐条复核 |
| `reference/` | 3 张风格参考图 |

> 场景源数据在 `docs/story-prompts-en/scenes/<分类>.json`，
> 出处表在 `docs/story-prompts-en/origins.json`，
> 由 `scripts/build-image-handover-en.mjs` 生成本目录的三个文件。
> 要改某篇的画面，改场景源文件后重跑脚本即可，不要直接改生成的 Markdown。
> 脚本会做三项检查：场景缺漏 / id 重复、出处表与故事对不上、
> 非中国故事里误用中式器物（如 hanfu、蓑衣、线香）。
