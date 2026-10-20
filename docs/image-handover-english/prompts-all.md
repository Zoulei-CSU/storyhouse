# Story Illustration Prompts (English Edition)

一共 361 篇故事，每篇一条可直接复制的英文提示词。

> 每条提示词描述的是**为这篇故事单独设计的一个画面**，不是剧情复述。
> 场景描述（Scene）是这一版的核心，模型据此画出具体、可信的一格画面。

## 交付规格

| 项 | 要求 |
|---|---|
| 画幅 | 16:9 横版，1536×864 或等比更大 |
| 格式 | JPEG，质量 80–85 |
| 体积 | 单张 ≤ 300 KB |
| 命名 | `<storyId>.jpg`，不加序号与前缀 |
| 画面 | 无任何文字、水印、签名、边框 |
| 构图 | 主体居中，重要内容集中在画面中部 |

## 统一负面提示词（Negative prompt）

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

成语 / 神话 / 寓言三类再追加（清单已内置）：

```text
modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

## 提示词结构

```text
[风格] . Scene: [本篇专属画面] . Setting and costume: [分类约束] . [年龄段构图] . Composition: [版式与禁字]
```

## 分类目录

- [寓言故事 · Fables](#fable) — 98 条
- [成语故事 · Chinese Idioms](#idiom) — 86 条
- [睡前故事 · Bedtime](#bedtime) — 34 条
- [童话故事 · Fairy Tales](#fairy) — 40 条
- [神话传说 · Myths & Legends](#myth) — 34 条
- [科普启蒙 · Science](#science) — 43 条
- [品格教育 · Character](#character) — 26 条

---

<a id="fable"></a>

## 寓言故事 · Fables（98 条）

> 分类键：`fable`｜场景与服饰约束见 README 第四节。

### 1. 盲人摸象

- 目标文件：`character-blind-men-and-the-elephant.jpg`
- 年龄段：Growing
- 出处文化：中国
- 场景：A sunlit village square; four blindfolded men in simple grey and brown hanfu surround a patient grey elephant, each touching a different part: one hugging a leg, one flapping an ear, one gripping the trunk, one patting the flank; each face shows stubborn certainty, mouths open in argument, free hands gesturing at each other; the elephant's mild eye looks toward the viewer. Dust, low wall, warm light.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A sunlit village square; four blindfolded men in simple grey and brown hanfu surround a patient grey elephant, each touching a different part: one hugging a leg, one flapping an ear, one gripping the trunk, one patting the flank; each face shows stubborn certainty, mouths open in argument, free hands gesturing at each other; the elephant's mild eye looks toward the viewer. Dust, low wall, warm light. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, timber buildings with grey tiled roofs and lattice windows. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 2. 小马过河

- 目标文件：`character-little-horse-crosses-the-river.jpg`
- 年龄段：Preschool
- 出处文化：中国
- 场景：A shallow green river with smooth stepping stones; a small chestnut foal with a bundle of wheat sacks on its back stands midstream, water up to its knees, one hoof raised cautiously, expression brave but nervous; on the left bank a placid brown ox nods encouragingly, on the right a small squirrel waves its arms in alarm. Willow trees, reeds, soft daylight.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A shallow green river with smooth stepping stones; a small chestnut foal with a bundle of wheat sacks on its back stands midstream, water up to its knees, one hoof raised cautiously, expression brave but nervous; on the left bank a placid brown ox nods encouragingly, on the right a small squirrel waves its arms in alarm. Willow trees, reeds, soft daylight. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, timber buildings with grey tiled roofs and lattice windows. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 3. 乌鸦反哺

- 目标文件：`character-the-crow-feeds-its-parents.jpg`
- 年龄段：Preschool
- 出处文化：中国
- 场景：A nest high in a bare tree branch; an old grey-feathered crow sits hunched and thin with closed eyes, while a young glossy black crow perches on the nest rim, carefully holding a small berry in its beak toward the old bird's mouth; their beaks almost touch. Bare branches, soft pale sky, warm afternoon light, tender mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A nest high in a bare tree branch; an old grey-feathered crow sits hunched and thin with closed eyes, while a young glossy black crow perches on the nest rim, carefully holding a small berry in its beak toward the old bird's mouth; their beaks almost touch. Bare branches, soft pale sky, warm afternoon light, tender mood. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, timber buildings with grey tiled roofs and lattice windows. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 4. 大象和小老鼠

- 目标文件：`character-the-elephant-and-the-mouse.jpg`
- 年龄段：Preschool
- 出处文化：古希腊 / 欧洲
- 场景：A jungle clearing; a big gentle grey elephant lies tangled in thick green vines, one leg lifted awkwardly, eyes wide but calm; a tiny brown mouse stands on its trunk, gnawing through a vine strand with determination, cheeks puffed; broken vine fibres scattered. Ferns, dappled sunlight, warm friendly tone.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A jungle clearing; a big gentle grey elephant lies tangled in thick green vines, one leg lifted awkwardly, eyes wide but calm; a tiny brown mouse stands on its trunk, gnawing through a vine strand with determination, cheeks puffed; broken vine fibres scattered. Ferns, dappled sunlight, warm friendly tone. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 5. 龟兔赛跑

- 目标文件：`character-the-tortoise-and-the-hare.jpg`
- 年龄段：Preschool
- 出处文化：古希腊 / 欧洲
- 场景：A grassy racetrack path with a red finish ribbon; a small green tortoise plods forward with a determined squint, one foot lifted; in the foreground under a large tree a brown hare sprawls asleep on its back, one ear flopped over its eyes, a half-eaten carrot beside it. Flowers, butterflies, warm midday light, cheerful comic mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A grassy racetrack path with a red finish ribbon; a small green tortoise plods forward with a determined squint, one foot lifted; in the foreground under a large tree a brown hare sprawls asleep on its back, one ear flopped over its eyes, a half-eaten carrot beside it. Flowers, butterflies, warm midday light, cheerful comic mood. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 6. 杰米扬的鱼汤

- 目标文件：`demyans-soup.jpg`
- 年龄段：Explorer
- 出处文化：旧俄国
- 场景：A Russian log cottage interior with carved window frames and a lace curtain; a stout host in a belted linen shirt and a full beard holds a steaming bowl of fish soup out to his guest with both hands, eyes eager; the guest, a thin bearded man in a plain coat, leans back with a strained polite smile, one hand on his full stomach, cheeks slightly green; several empty bowls stacked beside a samovar. Warm lamp light, woven rug, gentle comedy.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A Russian log cottage interior with carved window frames and a lace curtain; a stout host in a belted linen shirt and a full beard holds a steaming bowl of fish soup out to his guest with both hands, eyes eager; the guest, a thin bearded man in a plain coat, leans back with a strained polite smile, one hand on his full stomach, cheeks slightly green; several empty bowls stacked beside a samovar. Warm lamp light, woven rug, gentle comedy. Setting and costume: Old Russian countryside setting: belted linen shirts, long coats and felt boots, log cottages with carved window frames, birch trees and wooden carts. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 7. 东郭先生和狼

- 目标文件：`mr-dongguo-and-the-wolf.jpg`
- 年龄段：Explorer
- 出处文化：中国
- 场景：A dirt road beside a field; a frightened scholar in a blue robe clutches a large cloth book bag to his chest, eyes wide, backing away; a grey wolf with bared teeth steps out of the bag, lean and hungry; a sturdy farmer in a straw hat stands behind with a rope, one eyebrow raised, holding a sack open invitingly. Comic tension, dusty light.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A dirt road beside a field; a frightened scholar in a blue robe clutches a large cloth book bag to his chest, eyes wide, backing away; a grey wolf with bared teeth steps out of the bag, lean and hungry; a sturdy farmer in a straw hat stands behind with a rope, one eyebrow raised, holding a sack open invitingly. Comic tension, dusty light. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, timber buildings with grey tiled roofs and lattice windows. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 8. 蚂蚁和鸽子

- 目标文件：`the-ant-and-the-dove.jpg`
- 年龄段：Preschool
- 出处文化：古希腊 / 欧洲
- 场景：A pond edge with a floating leaf in ancient Greece; a tiny black ant rides the leaf safely, waving thanks with one leg; on a low olive branch above, a soft grey dove looks down with a kind tilt of its head; in the background a hunter in a coarse wool tunic crouches behind a bush, a simple wooden bow half-raised, unaware of the ant creeping toward his sandalled foot. Green water, reeds, bright morning.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A pond edge with a floating leaf in ancient Greece; a tiny black ant rides the leaf safely, waving thanks with one leg; on a low olive branch above, a soft grey dove looks down with a kind tilt of its head; in the background a hunter in a coarse wool tunic crouches behind a bush, a simple wooden bow half-raised, unaware of the ant creeping toward his sandalled foot. Green water, reeds, bright morning. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 9. 蚂蚁和蚱蜢

- 目标文件：`the-ant-and-the-grasshopper.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A summer meadow with a trail of ants carrying grain; three ants in a line haul a fat seed, sweating, faces set; on a broad leaf a green grasshopper lounges on its back, a tiny fiddle made of grass in its forelegs, singing with eyes closed. Golden wheat, bright sun, a sense of lazy contentment versus busy effort.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A summer meadow with a trail of ants carrying grain; three ants in a line haul a fat seed, sweating, faces set; on a broad leaf a green grasshopper lounges on its back, a tiny fiddle made of grass in its forelegs, singing with eyes closed. Golden wheat, bright sun, a sense of lazy contentment versus busy effort. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 10. 驴子和他的影子

- 目标文件：`the-ass-and-his-shadow.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A dusty road at high noon in ancient Greece with a very short shadow under a grey donkey; a traveller in a simple wool tunic crouches in the donkey's small shade, fanning himself with a straw hat, while the donkey's owner in a coarse cloak stands over him pointing at the animal, red-faced; the donkey's ears are back, about to bolt. Bare hills, heat haze, comic argument.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A dusty road at high noon in ancient Greece with a very short shadow under a grey donkey; a traveller in a simple wool tunic crouches in the donkey's small shade, fanning himself with a straw hat, while the donkey's owner in a coarse cloak stands over him pointing at the animal, red-faced; the donkey's ears are back, about to bolt. Bare hills, heat haze, comic argument. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 11. 驴子和蝉

- 目标文件：`the-ass-and-the-cicada.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A cool forest glade; a grey donkey with a long earnest face looks up at a small cicada on a branch, one ear tilted forward; the cicada sits with a drop of dew on a leaf beside it, singing, tiny chest puffed; the donkey's water trough behind is empty and dry. Soft green light, ferns, gentle humour.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A cool forest glade; a grey donkey with a long earnest face looks up at a small cicada on a branch, one ear tilted forward; the cicada sits with a drop of dew on a leaf beside it, singing, tiny chest puffed; the donkey's water trough behind is empty and dry. Soft green light, ferns, gentle humour. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 12. 驴子和小狗

- 目标文件：`the-ass-and-the-puppy.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A farmhouse courtyard; a small brown puppy bounds joyfully into a seated farmer's lap, tail wagging, tongue out; beside them a grey donkey rears up on its hind legs with forehooves outstretched toward the farmer's chest, mouth open in a bray, eyes hopeful and slightly ridiculous; the farmer's expression is startled. Buckets, straw, warm light, comic scene.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A farmhouse courtyard; a small brown puppy bounds joyfully into a seated farmer's lap, tail wagging, tongue out; beside them a grey donkey rears up on its hind legs with forehooves outstretched toward the farmer's chest, mouth open in a bray, eyes hopeful and slightly ridiculous; the farmer's expression is startled. Buckets, straw, warm light, comic scene. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 13. 披着狮皮的驴子

- 目标文件：`the-ass-in-the-lions-skin.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A forest glade; a grey donkey draped in an oversized golden lion's skin struts with its head high, the mane slipping sideways; the skin's empty lion head sits askew over the donkey's own face; small animals, a rabbit, a fox and a squirrel, freeze mid-flee, looking back with wide eyes; in the next moment the donkey's mouth is opening to bray. Soft green light, comic tension.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A forest glade; a grey donkey draped in an oversized golden lion's skin struts with its head high, the mane slipping sideways; the skin's empty lion head sits askew over the donkey's own face; small animals, a rabbit, a fox and a squirrel, freeze mid-flee, looking back with wide eyes; in the next moment the donkey's mouth is opening to bray. Soft green light, comic tension. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 14. 天文学家

- 目标文件：`the-astrologer.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A field path at night in ancient Greece; a thin scholar in a simple wool chiton and a himation draped over one shoulder walks with his head tipped far back, eyes on the stars, a rolled papyrus scroll in one hand, one bare foot already over the edge of an open stone well; his expression is rapt and utterly unaware; a small clay oil lamp lies forgotten on the grass behind him. Dry cypress silhouettes, deep blue night, bright stars, soft moonlight, gentle comic irony.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A field path at night in ancient Greece; a thin scholar in a simple wool chiton and a himation draped over one shoulder walks with his head tipped far back, eyes on the stars, a rolled papyrus scroll in one hand, one bare foot already over the edge of an open stone well; his expression is rapt and utterly unaware; a small clay oil lamp lies forgotten on the grass behind him. Dry cypress silhouettes, deep blue night, bright stars, soft moonlight, gentle comic irony. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 15. 秃头武士

- 目标文件：`the-bald-knight.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A forest hunting path; a knight in light leather armour sits on a startled horse, one hand on his bare shiny head, mouth open in surprise; above him a dark wig tumbles through the air, caught by the wind, a few strands trailing; two companions behind him are laughing openly, one doubled over on his horse. Sunbeams, leaves, light-hearted mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A forest hunting path; a knight in light leather armour sits on a startled horse, one hand on his bare shiny head, mouth open in surprise; above him a dark wig tumbles through the air, caught by the wind, a few strands trailing; two companions behind him are laughing openly, one doubled over on his horse. Sunbeams, leaves, light-hearted mood. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 16. 蝙蝠和黄鼠狼

- 目标文件：`the-bat-and-the-weasels.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A dim hollow log; a small brown bat hangs upside down, wings folded like a cloak, one eye open and sly; below, a long-bodied weasel with sharp teeth peers up, head tilted in confusion, one paw raised; the bat's expression is innocent and hopeful. Dappled dim light, moss, roots, quiet comic tension.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A dim hollow log; a small brown bat hangs upside down, wings folded like a cloak, one eye open and sly; below, a long-bodied weasel with sharp teeth peers up, head tilted in confusion, one paw raised; the bat's expression is innocent and hopeful. Dappled dim light, moss, roots, quiet comic tension. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 17. 小孩和栗子

- 目标文件：`the-boy-and-the-chestnuts.jpg`
- 年龄段：Preschool
- 出处文化：古希腊 / 欧洲
- 场景：A narrow-necked earthen jar sits on low stone steps; a small boy in a simple tunic has his fist stuffed inside, clutching a huge handful of glossy brown chestnuts, face crumpled and tearful, arm straining; beside him a passing traveller with a walking staff kneels and gestures for him to let go, smiling kindly. Warm evening light, market wall, a basket of chestnuts spilled nearby.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A narrow-necked earthen jar sits on low stone steps; a small boy in a simple tunic has his fist stuffed inside, clutching a huge handful of glossy brown chestnuts, face crumpled and tearful, arm straining; beside him a passing traveller with a walking staff kneels and gestures for him to let go, smiling kindly. Warm evening light, market wall, a basket of chestnuts spilled nearby. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 18. 狼来了

- 目标文件：`the-boy-who-cried-wolf.jpg`
- 年龄段：Preschool
- 出处文化：古希腊 / 欧洲
- 场景：A grassy hillside with a flock of white sheep; a shepherd boy in a patched tunic cups his hands to his mouth, shouting with a mischievous grin, eyes dancing; at the bottom of the slope three villagers run up with sticks, faces anxious; no wolf in sight. A grey wolf silhouette is just appearing behind a rock in the middle distance, unnoticed. Bright sky, green hills.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A grassy hillside with a flock of white sheep; a shepherd boy in a patched tunic cups his hands to his mouth, shouting with a mischievous grin, eyes dancing; at the bottom of the slope three villagers run up with sticks, faces anxious; no wolf in sight. A grey wolf silhouette is just appearing behind a rock in the middle distance, unnoticed. Bright sky, green hills. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 19. 农夫和他的儿子们

- 目标文件：`the-bundle-of-sticks.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A farmhouse yard; an old farmer with a grey beard holds out a thick bundle of birch sticks tied with cord to three grown sons who strain and grunt trying to snap it; on the ground beside them, a single stick lies broken in two. The father's expression is patient and knowing. Woodpile, stone wall, late afternoon light.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A farmhouse yard; an old farmer with a grey beard holds out a thick bundle of birch sticks tied with cord to three grown sons who strain and grunt trying to snap it; on the ground beside them, a single stick lies broken in two. The father's expression is patient and knowing. Woodpile, stone wall, late afternoon light. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 20. 骆驼和沙粒

- 目标文件：`the-camel-and-the-drifting-sand.jpg`
- 年龄段：Explorer
- 出处文化：中国
- 场景：A desert sandstorm; a tall camel with a calm eye stands with its body as a shelter, two long legs planted, sand streaming around its hump; huddled behind it are a small rabbit, a hedgehog and a fox, eyes squinted against the wind; a bright wall of blowing sand sweeps past. Golden-tan palette, dramatic wind, warm protective mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A desert sandstorm; a tall camel with a calm eye stands with its body as a shelter, two long legs planted, sand streaming around its hump; huddled behind it are a small rabbit, a hedgehog and a fox, eyes squinted against the wind; a bright wall of blowing sand sweeps past. Golden-tan palette, dramatic wind, warm protective mood. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, timber buildings with grey tiled roofs and lattice windows. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 21. 匠石运斤

- 目标文件：`the-carpenter-and-the-axe.jpg`
- 年龄段：Explorer
- 出处文化：中国
- 场景：A workshop courtyard; a calm man in a blue robe stands perfectly still with his hands behind his back, chin slightly raised, eyes steady, a tiny white smudge on the very tip of his nose; beside him a burly carpenter with rolled sleeves swings a large axe in a clean arc, blurred with motion, expression confident. Wood chips in the air, raking light, tension and trust.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A workshop courtyard; a calm man in a blue robe stands perfectly still with his hands behind his back, chin slightly raised, eyes steady, a tiny white smudge on the very tip of his nose; beside him a burly carpenter with rolled sleeves swings a large axe in a clean arc, blurred with motion, expression confident. Wood chips in the air, raking light, tension and trust. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, timber buildings with grey tiled roofs and lattice windows. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 22. 老鼠开会

- 目标文件：`the-cat-and-the-bell.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A dark corner under the floorboards; a circle of mice sits in a meeting around a candle stub, a small mouse pointing proudly at a sketch of a cat with a bell on its collar; the oldest mouse strokes his whiskers with a doubtful squint; one mouse hides behind a grain sack. Warm candlelight, wooden beams, comic hesitation.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A dark corner under the floorboards; a circle of mice sits in a meeting around a candle stub, a small mouse pointing proudly at a sketch of a cat with a bell on its collar; the oldest mouse strokes his whiskers with a doubtful squint; one mouse hides behind a grain sack. Warm candlelight, wooden beams, comic hesitation. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 23. 猫和公鸡

- 目标文件：`the-cat-and-the-cock.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A barn doorway; a sleek grey cat with a sly narrowed gaze has one paw on a bright-feathered rooster's tail, leaning in with an accusing tilt of its head; the rooster stands tall, chest out, beak open in dignified protest, wings slightly lifted. Straw, a wooden bucket, morning light slanting in, tension but no violence shown.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A barn doorway; a sleek grey cat with a sly narrowed gaze has one paw on a bright-feathered rooster's tail, leaning in with an accusing tilt of its head; the rooster stands tall, chest out, beak open in dignified protest, wings slightly lifted. Straw, a wooden bucket, morning light slanting in, tension but no violence shown. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 24. 公鸡和宝玉

- 目标文件：`the-cock-and-the-jewel.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A barnyard dirt patch; a proud rooster with iridescent green-black tail feathers stands over a large glittering cut gem in the dust, head tilted, one foot raised to nudge it aside; a scattered handful of wheat grains lies a little further on, and the rooster's gaze is fixed on the grain. Straw, a wooden fence, warm morning light, ironic tone.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A barnyard dirt patch; a proud rooster with iridescent green-black tail feathers stands over a large glittering cut gem in the dust, head tilted, one foot raised to nudge it aside; a scattered handful of wheat grains lies a little further on, and the rooster's gaze is fixed on the grain. Straw, a wooden fence, warm morning light, ironic tone. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 25. 乌鸦喝水

- 目标文件：`the-crow-and-the-pitcher.jpg`
- 年龄段：Preschool
- 出处文化：古希腊 / 欧洲
- 场景：A dry garden path with a tall narrow-necked clay pitcher; a glossy black crow stands on the rim, wings half spread for balance, beak holding a small pebble, several pebbles already at the bottom of the pitcher; the water level has risen partway up. Parched earth, a low wall, hot midday light, clever determined mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A dry garden path with a tall narrow-necked clay pitcher; a glossy black crow stands on the rim, wings half spread for balance, beak holding a small pebble, several pebbles already at the bottom of the pitcher; the water level has risen partway up. Parched earth, a low wall, hot midday light, clever determined mood. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 26. 叼肉的狗

- 目标文件：`the-dog-and-his-reflection.jpg`
- 年龄段：Preschool
- 出处文化：古希腊 / 欧洲
- 场景：A wooden footbridge over a calm stream; a brown dog leans over the rail with a big chunk of meat in its jaws, eyes wide, mouth already opening to bark at the identical dog and meat reflected in the water below; the real meat is slipping from its teeth, droplets beginning to fall. Morning light, green banks, comic timing frozen.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A wooden footbridge over a calm stream; a brown dog leans over the rail with a big chunk of meat in its jaws, eyes wide, mouth already opening to bark at the identical dog and meat reflected in the water below; the real meat is slipping from its teeth, droplets beginning to fall. Morning light, green banks, comic timing frozen. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 27. 狗和海豚

- 目标文件：`the-dog-and-the-cook.jpg`
- 年龄段：Explorer
- 出处文化：古希腊 / 欧洲
- 场景：Open sea with gentle waves; a friendly dolphin with a smooth grey back swims with a wet, shivering brown dog clinging to it, the dog's ears plastered down, tail drooping; the dolphin turns its head back with a cheerful open-mouthed smile, one fin raised as if chatting. Blue water, bright sky, a distant shoreline, light comic irony.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: Open sea with gentle waves; a friendly dolphin with a smooth grey back swims with a wet, shivering brown dog clinging to it, the dog's ears plastered down, tail drooping; the dolphin turns its head back with a cheerful open-mouthed smile, one fin raised as if chatting. Blue water, bright sky, a distant shoreline, light comic irony. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 28. 狗和狼

- 目标文件：`the-dog-and-the-wolf.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A farmyard fence at dusk; a plump glossy dog with a thick collar sits comfortably, one paw raised, showing a worn patch of fur at its neck; opposite, a lean grey wolf with ribs showing stands outside the fence, ears pricked, weighing the offer with a sceptical frown. Wooden gate, warm light from a window, thoughtful mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A farmyard fence at dusk; a plump glossy dog with a thick collar sits comfortably, one paw raised, showing a worn patch of fur at its neck; opposite, a lean grey wolf with ribs showing stands outside the fence, ears pricked, weighing the offer with a sceptical frown. Wooden gate, warm light from a window, thoughtful mood. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 29. 马槽里的狗

- 目标文件：`the-dog-in-the-manger.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A stable interior; a small brown dog lies curled in a wooden manger full of sweet hay, chin on paws, eyes half closed but watchful; a big brown cow with a patient face leans in, muzzle toward the hay, one eyebrow-like ridge raised in mild reproach. Wooden beams, dust in a shaft of light, comic stubbornness.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A stable interior; a small brown dog lies curled in a wooden manger full of sweet hay, chin on paws, eyes half closed but watchful; a big brown cow with a patient face leans in, muzzle toward the hay, one eyebrow-like ridge raised in mild reproach. Wooden beams, dust in a shaft of light, comic stubbornness. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 30. 老鹰和狐狸

- 目标文件：`the-eagle-and-the-fox.jpg`
- 年龄段：Explorer
- 出处文化：古希腊 / 欧洲
- 场景：A tall old tree beside a burrow; a fierce golden eagle perches on a high branch with a scrap of meat in its talons, wings half spread, glaring down; below at the tree's base a small red fox looks up with wet, furious eyes, one paw pressed to its chest; three fluffy fox cubs hide behind her legs. Late afternoon, dramatic light, tension without gore.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A tall old tree beside a burrow; a fierce golden eagle perches on a high branch with a scrap of meat in its talons, wings half spread, glaring down; below at the tree's base a small red fox looks up with wet, furious eyes, one paw pressed to its chest; three fluffy fox cubs hide behind her legs. Late afternoon, dramatic light, tension without gore. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 31. 大象和哈巴狗

- 目标文件：`the-elephant-and-the-pug.jpg`
- 年龄段：Growing
- 出处文化：旧俄国
- 场景：A Russian town street; an enormous grey elephant walks calmly with a small handler on its back, ears flapping; beside it a tiny curly-tailed pug dances and yaps at the giant legs, chest puffed, eyes squeezed shut with effort; other dogs watch from the side, one tilting its head; low wooden houses and a cobbled lane. Warm daylight, comic scale contrast.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A Russian town street; an enormous grey elephant walks calmly with a small handler on its back, ears flapping; beside it a tiny curly-tailed pug dances and yaps at the giant legs, chest puffed, eyes squeezed shut with effort; other dogs watch from the side, one tilting its head; low wooden houses and a cobbled lane. Warm daylight, comic scale contrast. Setting and costume: Old Russian countryside setting: belted linen shirts, long coats and felt boots, log cottages with carved window frames, birch trees and wooden carts. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 32. 农夫和命运女神

- 目标文件：`the-farmer-and-fortune.jpg`
- 年龄段：Explorer
- 出处文化：古希腊 / 欧洲
- 场景：A freshly dug field; a sunburned farmer in a straw hat lifts a clay jar overflowing with gold coins from a hole, laughing with his head thrown back, one hand on his hip; behind him, half hidden in warm light, a graceful goddess figure in pale gold robes with a wheat sheaf in her arms smiles with a gently raised eyebrow. Turned earth, bright sky, ironic warmth.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A freshly dug field; a sunburned farmer in a straw hat lifts a clay jar overflowing with gold coins from a hole, laughing with his head thrown back, one hand on his hip; behind him, half hidden in warm light, a graceful goddess figure in pale gold robes with a wheat sheaf in her arms smiles with a gently raised eyebrow. Turned earth, bright sky, ironic warmth. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 33. 农夫和狗

- 目标文件：`the-farmer-and-his-dog.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A storm-washed dirt road with a broken stone bridge; a farmer in a coarse wool cloak huddles under a thatched lean-to, arms wrapped around himself, looking anxiously toward home; a shaggy brown dog arrives at a run, soaked, tail wagging hard, turning back as if to lead the way up a slope; rain easing, grey-gold light, loyal warm mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A storm-washed dirt road with a broken stone bridge; a farmer in a coarse wool cloak huddles under a thatched lean-to, arms wrapped around himself, looking anxiously toward home; a shaggy brown dog arrives at a run, soaked, tail wagging hard, turning back as if to lead the way up a slope; rain easing, grey-gold light, loyal warm mood. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 34. 农夫和鹰

- 目标文件：`the-farmer-and-the-eagle.jpg`
- 年龄段：Explorer
- 出处文化：古希腊 / 欧洲
- 场景：A field with an old crumbling stone wall; a farmer in a brown tunic chases a golden eagle that has snatched his straw hat, arms outstretched, expression indignant; behind him, the wall collapses in a burst of dust exactly where he had been standing; the eagle drops the hat and wheels upward. Dynamic dust, sunlight, comic timing with a warm message.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A field with an old crumbling stone wall; a farmer in a brown tunic chases a golden eagle that has snatched his straw hat, arms outstretched, expression indignant; behind him, the wall collapses in a burst of dust exactly where he had been standing; the eagle drops the hat and wheels upward. Dynamic dust, sunlight, comic timing with a warm message. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 35. 农夫和蛇

- 目标文件：`the-farmer-and-the-snake.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A snowy roadside; an old farmer in a thick coat kneels, cradling a stiff blue-grey snake against his chest inside his coat, face full of pity; the snake's head is lifting slightly, eyes opening with a cold glint, mouth beginning to open; the man's expression still kind and unaware. Bare trees, white snow, cool tones, quiet foreboding.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A snowy roadside; an old farmer in a thick coat kneels, cradling a stiff blue-grey snake against his chest inside his coat, face full of pity; the snake's head is lifting slightly, eyes opening with a cold glint, mouth beginning to open; the man's expression still kind and unaware. Bare trees, white snow, cool tones, quiet foreboding. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 36. 涸辙之鱼

- 目标文件：`the-fish-in-the-dry-rut.jpg`
- 年龄段：Explorer
- 出处文化：中国
- 场景：A dried mud rut in a dusty road; a silver fish lies curved in the cracked mud, gills working, one eye turned up hopefully; crouching beside it a traveller in a blue robe points dramatically toward a distant river, one hand shading his eyes, expression grand and generous; a cracked clay pot lies nearby. Harsh sunlight, dust, dry grass, gentle irony.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A dried mud rut in a dusty road; a silver fish lies curved in the cracked mud, gills working, one eye turned up hopefully; crouching beside it a traveller in a blue robe points dramatically toward a distant river, one hand shading his eyes, expression grand and generous; a cracked clay pot lies nearby. Harsh sunlight, dust, dry grass, gentle irony. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, timber buildings with grey tiled roofs and lattice windows. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 37. 渔夫和大鱼小鱼

- 目标文件：`the-fisherman-and-the-little-fish.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A misty lakeside at dusk in ancient Greece; a fisherman in a rough wool tunic with a rope belt kneels by a woven willow basket, holding up a small silver fish in one hand, considering it with a doubtful squint; the fish's mouth is open as if pleading; a simple reed fishing rod leans against a rock, the empty basket beside him. Calm water, fading light, quiet mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A misty lakeside at dusk in ancient Greece; a fisherman in a rough wool tunic with a rope belt kneels by a woven willow basket, holding up a small silver fish in one hand, considering it with a doubtful squint; the fish's mouth is open as if pleading; a simple reed fishing rod leans against a rock, the empty basket beside him. Calm water, fading light, quiet mood. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 38. 苍蝇和蜜

- 目标文件：`the-fly-and-the-honey.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A kitchen shelf with a clay pot of golden honey, lid askew; four flies stand in the honey, legs sunken, bodies glossy, all still feeding greedily, eyes half closed; a fifth fly hovers above, watching with a worried tilt of its head. Warm kitchen light, a wooden spoon, a towel, bright sticky golden palette with a hint of warning.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A kitchen shelf with a clay pot of golden honey, lid askew; four flies stand in the honey, legs sunken, bodies glossy, all still feeding greedily, eyes half closed; a fifth fly hovers above, watching with a worried tilt of its head. Warm kitchen light, a wooden spoon, a towel, bright sticky golden palette with a hint of warning. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 39. 狐狸和鹤

- 目标文件：`the-fox-and-the-crane.jpg`
- 年龄段：Preschool
- 出处文化：古希腊 / 欧洲
- 场景：A cottage table; a long-beaked white crane stands beside a wide flat plate of soup, neck bent awkwardly, one eye narrow with polite frustration; opposite, an orange fox laps up its own soup from a matching plate with obvious delight, tail curled, one eye peeking up slyly. Wooden bowls, a candle, warm evening light.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A cottage table; a long-beaked white crane stands beside a wide flat plate of soup, neck bent awkwardly, one eye narrow with polite frustration; opposite, an orange fox laps up its own soup from a matching plate with obvious delight, tail curled, one eye peeking up slyly. Wooden bowls, a candle, warm evening light. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 40. 狐狸和乌鸦

- 目标文件：`the-fox-and-the-crow.jpg`
- 年龄段：Preschool
- 出处文化：古希腊 / 欧洲
- 场景：A tree branch above a forest path; a black crow holds a piece of meat in its beak, chest puffed, eyes half shut with pleasure at the compliments; below, an orange fox sits back on its haunches, one paw raised in an elegant gesture, mouth open mid-flattery, eyes bright with cunning; the meat is just beginning to slip. Green canopy, warm sunlight.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A tree branch above a forest path; a black crow holds a piece of meat in its beak, chest puffed, eyes half shut with pleasure at the compliments; below, an orange fox sits back on its haunches, one paw raised in an elegant gesture, mouth open mid-flattery, eyes bright with cunning; the meat is just beginning to slip. Green canopy, warm sunlight. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 41. 狐狸和鼓

- 目标文件：`the-fox-and-the-drum.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A forest at dusk; an orange fox crouches low in tall grass, ears flat, body tense, eyes wide with fright; on a branch above, a round red drum hangs from a cord, and the wind has just struck it, with visible motion lines and a puff of dust. Ferns, dark trunks, cool blue-green tones, comic tension.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A forest at dusk; an orange fox crouches low in tall grass, ears flat, body tense, eyes wide with fright; on a branch above, a round red drum hangs from a cord, and the wind has just struck it, with visible motion lines and a puff of dust. Ferns, dark trunks, cool blue-green tones, comic tension. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 42. 井里的狐狸和山羊

- 目标文件：`the-fox-and-the-goat-in-the-well.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：Inside a stone well; a nimble orange fox stands on the back of a white goat, one forepaw on the well rim, ready to leap out, expression smug; the goat looks up with big trusting eyes, beard dripping, hooves braced on the wet stones. Mossy bricks, a circle of daylight above, faint water below, wry humour.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: Inside a stone well; a nimble orange fox stands on the back of a white goat, one forepaw on the well rim, ready to leap out, expression smug; the goat looks up with big trusting eyes, beard dripping, hooves braced on the wet stones. Mossy bricks, a circle of daylight above, faint water below, wry humour. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 43. 狐狸和葡萄

- 目标文件：`the-fox-and-the-grapes.jpg`
- 年龄段：Preschool
- 出处文化：古希腊 / 欧洲
- 场景：A vineyard trellis heavy with purple grapes; an orange fox stands on its hind legs, front paws stretched high, tongue out with effort, just short of the lowest bunch; a few leaves fall; the fox's expression is a mix of longing and injured pride, chin lifted as if deciding the grapes must be sour. Golden afternoon light, vine leaves, comic tension.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A vineyard trellis heavy with purple grapes; an orange fox stands on its hind legs, front paws stretched high, tongue out with effort, just short of the lowest bunch; a few leaves fall; the fox's expression is a mix of longing and injured pride, chin lifted as if deciding the grapes must be sour. Golden afternoon light, vine leaves, comic tension. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 44. 狐狸和刺猬

- 目标文件：`the-fox-and-the-hedgehog.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A riverbank after a soaking; an orange fox lies flat on the grass, fur plastered and dripping, eyes closed in weary patience; a plump hedgehog with raised spines stands beside it, one paw extended toward a cluster of small flies on the fox's back, face earnest and helpful; the fox lifts one eyelid with a resigned look. Wet stones, reeds, soft light.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A riverbank after a soaking; an orange fox lies flat on the grass, fur plastered and dripping, eyes closed in weary patience; a plump hedgehog with raised spines stands beside it, one paw extended toward a cluster of small flies on the fox's back, face earnest and helpful; the fox lifts one eyelid with a resigned look. Wet stones, reeds, soft light. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 45. 狐狸和豹

- 目标文件：`the-fox-and-the-leopard.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A sunlit clearing; a sleek spotted leopard poses with its side turned, tail high, chin lifted proudly, showing off its patterned coat; an orange fox sits calmly on a rock opposite, one paw raised, a knowing half-smile on its face, eyes bright and steady. Grass, dappled shade, elegant composition, witty tone.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A sunlit clearing; a sleek spotted leopard poses with its side turned, tail high, chin lifted proudly, showing off its patterned coat; an orange fox sits calmly on a rock opposite, one paw raised, a knowing half-smile on its face, eyes bright and steady. Grass, dappled shade, elegant composition, witty tone. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 46. 老狮子和狐狸

- 目标文件：`the-fox-and-the-lion.jpg`
- 年龄段：Explorer
- 出处文化：古希腊 / 欧洲
- 场景：A dark cave mouth in a rocky hillside; a thin, cautious fox stands well outside, nose lifted, ears forward, one forepaw raised mid-step; deep in the shadows a huge old lion lies with its chin on its paws, eyes glinting, a small sly smile. Around the entrance, many footprints lead inward and none lead out. Cool grey rock, a shaft of sunlight.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A dark cave mouth in a rocky hillside; a thin, cautious fox stands well outside, nose lifted, ears forward, one forepaw raised mid-step; deep in the shadows a huge old lion lies with its chin on its paws, eyes glinting, a small sly smile. Around the entrance, many footprints lead inward and none lead out. Cool grey rock, a shaft of sunlight. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 47. 狐狸和面具

- 目标文件：`the-fox-and-the-mask.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A cluttered ancient Greek actor's dressing room; an orange fox sits on a low wooden stool holding up a painted theatrical mask with a tragic open mouth and arched brows, turning it over with both paws; the fox's own expression is sorrowful and wry; a shelf of comic and tragic masks, a folded linen costume, a bronze hand mirror. Warm dusty light through a high window, theatrical mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A cluttered ancient Greek actor's dressing room; an orange fox sits on a low wooden stool holding up a painted theatrical mask with a tragic open mouth and arched brows, turning it over with both paws; the fox's own expression is sorrowful and wry; a shelf of comic and tragic masks, a folded linen costume, a bronze hand mirror. Warm dusty light through a high window, theatrical mood. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 48. 牛和蛙

- 目标文件：`the-frog-and-the-ox.jpg`
- 年龄段：Preschool
- 出处文化：古希腊 / 欧洲
- 场景：A green pond bank; a tiny green frog puffs its cheeks and belly out as wide as it can, eyes bulging, legs splayed, straining to look big; behind it a huge brown ox grazes calmly, filling much of the background; the frog's mother stands at the water's edge with a worried, waving gesture. Reeds, lily pads, bright day, comic exaggeration.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A green pond bank; a tiny green frog puffs its cheeks and belly out as wide as it can, eyes bulging, legs splayed, straining to look big; behind it a huge brown ox grazes calmly, filling much of the background; the frog's mother stands at the water's edge with a worried, waving gesture. Reeds, lily pads, bright day, comic exaggeration. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 49. 浅井之蛙

- 目标文件：`the-frog-and-the-well.jpg`
- 年龄段：Growing
- 出处文化：中国
- 场景：A mossy stone well; a small green frog sits on the rim, chest puffed, one leg gesturing grandly at the little circle of sky above the well; beside the well a huge soft-shelled sea turtle rests on the grass, one flipper raised toward the horizon, expression patient and amused. Wide open sky beyond, distant sea, gentle wisdom.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A mossy stone well; a small green frog sits on the rim, chest puffed, one leg gesturing grandly at the little circle of sky above the well; beside the well a huge soft-shelled sea turtle rests on the grass, one flipper raised toward the horizon, expression patient and amused. Wide open sky beyond, distant sea, gentle wisdom. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, timber buildings with grey tiled roofs and lattice windows. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 50. 青蛙求王

- 目标文件：`the-frogs-who-wanted-a-king.jpg`
- 年龄段：Explorer
- 出处文化：古希腊 / 欧洲
- 场景：A lily pond crowded with worried frogs; a big grey log has just splashed into the water, sending up a ring of ripples, and several frogs peek out from behind lily pads with doubtful, disappointed faces; one frog sits on the log, prodding it with a toe. Green water, reeds, soft overcast light, comic misgiving.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A lily pond crowded with worried frogs; a big grey log has just splashed into the water, sending up a ring of ripples, and several frogs peek out from behind lily pads with doubtful, disappointed faces; one frog sits on the log, prodding it with a toe. Green water, reeds, soft overcast light, comic misgiving. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 51. 蚊子和公牛

- 目标文件：`the-gnat-and-the-bull.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：Close-up in a green pasture; a small mosquito perches on the tip of a huge brown bull's curved horn, stretching its legs politely; the bull's eye is visible far to the side, mild and unconcerned, muzzle in the grass; the mosquito's expression is earnest and self-important. Blades of grass, warm sunlight, gentle ironic humour.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: Close-up in a green pasture; a small mosquito perches on the tip of a huge brown bull's curved horn, stretching its legs politely; the bull's eye is visible far to the side, mild and unconcerned, muzzle in the grass; the mosquito's expression is earnest and self-important. Blades of grass, warm sunlight, gentle ironic humour. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 52. 蚊子和狮子

- 目标文件：`the-gnat-and-the-lion.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A savannah clearing; a tiny mosquito hovers right in front of a huge lion's nose, wings blurred with motion, posture jaunty; the lion's eyes are crossed with irritation, one paw swiping at empty air, mane ruffled; behind the lion a spider web glints between two branches. Golden grass, warm light, comic tension with foreshadowing.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A savannah clearing; a tiny mosquito hovers right in front of a huge lion's nose, wings blurred with motion, posture jaunty; the lion's eyes are crossed with irritation, one paw swiping at empty air, mane ruffled; behind the lion a spider web glints between two branches. Golden grass, warm light, comic tension with foreshadowing. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 53. 生金蛋的鹅

- 目标文件：`the-goose-with-the-golden-eggs.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A farmyard; a plump white goose stands beside a nest holding one gleaming golden egg, one wing tucked; the farmer crouches beside it with both hands on the goose, face greedy and impatient, jaw set, eyes fixed on the bird rather than the egg; the goose's eye is wide with alarm. Straw, a wooden fence, morning light, a moment of foolish greed.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A farmyard; a plump white goose stands beside a nest holding one gleaming golden egg, one wing tucked; the farmer crouches beside it with both hands on the goose, face greedy and impatient, jaw set, eyes fixed on the bird rather than the egg; the goose's eye is wide with alarm. Straw, a wooden fence, morning light, a moment of foolish greed. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 54. 兔子和猎狗

- 目标文件：`the-hare-and-the-hound.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A grassy field at golden hour; a lean brown hare sprints flat out with ears back and eyes determined, legs stretched in full stride; behind it a long-legged hunting dog runs hard, tongue out, but with a slightly less desperate face; a hunter with a hunting horn watches from a distant hill. Motion, dust, warm light, energetic composition.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A grassy field at golden hour; a lean brown hare sprints flat out with ears back and eyes determined, legs stretched in full stride; behind it a long-legged hunting dog runs hard, tongue out, but with a slightly less desperate face; a hunter with a hunting horn watches from a distant hill. Motion, dust, warm light, energetic composition. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 55. 池边的鹿

- 目标文件：`the-hart-and-his-reflection.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A still forest pool at dusk; a slender deer stands at the water's edge, head lowered, admiring the reflection of its branching antlers, nose almost touching the surface; its thin legs are hidden by reeds; behind the trees a lion's eyes gleam in the shadows, watching. Quiet water, ferns, deep blue-green tones, gentle tension.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A still forest pool at dusk; a slender deer stands at the water's edge, head lowered, admiring the reflection of its branching antlers, nose almost touching the surface; its thin legs are hidden by reeds; behind the trees a lion's eyes gleam in the shadows, watching. Quiet water, ferns, deep blue-green tones, gentle tension. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 56. 牧人和丢失的牛

- 目标文件：`the-herdsman-and-the-lost-bull.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A hillside shrine in ancient Greece: a small whitewashed altar with a stone statue of a shepherd god, a few olive branches and a clay cup laid on it; a herdsman in a coarse wool tunic kneels with both hands raised, face earnest in a big promise; behind him, tied to an olive tree, a small calf nuzzles its mother, and a fine large bull grazes peacefully further off. Warm dusk, olive hills, ironic warmth.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A hillside shrine in ancient Greece: a small whitewashed altar with a stone statue of a shepherd god, a few olive branches and a clay cup laid on it; a herdsman in a coarse wool tunic kneels with both hands raised, face earnest in a big promise; behind him, tied to an olive tree, a small calf nuzzles its mother, and a fine large bull grazes peacefully further off. Warm dusk, olive hills, ironic warmth. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 57. 马和鹿

- 目标文件：`the-horse-and-the-stag.jpg`
- 年龄段：Explorer
- 出处文化：古希腊 / 欧洲
- 场景：A meadow at the forest edge; a proud brown horse stands with a leather bridle and bit being fitted by a man in a simple tunic, the man's hand raised toward the horse's head; the horse's expression is impatient and eager, eyes fixed on a distant stag near the treeline; a saddle lies on the grass. Green meadow, morning light, quiet moral weight.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A meadow at the forest edge; a proud brown horse stands with a leather bridle and bit being fitted by a man in a simple tunic, the man's hand raised toward the horse's head; the horse's expression is impatient and eager, eyes fixed on a distant stag near the treeline; a saddle lies on the grass. Green meadow, morning light, quiet moral weight. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 58. 百灵鸟和小鸟

- 目标文件：`the-lark-and-her-young.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A nest of tiny larks hidden in a golden wheat field; the mother lark stands on the nest rim with wings half open, calm and knowing, while three fluffy chicks huddle together, eyes wide, beaks open in worry; in the distance a farmer with a scythe inspects the crop. Ripe wheat, warm sun, gentle tension.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A nest of tiny larks hidden in a golden wheat field; the mother lark stands on the nest rim with wings half open, calm and knowing, while three fluffy chicks huddle together, eyes wide, beaks open in worry; in the distance a farmer with a scythe inspects the crop. Ripe wheat, warm sun, gentle tension. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 59. 树叶和树根

- 目标文件：`the-leaves-and-the-roots.jpg`
- 年龄段：Explorer
- 出处文化：古希腊 / 欧洲
- 场景：A cross-section view: above ground, a lush canopy of green leaves rustling in the wind, glossy and proud; below ground, the same tree's sturdy brown roots spread wide among rocks and soil, one root with a calm, patient face looking up; a cutaway of earth between them. Rich browns and greens, soft light, quietly thoughtful.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A cross-section view: above ground, a lush canopy of green leaves rustling in the wind, glossy and proud; below ground, the same tree's sturdy brown roots spread wide among rocks and soil, one root with a calm, patient face looking up; a cutaway of earth between them. Rich browns and greens, soft light, quietly thoughtful. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 60. 狮子与野猪

- 目标文件：`the-lion-and-the-boar.jpg`
- 年龄段：Explorer
- 出处文化：古希腊 / 欧洲
- 场景：A muddy water hole at midday; a big lion and a bristly wild boar stand head to head, both with chests out and teeth bared, a cloud of dust between them; above, three vultures circle in a pale sky, one descending. Dry grass, cracked mud, harsh light, tension that is about to break into truce.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A muddy water hole at midday; a big lion and a bristly wild boar stand head to head, both with chests out and teeth bared, a cloud of dust between them; above, three vultures circle in a pale sky, one descending. Dry grass, cracked mud, harsh light, tension that is about to break into truce. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 61. 狮子和农夫

- 目标文件：`the-lion-and-the-farmer.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A farmhouse yard; a huge lion sits on its haunches with one front paw extended, a long thorn visible in the pad, its face screwed up in pain but patient; a farmer in a brown tunic kneels close, both hands gently working the thorn loose, tongue between his teeth in concentration; chickens scatter in the background. Warm dusk, straw, gentle courage.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A farmhouse yard; a huge lion sits on its haunches with one front paw extended, a long thorn visible in the pad, its face screwed up in pain but patient; a farmer in a brown tunic kneels close, both hands gently working the thorn loose, tongue between his teeth in concentration; chickens scatter in the background. Warm dusk, straw, gentle courage. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 62. 狮子和小老鼠

- 目标文件：`the-lion-and-the-mouse.jpg`
- 年龄段：Preschool
- 出处文化：古希腊 / 欧洲
- 场景：A grassy clearing; a huge lion lies on its side with one paw resting lightly over a tiny brown mouse, not pressing; the mouse is on its hind legs with tiny paws clasped, begging earnestly, eyes huge; the lion's expression is amused and indulgent, one eyebrow lifted. Sun-warmed grass, soft bokeh, tender comic moment.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A grassy clearing; a huge lion lies on its side with one paw resting lightly over a tiny brown mouse, not pressing; the mouse is on its hind legs with tiny paws clasped, begging earnestly, eyes huge; the lion's expression is amused and indulgent, one eyebrow lifted. Sun-warmed grass, soft bokeh, tender comic moment. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 63. 狮子、驴子和狐狸

- 目标文件：`the-lion-the-ass-and-the-fox.jpg`
- 年龄段：Explorer
- 出处文化：古希腊 / 欧洲
- 场景：A hunting clearing with three piles of game; a grey donkey stands proudly beside three neatly equal shares, one hoof gesturing at them, mouth open in a confident explanation; a big lion looms over him with eyes narrowed and mane bristling, one paw raised; an orange fox sits well off to the side, watching with a small wise smile. Warm light, comic tension.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A hunting clearing with three piles of game; a grey donkey stands proudly beside three neatly equal shares, one hoof gesturing at them, mouth open in a confident explanation; a big lion looms over him with eyes narrowed and mane bristling, one paw raised; an orange fox sits well off to the side, watching with a small wise smile. Warm light, comic tension. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 64. 歧路亡羊

- 目标文件：`the-lost-sheep-at-the-crossroads.jpg`
- 年龄段：Explorer
- 出处文化：中国
- 场景：A dusty country crossroads where five paths meet, each splitting again into more; a small group of villagers in simple robes stands at the centre, one scratching his head, another shading his eyes down a path; a single sheep's hoofprint in the dust; nested forks recede into the distance. Dry grass, glaring light, sense of confusion.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A dusty country crossroads where five paths meet, each splitting again into more; a small group of villagers in simple robes stands at the centre, one scratching his head, another shading his eyes down a path; a single sheep's hoofprint in the dust; nested forks recede into the distance. Dry grass, glaring light, sense of confusion. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, timber buildings with grey tiled roofs and lattice windows. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 65. 螳螂捕蝉

- 目标文件：`the-mantis-stalks-the-cicada.jpg`
- 年龄段：Explorer
- 出处文化：中国
- 场景：A summer tree branch; a green cicada sits singing, translucent wings raised; behind it a green mantis creeps forward, forelegs raised, eyes fixed, entirely focused on the cicada; behind the mantis a yellow oriole perches on a higher twig, head lowered, watching the mantis; below, in the leafy shade, a hunter's net is spread. Layered composition, warm green light.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A summer tree branch; a green cicada sits singing, translucent wings raised; behind it a green mantis creeps forward, forelegs raised, eyes fixed, entirely focused on the cicada; behind the mantis a yellow oriole perches on a higher twig, head lowered, watching the mantis; below, in the leafy shade, a hunter's net is spread. Layered composition, warm green light. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, timber buildings with grey tiled roofs and lattice windows. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 66. 老鼠和将军

- 目标文件：`the-mice-and-the-weasels.jpg`
- 年龄段：Explorer
- 出处文化：古希腊 / 欧洲
- 场景：A narrow mouse hole in a stone wall; a crowd of small brown mice squeezes into the hole in a panic, tails and feet flailing; three large mice wearing little horned helmets are stuck fast at the entrance, helmets wedged against the stone, faces red with effort and terror; a shadow of a cat falls across them. Dust, motion, comic disaster.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A narrow mouse hole in a stone wall; a crowd of small brown mice squeezes into the hole in a panic, tails and feet flailing; three large mice wearing little horned helmets are stuck fast at the entrance, helmets wedged against the stone, faces red with effort and terror; a shadow of a cat falls across them. Dust, motion, comic disaster. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 67. 挤牛奶的姑娘

- 目标文件：`the-milkmaid-and-her-pail.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A country lane; a young milkmaid in a simple blue dress and white apron carries a full pail of milk balanced on her head, chin up, eyes dreamy, a happy smile on her face as she imagines; her head is tilted just slightly too far, and the milk is beginning to slosh over the rim. Wildflowers, blue sky, bright morning, comic foreshadowing.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A country lane; a young milkmaid in a simple blue dress and white apron carries a full pail of milk balanced on her head, chin up, eyes dreamy, a happy smile on her face as she imagines; her head is tilted just slightly too far, and the milk is beginning to slosh over the rim. Wildflowers, blue sky, bright morning, comic foreshadowing. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 68. 守财奴

- 目标文件：`the-miser-and-his-gold.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A small walled garden at dusk in ancient Greece; a thin old man in a plain wool cloak kneels beside a shallow hole in the earth, both hands pressed to his cheeks, mouth open in a wail, tears on his cheeks; the hole is empty; beside him a neighbour with a wooden hoe leans on it, eyebrows raised, gesturing at the man's patched clothes and empty purse. Loose soil, a stone, soft blue light, wry tone.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A small walled garden at dusk in ancient Greece; a thin old man in a plain wool cloak kneels beside a shallow hole in the earth, both hands pressed to his cheeks, mouth open in a wail, tears on his cheeks; the hole is empty; beside him a neighbour with a wooden hoe leans on it, eyebrows raised, gesturing at the man's patched clothes and empty purse. Loose soil, a stone, soft blue light, wry tone. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 69. 猴子和渔夫

- 目标文件：`the-monkey-and-the-fisherman.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A riverbank; a brown monkey is comically tangled in a fishing net, one arm through a mesh, tail wrapped around a rope, net over its head, eyes wide with alarm; behind it a fishing basket and a rod on a rock, water rippling close by. Willows, morning mist, gentle comic chaos.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A riverbank; a brown monkey is comically tangled in a fishing net, one arm through a mesh, tail wrapped around a rope, net over its head, eyes wide with alarm; behind it a fishing basket and a rod on a rock, water rippling close by. Willows, morning mist, gentle comic chaos. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 70. 老鼠和公牛

- 目标文件：`the-mouse-and-the-bull.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A barn wall with a small round hole; a tiny brown mouse peeks out, one paw on the edge, nose twitching, grinning with satisfaction; outside, a huge brown bull lowers its head and pushes one horn at the hole, much too big, eyes crossed with frustration, hooves stamping. Straw, wooden beams, warm dusty light, comic scale contrast.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A barn wall with a small round hole; a tiny brown mouse peeks out, one paw on the edge, nose twitching, grinning with satisfaction; outside, a huge brown bull lowers its head and pushes one horn at the hole, much too big, eyes crossed with frustration, hooves stamping. Straw, wooden beams, warm dusty light, comic scale contrast. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 71. 骡子

- 目标文件：`the-mule.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A mountain road with a pack saddle; a sturdy mule stands with a load of bundles, one ear turned back, expression thoughtful rather than sulky; to the left, on a lower path, a sleek horse trots proudly; to the right, a patient donkey plods with a heavy basket. The mule stands between them, chest out, finding its own balance. Warm afternoon, layered landscape.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A mountain road with a pack saddle; a sturdy mule stands with a load of bundles, one ear turned back, expression thoughtful rather than sulky; to the left, on a lower path, a sleek horse trots proudly; to the right, a patient donkey plods with a heavy basket. The mule stands between them, chest out, finding its own balance. Warm afternoon, layered landscape. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 72. 北风和太阳

- 目标文件：`the-north-wind-and-the-sun.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A country road under a dramatic sky; a traveller in a blue cloak clutches it tightly around himself, leaning into a gust of wind, hat brim bent, leaves and dust whipping past; in the upper left a scowling wind spirit with puffed cheeks and swirling grey hair blows hard; in the upper right a warm smiling sun with soft golden rays begins to glow. Split-sky composition.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A country road under a dramatic sky; a traveller in a blue cloak clutches it tightly around himself, leaning into a gust of wind, hat brim bent, leaves and dust whipping past; in the upper left a scowling wind spirit with puffed cheeks and swirling grey hair blows hard; in the upper right a warm smiling sun with soft golden rays begins to glow. Split-sky composition. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 73. 橡树和芦苇

- 目标文件：`the-oak-and-the-reed.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A riverbank in a storm; a mighty oak stands rigid, trunk creaking, branches straining, roots beginning to lift from the soil, bark splitting, face-like knots set in stubborn defiance; beside it slender reeds bend almost flat to the ground, calm and unbothered, one reed with a serene expression. Dark storm clouds, rain streaks, dramatic wind.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A riverbank in a storm; a mighty oak stands rigid, trunk creaking, branches straining, roots beginning to lift from the soil, bark splitting, face-like knots set in stubborn defiance; beside it slender reeds bend almost flat to the ground, calm and unbothered, one reed with a serene expression. Dark storm clouds, rain streaks, dramatic wind. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 74. 老人和死神

- 目标文件：`the-old-man-and-death.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A woodland path at dusk; a bent old man in a patched grey robe sits on a bundle of firewood, wiping his forehead, eyes closed in exhaustion; before him a tall pale figure in a long dark cloak with a hood stands quietly, one skeletal hand extended; the old man's eyes have just snapped open in alarm, one hand raised. Cool grey-blue palette, quiet mystery.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A woodland path at dusk; a bent old man in a patched grey robe sits on a bundle of firewood, wiping his forehead, eyes closed in exhaustion; before him a tall pale figure in a long dark cloak with a hood stands quietly, one skeletal hand extended; the old man's eyes have just snapped open in alarm, one hand raised. Cool grey-blue palette, quiet mystery. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 75. 猫头鹰搬家

- 目标文件：`the-owl-moves-house.jpg`
- 年龄段：Growing
- 出处文化：中国
- 场景：A tree branch at dusk; a round owl with big amber eyes stands with a small bundle tied to a stick over its shoulder, looking east with a stubborn expression; opposite, a grey dove tilts its head with a patient questioning look, one wing lifted; a forest village in the distance. Purple-orange sky, gentle moral tone.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A tree branch at dusk; a round owl with big amber eyes stands with a small bundle tied to a stick over its shoulder, looking east with a stubborn expression; opposite, a grey dove tilts its head with a patient questioning look, one wing lifted; a forest village in the distance. Purple-orange sky, gentle moral tone. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, timber buildings with grey tiled roofs and lattice windows. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 76. 公牛和车轴

- 目标文件：`the-oxen-and-the-axle.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A dirt road with a heavy loaded cart; two sturdy oxen strain in their yoke, heads down, sweat on their shoulders, muscles taut; behind the cart, the wooden axle creaks loudly, drawn with visible squeal lines and a small indignant face in the wood grain; one ox turns its head back with an annoyed glare. Dust, warm light, comic contrast.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A dirt road with a heavy loaded cart; two sturdy oxen strain in their yoke, heads down, sweat on their shoulders, muscles taut; behind the cart, the wooden axle creaks loudly, drawn with visible squeal lines and a small indignant face in the wood grain; one ox turns its head back with an annoyed glare. Dust, warm light, comic contrast. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 77. 鹦鹉救火

- 目标文件：`the-parrot-and-the-fire.jpg`
- 年龄段：Explorer
- 出处文化：中国
- 场景：A hillside on fire with orange flames and grey smoke; a small green parrot flies low over the blaze, wings dripping water, a determined set to its beak; below, a wide river glints; other birds flee in the opposite direction; in the clouds above, a tall figure in flowing white robes watches with a moved expression. Dramatic warm palette, heroic smallness.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A hillside on fire with orange flames and grey smoke; a small green parrot flies low over the blaze, wings dripping water, a determined set to its beak; below, a wide river glints; other birds flee in the opposite direction; in the clouds above, a tall figure in flowing white robes watches with a moved expression. Dramatic warm palette, heroic smallness. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, timber buildings with grey tiled roofs and lattice windows. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 78. 小猪和羊群

- 目标文件：`the-piglet-and-the-sheep.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A sheep pen in a European farmyard; a farmer in a coarse wool tunic and rope belt holds a squirming pink piglet under one arm, his face calm; the piglet's mouth is open in a loud squeal, legs kicking, eyes squeezed shut; around them several woolly sheep stand watching with mild, puzzled expressions, one chewing. Straw, wooden rails, morning light, comic contrast.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A sheep pen in a European farmyard; a farmer in a coarse wool tunic and rope belt holds a squirming pink piglet under one arm, his face calm; the piglet's mouth is open in a loud squeal, legs kicking, eyes squeezed shut; around them several woolly sheep stand watching with mild, puzzled expressions, one chewing. Straw, wooden rails, morning light, comic contrast. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 79. 四重奏

- 目标文件：`the-quartet.jpg`
- 年龄段：Explorer
- 出处文化：旧俄国
- 场景：A birch grove clearing in old Russia; a monkey with a violin, a donkey with a cello, a goat with a wooden flute and a bear with a drum sit in a neat semicircle on a carved wooden bench, all playing with great earnestness and terrible coordination, cheeks puffed, brows furrowed; a small nightingale perches above on a birch branch, one wing raised like a conductor, expression pained but patient. Pale birch trunks, warm light.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A birch grove clearing in old Russia; a monkey with a violin, a donkey with a cello, a goat with a wooden flute and a bear with a drum sit in a neat semicircle on a carved wooden bench, all playing with great earnestness and terrible coordination, cheeks puffed, brows furrowed; a small nightingale perches above on a birch branch, one wing raised like a conductor, expression pained but patient. Pale birch trunks, warm light. Setting and costume: Old Russian countryside setting: belted linen shirts, long coats and felt boots, log cottages with carved window frames, birch trees and wooden carts. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 80. 驮盐的驴子

- 目标文件：`the-salt-donkey.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A river crossing; a grey donkey stands in the shallow water with two saddle bags, one bag split and white salt dissolving into the stream, the donkey's expression slyly pleased; on the bank, the driver in a straw hat wades in to grab the halter, face annoyed; wet stones, willows, bright water, comic mischief.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A river crossing; a grey donkey stands in the shallow water with two saddle bags, one bag split and white salt dissolving into the stream, the donkey's expression slyly pleased; on the bank, the driver in a straw hat wades in to grab the halter, face annoyed; wet stones, willows, bright water, comic mischief. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 81. 病人和医生

- 目标文件：`the-sick-man-and-the-doctor.jpg`
- 年龄段：Explorer
- 出处文化：古希腊 / 欧洲
- 场景：A bedroom interior in ancient Greece; a pale man in a rumpled linen sleeping tunic sits up in bed, one hand on his stomach, gesturing dreamily with the other as if describing a pleasant walk; a doctor in a plain himation sits on a stool beside the bed, taking his pulse with two fingers, eyebrows raised sceptically; on the bedside table an empty bowl and a pile of snack crumbs. Soft lamp light, plaster walls.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A bedroom interior in ancient Greece; a pale man in a rumpled linen sleeping tunic sits up in bed, one hand on his stomach, gesturing dreamily with the other as if describing a pleasant walk; a doctor in a plain himation sits on a stool beside the bed, taking his pulse with two fingers, eyebrows raised sceptically; on the bedside table an empty bowl and a pile of snack crumbs. Soft lamp light, plaster walls. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 82. 鹿和葡萄藤

- 目标文件：`the-stag-and-the-vine.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A dense grape arbour; a deer crouches low among hanging vines, body hidden behind leaves, ears flat, eyes wide and watchful; a hunter with a bow stands just outside, looking the other way, one hand shading his eyes; a few grape leaves near the deer's mouth have been nibbled, and a torn leaf is drifting down. Dappled light, tense stillness.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A dense grape arbour; a deer crouches low among hanging vines, body hidden behind leaves, ears flat, eyes wide and watchful; a hunter with a bow stands just outside, looking the other way, one hand shading his eyes; a few grape leaves near the deer's mouth have been nibbled, and a torn leaf is drifting down. Dappled light, tense stillness. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 83. 天鹅、大虾和梭鱼

- 目标文件：`the-swan-the-pike-and-the-crayfish.jpg`
- 年龄段：Growing
- 出处文化：旧俄国
- 场景：A Russian riverbank with a loaded wooden cart; a white swan strains upward at a rope tied to the cart, wings beating; a crayfish grips the same rope and pulls backward toward the water, claws dug in; a pike pulls sideways toward the river, body bending; the cart sits perfectly still, wheels unmoved, and all three are sweating; a peasant in a belted linen shirt watches with his hands on his hips. Comic tension, bright day.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A Russian riverbank with a loaded wooden cart; a white swan strains upward at a rope tied to the cart, wings beating; a crayfish grips the same rope and pulls backward toward the water, claws dug in; a pike pulls sideways toward the river, body bending; the cart sits perfectly still, wheels unmoved, and all three are sweating; a peasant in a belted linen shirt watches with his hands on his hips. Comic tension, bright day. Setting and costume: Old Russian countryside setting: belted linen shirts, long coats and felt boots, log cottages with carved window frames, birch trees and wooden carts. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 84. 偷东西的小孩和他母亲

- 目标文件：`the-thief-and-his-mother.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A modest ancient Greek home interior; a small boy in a plain wool tunic holds out a wooden wax writing tablet to his mother with a proud, hopeful grin; the mother in a simple draped dress claps her hands and smiles indulgently; in the background through a doorway, a sunlit courtyard where children practise letters is visible. Warm oil-lamp light, plaster walls, gentle foreshadowing.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A modest ancient Greek home interior; a small boy in a plain wool tunic holds out a wooden wax writing tablet to his mother with a proud, hopeful grin; the mother in a simple draped dress claps her hands and smiles indulgently; in the background through a doorway, a sunlit courtyard where children practise letters is visible. Warm oil-lamp light, plaster walls, gentle foreshadowing. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 85. 龟兔赛跑

- 目标文件：`the-tortoise-and-the-hare.jpg`
- 年龄段：Preschool
- 出处文化：古希腊 / 欧洲
- 场景：A country race path with a red ribbon stretched between two posts; a green tortoise crosses the finish line, one foot raised, sweat on its brow, a small satisfied smile; far behind under a tree, a brown hare has just woken up, ears straight up, mouth open in horror, one hind leg still tangled in grass. Flowers, butterflies, bright day, joyful comic finish.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A country race path with a red ribbon stretched between two posts; a green tortoise crosses the finish line, one foot raised, sweat on its brow, a small satisfied smile; far behind under a tree, a brown hare has just woken up, ears straight up, mouth open in horror, one hind leg still tangled in grass. Flowers, butterflies, bright day, joyful comic finish. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 86. 城市老鼠和乡下老鼠

- 目标文件：`the-town-mouse-and-the-country-mouse.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A town house dining room at night; a long table laden with cheese, cake and fruit; two mice sit frozen on the cloth, ears up, eyes wide, one holding a crumb mid-bite; in the doorway a cat's silhouette with glowing eyes; moonlight through tall windows, silver and warm candlelight mixed, comic suspense.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A town house dining room at night; a long table laden with cheese, cake and fruit; two mice sit frozen on the cloth, ears up, eyes wide, one holding a crumb mid-bite; in the doorway a cat's silhouette with glowing eyes; moonlight through tall windows, silver and warm candlelight mixed, comic suspense. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 87. 行人和梧桐树

- 目标文件：`the-traveler-and-the-plane-tree.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A broad-leafed plane tree beside a dusty road; three tired travellers sit in its deep shade, hats off, fanning themselves, one gesturing dismissively at the tree with a smirk; the tree's trunk has a kindly, slightly hurt face in its bark, one branch drooping; sunlight beyond the shade, dust motes, warm moral tone.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A broad-leafed plane tree beside a dusty road; three tired travellers sit in its deep shade, hats off, fanning themselves, one gesturing dismissively at the tree with a smirk; the tree's trunk has a kindly, slightly hurt face in its bark, one branch drooping; sunlight beyond the shade, dust motes, warm moral tone. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 88. 行人与斧头

- 目标文件：`the-travelers-and-the-axe.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A forest road in ancient Greece; a man in a plain wool tunic holds up a shiny bronze axe with a gleeful grin, showing it to his companion; the companion in a shorter tunic spreads both hands emphatically, eyebrows raised; behind them along the road, an angry woodcutter in a leather apron runs toward them, one arm raised. Pines, dust, comic tension.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A forest road in ancient Greece; a man in a plain wool tunic holds up a shiny bronze axe with a gleeful grin, showing it to his companion; the companion in a shorter tunic spreads both hands emphatically, eyebrows raised; behind them along the road, an angry woodcutter in a leather apron runs toward them, one arm raised. Pines, dust, comic tension. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 89. 朋友与熊

- 目标文件：`the-travelers-and-the-bear.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A forest path; a huge brown bear stands sniffing the face of a man lying rigid on the ground, eyes squeezed shut, arms at his sides, trying not to breathe; in the branches above, the second man clings to a trunk, one leg hooked over a limb, peeking down with a guilty expression. Deep green shadows, dappled light, comic fear.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A forest path; a huge brown bear stands sniffing the face of a man lying rigid on the ground, eyes squeezed shut, arms at his sides, trying not to breathe; in the branches above, the second man clings to a trunk, one leg hooked over a limb, peeking down with a guilty expression. Deep green shadows, dappled light, comic fear. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 90. 号兵

- 目标文件：`the-trumpeter.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A battlefield edge in soft haze in ancient Europe; a young soldier in a simple bronze breastplate over a wool tunic holds a brass trumpet, head bowed, shoulders slumped, cheeks flushed; opposite him an enemy officer in dark leather armour crosses his arms with a stern, unimpressed expression, one finger raised in accusation; broken spears in the grass behind. Muted colours, dusty light, no blood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A battlefield edge in soft haze in ancient Europe; a young soldier in a simple bronze breastplate over a wool tunic holds a brass trumpet, head bowed, shoulders slumped, cheeks flushed; opposite him an enemy officer in dark leather armour crosses his arms with a stern, unimpressed expression, one finger raised in accusation; broken spears in the grass behind. Muted colours, dusty light, no blood. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 91. 小蟹和母蟹

- 目标文件：`the-two-crabs.jpg`
- 年龄段：Preschool
- 出处文化：古希腊 / 欧洲
- 场景：A sandy beach at low tide; a small crab scuttles sideways with a cheerful, carefree expression, claws up; beside it a larger mother crab walks in the same sideways way, then turns her head back with a sudden embarrassed blink, one claw raised to her shell; wet sand, shells, gentle waves, playful mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A sandy beach at low tide; a small crab scuttles sideways with a cheerful, carefree expression, claws up; beside it a larger mother crab walks in the same sideways way, then turns her head back with a sudden embarrassed blink, one claw raised to her shell; wet sand, shells, gentle waves, playful mood. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 92. 两只青蛙

- 目标文件：`the-two-frogs.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A dry pond bed with cracked mud; two green frogs stand at the edge, one pointing excitedly toward a deep stone well, the other holding up a warning hand, brow furrowed; the well's dark mouth occupies one side, a bucket rope hanging down. Withered reeds, harsh light, quiet sense of danger.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A dry pond bed with cracked mud; two green frogs stand at the edge, one pointing excitedly toward a deep stone well, the other holding up a warning hand, brow furrowed; the well's dark mouth occupies one side, a bucket rope hanging down. Withered reeds, harsh light, quiet sense of danger. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 93. 两个锅

- 目标文件：`the-two-pots.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：Two pots floating down a gentle river, tied loosely together by a rope; one is shiny copper with a confident, friendly face, one dull clay with a wary, polite expression, turned slightly away; water ripples between them, a rope loop sagging; green banks, soft daylight, gentle wit.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: Two pots floating down a gentle river, tied loosely together by a rope; one is shiny copper with a confident, friendly face, one dull clay with a wary, polite expression, turned slightly away; water ripples between them, a rope loop sagging; green banks, soft daylight, gentle wit. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 94. 寒鸦选美

- 目标文件：`the-vain-jackdaw.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A garden with strutting peacocks; a grey jackdaw stands in the middle, covered in borrowed iridescent peacock feathers stuck at odd angles, chest puffed, chin high; three real peacocks surround it with sharp beaks and narrowed eyes, one already plucking a feather loose; a few grey feathers and fallen peacock plumes on the grass. Bright colours, comic humiliation.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A garden with strutting peacocks; a grey jackdaw stands in the middle, covered in borrowed iridescent peacock feathers stuck at odd angles, chest puffed, chin high; three real peacocks surround it with sharp beaks and narrowed eyes, one already plucking a feather loose; a few grey feathers and fallen peacock plumes on the grass. Bright colours, comic humiliation. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 95. 黄鼠狼和爱神

- 目标文件：`the-weasel-and-venus.jpg`
- 年龄段：Explorer
- 出处文化：古希腊 / 欧洲
- 场景：A warm room in a Roman house with a small table and a mousehole; a beautiful young woman in an elegant draped chiton sits gracefully on a cushion, but her posture is suddenly that of a hunter, one hand raised, eyes fixed and fierce, about to pounce; a tiny mouse darts past her feet; through the window, a white marble statue of a serene goddess covers her eyes. Soft interior light, mosaic floor, comic irony.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A warm room in a Roman house with a small table and a mousehole; a beautiful young woman in an elegant draped chiton sits gracefully on a cushion, but her posture is suddenly that of a hunter, one hand raised, eyes fixed and fierce, about to pounce; a tiny mouse darts past her feet; through the window, a white marble statue of a serene goddess covers her eyes. Soft interior light, mosaic floor, comic irony. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 96. 狼和鹭鸶

- 目标文件：`the-wolf-and-the-crane.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A forest clearing; a grey wolf sits with its head tipped back, mouth open wide, eyes watering, one paw at its throat; a tall white crane leans in with its long beak deep inside the wolf's mouth, neck curved, one eye nervously on the wolf's teeth. Ferns, soft green light, tense comic moment.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A forest clearing; a grey wolf sits with its head tipped back, mouth open wide, eyes watering, one paw at its throat; a tall white crane leans in with its long beak deep inside the wolf's mouth, neck curved, one eye nervously on the wolf's teeth. Ferns, soft green light, tense comic moment. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 97. 狼和小羊

- 目标文件：`the-wolf-and-the-lamb.jpg`
- 年龄段：Growing
- 出处文化：古希腊 / 欧洲
- 场景：A stream with clear water; a small white lamb stands downstream, drinking, head turned up with wide innocent eyes and a pleading tilt; on the bank upstream a grey wolf leans forward over the water, one paw raised, mouth open mid-accusation, eyes cunning. Pebbles, reeds, soft daylight, quiet tension.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A stream with clear water; a small white lamb stands downstream, drinking, head turned up with wide innocent eyes and a pleading tilt; on the bank upstream a grey wolf leans forward over the water, one paw raised, mouth open mid-accusation, eyes cunning. Pebbles, reeds, soft daylight, quiet tension. Setting and costume: Ancient Greece and old Europe setting: simple wool chitons, himations and tunics, leather sandals or boots, plain cloaks, stone houses and olive or oak trees. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 98. 曾子杀猪

- 目标文件：`zengzi-kills-the-pig.jpg`
- 年龄段：Growing
- 出处文化：中国
- 场景：A courtyard; a man in a grey scholar's robe holds a knife and the rope of a plump pig, expression firm and calm; his wife in a blue robe has both hands raised in protest, mouth open, half-laughing with embarrassment; a small child clings to her skirt, peeking out with wide eyes. A stone stove, wooden bucket, warm afternoon light, moral resolve.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A courtyard; a man in a grey scholar's robe holds a knife and the rope of a plump pig, expression firm and calm; his wife in a blue robe has both hands raised in protest, mouth open, half-laughing with embarrassment; a small child clings to her skirt, peeking out with wide eyes. A stone stove, wooden bucket, warm afternoon light, moral resolve. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, timber buildings with grey tiled roofs and lattice windows. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

---

<a id="idiom"></a>

## 成语故事 · Chinese Idioms（86 条）

> 分类键：`idiom`｜场景与服饰约束见 README 第四节。

### 1. 塞翁失马

- 目标文件：`character-an-old-man-loses-his-horse.jpg`
- 年龄段：Explorer
- 场景：A weathered old man in a grey cross-collared hanfu and cloth headwrap leans on a wooden staff at the gate of a frontier beacon tower, one hand shading his eyes as a horse disappears down a dusty road; three worried neighbours in muted brown robes cluster behind him, one wringing his hands, another gesturing toward the empty road. Dry grass, packed-earth wall, layered blue mountains at dusk, calm and unhurried mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A weathered old man in a grey cross-collared hanfu and cloth headwrap leans on a wooden staff at the gate of a frontier beacon tower, one hand shading his eyes as a horse disappears down a dusty road; three worried neighbours in muted brown robes cluster behind him, one wringing his hands, another gesturing toward the empty road. Dry grass, packed-earth wall, layered blue mountains at dusk, calm and unhurried mood. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 2. 手捧空花盆的孩子

- 目标文件：`character-empty-flower-pot.jpg`
- 年龄段：Growing
- 场景：A palace courtyard with red lacquered pillars and grey tiled eaves; a row of children in bright cross-collared hanfu proudly holds pots of blooming flowers, while a small boy in a patched pale-blue robe hugs an empty clay pot, eyes downcast, cheeks flushed with shame; an old king in dark gold-trimmed robes kneels down to smile at him, one hand on the boy's shoulder.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A palace courtyard with red lacquered pillars and grey tiled eaves; a row of children in bright cross-collared hanfu proudly holds pots of blooming flowers, while a small boy in a patched pale-blue robe hugs an empty clay pot, eyes downcast, cheeks flushed with shame; an old king in dark gold-trimmed robes kneels down to smile at him, one hand on the boy's shoulder. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 3. 铁杵磨成针

- 目标文件：`character-grind-iron-into-a-needle.jpg`
- 年龄段：Growing
- 场景：Beside a clear mountain stream, an old woman in a faded blue headscarf and patched hemp robe sits on a flat rock, sleeves tied back, patiently rubbing a thick iron rod against a wet grey whetstone, her lined face serene; a boy in a scholar's pale robe with hair in two buns leans in wide-eyed, hands on his knees, mouth open in surprise. Willow branches, mossy stones, sparkling water.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: Beside a clear mountain stream, an old woman in a faded blue headscarf and patched hemp robe sits on a flat rock, sleeves tied back, patiently rubbing a thick iron rod against a wet grey whetstone, her lined face serene; a boy in a scholar's pale robe with hair in two buns leans in wide-eyed, hands on his knees, mouth open in surprise. Willow branches, mossy stones, sparkling water. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 4. 诚实的砍柴娃

- 目标文件：`character-honest-boy.jpg`
- 年龄段：Preschool
- 场景：A tearful woodcutter boy in a coarse brown short jacket and straw sandals kneels at a misty lakeshore, wiping his eyes with his sleeve, an empty rope belt hanging where his old axe was; a white-bearded immortal in flowing silver-white robes rises from the water holding up a shining gold axe in one hand and a silver axe in the other, kind eyes crinkled, water sliding off his sleeves.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A tearful woodcutter boy in a coarse brown short jacket and straw sandals kneels at a misty lakeshore, wiping his eyes with his sleeve, an empty rope belt hanging where his old axe was; a white-bearded immortal in flowing silver-white robes rises from the water holding up a shining gold axe in one hand and a silver axe in the other, kind eyes crinkled, water sliding off his sleeves. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 5. 橘逾淮为枳

- 目标文件：`character-orange-beyond-the-river.jpg`
- 年龄段：Explorer
- 场景：A dark wooden palace hall lit by bronze lamps; a short, composed envoy in a deep-blue robe and black gauze cap holds up a plump orange in one hand and a knobbly bitter fruit in the other, eyebrows raised in calm confidence; around him armoured Chu officials in red and black lean forward with sceptical smirks, one whispering behind his sleeve, while the king on the dais narrows his eyes.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A dark wooden palace hall lit by bronze lamps; a short, composed envoy in a deep-blue robe and black gauze cap holds up a plump orange in one hand and a knobbly bitter fruit in the other, eyebrows raised in calm confidence; around him armoured Chu officials in red and black lean forward with sceptical smirks, one whispering behind his sleeve, while the king on the dais narrows his eyes. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 6. 苏武牧羊

- 目标文件：`character-su-wu-herds-sheep.jpg`
- 年龄段：Explorer
- 场景：Snow-covered northern grassland under a pale grey sky; a gaunt man in a worn sheepskin coat over a faded red hanfu stands straight against the wind, clutching a tasselled bamboo envoy staff to his chest, beard frosted white, jaw set and eyes steady; a small flock of sheep huddles behind a low rock, breath steaming in the cold air.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: Snow-covered northern grassland under a pale grey sky; a gaunt man in a worn sheepskin coat over a faded red hanfu stands straight against the wind, clutching a tasselled bamboo envoy staff to his chest, beard frosted white, jaw set and eyes steady; a small flock of sheep huddles behind a low rock, breath steaming in the cold air. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 7. 一诺千金

- 目标文件：`idiom-a-promise-worth-a-thousand-gold.jpg`
- 年龄段：Explorer
- 场景：In a bustling Han-era market street, a sturdy man in a dark green robe with rolled sleeves clasps forearms with a merchant in a blue apron, both laughing openly, a small crowd of townsfolk nodding and smiling around them; stalls of cloth, grain sacks and hanging bronze scales, wooden shop fronts with plain blank signboards, warm afternoon light and drifting dust.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: In a bustling Han-era market street, a sturdy man in a dark green robe with rolled sleeves clasps forearms with a merchant in a blue apron, both laughing openly, a small crowd of townsfolk nodding and smiling around them; stalls of cloth, grain sacks and hanging bronze scales, wooden shop fronts with plain blank signboards, warm afternoon light and drifting dust. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 8. 画龙点睛

- 目标文件：`idiom-add-eyes-to-the-dragon.jpg`
- 年龄段：Growing
- 场景：An artist in a loose ink-grey robe and topknot kneels on a low stool before a white plastered wall, brush lifted mid-stroke, eyes bright with mischief; four black ink dragons coil across the wall without pupils, while two finished dragons peel away from the plaster into swirls of cloud, pupils glinting, mouths open, trailing ink droplets. A stunned crowd in simple robes clutches at their hats in the doorway.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: An artist in a loose ink-grey robe and topknot kneels on a low stool before a white plastered wall, brush lifted mid-stroke, eyes bright with mischief; four black ink dragons coil across the wall without pupils, while two finished dragons peel away from the plaster into swirls of cloud, pupils glinting, mouths open, trailing ink droplets. A stunned crowd in simple robes clutches at their hats in the doorway. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 9. 一鸣惊人

- 目标文件：`idiom-amaze-the-world.jpg`
- 年龄段：Explorer
- 场景：In a bronze-and-red throne hall, a young king in a black robe with gold dragon patterns leans forward on his seat, one hand gripping the armrest, eyes suddenly sharp and commanding; a kneeling minister in grey holds up a small wooden bird carving, eyebrows raised in question. Behind the throne a painted screen shows a huge bird with wings spread wide, about to launch into the sky.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: In a bronze-and-red throne hall, a young king in a black robe with gold dragon patterns leans forward on his seat, one hand gripping the armrest, eyes suddenly sharp and commanding; a kneeling minister in grey holds up a small wooden bird carving, eyebrows raised in question. Behind the throne a painted screen shows a huge bird with wings spread wide, about to launch into the sky. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 10. 胸有成竹

- 目标文件：`idiom-bamboo-in-the-heart.jpg`
- 年龄段：Growing
- 场景：A calm painter in a grey scholar robe sits cross-legged in a bamboo-framed studio, brush poised above a still-blank silk scroll, eyes closed and a small confident smile on his lips; through the round lattice window a bamboo grove sways, its shadow falling faintly across the empty paper. Inkstone, brush rack, a cup of tea, soft green light.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A calm painter in a grey scholar robe sits cross-legged in a bamboo-framed studio, brush poised above a still-blank silk scroll, eyes closed and a small confident smile on his lips; through the round lattice window a bamboo grove sways, its shadow falling faintly across the empty paper. Inkstone, brush rack, a cup of tea, soft green light. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 11. 曲突徙薪

- 目标文件：`idiom-bend-the-chimney.jpg`
- 年龄段：Explorer
- 场景：A farmhouse courtyard kitchen: a guest in a blue robe points urgently at a straight brick chimney standing beside a tall stack of dry firewood, eyebrows up, mouth open in warning; the host in a brown apron waves a hand dismissively, half turned away, still holding a teapot. Clay jars, wooden buckets, a low stove, warm late afternoon sunlight and floating dust.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A farmhouse courtyard kitchen: a guest in a blue robe points urgently at a straight brick chimney standing beside a tall stack of dry firewood, eyebrows up, mouth open in warning; the host in a brown apron waves a hand dismissively, half turned away, still holding a teapot. Clay jars, wooden buckets, a low stove, warm late afternoon sunlight and floating dust. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 12. 围魏救赵

- 目标文件：`idiom-besiege-wei-to-save-zhao.jpg`
- 年龄段：Explorer
- 场景：Inside a command tent, a strategist in a dark blue robe and leather cap leans over a sand table map, one finger pressed on a small walled-city marker, expression keen and certain; two armoured generals in lamellar armour lean in, one stroking his beard as understanding dawns, the other frowning at the alternate route marked by wooden pegs. Bronze lamps, plain banners, tent poles.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: Inside a command tent, a strategist in a dark blue robe and leather cap leans over a sand table map, one finger pressed on a small walled-city marker, expression keen and certain; two armoured generals in lamellar armour lean in, one stroking his beard as understanding dawns, the other frowning at the alternate route marked by wooden pegs. Bronze lamps, plain banners, tent poles. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 13. 盲人摸象

- 目标文件：`idiom-blind-men-and-elephant.jpg`
- 年龄段：Preschool
- 场景：In a sunlit village square, four blind men in simple grey and brown hanfu, each wearing a cloth blindfold, gather around a gentle grey elephant and touch different parts: one hugs a leg, one flaps a big ear, one holds the trunk, one pats the flank. Their faces show puzzlement and argument, mouths open, free hands gesturing at one another, while the elephant stands patiently with a mild eye.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: In a sunlit village square, four blind men in simple grey and brown hanfu, each wearing a cloth blindfold, gather around a gentle grey elephant and touch different parts: one hugs a leg, one flaps a big ear, one holds the trunk, one pats the flank. Their faces show puzzlement and argument, mouths open, free hands gesturing at one another, while the elephant stands patiently with a mild eye. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 14. 手不释卷

- 目标文件：`idiom-book-always-in-hand.jpg`
- 年龄段：Explorer
- 场景：A night army camp: a general in partial lamellar armour sits on a wooden crate beside a small fire, a bamboo scroll unrolled on his knee, one hand still resting on his sword hilt; his helmet lies on the ground beside him, brows drawn in concentration, lips slightly moving as he reads. Tents and stacked spears behind, sparks rising, warm firelight on his face.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A night army camp: a general in partial lamellar armour sits on a wooden crate beside a small fire, a bamboo scroll unrolled on his knee, one hand still resting on his sword hilt; his helmet lies on the ground beside him, brows drawn in concentration, lips slightly moving as he reads. Tents and stacked spears behind, sparks rising, warm firelight on his face. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 15. 凿壁偷光

- 目标文件：`idiom-borrow-light-through-wall.jpg`
- 年龄段：Explorer
- 场景：A bare mud-brick room at night; a thin boy in a patched hemp robe kneels on the floor, a bamboo scroll open on a low wooden board, his face lit by a single warm beam of light coming through a small chiselled hole in the wall; his eyes are wide and eager, one hand raised to shield the glare, the rest of the room in soft blue shadow.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A bare mud-brick room at night; a thin boy in a patched hemp robe kneels on the floor, a bamboo scroll open on a low wooden board, his face lit by a single warm beam of light coming through a small chiselled hole in the wall; his eyes are wide and eager, one hand raised to shield the glare, the rest of the room in soft blue shadow. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 16. 杯弓蛇影

- 目标文件：`idiom-bow-shadow.jpg`
- 年龄段：Growing
- 场景：A Han-dynasty reception room: a nervous guest in a green robe recoils from a wine cup on a low table, both hands raised, eyes wide at the curved shadow inside the cup; his host in grey points calmly at a large decorated bow hanging on the wall behind, candlelight stretching the bow's reflection across the cup. Lacquered dishes, a bronze censer, warm lamp glow.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A Han-dynasty reception room: a nervous guest in a green robe recoils from a wine cup on a low table, both hands raised, eyes wide at the curved shadow inside the cup; his host in grey points calmly at a large decorated bow hanging on the wall behind, candlelight stretching the bow's reflection across the cup. Lacquered dishes, a bronze censer, warm lamp glow. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 17. 破釜沉舟

- 目标文件：`idiom-break-cauldrons.jpg`
- 年龄段：Explorer
- 场景：A riverbank at dawn: a commanding general in dark red armour with a billowing cape stands on a rock, arm raised in a decisive gesture; soldiers in lamellar armour smash bronze cauldrons with wooden mallets, while others watch the last boat gurgle beneath the water. Dust, spray, torn banners, determined faces lit by low golden sun.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A riverbank at dawn: a commanding general in dark red armour with a billowing cape stands on a rock, arm raised in a decisive gesture; soldiers in lamellar armour smash bronze cauldrons with wooden mallets, while others watch the last boat gurgle beneath the water. Dust, spray, torn banners, determined faces lit by low golden sun. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 18. 破镜重圆

- 目标文件：`idiom-broken-mirror-made-whole.jpg`
- 年龄段：Explorer
- 场景：An elderly couple in worn travelling robes stand in a blossoming courtyard, each holding half of a broken bronze mirror; they fit the halves together between them, the crack glowing faintly, both laughing with tears in their eyes, grey hair in simple buns, sleeves touching. Fallen petals, a low stone wall, soft spring light, tender reunion mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: An elderly couple in worn travelling robes stand in a blossoming courtyard, each holding half of a broken bronze mirror; they fit the halves together between them, the crack glowing faintly, both laughing with tears in their eyes, grey hair in simple buns, sleeves touching. Fallen petals, a low stone wall, soft spring light, tender reunion mood. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 19. 买椟还珠

- 目标文件：`idiom-buy-box-return-pearl.jpg`
- 年龄段：Growing
- 场景：A market stall under a cloth awning: a stunned merchant in a blue robe stares at a gleaming white pearl left alone on the counter, palms turned up in disbelief; walking away is a delighted customer in a yellow robe cradling a carved, gem-inlaid wooden box, chin high, eyes shining. Bolts of silk, a spice jar, a curious onlooker scratching his head.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A market stall under a cloth awning: a stunned merchant in a blue robe stares at a gleaming white pearl left alone on the counter, palms turned up in disbelief; walking away is a delighted customer in a yellow robe cradling a carved, gem-inlaid wooden box, chin high, eyes shining. Bolts of silk, a spice jar, a curious onlooker scratching his head. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 20. 郑人买履

- 目标文件：`idiom-buy-shoes-by-measure.jpg`
- 年龄段：Growing
- 场景：A crowded market lane at closing time; a flustered man in a brown robe stands at a shoe stall holding up a knotted straw measuring cord, gesturing helplessly at his own bare feet, mouth open in dismay; the shoe seller in an apron shrugs with crossed arms. Other vendors roll up mats behind them, an empty street beyond, comic frustration.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A crowded market lane at closing time; a flustered man in a brown robe stands at a shoe stall holding up a knotted straw measuring cord, gesturing helplessly at his own bare feet, mouth open in dismay; the shoe seller in an apron shrugs with crossed arms. Other vendors roll up mats behind them, an empty street beyond, comic frustration. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 21. 指鹿为马

- 目标文件：`idiom-call-a-deer-a-horse.jpg`
- 年龄段：Explorer
- 场景：A grand Qin court hall with black and red lacquered pillars; a powerful minister in a long black robe holds a lead rope attached to a calm spotted deer with small antlers, chin lifted, eyes challenging; rows of officials in tall caps hesitate, some lowering their heads, one old minister frowning with pressed lips and clenched fists inside his sleeves.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A grand Qin court hall with black and red lacquered pillars; a powerful minister in a long black robe holds a lead rope attached to a calm spotted deer with small antlers, chin lifted, eyes challenging; rows of officials in tall caps hesitate, some lowering their heads, one old minister frowning with pressed lips and clenched fists inside his sleeves. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 22. 曹冲称象

- 目标文件：`idiom-cao-chong-weighs-elephant.jpg`
- 年龄段：Growing
- 场景：A riverbank with a wooden boat moored close to shore; a small boy in a light blue robe crouches at the boat rail, carving a mark on the hull at the waterline with a knife, tongue between his teeth in concentration; a huge grey elephant waits on the bank with its keeper, and officials in tall caps watch with folded arms, one leaning over the water to see the mark.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A riverbank with a wooden boat moored close to shore; a small boy in a light blue robe crouches at the boat rail, carving a mark on the hull at the waterline with a knife, tongue between his teeth in concentration; a huge grey elephant waits on the bank with its keeper, and officials in tall caps watch with folded arms, one leaning over the water to see the mark. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 23. 掩耳盗铃

- 目标文件：`idiom-cover-ears-steal-bell.jpg`
- 年龄段：Growing
- 场景：A courtyard gate at dusk; a sneaky man in a dark short jacket tiptoes on a wooden stool, both hands clamped over his own ears, eyes squeezed shut, one arm stretching toward a bronze door bell hanging from the gate beam; a cat on the wall watches him with flat unimpressed eyes. Moon rising, long shadows, comic tension.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A courtyard gate at dusk; a sneaky man in a dark short jacket tiptoes on a wooden stool, both hands clamped over his own ears, eyes squeezed shut, one arm stretching toward a bronze door bell hanging from the gate beam; a cat on the wall watches him with flat unimpressed eyes. Moon rising, long shadows, comic tension. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 24. 危如累卵

- 目标文件：`idiom-dangerous-as-stacked-eggs.jpg`
- 年龄段：Explorer
- 场景：A palace side hall; an earnest minister in a grey robe kneels and carefully places one more egg on top of a tall, wobbling stack of eggs on a lacquered tray, holding his breath, brows knitted; the king in a red and gold robe leans out from his seat, eyebrows high, both hands braced on the armrests. Tension, soft indoor light, single point of balance.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A palace side hall; an earnest minister in a grey robe kneels and carefully places one more egg on top of a tall, wobbling stack of eggs on a lacquered tray, holding his breath, brows knitted; the king in a red and gold robe leans out from his seat, eyebrows high, both hands braced on the armrests. Tension, soft indoor light, single point of balance. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 25. 东施效颦

- 目标文件：`idiom-dongshi-frowns.jpg`
- 年龄段：Growing
- 场景：A village lane beside a stream; a plain-featured woman in a garish pink robe and crooked hairpin walks with an exaggerated frown and a hand pressed to her chest, chin jutting; three villagers hurry the other way, one hiding a smile behind a sleeve, a child peeking out from behind a laundry basket. Willow tree, ducks on the water, gentle comic tone.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A village lane beside a stream; a plain-featured woman in a garish pink robe and crooked hairpin walks with an exaggerated frown and a hand pressed to her chest, chin jutting; three villagers hurry the other way, one hiding a smile behind a sleeve, a child peeking out from behind a laundry basket. Willow tree, ducks on the water, gentle comic tone. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 26. 黔驴技穷

- 目标文件：`idiom-donkey-of-guizhou.jpg`
- 年龄段：Explorer
- 场景：A misty Guizhou mountain path with tall grass; a small grey donkey stands braced on stiff legs, mouth wide open mid-bray, one hind hoof lifted; a golden-orange tiger peeks out from behind a thick tree trunk, ears flat, eyes wide with startled curiosity, hind legs ready to bolt. Dappled green light, ferns, a winding trail.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A misty Guizhou mountain path with tall grass; a small grey donkey stands braced on stiff legs, mouth wide open mid-bray, one hind hoof lifted; a golden-orange tiger peeks out from behind a thick tree trunk, ears flat, eyes wide with startled curiosity, hind legs ready to bolt. Dappled green light, ferns, a winding trail. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 27. 画蛇添足

- 目标文件：`idiom-draw-snake-add-feet.jpg`
- 年龄段：Growing
- 场景：Under a willow by a stone table, a smug painter in a green robe kneels and adds four little legs to a completed ink snake on a paper scroll, brush tip delicate, tongue at the corner of his mouth; beside him a second man in brown springs up holding a wine pot aloft, laughing and pointing at the extra feet. Ink stone, spilled wine, scattered brushes.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: Under a willow by a stone table, a smug painter in a green robe kneels and adds four little legs to a completed ink snake on a paper scroll, brush tip delicate, tongue at the corner of his mouth; beside him a second man in brown springs up holding a wine pot aloft, laughing and pointing at the extra feet. Ink stone, spilled wine, scattered brushes. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 28. 草木皆兵

- 目标文件：`idiom-every-grass-is-a-soldier.jpg`
- 年龄段：Explorer
- 场景：A hillside at night after a retreat; exhausted soldiers in dusty armour crouch behind rocks, one pointing with a shaking hand at wind-shaken bushes that look like crouching figures in the moonlight; fear on their faces, eyes wide, breath fogging. Broken banners, abandoned spears, low mist between the trees.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A hillside at night after a retreat; exhausted soldiers in dusty armour crouch behind rocks, one pointing with a shaking hand at wind-shaken bushes that look like crouching figures in the moonlight; fear on their faces, eyes wide, breath fogging. Broken banners, abandoned spears, low mist between the trees. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 29. 百发百中

- 目标文件：`idiom-every-shot-hits.jpg`
- 年龄段：Explorer
- 场景：An archery range at golden hour; a lean archer in a fitted blue training robe with a leather arm guard draws a bow, the string against his cheek, one eye narrowed in total focus; a row of straw targets behind him bristles with arrows clustered dead centre. A crowd of onlookers murmurs behind a rope, one child on tiptoe.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: An archery range at golden hour; a lean archer in a fitted blue training robe with a leather arm guard draws a bow, the string against his cheek, one eye narrowed in total focus; a row of straw targets behind him bristles with arrows clustered dead centre. A crowd of onlookers murmurs behind a rope, one child on tiptoe. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 30. 名落孙山

- 目标文件：`idiom-fail-the-exam.jpg`
- 年龄段：Explorer
- 场景：A village lane before a thatched gate; a young scholar in a wrinkled blue robe scratches his head with an awkward, embarrassed grin, one hand raised as if reciting a line; an eager neighbour in a straw hat leans in, hands on knees, mouth open in hope. A blank notice board stands in the far background, chickens pecking, soft afternoon light.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A village lane before a thatched gate; a young scholar in a wrinkled blue robe scratches his head with an awkward, embarrassed grin, one hand raised as if reciting a line; an eager neighbour in a straw hat leans in, hands on knees, mouth open in hope. A blank notice board stands in the far background, chickens pecking, soft afternoon light. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 31. 囊萤映雪

- 目标文件：`idiom-firefly-and-snow-light.jpg`
- 年龄段：Explorer
- 场景：A poor cottage at night; a boy in a patched grey robe sits at a rough wooden desk holding up a small white gauze bag full of glowing fireflies, his face lit by pale green-gold light, eyes wide with delight; through the open window behind him moonlit snow glows blue-white. Scrolls, an ink slab, a thin blanket.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A poor cottage at night; a boy in a patched grey robe sits at a rough wooden desk holding up a small white gauze bag full of glowing fireflies, his face lit by pale green-gold light, eyes wide with delight; through the open window behind him moonlit snow glows blue-white. Scrolls, an ink slab, a thin blanket. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 32. 初出茅庐

- 目标文件：`idiom-first-leave-the-cottage.jpg`
- 年龄段：Explorer
- 场景：A hillside command post framed by pines; a young strategist in a white robe and black headwrap holds a feather fan across his chest, pointing calmly down into a valley where tiny armoured soldiers move in formation; two generals in armour stand behind him, mouths open in admiration. Morning mist, fluttering banners, layered mountains.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A hillside command post framed by pines; a young strategist in a white robe and black headwrap holds a feather fan across his chest, pointing calmly down into a valley where tiny armoured soldiers move in formation; two generals in armour stand behind him, mouths open in admiration. Morning mist, fluttering banners, layered mountains. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 33. 愚公移山

- 目标文件：`idiom-foolish-old-man-moves-mountains.jpg`
- 年龄段：Explorer
- 场景：At the foot of two enormous green mountains, a white-bearded old man in a short work jacket and straw sandals carries a bamboo basket of earth on a shoulder pole, back bent but eyes bright and determined; behind him sons and grandsons dig with hoes and a small boy carries a tiny basket. A smirking neighbour watches from a rock, arms folded.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: At the foot of two enormous green mountains, a white-bearded old man in a short work jacket and straw sandals carries a bamboo basket of earth on a shoulder pole, back bent but eyes bright and determined; behind him sons and grandsons dig with hoes and a small boy carries a tiny basket. A smirking neighbour watches from a rock, arms folded. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 34. 狐假虎威

- 目标文件：`idiom-fox-borrows-tigers-fear.jpg`
- 年龄段：Preschool
- 场景：A forest path; a smug little orange fox struts ahead with tail high and chin lifted, glancing back over its shoulder with a sly grin; a huge tiger pads behind it, brow furrowed in confusion; rabbits, deer and monkeys scatter into the bushes on both sides, eyes wide. Sunbeams through leaves, ferns, fallen logs.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A forest path; a smug little orange fox struts ahead with tail high and chin lifted, glancing back over its shoulder with a sly grin; a huge tiger pads behind it, brow furrowed in confusion; rabbits, deer and monkeys scatter into the bushes on both sides, eyes wide. Sunbeams through leaves, ferns, fallen logs. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 35. 因噎废食

- 目标文件：`idiom-give-up-eating-for-fear-of-choking.jpg`
- 年龄段：Growing
- 场景：A wooden dining table: a thin man in a grey robe pushes a bowl of rice away with both hands, leaning back, face pale, lips pressed and eyes wary; a friend in brown leans across the table, chopsticks raised mid-argument, expression exasperated but kind. Steam curling from a soup bowl, a teapot, two empty cups.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A wooden dining table: a thin man in a grey robe pushes a bowl of rice away with both hands, leaning back, face pale, lips pressed and eyes wary; a friend in brown leans across the table, chopsticks raised mid-argument, expression exasperated but kind. Steam curling from a soup bowl, a teapot, two empty cups. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 36. 半途而废

- 目标文件：`idiom-give-up-halfway.jpg`
- 年龄段：Growing
- 场景：A cottage interior with a wooden loom; a woman in a blue cotton robe and headscarf holds large shears, having just cut the half-woven cloth, loose threads hanging, her expression firm and sad; in the doorway a travel-dusted young man in a scholar robe drops his bundle, head lowered in shame. Sunlight through paper window, dust motes.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A cottage interior with a wooden loom; a woman in a blue cotton robe and headscarf holds large shears, having just cut the half-woven cloth, loose threads hanging, her expression firm and sad; in the doorway a travel-dusted young man in a scholar robe drops his bundle, head lowered in shame. Sunlight through paper window, dust motes. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 37. 铁杵磨针

- 目标文件：`idiom-grind-iron-into-needle.jpg`
- 年龄段：Growing
- 场景：Close framing: an old woman's weathered hands, sleeves rolled, grind a thick iron rod against a wet grey stone, water droplets and iron filings glinting; her lined face is serene with a small smile; a boy's round face peeks in from the left edge, eyes huge with wonder. Stream, bamboo leaves, soft green light.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: Close framing: an old woman's weathered hands, sleeves rolled, grind a thick iron rod against a wet grey stone, water droplets and iron filings glinting; her lined face is serene with a small smile; a boy's round face peeks in from the left edge, eyes huge with wonder. Stream, bamboo leaves, soft green light. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 38. 高山流水

- 目标文件：`idiom-high-mountains-flowing-water.jpg`
- 年龄段：Explorer
- 场景：A riverside pavilion among pines; a musician in a pale grey robe sits before a seven-stringed qin on a stone table, fingers plucking, eyes half closed, expression transported; across from him a woodcutter in a plain brown robe sits on a rock listening with his whole face, one hand lifted as if following the melody. Waterfall, mist, drifting leaves.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A riverside pavilion among pines; a musician in a pale grey robe sits before a seven-stringed qin on a stone table, fingers plucking, eyes half closed, expression transported; across from him a woodcutter in a plain brown robe sits on a rock listening with his whole face, one hand lifted as if following the melody. Waterfall, mist, drifting leaves. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 39. 孔融让梨

- 目标文件：`idiom-kong-rong-shares-pears.jpg`
- 年龄段：Preschool
- 场景：A family hall with a low wooden table; four children in bright hanfu cluster around a plate of yellow pears; the smallest boy, hair in two buns, holds a tiny pear with both hands and a pleased smile, while older boys hold large pears and grin; the father in a dark robe watches with a hand on his beard, delighted. Warm lamplight, wooden pillars.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A family hall with a low wooden table; four children in bright hanfu cluster around a plate of yellow pears; the smallest boy, hair in two buns, holds a tiny pear with both hands and a pleased smile, while older boys hold large pears and grin; the father in a dark robe watches with a hand on his beard, delighted. Warm lamplight, wooden pillars. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 40. 一叶障目

- 目标文件：`idiom-leaf-blocks-view.jpg`
- 年龄段：Growing
- 场景：A market street; a foolish scholar in a wrinkled robe holds a green leaf over one eye and reaches with the other hand for a bolt of cloth on a stall, tongue out in concentration, convinced he is invisible; the stallholder grabs his wrist, eyebrows raised, and bystanders turn with amused faces. Hanging cloth, baskets of fruit, bright daylight.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A market street; a foolish scholar in a wrinkled robe holds a green leaf over one eye and reaches with the other hand for a bolt of cloth on a stall, tongue out in concentration, convinced he is invisible; the stallholder grabs his wrist, eyebrows raised, and bystanders turn with amused faces. Hanging cloth, baskets of fruit, bright daylight. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 41. 举一反三

- 目标文件：`idiom-learn-one-know-three.jpg`
- 年龄段：Growing
- 场景：A simple classroom with bamboo mats and a low desk; an old teacher in a dark grey robe with a long beard holds up one corner of a wooden square tile, eyebrows raised in a question; a young student in pale blue sits forward, hand shooting up, face bright with understanding as he sketches three more corners in the air with his finger.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A simple classroom with bamboo mats and a low desk; an old teacher in a dark grey robe with a long beard holds up one corner of a wooden square tile, eyebrows raised in a question; a young student in pale blue sits forward, hand shooting up, face bright with understanding as he sketches three more corners in the air with his finger. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 42. 邯郸学步

- 目标文件：`idiom-learn-to-walk-in-handan.jpg`
- 年龄段：Growing
- 场景：A Handan street; elegant townsfolk in flowing robes walk gracefully past, chins high, sleeves swaying; in the foreground a mortified young traveller in a dusty robe crawls on hands and knees, one sandal lost, face red, looking up at the passers-by while a small dog watches curiously. Comic, gentle, warm daylight.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A Handan street; elegant townsfolk in flowing robes walk gracefully past, chins high, sleeves swaying; in the foreground a mortified young traveller in a dusty robe crawls on hands and knees, one sandal lost, face red, looking up at the passers-by while a small dog watches curiously. Comic, gentle, warm daylight. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 43. 唇亡齿寒

- 目标文件：`idiom-lips-and-teeth.jpg`
- 年龄段：Explorer
- 场景：A court hall; a minister in a blue robe taps his lips then his teeth with two fingers, expression urgent, eyebrows drawn together; on a lacquered table before the seated king lie a jade disc and a small bronze horse figurine. The king in red and gold rests his chin on one hand, unimpressed, while a chancellor behind him frowns.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A court hall; a minister in a blue robe taps his lips then his teeth with two fingers, expression urgent, eyebrows drawn together; on a lacquered table before the seated king lie a jade disc and a small bronze horse figurine. The king in red and gold rests his chin on one hand, unimpressed, while a chancellor behind him frowns. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 44. 叶公好龙

- 目标文件：`idiom-lord-ye-loves-dragons.jpg`
- 年龄段：Growing
- 场景：A richly decorated study full of dragon motifs: carved dragon pillars, dragon-patterned screens, a dragon-embroidered robe on a stand; a nobleman in green and gold robes scrambles backwards over a fallen stool, face pale, mouth open in a scream; a real blue-green dragon's enormous head fills the round window, one gentle eye blinking, whiskers curling in the breeze.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A richly decorated study full of dragon motifs: carved dragon pillars, dragon-patterned screens, a dragon-embroidered robe on a stand; a nobleman in green and gold robes scrambles backwards over a fallen stool, face pale, mouth open in a scream; a real blue-green dragon's enormous head fills the round window, one gentle eye blinking, whiskers curling in the breeze. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 45. 螳臂当车

- 目标文件：`idiom-mantis-stops-chariot.jpg`
- 年龄段：Explorer
- 场景：Low viewpoint on a dirt road: a small green mantis stands on tiptoe in the middle of the track, forelegs raised high in a defiant pose, tiny face fierce; a huge wooden chariot wheel with bronze spokes looms over it, dust swirling, horse legs blurred with motion behind. Dramatic scale contrast, warm dusty light.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: Low viewpoint on a dirt road: a small green mantis stands on tiptoe in the middle of the track, forelegs raised high in a defiant pose, tiny face fierce; a huge wooden chariot wheel with bronze spokes looms over it, dust swirling, horse legs blurred with motion behind. Dramatic scale contrast, warm dusty light. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 46. 刻舟求剑

- 目标文件：`idiom-marking-the-boat.jpg`
- 年龄段：Growing
- 场景：On a wooden riverboat mid-stream; a calm man in a blue robe kneels at the gunwale, knife in hand, carefully carving a notch beside a coil of rope; behind him the water ripples where a sword just sank, a few bubbles rising. The boatman in a straw cape looks back over his shoulder with a puzzled frown. River hills, soft daylight.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: On a wooden riverboat mid-stream; a calm man in a blue robe kneels at the gunwale, knife in hand, carefully carving a notch beside a coil of rope; behind him the water ripples where a sword just sank, a few bubbles rising. The boatman in a straw cape looks back over his shoulder with a puzzled frown. River hills, soft daylight. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 47. 孟母三迁

- 目标文件：`idiom-mencius-mother-moves-thrice.jpg`
- 年龄段：Growing
- 场景：A narrow lane: a resolute mother in a plain blue robe and cloth headscarf carries a cloth bundle on her back and holds a small boy's hand, walking toward a schoolhouse with a tiled roof where child silhouettes recite at the window; behind them a market stall and a graveyard slope are visible. She looks determined, the boy curious and wide-eyed.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A narrow lane: a resolute mother in a plain blue robe and cloth headscarf carries a cloth bundle on her back and holds a small boy's hand, walking toward a schoolhouse with a tiled roof where child silhouettes recite at the window; behind them a market stall and a graveyard slope are visible. She looks determined, the boy curious and wide-eyed. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 48. 亡羊补牢

- 目标文件：`idiom-mend-the-fold.jpg`
- 年龄段：Preschool
- 场景：A hillside sheep pen in the morning; a shepherd in a brown jacket kneels hammering a wooden plank over a broken gap in the fence, sleeves rolled up, jaw set with resolve; sheep crowd safely inside, bleating; wolf paw prints dot the mud outside, and one sheep looks at him with a grateful tilt of its head.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A hillside sheep pen in the morning; a shepherd in a brown jacket kneels hammering a wooden plank over a broken gap in the fence, sleeves rolled up, jaw set with resolve; sheep crowd safely inside, bleating; wolf paw prints dot the mud outside, and one sheep looks at him with a grateful tilt of its head. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 49. 负荆请罪

- 目标文件：`idiom-offer-apology-with-thorns.jpg`
- 年龄段：Explorer
- 场景：The courtyard gate of a grand house; a burly general, armour removed, bare back criss-crossed by a bundle of thorn branches tied on, kneels with head bowed, jaw tight and eyes wet; a slim minister in a white robe hurries down the steps, both hands outstretched to raise him, expression warm and forgiving. Stone lions, tiled eaves, morning light.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: The courtyard gate of a grand house; a burly general, armour removed, bare back criss-crossed by a bundle of thorn branches tied on, kneels with head bowed, jaw tight and eyes wet; a slim minister in a white robe hurries down the steps, both hands outstretched to raise him, expression warm and forgiving. Stone lions, tiled eaves, morning light. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 50. 塞翁失马

- 目标文件：`idiom-old-man-loses-horse.jpg`
- 年龄段：Explorer
- 场景：A frontier stable yard at dusk: an old man in a grey robe and fur-trimmed hat strokes the neck of a newly arrived wild horse among several others, calm half-smile on his weathered face; neighbours crowd at the gate with congratulatory gestures, one holding up a wine jar; a doubtful neighbour in the back scratches his chin. Warm orange light, wooden fences.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A frontier stable yard at dusk: an old man in a grey robe and fur-trimmed hat strokes the neck of a newly arrived wild horse among several others, calm half-smile on his weathered face; neighbours crowd at the gate with congratulatory gestures, one holding up a wine jar; a doubtful neighbour in the back scratches his chin. Warm orange light, wooden fences. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 51. 一字千金

- 目标文件：`idiom-one-word-worth-a-thousand-gold.jpg`
- 年龄段：Explorer
- 场景：A city gate tower with a plain wooden frame; a thick bundle of bamboo scrolls hangs from the gate, and beneath it a small chest overflowing with gold pieces sits on a table; curious townsfolk in varied robes crowd around, one scholar leaning close to the scrolls and scratching his chin, others whispering, a guard watching with folded arms.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A city gate tower with a plain wooden frame; a thick bundle of bamboo scrolls hangs from the gate, and beneath it a small chest overflowing with gold pieces sits on a table; curious townsfolk in varied robes crowd around, one scholar leaning close to the scrolls and scratching his chin, others whispering, a guard watching with folded arms. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 52. 入木三分

- 目标文件：`idiom-penetrate-three-tenths.jpg`
- 年龄段：Explorer
- 场景：A carpenter's workshop; a craftsman in a sleeveless work vest peels a thin shaving from a wooden board with a plane, revealing black ink brush strokes sunk deep into the grain; his eyes are wide with astonishment, mouth open; beside him a scholar in a grey robe leans in, equally amazed. Wood shavings curl on the floor, sawdust in the light.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A carpenter's workshop; a craftsman in a sleeveless work vest peels a thin shaving from a wooden board with a plane, revealing black ink brush strokes sunk deep into the grain; his eyes are wide with astonishment, mouth open; beside him a scholar in a grey robe leans in, equally amazed. Wood shavings curl on the floor, sawdust in the light. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 53. 对牛弹琴

- 目标文件：`idiom-play-lute-to-cow.jpg`
- 年龄段：Growing
- 场景：A grassy riverbank; a musician in a light grey robe sits on a flat rock with a qin across his knees, playing with great feeling, eyes closed, head tilted; two paces away a brown cow chews grass, one ear flicked, eyes utterly indifferent, tail swishing. Willow branches and slow water behind, comic contrast, warm afternoon.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A grassy riverbank; a musician in a light grey robe sits on a flat rock with a qin across his knees, playing with great feeling, eyes closed, head tilted; two paces away a brown cow chews grass, one ear flicked, eyes utterly indifferent, tail swishing. Willow branches and slow water behind, comic contrast, warm afternoon. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 54. 请君入瓮

- 目标文件：`idiom-please-enter-the-vat.jpg`
- 年龄段：Explorer
- 场景：A dim official chamber; a large bronze vat sits over glowing charcoal, heat shimmer rising; a smooth-faced official in a black robe gestures toward it with an open palm and a thin smile; opposite him a stout official in red has gone pale, sweat on his brow, hands raised in protest, mouth open. Cold blue light from a high window, hot orange from the coals.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A dim official chamber; a large bronze vat sits over glowing charcoal, heat shimmer rising; a smooth-faced official in a black robe gestures toward it with an open palm and a thin smile; opposite him a stout official in red has gone pale, sweat on his brow, hands raised in protest, mouth open. Cold blue light from a high window, hot orange from the coals. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 55. 望梅止渴

- 目标文件：`idiom-plum-quenches-thirst.jpg`
- 年龄段：Growing
- 场景：A dusty summer road; a general in red armour on horseback points with his whip toward a distant grove, expression confident and sly; behind him exhausted soldiers in light armour trudge with cracked lips, but several have straightened up, eyes brightening, one licking his lips. Heat haze, wilted grass, cicada-filled air, strong sunlight.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A dusty summer road; a general in red armour on horseback points with his whip toward a distant grove, expression confident and sly; behind him exhausted soldiers in light armour trudge with cracked lips, but several have straightened up, eyes brightening, one licking his lips. Heat haze, wilted grass, cicada-filled air, strong sunlight. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 56. 熟能生巧

- 目标文件：`idiom-practice-makes-perfect.jpg`
- 年龄段：Growing
- 场景：A market courtyard; an old oil seller in a patched apron holds a long-handled ladle high and pours a thin steady stream of golden oil through the square hole of a bronze coin balanced on a gourd's mouth; his face is calm, eyes focused; a proud archer in a blue robe watches, eyebrows climbing in disbelief, hands on hips.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A market courtyard; an old oil seller in a patched apron holds a long-handled ladle high and pours a thin steady stream of golden oil through the square hole of a bronze coin balanced on a gourd's mouth; his face is calm, eyes focused; a proud archer in a blue robe watches, eyebrows climbing in disbelief, hands on hips. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 57. 滥竽充数

- 目标文件：`idiom-pretend-to-play-yu.jpg`
- 年龄段：Growing
- 场景：A palace music hall; a long row of musicians in matching blue robes play the yu, cheeks puffed; one man in the middle holds his instrument slightly wrong and puffs his cheeks theatrically with eyes darting sideways to copy his neighbours; the seated king in gold taps his foot, unaware. Lacquered screens, bronze bells, warm lamp light.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A palace music hall; a long row of musicians in matching blue robes play the yu, cheeks puffed; one man in the middle holds his instrument slightly wrong and puffs his cheeks theatrically with eyes darting sideways to copy his neighbours; the seated king in gold taps his foot, unaware. Lacquered screens, bronze bells, warm lamp light. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 58. 揠苗助长

- 目标文件：`idiom-pulling-up-seedlings.jpg`
- 年龄段：Growing
- 场景：A green rice field; a farmer in a straw hat and rolled-up trousers kneels between rows, pulling a young seedling upward with both hands, face gleaming with sweat and self-satisfaction; behind him rows of seedlings stand unnaturally tall and tilted, soil disturbed. A boy at the field edge stares with open mouth, a buffalo swishing its tail nearby.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A green rice field; a farmer in a straw hat and rolled-up trousers kneels between rows, pulling a young seedling upward with both hands, face gleaming with sweat and self-satisfaction; behind him rows of seedlings stand unnaturally tall and tilted, soil disturbed. A boy at the field edge stares with open mouth, a buffalo swishing its tail nearby. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 59. 毛遂自荐

- 目标文件：`idiom-recommend-oneself.jpg`
- 年龄段：Explorer
- 场景：A council hall with bronze candle stands; a plain-robed retainer in brown steps out from a row of seated guests, one hand on his chest, chin high, eyes determined; he holds up a cloth bag with the sharp tip of an awl poking through the fabric; the nobleman in a purple robe turns with a sceptical raised eyebrow, fingers drumming the table.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A council hall with bronze candle stands; a plain-robed retainer in brown steps out from a row of seated guests, one hand on his chest, chin high, eyes determined; he holds up a cloth bag with the sharp tip of an awl poking through the fabric; the nobleman in a purple robe turns with a sceptical raised eyebrow, fingers drumming the table. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 60. 完璧归赵

- 目标文件：`idiom-return-the-jade-intact.jpg`
- 年龄段：Explorer
- 场景：A Qin palace hall; a resolute envoy in a blue robe stands with his back almost against a carved pillar, holding a round white jade disc high above his head with both hands, eyes blazing, jaw set; the king in black and gold half rises from his throne, one hand outstretched, face alarmed; courtiers freeze mid-gesture. Dramatic side light.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A Qin palace hall; a resolute envoy in a blue robe stands with his back almost against a carved pillar, holding a round white jade disc high above his head with both hands, eyes blazing, jaw set; the king in black and gold half rises from his throne, one hand outstretched, face alarmed; courtiers freeze mid-gesture. Dramatic side light. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 61. 温故知新

- 目标文件：`idiom-review-the-old-learn-the-new.jpg`
- 年龄段：Growing
- 场景：A bright child's room in an old Chinese house; a small girl in a pink cross-collared robe sits at a low desk with an open picture scroll, fingertip tracing an unnoticed corner detail, mouth forming a round O of surprise, eyes sparkling; a stack of already-read scrolls tied with ribbon beside her. Paper window, warm sunlight, wooden floor.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A bright child's room in an old Chinese house; a small girl in a pink cross-collared robe sits at a low desk with an open picture scroll, fingertip tracing an unnoticed corner detail, mouth forming a round O of surprise, eyes sparkling; a stack of already-read scrolls tied with ribbon beside her. Paper window, warm sunlight, wooden floor. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 62. 名正言顺

- 目标文件：`idiom-right-name-right-words.jpg`
- 年龄段：Explorer
- 场景：A village schoolroom; a teacher in a dark robe holds up a wooden tally stick and points at a simple chart of jobs, expression clear and firm; four children in blue and green robes stand in a neat line, each holding a small tool, a broom, a watering can and an inkstone, nodding earnestly. Lattice window, bamboo desks.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A village schoolroom; a teacher in a dark robe holds up a wooden tally stick and points at a simple chart of jobs, expression clear and firm; four children in blue and green robes stand in a neat line, each holding a small tool, a broom, a watering can and an inkstone, nodding earnestly. Lattice window, bamboo desks. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 63. 闻鸡起舞

- 目标文件：`idiom-rise-at-cockcrow.jpg`
- 年龄段：Explorer
- 场景：A courtyard at cold blue dawn; a rooster on the fence crows with its neck stretched; two young men in white training robes practise swords on the stone paving, one mid-swing with sleeves flying, faces flushed and determined, breath visible in the cold air; a lantern still burning low by the door, frost on the tiles.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A courtyard at cold blue dawn; a rooster on the fence crows with its neck stretched; two young men in white training robes practise swords on the stone paving, one mid-swing with sleeves flying, faces flushed and determined, breath visible in the cold air; a lantern still burning low by the door, frost on the tiles. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 64. 自相矛盾

- 目标文件：`idiom-self-contradiction.jpg`
- 年龄段：Growing
- 场景：A busy market stall hung with spears and round shields; a boastful vendor in a red vest holds up a shield in one hand and a spear in the other, chest puffed, mouth open mid-boast; a bystander in a grey robe raises one finger with a sly questioning smile, and the crowd leans in grinning. Dust, awning, stacked goods.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A busy market stall hung with spears and round shields; a boastful vendor in a red vest holds up a shield in one hand and a spear in the other, chest puffed, mouth open mid-boast; a bystander in a grey robe raises one finger with a sly questioning smile, and the crowd leans in grinning. Dust, awning, stacked goods. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 65. 班门弄斧

- 目标文件：`idiom-show-off-axe.jpg`
- 年龄段：Explorer
- 场景：In front of a fine wooden gate with carved eaves; a cocky young man in a short jacket swings a large axe in a flashy arc, eyes on the onlookers; an older master carpenter in an ink-blue apron leans against the gatepost, arms folded, one eyebrow raised, a faint amused smile. Wood shavings and a planing bench nearby, warm daylight.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: In front of a fine wooden gate with carved eaves; a cocky young man in a short jacket swings a large axe in a flashy arc, eyes on the onlookers; an older master carpenter in an ink-blue apron leans against the gatepost, arms folded, one eyebrow raised, a faint amused smile. Wood shavings and a planing bench nearby, warm daylight. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 66. 望洋兴叹

- 目标文件：`idiom-sigh-at-the-ocean.jpg`
- 年龄段：Explorer
- 场景：A shoreline at autumn flood: a river god with a human face and a water-serpent body stands on the wet sand, shoulders slumped, head bowed, eyes wide with awe; before him the sea stretches to a flat horizon, huge and pale, waves curling. His ornate water crown droops, his proud posture has collapsed, vast empty sky.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A shoreline at autumn flood: a river god with a human face and a water-serpent body stands on the wet sand, shoulders slumped, head bowed, eyes wide with awe; before him the sea stretches to a flat horizon, huge and pale, waves curling. His ornate water crown droops, his proud posture has collapsed, vast empty sky. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 67. 司马光砸缸

- 目标文件：`idiom-sima-guang-breaks-the-vat.jpg`
- 年龄段：Preschool
- 场景：A courtyard with a huge glazed water vat; a calm boy in a blue robe swings a large rock down with both arms, face set; the vat's side cracks and water bursts out in an arc; other children in bright robes scatter, one crying, one running for the gate, a small shoe floating in the spreading puddle. Dynamic splash, bright daylight.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A courtyard with a huge glazed water vat; a calm boy in a blue robe swings a large rock down with both arms, face set; the vat's side cracks and water bursts out in an arc; other children in bright robes scatter, one crying, one running for the gate, a small shoe floating in the spreading puddle. Dynamic splash, bright daylight. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 68. 卧薪尝胆

- 目标文件：`idiom-sleep-on-brushwood.jpg`
- 年龄段：Explorer
- 场景：A Spartan chamber: a lean king in a plain dark robe sits on a bed of dry brushwood, a rope of bitter gall hanging above his head; he dips a finger, tastes it, and his face screws up in distaste while his eyes stay hard and steady; a bronze sword and a stack of bamboo scrolls on the floor. Dim austere light, single window.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A Spartan chamber: a lean king in a plain dark robe sits on a bed of dry brushwood, a rope of bitter gall hanging above his head; he dips a finger, tastes it, and his face screws up in distaste while his eyes stay hard and steady; a bronze sword and a stack of bamboo scrolls on the floor. Dim austere light, single window. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 69. 鹬蚌相争

- 目标文件：`idiom-snipe-and-clam.jpg`
- 年龄段：Growing
- 场景：A riverbank at low tide; a large clam has clamped its shell shut on a snipe's long beak; the bird strains backwards with wings flapping, eyes indignant; the clam glares from between its shells; in the background a fisherman in a straw cape quietly sets down his basket and creeps closer, grinning. Wet sand, reeds, morning haze.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A riverbank at low tide; a large clam has clamped its shell shut on a snipe's long beak; the bird strains backwards with wings flapping, eyes indignant; the clam glares from between its shells; in the background a fisherman in a straw cape quietly sets down his basket and creeps closer, grinning. Wet sand, reeds, morning haze. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 70. 乐不思蜀

- 目标文件：`idiom-so-happy-forget-home.jpg`
- 年龄段：Explorer
- 场景：A Wei-style banquet hall; a plump cheerful former ruler in a soft yellow robe sits on cushions, clapping and laughing at dancers, a wine cup in his other hand, eyes crinkled with genuine delight; opposite him a Wei official leans in with a probing smile, chin on hand; musicians, lanterns, swirling silk sleeves.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A Wei-style banquet hall; a plump cheerful former ruler in a soft yellow robe sits on cushions, clapping and laughing at dancers, a wine cup in his other hand, eyes crinkled with genuine delight; opposite him a Wei official leans in with a probing smile, chin on hand; musicians, lanterns, swirling silk sleeves. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 71. 四面楚歌

- 目标文件：`idiom-songs-of-chu-on-all-sides.jpg`
- 年龄段：Explorer
- 场景：Inside a war tent at night: a battle-worn general in dark armour sits on a folding stool, head propped in one hand, eyes hollow; around him soldiers kneel with faces turned toward the tent flap, tears on their cheeks, listening; faint blue moonlight outside suggests distant singing, a single lamp gutters. Heavy, quiet sorrow.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: Inside a war tent at night: a battle-worn general in dark armour sits on a folding stool, head propped in one hand, eyes hollow; around him soldiers kneel with faces turned toward the tent flap, tears on their cheeks, listening; faint blue moonlight outside suggests distant singing, a single lamp gutters. Heavy, quiet sorrow. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 72. 南辕北辙

- 目标文件：`idiom-south-north.jpg`
- 年龄段：Growing
- 场景：A crossroads on a country road; a confident traveller in a fine blue robe sits in a well-stocked ox cart facing away from a blank wooden signpost, gesturing forward with his whip; a passing farmer in a straw hat points firmly in the opposite direction, eyebrows raised, mouth open in warning. Comic confidence, fields and distant hills.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A crossroads on a country road; a confident traveller in a fine blue robe sits in a well-stocked ox cart facing away from a blank wooden signpost, gesturing forward with his whip; a passing farmer in a straw hat points firmly in the opposite direction, eyebrows raised, mouth open in warning. Comic confidence, fields and distant hills. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 73. 程门立雪

- 目标文件：`idiom-standing-in-the-snow.jpg`
- 年龄段：Explorer
- 场景：A scholar's gate in heavy snow: a young man in a thin blue robe stands perfectly still on the stone step, hands folded inside his sleeves, snow piled on his shoulders, hat and eyebrows, breath steaming, expression calm and respectful; behind him the courtyard is white, his footprints slowly filling in. Grey sky, closed wooden door, warm light in a window.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A scholar's gate in heavy snow: a young man in a thin blue robe stands perfectly still on the stone step, hands folded inside his sleeves, snow piled on his shoulders, hat and eyebrows, breath steaming, expression calm and respectful; behind him the courtyard is white, his footprints slowly filling in. Grey sky, closed wooden door, warm light in a window. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 74. 惊弓之鸟

- 目标文件：`idiom-startled-bird.jpg`
- 年龄段：Explorer
- 场景：A reed marsh at dusk; a bowman in a dark hunting robe stands with an unstrung bow, having just released the string, face calm and knowing; above, a wild goose with ruffled feathers twists in mid-air, wings flailing, eyes wide in panic, beginning to fall; the bowstring still vibrating. Golden reeds, pale sky, shadows.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A reed marsh at dusk; a bowman in a dark hunting robe stands with an unstrung bow, having just released the string, face calm and knowing; above, a wild goose with ruffled feathers twists in mid-air, wings flailing, eyes wide in panic, beginning to fall; the bowstring still vibrating. Golden reeds, pale sky, shadows. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 75. 囫囵吞枣

- 目标文件：`idiom-swallow-dates-whole.jpg`
- 年龄段：Growing
- 场景：A small tea house table; a man in a brown robe has stuffed whole red dates into his mouth, cheeks bulging comically, eyes watering, one hand at his throat; across the table two friends lean back in alarm, one reaching to pat his back, the other holding a pear mid-bite. Teacups, a dish of dates, a lazy cat on the windowsill.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A small tea house table; a man in a brown robe has stuffed whole red dates into his mouth, cheeks bulging comically, eyes watering, one hand at his throat; across the table two friends lean back in alarm, one reaching to pat his back, the other holding a pear mid-bite. Teacups, a dish of dates, a lazy cat on the windowsill. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 76. 纸上谈兵

- 目标文件：`idiom-talk-war-on-paper.jpg`
- 年龄段：Explorer
- 场景：Inside a command tent: a proud young general in ornate armour holds an open scroll and declaims with one finger raised, eyes fixed on the text, ignoring the map on the table; two veteran officers exchange worried glances, one pointing urgently at wooden markers showing an encirclement. The tent flap reveals distant dust and enemy banners.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: Inside a command tent: a proud young general in ornate armour holds an open scroll and declaims with one finger raised, eyes fixed on the text, ignoring the map on the table; two veteran officers exchange worried glances, one pointing urgently at wooden markers showing an encirclement. The tent flap reveals distant dust and enemy banners. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 77. 朝三暮四

- 目标文件：`idiom-three-at-morning-four-at-night.jpg`
- 年龄段：Growing
- 场景：A courtyard with a monkey keeper in a brown jacket holding up three chestnuts in one open palm and four in the other, bargaining expression, eyebrows raised; a circle of monkeys reacts vividly, some leaping angrily with fur bristling, some clapping happily, one scratching its head in confusion; baskets of acorns behind. Warm afternoon, comic energy.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A courtyard with a monkey keeper in a brown jacket holding up three chestnuts in one open palm and four in the other, bargaining expression, eyebrows raised; a circle of monkeys reacts vividly, some leaping angrily with fur bristling, some clapping happily, one scratching its head in confusion; baskets of acorns behind. Warm afternoon, comic energy. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 78. 三人成虎

- 目标文件：`idiom-three-people-make-a-tiger.jpg`
- 年龄段：Explorer
- 场景：A market street below a palace window; three townsmen stand in a row, each pointing dramatically at an empty spot in the street, mouths open in claim; in the window above, a king in a red robe leans out, brow furrowed, half-convinced, one hand gripping the sill; no tiger anywhere. Townsfolk whisper, laundry flapping, strong daylight.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A market street below a palace window; three townsmen stand in a row, each pointing dramatically at an empty spot in the street, mouths open in claim; in the window above, a king in a red robe leans out, brow furrowed, half-convinced, one hand gripping the sill; no tiger anywhere. Townsfolk whisper, laundry flapping, strong daylight. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 79. 三顾茅庐

- 目标文件：`idiom-three-visits-to-the-cottage.jpg`
- 年龄段：Explorer
- 场景：A snow-covered thatched cottage behind a bamboo fence; a bearded man in a fur-trimmed cloak stands patiently at the gate with hands clasped, snow on his shoulders and hat, breath white, expression humble and hopeful; two attendants shiver behind him holding a horse; warm lamplight glows in the cottage window, smoke curling from the roof.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A snow-covered thatched cottage behind a bamboo fence; a bearded man in a fur-trimmed cloak stands patiently at the gate with hands clasped, snow on his shoulders and hat, breath white, expression humble and hopeful; two attendants shiver behind him holding a horse; warm lamplight glows in the cottage window, smoke curling from the roof. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 80. 田忌赛马

- 目标文件：`idiom-tian-ji-horse-race.jpg`
- 年龄段：Explorer
- 场景：A stable yard with three pairs of horses held by grooms; a strategist in a blue robe points from one horse to another, counting on his fingers with a clever smile; a nobleman in fine robes listens with dawning excitement, one hand raised; the horses differ in build, from sleek to sturdy. Race flags, dirt track, low fence, bright morning.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A stable yard with three pairs of horses held by grooms; a strategist in a blue robe points from one horse to another, counting on his fingers with a clever smile; a nobleman in fine robes listens with dawning excitement, one hand raised; the horses differ in build, from sleek to sturdy. Race flags, dirt track, low fence, bright morning. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 81. 悬梁刺股

- 目标文件：`idiom-tie-hair-to-beam.jpg`
- 年龄段：Explorer
- 场景：A study at night: a young scholar in a white robe sits at a desk piled with bamboo scrolls, his long hair tied by a rope to a beam above so it pulls taut when he nods; one hand holds a small awl poised near his thigh, eyes red-rimmed but fiercely awake; a guttering oil lamp throws long shadows. Determination and exhaustion.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A study at night: a young scholar in a white robe sits at a desk piled with bamboo scrolls, his long hair tied by a rope to a beam above so it pulls taut when he nods; one hand holds a small awl poised near his thigh, eyes red-rimmed but fiercely awake; a guttering oil lamp throws long shadows. Determination and exhaustion. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 82. 守株待兔

- 目标文件：`idiom-wait-by-the-stump.jpg`
- 年龄段：Preschool
- 场景：A field gone wild with tall weeds; a farmer in a straw hat sits on a wooden stool beside a tree stump, chin in hand, eyes fixed hopefully on the stump, a rusty hoe lying in the grass beside him; a rabbit-shaped cloud drifts above; in the distance a neighbour shakes his head and points at the overgrown rows.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A field gone wild with tall weeds; a farmer in a straw hat sits on a wooden stool beside a tree stump, chin in hand, eyes fixed hopefully on the stump, a rusty hoe lying in the grass beside him; a rabbit-shaped cloud drifts above; in the distance a neighbour shakes his head and points at the overgrown rows. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 83. 前车之鉴

- 目标文件：`idiom-warning-from-the-cart-ahead.jpg`
- 年龄段：Explorer
- 场景：A muddy mountain road: an overturned ox cart lies in a ditch ahead, one wheel still spinning, bundles scattered; a second carter in a straw cape reins in his ox sharply at the top of the slope, leaning forward with wide eyes, one hand raised to stop; his ox braces its legs. Rain-washed rocks, grey sky, wet grass.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A muddy mountain road: an overturned ox cart lies in a ditch ahead, one wheel still spinning, bundles scattered; a second carter in a straw cape reins in his ox sharply at the top of the slope, leaning forward with wide eyes, one hand raised to stop; his ox braces its legs. Rain-washed rocks, grey sky, wet grass. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 84. 水滴石穿

- 目标文件：`idiom-water-drops-wear-stone.jpg`
- 年龄段：Growing
- 场景：Close-up beneath tiled eaves: a large grey stone with a deep smooth hollow worn in its centre, single water drops caught mid-fall from the roof edge, tiny splash crown; moss and a small sprout at the stone base; soft morning light, shallow depth, no people, calm and quietly powerful.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: Close-up beneath tiled eaves: a large grey stone with a deep smooth hollow worn in its centre, single water drops caught mid-fall from the roof edge, tiny splash crown; moss and a small sprout at the stone base; soft morning light, shallow depth, no people, calm and quietly powerful. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 85. 韦编三绝

- 目标文件：`idiom-worn-leather-bindings.jpg`
- 年龄段：Explorer
- 场景：A study with shelves of bamboo scrolls; an elderly scholar in a dark grey robe and long beard holds up a bamboo scroll whose leather binding has snapped, the slips splayed, his expression absorbed rather than dismayed; three worn cords lie on the desk beside an ink slab, a lamp and a cup of tea. Warm indoor light, deep concentration.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A study with shelves of bamboo scrolls; an elderly scholar in a dark grey robe and long beard holds up a bamboo scroll whose leather binding has snapped, the slips splayed, his expression absorbed rather than dismayed; three worn cords lie on the desk beside an ink slab, a lamp and a cup of tea. Warm indoor light, deep concentration. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 86. 杞人忧天

- 目标文件：`idiom-worry-sky-falls.jpg`
- 年龄段：Growing
- 场景：A small courtyard at night; a thin man in a rumpled robe crouches with a blanket held over his head with both hands, peering up at the sky in terror, knees drawn up; a friend in a blue robe sits on a stool beside him, gesturing calmly at the stars and the solid ground, patient smile. Moonlight, a well, a potted plant.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A small courtyard at night; a thin man in a rumpled robe crouches with a blanket held over his head with both hands, peering up at the sky in terror, knees drawn up; a friend in a blue robe sits on a stool beside him, gesturing calmly at the stars and the solid ground, patient smile. Moonlight, a well, a potted plant. Setting and costume: Ancient China setting: hanfu, cross-collared robes, sashes, cloth shoes, topknots or buns, and traditional timber architecture with grey tiled roofs, lattice windows, wooden pillars and stone paving. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

---

<a id="bedtime"></a>

## 睡前故事 · Bedtime（34 条）

> 分类键：`bedtime`｜场景与服饰约束见 README 第四节。

### 1. 小熊的月亮枕头

- 目标文件：`bedtime-bears-moon-pillow.jpg`
- 年龄段：Preschool
- 场景：A cozy child's bedroom at night; a small bear cub in striped pyjamas lies in a wooden bed, hugging a crescent-moon-shaped pillow to its cheek, eyes closed, a soft smile on its muzzle; a mother bear in a knitted shawl sits on the bed edge, one paw smoothing the blanket; a nightlight glows warm on the shelf. Deep blue room, warm golden lamp, peaceful sleepy mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A cozy child's bedroom at night; a small bear cub in striped pyjamas lies in a wooden bed, hugging a crescent-moon-shaped pillow to its cheek, eyes closed, a soft smile on its muzzle; a mother bear in a knitted shawl sits on the bed edge, one paw smoothing the blanket; a nightlight glows warm on the shelf. Deep blue room, warm golden lamp, peaceful sleepy mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 2. 小熊的星星被

- 目标文件：`bedtime-bears-star-blanket.jpg`
- 年龄段：Preschool
- 场景：A small bear cub tucked into bed under a quilt covered in embroidered glowing stars, only its head and one paw showing; the stars on the blanket cast a soft warm shimmer into the room; a mother bear leans in, her face gentle, one paw resting on the quilt edge; a round window shows the real night sky with matching stars. Deep indigo and warm gold, dreamy and calm.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A small bear cub tucked into bed under a quilt covered in embroidered glowing stars, only its head and one paw showing; the stars on the blanket cast a soft warm shimmer into the room; a mother bear leans in, her face gentle, one paw resting on the quilt edge; a round window shows the real night sky with matching stars. Deep indigo and warm gold, dreamy and calm. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 3. 云朵棉花糖

- 目标文件：`bedtime-cloud-cotton-candy.jpg`
- 年龄段：Preschool
- 场景：A hillside meadow at sunset; a small rabbit with long ears stands on tiptoe reaching up with both paws toward a tiny fluffy pink-white cloud drifting low; the cloud has begun to look like cotton candy on a stick; a gentle breeze drawn as soft swirls helps pull it down; three small friends, a bird, a hedgehog and a squirrel, wait below with open paws. Warm peach and lilac sky, sweet dreamy mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A hillside meadow at sunset; a small rabbit with long ears stands on tiptoe reaching up with both paws toward a tiny fluffy pink-white cloud drifting low; the cloud has begun to look like cotton candy on a stick; a gentle breeze drawn as soft swirls helps pull it down; three small friends, a bird, a hedgehog and a squirrel, wait below with open paws. Warm peach and lilac sky, sweet dreamy mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 4. 云朵枕头

- 目标文件：`bedtime-cloud-pillow.jpg`
- 年龄段：Preschool
- 场景：A child's bedroom with the window open to a starry night; a small sheep in a nightcap lies in bed, one hoof under its cheek, eyes half closed; a tiny cloud has drifted in and settled under its head as a pillow, glowing faintly; curtains swaying gently, a crescent moon outside. Soft blue and cream, drifting sleepy atmosphere.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A child's bedroom with the window open to a starry night; a small sheep in a nightcap lies in bed, one hoof under its cheek, eyes half closed; a tiny cloud has drifted in and settled under its head as a pillow, glowing faintly; curtains swaying gently, a crescent moon outside. Soft blue and cream, drifting sleepy atmosphere. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 5. 数星星的小兔子

- 目标文件：`bedtime-counting-stars.jpg`
- 年龄段：Preschool
- 场景：A windowsill at night; a small rabbit with drooping ears leans on the sill, chin on its paws, gazing up at a sky full of stars; a few stars have been left half-counted, drawn as small glowing dots above the rooftop; the rabbit's eyelids are heavy, one ear flopped over its eye. Indigo night, soft star glow, dreamy and quiet.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A windowsill at night; a small rabbit with drooping ears leans on the sill, chin on its paws, gazing up at a sky full of stars; a few stars have been left half-counted, drawn as small glowing dots above the rooftop; the rabbit's eyelids are heavy, one ear flopped over its eye. Indigo night, soft star glow, dreamy and quiet. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 6. 和妈妈数星星

- 目标文件：`bedtime-counting-stars-with-mom.jpg`
- 年龄段：Preschool
- 场景：A window seat at night; a mother in a soft cardigan holds a small child in her lap, one hand gently patting the child's back, the other pointing at the sky; the child's head rests on her shoulder, eyes nearly closed, a tiny smile; a blanket over their knees, warm lamplight behind them, stars outside. Warm golden interior against deep blue night, tender drowsy mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A window seat at night; a mother in a soft cardigan holds a small child in her lap, one hand gently patting the child's back, the other pointing at the sky; the child's head rests on her shoulder, eyes nearly closed, a tiny smile; a blanket over their knees, warm lamplight behind them, stars outside. Warm golden interior against deep blue night, tender drowsy mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 7. 梦的邮递员

- 目标文件：`bedtime-dream-postman.jpg`
- 年龄段：Growing
- 场景：Rooftops at night under a large moon; a small round postman in a soft blue coat and a nightcap with a tiny bell floats between chimneys, a plump cloth mailbag over his shoulder, one hand slipping a glowing dream through an open window; the bag glows faintly with tiny swirling dream shapes; a cat watches from a chimney pot. Deep blue with warm golden window lights, magical quiet mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: Rooftops at night under a large moon; a small round postman in a soft blue coat and a nightcap with a tiny bell floats between chimneys, a plump cloth mailbag over his shoulder, one hand slipping a glowing dream through an open window; the bag glows faintly with tiny swirling dream shapes; a cat watches from a chimney pot. Deep blue with warm golden window lights, magical quiet mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 8. 萤火虫灯笼队

- 目标文件：`bedtime-firefly-lanterns.jpg`
- 年龄段：Preschool
- 场景：A dark garden path at night; a small ant in a little scarf walks along a leaf-strewn trail, one hand shading its eyes; ahead, a line of fireflies hovers in a row like hanging lanterns, each with a warm glowing tail, lighting the way toward a small anthill with a lit doorway; tall grass on both sides. Deep green-blue night, warm golden dots, safe and comforting mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A dark garden path at night; a small ant in a little scarf walks along a leaf-strewn trail, one hand shading its eyes; ahead, a line of fireflies hovers in a row like hanging lanterns, each with a warm glowing tail, lighting the way toward a small anthill with a lit doorway; tall grass on both sides. Deep green-blue night, warm golden dots, safe and comforting mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 9. 会发光的萤火虫

- 目标文件：`bedtime-glow-of-fireflies.jpg`
- 年龄段：Preschool
- 场景：A summer meadow at night, seen from a low, dreamy angle; fireflies drift slowly among tall grass blades, each trailing a soft dim golden glow; one firefly in the foreground is enlarged, its tiny lantern-lit body glowing warmly; a child's bedroom window glows faintly in the far background. Deep blue-green, soft bokeh, hushed drowsy atmosphere.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A summer meadow at night, seen from a low, dreamy angle; fireflies drift slowly among tall grass blades, each trailing a soft dim golden glow; one firefly in the foreground is enlarged, its tiny lantern-lit body glowing warmly; a child's bedroom window glows faintly in the far background. Deep blue-green, soft bokeh, hushed drowsy atmosphere. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 10. 晚安，小汽车

- 目标文件：`bedtime-goodnight-little-car.jpg`
- 年龄段：Preschool
- 场景：A child's bedroom at night; a small boy in pyjamas kneels on the rug, carefully placing a toy car into a wooden toy box, one hand patting its roof; a ball and a few blocks are already in the box; the bed is turned down behind him, a nightlight glowing, the moon visible through the window. Warm dim light, tidy and peaceful mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A child's bedroom at night; a small boy in pyjamas kneels on the rug, carefully placing a toy car into a wooden toy box, one hand patting its roof; a ball and a few blocks are already in the box; the bed is turned down behind him, a nightlight glowing, the moon visible through the window. Warm dim light, tidy and peaceful mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 11. 晚安，小云朵

- 目标文件：`bedtime-goodnight-little-cloud.jpg`
- 年龄段：Preschool
- 场景：A hillside at dusk; the sky is soft orange fading into purple; a small round cloud drifts slowly down behind a mountain ridge, one edge glowing from the last sunlight; below, a bird settles into its nest in a tree, river water smooth and still, flowers closing their petals. Warm gradient sky with cool shadows, gentle farewell mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A hillside at dusk; the sky is soft orange fading into purple; a small round cloud drifts slowly down behind a mountain ridge, one edge glowing from the last sunlight; below, a bird settles into its nest in a tree, river water smooth and still, flowers closing their petals. Warm gradient sky with cool shadows, gentle farewell mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 12. 小刺猬的拥抱

- 目标文件：`bedtime-hedgehogs-hug.jpg`
- 年龄段：Preschool
- 场景：A soft meadow at night; a small hedgehog sits curled up with its spines bristling, face buried, looking sad and lonely; around it three friends, a rabbit, a squirrel and a fawn, kneel close and gently touch its soft belly side, careful of the spines, their faces warm and reassuring; the hedgehog's eye peeks out, beginning to smile. Moonlight, soft warm glows, tender mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A soft meadow at night; a small hedgehog sits curled up with its spines bristling, face buried, looking sad and lonely; around it three friends, a rabbit, a squirrel and a fawn, kneel close and gently touch its soft belly side, careful of the spines, their faces warm and reassuring; the hedgehog's eye peeks out, beginning to smile. Moonlight, soft warm glows, tender mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 13. 小猫和月亮

- 目标文件：`bedtime-kitten-and-moon.jpg`
- 年龄段：Preschool
- 场景：A tiled rooftop at night; a small orange kitten walks along the ridge, tail up, looking over its shoulder at a big round moon; the moon is drawn with a gentle smiling face and a soft halo; the kitten's mouth is open in a tiny meow; chimney pots, a clothesline, distant lit windows below. Deep indigo and silver, playful and calm.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A tiled rooftop at night; a small orange kitten walks along the ridge, tail up, looking over its shoulder at a big round moon; the moon is drawn with a gentle smiling face and a soft halo; the kitten's mouth is open in a tiny meow; chimney pots, a clothesline, distant lit windows below. Deep indigo and silver, playful and calm. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 14. 小灯笼

- 目标文件：`bedtime-little-lantern.jpg`
- 年龄段：Preschool
- 场景：A doorway at night; a single round paper lantern hangs from the eave, glowing warm orange, gently swaying, its tassel drifting; below, a stone step, a pair of small shoes and a cat curled asleep; a warm rectangle of light falls on the path from the partly open door; light snow or fine rain glinting. Very warm orange against cool blue night, welcoming mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A doorway at night; a single round paper lantern hangs from the eave, glowing warm orange, gently swaying, its tassel drifting; below, a stone step, a pair of small shoes and a cat curled asleep; a warm rectangle of light falls on the path from the partly open door; light snow or fine rain glinting. Very warm orange against cool blue night, welcoming mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 15. 小兔子睡不着

- 目标文件：`bedtime-little-rabbit-cant-sleep.jpg`
- 年龄段：Preschool
- 场景：A small bedroom at night; a little rabbit in a nightshirt sits up in bed, ears drooping, eyes wide open, one paw on the blanket, mouth in a small worried curve; a mother rabbit sits on the bed edge, one paw on her own chest demonstrating a slow breath, her face calm and smiling; a nightlight and a glass of water on the nightstand. Soft blue with warm lamp, soothing mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A small bedroom at night; a little rabbit in a nightshirt sits up in bed, ears drooping, eyes wide open, one paw on the blanket, mouth in a small worried curve; a mother rabbit sits on the bed edge, one paw on her own chest demonstrating a slow breath, her face calm and smiling; a nightlight and a glass of water on the nightstand. Soft blue with warm lamp, soothing mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 16. 小海龟回家

- 目标文件：`bedtime-little-turtle-goes-home.jpg`
- 年龄段：Preschool
- 场景：Underwater at night seen from near the seabed; a small<|place_holder_mm_span_0442|> turtle hatchling paddles through clear blue-green water, flippers wide, looking up; above the surface, a path of moonlight ripples down through the water like a silver road; seahorses and small fish float nearby, soft sea grass sways. Deep teal and silver, gentle drifting mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: Underwater at night seen from near the seabed; a small<|place_holder_mm_span_0442|> turtle hatchling paddles through clear blue-green water, flippers wide, looking up; above the surface, a path of moonlight ripples down through the water like a silver road; seahorses and small fish float nearby, soft sea grass sways. Deep teal and silver, gentle drifting mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 17. 小海龟的梦

- 目标文件：`bedtime-little-turtles-dream.jpg`
- 年龄段：Preschool
- 场景：A warm sandy beach at night; a small sea turtle lies half-buried in the sand, eyes closed, flippers relaxed, a faint contented smile; above it a dream bubble shows the turtle gliding through bright water among colourful fish and soft sea grass; gentle waves rolling in, moonlight on the water. Warm sand with cool blue dream tones, deeply peaceful.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A warm sandy beach at night; a small sea turtle lies half-buried in the sand, eyes closed, flippers relaxed, a faint contented smile; above it a dream bubble shows the turtle gliding through bright water among colourful fish and soft sea grass; gentle waves rolling in, moonlight on the water. Warm sand with cool blue dream tones, deeply peaceful. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 18. 星星的摇篮曲

- 目标文件：`bedtime-lullaby-of-stars.jpg`
- 年龄段：Preschool
- 场景：A night sky above a sleeping landscape; a row of small round stars with gentle sleeping faces hangs in a neat line, each glowing softly, one with a tiny open mouth as if humming; below, a treetop, a still pond and a small house with a dim window; thin musical note-like arcs of light drift between the stars (no letters). Deep blue, warm star glow, hushed lullaby mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A night sky above a sleeping landscape; a row of small round stars with gentle sleeping faces hangs in a neat line, each glowing softly, one with a tiny open mouth as if humming; below, a treetop, a still pond and a small house with a dim window; thin musical note-like arcs of light drift between the stars (no letters). Deep blue, warm star glow, hushed lullaby mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 19. 摇篮曲小火车

- 目标文件：`bedtime-lullaby-train.jpg`
- 年龄段：Preschool
- 场景：A dreamlike bedroom turned into landscape: a soft plush toy train with a small bell on its front puffs along a track made of quilted blanket folds, passing a mountain of pillows and entering a tunnel of blankets; in one carriage a tiny bear sleeps curled up; stars glowing on the wall. Warm cream and pastel tones, whimsical sleepy mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A dreamlike bedroom turned into landscape: a soft plush toy train with a small bell on its front puffs along a track made of quilted blanket folds, passing a mountain of pillows and entering a tunnel of blankets; in one carriage a tiny bear sleeps curled up; stars glowing on the wall. Warm cream and pastel tones, whimsical sleepy mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 20. 月亮汤圆

- 目标文件：`bedtime-moon-rice-balls.jpg`
- 年龄段：Preschool
- 场景：A courtyard at night; small animals sit around a low wooden table, a bear cub in a scarf rolling white rice dough into round balls, a rabbit shaping one, a squirrel arranging finished balls on a plate; a steaming pot nearby; above them a huge full moon, and each rice ball catches a soft moonlight sheen. Warm lantern light, cosy festive mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A courtyard at night; small animals sit around a low wooden table, a bear cub in a scarf rolling white rice dough into round balls, a rabbit shaping one, a squirrel arranging finished balls on a plate; a steaming pot nearby; above them a huge full moon, and each rice ball catches a soft moonlight sheen. Warm lantern light, cosy festive mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 21. 猫头鹰的值班

- 目标文件：`bedtime-owl-night-watch.jpg`
- 年龄段：Preschool
- 场景：A forest at night; a round owl with big amber eyes perches on a branch, head turned to one side, wings folded neatly, posture alert but calm; below in a hollow a small squirrel sleeps curled up, one ear twitching; moonlight filters through leaves, a few fireflies drifting. Deep blue-green, soft silver, safe and quiet mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A forest at night; a round owl with big amber eyes perches on a branch, head turned to one side, wings folded neatly, posture alert but calm; below in a hollow a small squirrel sleeps curled up, one ear twitching; moonlight filters through leaves, a few fireflies drifting. Deep blue-green, soft silver, safe and quiet mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 22. 睡吧，小树

- 目标文件：`bedtime-sleep-little-tree.jpg`
- 年龄段：Preschool
- 场景：A small bare tree on a hillside in early winter; fallen leaves gathered around its roots like a blanket, and the first soft snow settling on its branches and on the ground; the tree's trunk has a sleepy, peaceful face; a gentle wind drawn as soft swirls tucks the snow around it; a pale moon behind. Cool blue-white with warm brown bark, hushed peaceful mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A small bare tree on a hillside in early winter; fallen leaves gathered around its roots like a blanket, and the first soft snow settling on its branches and on the ground; the tree's trunk has a sleepy, peaceful face; a gentle wind drawn as soft swirls tucks the snow around it; a pale moon behind. Cool blue-white with warm brown bark, hushed peaceful mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 23. 软软的云被子

- 目标文件：`bedtime-soft-cloud-blanket.jpg`
- 年龄段：Preschool
- 场景：A child's bed at night; a small child lies under a thick white quilt that puffs up like a cloud, only the face and one hand showing, eyes closed, cheeks relaxed; a mother's hand tucks the edge of the quilt near the child's shoulder; a soft nightlight and a glass of water on the nightstand. Warm cream and pale blue, deeply cosy mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A child's bed at night; a small child lies under a thick white quilt that puffs up like a cloud, only the face and one hand showing, eyes closed, cheeks relaxed; a mother's hand tucks the edge of the quilt near the child's shoulder; a soft nightlight and a glass of water on the nightstand. Warm cream and pale blue, deeply cosy mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 24. 小溪的晚安曲

- 目标文件：`bedtime-stream-goodnight-song.jpg`
- 年龄段：Preschool
- 场景：A mountain stream at dusk flowing over smooth stones, water curling into small silver ripples with soft flowing lines; on the bank flowers have folded their petals, a bird sits tucked in a low branch with its head under its wing, and small trees lean over the water; the last warm light fades from the sky. Cool blue-green with a hint of warm gold, gently rhythmic mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A mountain stream at dusk flowing over smooth stones, water curling into small silver ripples with soft flowing lines; on the bank flowers have folded their petals, a bird sits tucked in a low branch with its head under its wing, and small trees lean over the water; the last warm light fades from the sky. Cool blue-green with a hint of warm gold, gently rhythmic mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 25. 梦的邮递员

- 目标文件：`bedtime-the-dream-postman.jpg`
- 年龄段：Preschool
- 场景：A quiet street of small houses at night; a tiny postman in a soft blue coat and pointed nightcap floats past windows, a bulging cloth bag on his back glowing with faint colourful dream shapes; with one hand he slips a small glowing dream under a windowsill pillow visible through the glass; a cat dozes on a fence; a huge moon behind the rooftops. Deep blue, warm window lights, magical calm.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A quiet street of small houses at night; a tiny postman in a soft blue coat and pointed nightcap floats past windows, a bulging cloth bag on his back glowing with faint colourful dream shapes; with one hand he slips a small glowing dream under a windowsill pillow visible through the glass; a cat dozes on a fence; a huge moon behind the rooftops. Deep blue, warm window lights, magical calm. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 26. 月亮船

- 目标文件：`bedtime-the-moon-boat.jpg`
- 年龄段：Preschool
- 场景：A windowsill at night; a child in pyjamas sits at the window, chin on hands, eyes still open; outside, a crescent moon shaped like a little boat with a soft glowing hull floats close to the window, one gentle wave-like curve inviting; a starry sky and the child's sleepy reflection in the glass. Deep indigo, silver glow, dreamy drifting mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A windowsill at night; a child in pyjamas sits at the window, chin on hands, eyes still open; outside, a crescent moon shaped like a little boat with a soft glowing hull floats close to the window, one gentle wave-like curve inviting; a starry sky and the child's sleepy reflection in the glass. Deep indigo, silver glow, dreamy drifting mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 27. 月亮去睡觉

- 目标文件：`bedtime-the-moon-goes-to-sleep.jpg`
- 年龄段：Preschool
- 场景：A horizon at dawn; a round moon with a sleepy half-closed eye and a small yawn sits low in a sky of pale pink and lavender; beside it a few small stars are already fading and slipping away behind a cloud; below, a mountain ridge and a small house with a dim window; the first warm light rising on the opposite side. Soft pastel gradient, gentle drowsy mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A horizon at dawn; a round moon with a sleepy half-closed eye and a small yawn sits low in a sky of pale pink and lavender; beside it a few small stars are already fading and slipping away behind a cloud; below, a mountain ridge and a small house with a dim window; the first warm light rising on the opposite side. Soft pastel gradient, gentle drowsy mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 28. 夜晚的花园

- 目标文件：`bedtime-the-night-garden.jpg`
- 年龄段：Preschool
- 场景：A garden at night; flowers with closed petals stand in neat rows, their heads bowed, one or two with sleepy faces in their centres; round dew drops glint on broad leaves; a small cricket sits on a stone, legs folded, quiet; a low stone wall and a lantern with soft glow; above, a moon and a star or two. Deep blue-green, silver dew highlights, hushed peaceful mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A garden at night; flowers with closed petals stand in neat rows, their heads bowed, one or two with sleepy faces in their centres; round dew drops glint on broad leaves; a small cricket sits on a stone, legs folded, quiet; a low stone wall and a lantern with soft glow; above, a moon and a star or two. Deep blue-green, silver dew highlights, hushed peaceful mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 29. 安静的森林

- 目标文件：`bedtime-the-quiet-forest.jpg`
- 年龄段：Preschool
- 场景：A forest at night; a squirrel curled in a tree hollow with its tail over its nose, a small deer lying in soft grass with its head tucked to its flank, a bird with its head under its wing on a branch; moonlight falls in soft shafts through the canopy; a full moon above the treetops. Deep blue and silver, warm fur highlights, deeply calm mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A forest at night; a squirrel curled in a tree hollow with its tail over its nose, a small deer lying in soft grass with its head tucked to its flank, a bird with its head under its wing on a branch; moonlight falls in soft shafts through the canopy; a full moon above the treetops. Deep blue and silver, warm fur highlights, deeply calm mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 30. 会唱歌的小河

- 目标文件：`bedtime-the-singing-river.jpg`
- 年龄段：Preschool
- 场景：A river at night winding through a meadow; the water flows in soft curling lines, suggesting a gentle melody, with faint glowing ripples; along the banks, a frog yawns with its mouth wide on a lily pad, a squirrel hugs its tail in a tree hollow, a small rabbit blinks sleepily in the grass; reeds sway. Deep blue-green, soft silver, sleepy rhythmic mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A river at night winding through a meadow; the water flows in soft curling lines, suggesting a gentle melody, with faint glowing ripples; along the banks, a frog yawns with its mouth wide on a lily pad, a squirrel hugs its tail in a tree hollow, a small rabbit blinks sleepily in the grass; reeds sway. Deep blue-green, soft silver, sleepy rhythmic mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 31. 星星的约定

- 目标文件：`bedtime-the-star-promise.jpg`
- 年龄段：Growing
- 场景：A bedroom window at night; a child in pyjamas leans on the sill, one hand raised with pinky finger extended toward the sky, face bright with a hopeful smile; outside, the brightest star has a gentle glowing face and a small pinky-like sparkle reaching back; a bed with turned-down covers behind, soft lamp light. Deep blue night, warm interior glow, tender promising mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A bedroom window at night; a child in pyjamas leans on the sill, one hand raised with pinky finger extended toward the sky, face bright with a hopeful smile; outside, the brightest star has a gentle glowing face and a small pinky-like sparkle reaching back; a bed with turned-down covers behind, soft lamp light. Deep blue night, warm interior glow, tender promising mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 32. 累了的小星星

- 目标文件：`bedtime-the-tired-little-star.jpg`
- 年龄段：Preschool
- 场景：A night sky; a very small star with drooping, sleepy eyes sits close beside a large round moon with a gentle motherly face, leaning against the moon's curve; the small star's glow is dim and flickering softly; around them other stars shine quietly; below, soft dark clouds and a sleeping landscape. Deep indigo, warm cream moonlight, tender drowsy mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A night sky; a very small star with drooping, sleepy eyes sits close beside a large round moon with a gentle motherly face, leaning against the moon's curve; the small star's glow is dim and flickering softly; around them other stars shine quietly; below, soft dark clouds and a sleeping landscape. Deep indigo, warm cream moonlight, tender drowsy mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 33. 晚安，三个吻

- 目标文件：`bedtime-three-goodnight-kisses.jpg`
- 年龄段：Preschool
- 场景：A child's bed at night; a small bear cub lies under a quilt with one paw on its cheek; a mother bear leans in, one paw gently touching the cub's forehead, her face full of warmth, small heart-shaped glows drifting around her; a nightlight on the shelf, a crescent moon in the window. Warm rose and cream tones against deep blue, deeply loving mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A child's bed at night; a small bear cub lies under a quilt with one paw on its cheek; a mother bear leans in, one paw gently touching the cub's forehead, her face full of warmth, small heart-shaped glows drifting around her; a nightlight on the shelf, a crescent moon in the window. Warm rose and cream tones against deep blue, deeply loving mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 34. 勇敢的小夜灯

- 目标文件：`character-the-brave-little-lamp.jpg`
- 年龄段：Preschool
- 场景：A child's bedroom at night; a small girl in bed has pulled the blanket up to her eyes, only her worried eyes visible; on the nightstand a round little night lamp glows with a gentle warm halo and a kind, steady face; its light spreads softly across the wall, pushing back the shadows; a toy bear sits nearby. Deep blue shadows with a warm pool of light, reassuring mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A child's bedroom at night; a small girl in bed has pulled the blanket up to her eyes, only her worried eyes visible; on the nightstand a round little night lamp glows with a gentle warm halo and a kind, steady face; its light spreads softly across the wall, pushing back the shadows; a toy bear sits nearby. Deep blue shadows with a warm pool of light, reassuring mood. Setting and costume: Quiet night setting: deep indigo and soft warm lamplight, low saturation, moon, stars, soft blankets and cushions, everything calm and heavy with sleep. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

---

<a id="fairy"></a>

## 童话故事 · Fairy Tales（40 条）

> 分类键：`fairy`｜场景与服饰约束见 README 第四节。

### 1. 皮诺曹的长鼻子

- 目标文件：`character-pinocchio-nose.jpg`
- 年龄段：Preschool
- 场景：A cozy carpenter's workshop with wood shavings and hand tools on the wall; a small wooden puppet boy in a red vest and feathered cap sits on the workbench, one hand touching an already very long nose that curves out of frame, eyes shifted sideways with a guilty giggle; a white-bearded old woodworker in a leather apron leans back, blinking in astonishment. Warm lamplight, sawdust, playful mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A cozy carpenter's workshop with wood shavings and hand tools on the wall; a small wooden puppet boy in a red vest and feathered cap sits on the workbench, one hand touching an already very long nose that curves out of frame, eyes shifted sideways with a guilty giggle; a white-bearded old woodworker in a leather apron leans back, blinking in astonishment. Warm lamplight, sawdust, playful mood. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 2. 美女与野兽

- 目标文件：`fairy-beauty-and-the-beast.jpg`
- 年龄段：Explorer
- 场景：A rose garden inside a castle courtyard; a young woman in a simple blue dress kneels to tend a climbing rose, smiling gently; beside her a large gentle beast with soft brown fur and kind eyes holds a watering can awkwardly in both paws, ears tilted forward, a small proud smile on his face. Stone walls, climbing roses, warm afternoon light, tender atmosphere.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A rose garden inside a castle courtyard; a young woman in a simple blue dress kneels to tend a climbing rose, smiling gently; beside her a large gentle beast with soft brown fur and kind eyes holds a watering can awkwardly in both paws, ears tilted forward, a small proud smile on his face. Stone walls, climbing roses, warm afternoon light, tender atmosphere. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 3. 不来梅的音乐家

- 目标文件：`fairy-bremen-town-musicians.jpg`
- 年龄段：Preschool
- 场景：A moonlit country road; four animals form a tower: a grey donkey at the base, a brown dog on its back, a striped cat on the dog, and a red rooster on top with beak open mid-crow. They sing with great enthusiasm, eyes shut, chests out; behind them a cottage window glows, and two robbers are already scrambling out the door. Blue night, warm window light, comic energy.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A moonlit country road; four animals form a tower: a grey donkey at the base, a brown dog on its back, a striped cat on the dog, and a red rooster on top with beak open mid-crow. They sing with great enthusiasm, eyes shut, chests out; behind them a cottage window glows, and two robbers are already scrambling out the door. Blue night, warm window light, comic energy. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 4. 灰姑娘

- 目标文件：`fairy-cinderella.jpg`
- 年龄段：Growing
- 场景：A grand ballroom staircase with marble steps; a young woman in a shimmering pale-blue ball gown with glass slippers descends, one hand on the rail, the other lifted in a hurried farewell gesture, expression joyful and flustered; a clock on the wall shows nearly midnight; a young prince in a white and gold coat reaches up the stairs after her. Chandeliers, warm golden light, motion and shimmer.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A grand ballroom staircase with marble steps; a young woman in a shimmering pale-blue ball gown with glass slippers descends, one hand on the rail, the other lifted in a hurried farewell gesture, expression joyful and flustered; a clock on the wall shows nearly midnight; a young prince in a white and gold coat reaches up the stairs after her. Chandeliers, warm golden light, motion and shimmer. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 5. 皇帝的新装

- 目标文件：`fairy-emperor-new-clothes.jpg`
- 年龄段：Growing
- 场景：A palace street during a parade; a stout emperor in a crown and fancy shoes walks with chest puffed and chin high, wearing nothing but his undergarments, one hand imperiously raised; behind him two smirking tailors in striped coats bow; courtiers line the way clapping with strained polite smiles; in the front row a small girl points at him, mouth wide open in honest laughter. Bright festive bunting, comic tone.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A palace street during a parade; a stout emperor in a crown and fancy shoes walks with chest puffed and chin high, wearing nothing but his undergarments, one hand imperiously raised; behind him two smirking tailors in striped coats bow; courtiers line the way clapping with strained polite smiles; in the front row a small girl points at him, mouth wide open in honest laughter. Bright festive bunting, comic tone. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 6. 皇帝的新装

- 目标文件：`fairy-emperors-new-clothes.jpg`
- 年龄段：Growing
- 场景：A palace balcony overlooking a crowd; an emperor in a tall crown strides forward with great dignity, completely bare except for small undergarments, one hand resting on an invisible cloak edge; behind him two courtiers in fine robes exchange nervous glances, one pressing a hand to his mouth; below, a child in the crowd tugs at a parent's sleeve and points, laughing. Colourful banners, sunlight, comic reveal.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A palace balcony overlooking a crowd; an emperor in a tall crown strides forward with great dignity, completely bare except for small undergarments, one hand resting on an invisible cloak edge; behind him two courtiers in fine robes exchange nervous glances, one pressing a hand to his mouth; below, a child in the crowd tugs at a parent's sleeve and points, laughing. Colourful banners, sunlight, comic reveal. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 7. 渔夫和金鱼

- 目标文件：`fairy-fisherman-and-goldfish.jpg`
- 年龄段：Growing
- 出处文化：旧俄国
- 场景：A stormy Russian seashore at dusk; an old fisherman in a patched coat and felt boots stands in a small wooden boat, one hand on the oar, shoulders slumped, expression weary and apologetic; before him a golden fish with bright eyes and a graceful tail rises from a swirl of dark water, mouth open as if speaking; a low log cabin with carved window frames on the shore behind him. Wind, spray, dramatic mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A stormy Russian seashore at dusk; an old fisherman in a patched coat and felt boots stands in a small wooden boat, one hand on the oar, shoulders slumped, expression weary and apologetic; before him a golden fish with bright eyes and a graceful tail rises from a swirl of dark water, mouth open as if speaking; a low log cabin with carved window frames on the shore behind him. Wind, spray, dramatic mood. Setting and costume: Old Russian setting: patched coats, felt boots, log houses with carved window frames and a low wooden boat on a grey sea. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 8. 青蛙王子

- 目标文件：`fairy-frog-prince.jpg`
- 年龄段：Preschool
- 场景：A palace dining hall; a small green frog with a red bow sits calmly on the polished table beside a golden plate, front legs folded, big eyes polite and hopeful; a young princess in a pink gown leans back in her chair, nose wrinkled, hands raised in distaste; a king in a purple robe and crown frowns at her from the head of the table, one finger raised in reproach. Candles, silverware, warm light.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A palace dining hall; a small green frog with a red bow sits calmly on the polished table beside a golden plate, front legs folded, big eyes polite and hopeful; a young princess in a pink gown leans back in her chair, nose wrinkled, hands raised in distaste; a king in a purple robe and crown frowns at her from the head of the table, one finger raised in reproach. Candles, silverware, warm light. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 9. 金鹅

- 目标文件：`fairy-golden-goose.jpg`
- 年龄段：Growing
- 场景：A forest path; a bright golden goose waddles forward with its head high, tail feathers gleaming; behind it a chain of people is stuck, each holding the coat or hand of the one ahead: a grinning young man, a startled baker covered in flour, a wailing milkmaid, and a plump landlord with arms flailing. Motion, dust, sunbeams, joyful chaos with a warm palette.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A forest path; a bright golden goose waddles forward with its head high, tail feathers gleaming; behind it a chain of people is stuck, each holding the coat or hand of the one ahead: a grinning young man, a startled baker covered in flour, a wailing milkmaid, and a plump landlord with arms flailing. Motion, dust, sunbeams, joyful chaos with a warm palette. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 10. 糖果屋

- 目标文件：`fairy-hansel-and-gretel.jpg`
- 年龄段：Explorer
- 场景：A clearing in a deep forest; a gingerbread cottage with frosting eaves, candy-cane doorposts and gumdrop roof tiles; a boy and girl in simple peasant clothes stand in front of it, the boy reaching for a candy window shutter, the girl pulling his sleeve with a worried frown; a shadowy old figure peers from the cottage door behind a curtain. Warm sunset, candy colours, hint of danger but not scary.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A clearing in a deep forest; a gingerbread cottage with frosting eaves, candy-cane doorposts and gumdrop roof tiles; a boy and girl in simple peasant clothes stand in front of it, the boy reaching for a candy window shutter, the girl pulling his sleeve with a worried frown; a shadowy old figure peers from the cottage door behind a curtain. Warm sunset, candy colours, hint of danger but not scary. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 11. 幸福的汉斯

- 目标文件：`fairy-happy-hans.jpg`
- 年龄段：Growing
- 场景：A bright country road; a cheerful young man in a simple brown tunic walks with a light bounce, hands empty and open, shoulders relaxed, laughing with his head tipped back; a little further along the road, a stone lies in the dust; behind him in the distance, a horse, a cow and a goose are visible with their new owners. Wildflowers, rolling hills, golden afternoon light, carefree mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A bright country road; a cheerful young man in a simple brown tunic walks with a light bounce, hands empty and open, shoulders relaxed, laughing with his head tipped back; a little further along the road, a stone lies in the dust; behind him in the distance, a horse, a cow and a goose are visible with their new owners. Wildflowers, rolling hills, golden afternoon light, carefree mood. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 12. 杰克与豆茎

- 目标文件：`fairy-jack-and-the-beanstalk.jpg`
- 年龄段：Growing
- 场景：A gigantic beanstalk rising through the clouds; a boy in a patched green tunic climbs a thick curling stem, one hand high, one foot braced, face determined but grinning; far above, a castle rests on a cloud bank; far below, a tiny cottage and a mother figure waving. Giant leaves, morning sun breaking through cloud, epic vertical composition.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A gigantic beanstalk rising through the clouds; a boy in a patched green tunic climbs a thick curling stem, one hand high, one foot braced, face determined but grinning; far above, a castle rests on a cloud bank; far below, a tiny cottage and a mother figure waving. Giant leaves, morning sun breaking through cloud, epic vertical composition. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 13. 小意达的花儿

- 目标文件：`fairy-little-ida-flowers.jpg`
- 年龄段：Preschool
- 场景：A moonlit bedroom; a little girl in a white nightgown peeks from behind a curtain, eyes wide with delight; on the floor a circle of tulips, roses and lilies have come alive, dancing on tiny green stems, petals swirling like skirts, a few fireflies drifting above; a toy soldier and a doll watch from the shelf. Soft blue night, warm candle glow, whimsical mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A moonlit bedroom; a little girl in a white nightgown peeks from behind a curtain, eyes wide with delight; on the floor a circle of tulips, roses and lilies have come alive, dancing on tiny green stems, petals swirling like skirts, a few fireflies drifting above; a toy soldier and a doll watch from the shelf. Soft blue night, warm candle glow, whimsical mood. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 14. 卖火柴的小女孩

- 目标文件：`fairy-little-match-girl.jpg`
- 年龄段：Growing
- 场景：A snowy street corner at night; a small girl in a thin shawl and worn shoes crouches against a wall, holding a bundle of matches, cheeks flushed, one hand cupping a single lit match whose warm glow lights her face with a dreamy smile; around her the falling snow, behind her a shop window with a warm golden glow; a barefoot doll in the snow at her side. Cool blue night with one circle of warmth.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A snowy street corner at night; a small girl in a thin shawl and worn shoes crouches against a wall, holding a bundle of matches, cheeks flushed, one hand cupping a single lit match whose warm glow lights her face with a dreamy smile; around her the falling snow, behind her a shop window with a warm golden glow; a barefoot doll in the snow at her side. Cool blue night with one circle of warmth. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 15. 小红帽

- 目标文件：`fairy-little-red-hood.jpg`
- 年龄段：Preschool
- 场景：A sunlit forest path; a cheerful little girl in a red hooded cape carries a covered basket on her arm, skipping along, one hand swinging; beside her walks a lean grey wolf with a friendly, too-wide smile, head tilted, one paw lifted as if chatting politely; behind them the path forks, one branch leading into dark trees. Bright greens, golden light, subtle tension masked as friendliness.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A sunlit forest path; a cheerful little girl in a red hooded cape carries a covered basket on her arm, skipping along, one hand swinging; beside her walks a lean grey wolf with a friendly, too-wide smile, head tilted, one paw lifted as if chatting politely; behind them the path forks, one branch leading into dark trees. Bright greens, golden light, subtle tension masked as friendliness. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 16. 小红帽

- 目标文件：`fairy-little-red-riding-hood.jpg`
- 年龄段：Preschool
- 场景：A cottage bedroom; a little girl in a red cloak and hood stands at the bedside, leaning in with a puzzled frown, one hand on her chin, head tilted as she studies the figure in the bed; the figure under the quilt has a grey furry muzzle, pointed ears and big eyes peeking over the blanket edge, wearing a frilly nightcap; a basket of cakes on the chair. Warm interior, comic tension.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A cottage bedroom; a little girl in a red cloak and hood stands at the bedside, leaning in with a puzzled frown, one hand on her chin, head tilted as she studies the figure in the bed; the figure under the quilt has a grey furry muzzle, pointed ears and big eyes peeking over the blanket edge, wearing a frilly nightcap; a basket of cakes on the chair. Warm interior, comic tension. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 17. 豌豆公主

- 目标文件：`fairy-princess-and-the-pea.jpg`
- 年龄段：Preschool
- 场景：A royal bedroom; a towering stack of twenty mattresses and quilts rises nearly to the ceiling, and on top a young woman sits up in a nightgown, hair tousled, rubbing her back with a pained expression, one hand pressed to a spot beneath her; beside the bed the queen in a dark green gown holds up a single pea between two fingers, smiling knowingly; a small ladder leans against the stack. Warm candlelight, comic exaggeration.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A royal bedroom; a towering stack of twenty mattresses and quilts rises nearly to the ceiling, and on top a young woman sits up in a nightgown, hair tousled, rubbing her back with a pained expression, one hand pressed to a spot beneath her; beside the bed the queen in a dark green gown holds up a single pea between two fingers, smiling knowingly; a small ladder leans against the stack. Warm candlelight, comic exaggeration. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 18. 穿靴子的猫

- 目标文件：`fairy-puss-in-boots.jpg`
- 年龄段：Growing
- 场景：A country road; a confident orange tabby cat stands upright on hind legs, wearing tall brown leather boots and a feathered hat, one paw resting on a sword hilt, tail curled, a sly triumphant smile; behind him a startled young man in a plain tunic holds a straw hat to his chest; in the distance, a royal carriage and a field of haystacks. Bright daylight, swashbuckling charm.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A country road; a confident orange tabby cat stands upright on hind legs, wearing tall brown leather boots and a feathered hat, one paw resting on a sword hilt, tail curled, a sly triumphant smile; behind him a startled young man in a plain tunic holds a straw hat to his chest; in the distance, a royal carriage and a field of haystacks. Bright daylight, swashbuckling charm. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 19. 莴苣姑娘

- 目标文件：`fairy-rapunzel.jpg`
- 年龄段：Growing
- 场景：A tall stone tower rising among cliffs, with one small window high up; a girl with an extremely long golden braid leans out of the window, the braid cascading down the tower wall almost to the ground; at the base a young man in a simple blue coat reaches up, hands on the braid, looking up with a hopeful grin. Wildflowers, morning mist, a few birds, romantic and warm.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A tall stone tower rising among cliffs, with one small window high up; a girl with an extremely long golden braid leans out of the window, the braid cascading down the tower wall almost to the ground; at the base a young man in a simple blue coat reaches up, hands on the braid, looking up with a hopeful grin. Wildflowers, morning mist, a few birds, romantic and warm. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 20. 睡美人

- 目标文件：`fairy-sleeping-beauty.jpg`
- 年龄段：Growing
- 场景：A castle hall frozen in sleep; servants doze standing up with trays and brooms, a cat curled asleep on a rug, dust motes hanging in still sunbeams; a young woman in a rose-pink gown lies asleep on a velvet couch, hands folded, dark eyelashes on her cheeks; a young prince in a blue coat kneels beside her, gently touching her hand, expression full of wonder. Soft golden light, quiet magic.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A castle hall frozen in sleep; servants doze standing up with trays and brooms, a cat curled asleep on a rug, dust motes hanging in still sunbeams; a young woman in a rose-pink gown lies asleep on a velvet couch, hands folded, dark eyelashes on her cheeks; a young prince in a blue coat kneels beside her, gently touching her hand, expression full of wonder. Soft golden light, quiet magic. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 21. 白雪公主

- 目标文件：`fairy-snow-white.jpg`
- 年龄段：Growing
- 场景：A cozy cottage interior; seven small dwarfs in colourful pointed caps and patched tunics cluster around a young woman in a blue and yellow dress who holds a wooden spoon and a steaming pot, laughing warmly; one dwarf stands on a stool to reach the table, another sweeps with a too-big broom, another peeks from behind a chair. Wooden beams, hanging pots, warm firelight, cheerful bustle.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A cozy cottage interior; seven small dwarfs in colourful pointed caps and patched tunics cluster around a young woman in a blue and yellow dress who holds a wooden spoon and a steaming pot, laughing warmly; one dwarf stands on a stool to reach the table, another sweeps with a too-big broom, another peeks from behind a chair. Wooden beams, hanging pots, warm firelight, cheerful bustle. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 22. 坚定的锡兵

- 目标文件：`fairy-steadfast-tin-soldier.jpg`
- 年龄段：Growing
- 场景：A mantelpiece at dusk; a small tin soldier with one leg stands perfectly straight at attention, rifle at his shoulder, uniform neat, single boot polished; beside him a paper ballerina in a pale pink dress balances on one toe, arms curved, spangles glittering; behind them a toy castle and a paper lake. Window light fades to blue, warm candle glimmer, tender poise.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A mantelpiece at dusk; a small tin soldier with one leg stands perfectly straight at attention, rifle at his shoulder, uniform neat, single boot polished; beside him a paper ballerina in a pale pink dress balances on one toe, arms curved, spangles glittering; behind them a toy castle and a paper lake. Window light fades to blue, warm candle glimmer, tender poise. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 23. 青蛙王子

- 目标文件：`fairy-the-frog-prince.jpg`
- 年龄段：Preschool
- 场景：A garden pond with lily pads; a small green frog sits on a lily pad holding a golden ball, big eyes hopeful; on the stone edge a young princess in a yellow dress kneels, one hand extended hesitantly, expression torn between reluctance and kindness; a golden crown rests in the grass beside her. Willows, dragonflies, soft green light, gentle mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A garden pond with lily pads; a small green frog sits on a lily pad holding a golden ball, big eyes hopeful; on the stone edge a young princess in a yellow dress kneels, one hand extended hesitantly, expression torn between reluctance and kindness; a golden crown rests in the grass beside her. Willows, dragonflies, soft green light, gentle mood. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 24. 金鹅

- 目标文件：`fairy-the-golden-goose.jpg`
- 年龄段：Growing
- 场景：A forest clearing at the edge of the trees; a young man in a plain tunic kneels to share bread and cheese with a bent old man in a grey cloak, whose eyes are kind beneath a wide hat; beside them a gleaming golden goose sits in the grass, head cocked; the young man's two older brothers can be seen walking away in the background, packs on their backs. Warm autumn light, generous mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A forest clearing at the edge of the trees; a young man in a plain tunic kneels to share bread and cheese with a bent old man in a grey cloak, whose eyes are kind beneath a wide hat; beside them a gleaming golden goose sits in the grass, head cocked; the young man's two older brothers can be seen walking away in the background, packs on their backs. Warm autumn light, generous mood. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 25. 夜莺

- 目标文件：`fairy-the-nightingle.jpg`
- 年龄段：Explorer
- 出处文化：中国
- 场景：A Chinese imperial palace chamber at night, with red lacquered columns and carved lattice screens; a small brown nightingale perches on the carved sill, beak open in song, chest feathers fluttering; inside the room an emperor in a gold dragon-embroidered robe and a black gauze crown reclines on cushions, one hand pressed to his heart, a tear on his cheek; on a table nearby a jewelled mechanical bird sits silent and dull. Moonlight through paper lattice, warm lantern glow, emotional contrast.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A Chinese imperial palace chamber at night, with red lacquered columns and carved lattice screens; a small brown nightingale perches on the carved sill, beak open in song, chest feathers fluttering; inside the room an emperor in a gold dragon-embroidered robe and a black gauze crown reclines on cushions, one hand pressed to his heart, a tear on his cheek; on a table nearby a jewelled mechanical bird sits silent and dull. Moonlight through paper lattice, warm lantern glow, emotional contrast. Setting and costume: Ancient Chinese imperial setting: dragon-embroidered silk robes, black gauze crowns, red lacquered columns, carved lattice screens and paper windows. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 26. 豌豆公主

- 目标文件：`fairy-the-princess-and-the-pea.jpg`
- 年龄段：Preschool
- 场景：A royal bedchamber; a huge teetering stack of mattresses and featherbeds fills the room, a young woman in a white nightgown perched on top, frowning and rubbing her lower back; the queen in green holds up a tiny pea near a candle, one eyebrow raised with satisfaction, while a young prince peeks in from the doorway. Warm lamplight, comic tone.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A royal bedchamber; a huge teetering stack of mattresses and featherbeds fills the room, a young woman in a white nightgown perched on top, frowning and rubbing her lower back; the queen in green holds up a tiny pea near a candle, one eyebrow raised with satisfaction, while a young prince peeks in from the doorway. Warm lamplight, comic tone. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 27. 六只天鹅

- 目标文件：`fairy-the-six-swans.jpg`
- 年龄段：Explorer
- 场景：A forest clearing at the edge of a lake; six white swans with golden crowns on their heads stand in a graceful line, wings half open; beside them a young woman in a simple grey dress kneels on the moss, sewing a shirt from pale star-shaped flowers with a bone needle, fingertips pricked red, expression resolute and gentle. Silver moonlight, water, quiet devotion.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A forest clearing at the edge of a lake; six white swans with golden crowns on their heads stand in a graceful line, wings half open; beside them a young woman in a simple grey dress kneels on the moss, sewing a shirt from pale star-shaped flowers with a bone needle, fingertips pricked red, expression resolute and gentle. Silver moonlight, water, quiet devotion. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 28. 坚定的锡兵

- 目标文件：`fairy-the-steadfast-tin-soldier.jpg`
- 年龄段：Growing
- 场景：A stormy paper sea on a tabletop; a small one-legged tin soldier stands upright in a folded paper boat that tilts on painted waves, rifle held tight, hat square, expression calm; rain-like drops fall from a watering can above; a paper ballerina watches from a windowsill in the background. Dramatic blue light, toy-scale adventure, brave mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A stormy paper sea on a tabletop; a small one-legged tin soldier stands upright in a folded paper boat that tilts on painted waves, rifle held tight, hat square, expression calm; rain-like drops fall from a watering can above; a paper ballerina watches from a windowsill in the background. Dramatic blue light, toy-scale adventure, brave mood. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 29. 三只小猪

- 目标文件：`fairy-the-three-little-pigs.jpg`
- 年龄段：Preschool
- 场景：Three cottages side by side on a green hill: one of golden straw, one of rough wood, one of solid red brick; a grey wolf in the foreground puffs out its cheeks with cheeks bulging, chest heaving, a great gust of wind drawn as swirling lines toward the straw house whose roof is peeling off; three little pigs in aprons peek from the brick house window. Bright sky, comic energy.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: Three cottages side by side on a green hill: one of golden straw, one of rough wood, one of solid red brick; a grey wolf in the foreground puffs out its cheeks with cheeks bulging, chest heaving, a great gust of wind drawn as swirling lines toward the straw house whose roof is peeling off; three little pigs in aprons peek from the brick house window. Bright sky, comic energy. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 30. 打火匣

- 目标文件：`fairy-the-tinderbox.jpg`
- 年龄段：Explorer
- 场景：A dark dungeon cell with straw on the floor; a ragged soldier in an old uniform kneels and strikes a tinderbox, a spark flaring; from the smoke three enormous dogs with wide saucer eyes and big collars materialise, ears up, tails wagging, filling the cell; the soldier grins with delight rather than fear. Torchlight, smoke swirls, magical mischief.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A dark dungeon cell with straw on the floor; a ragged soldier in an old uniform kneels and strikes a tinderbox, a spark flaring; from the smoke three enormous dogs with wide saucer eyes and big collars materialise, ears up, tails wagging, filling the cell; the soldier grins with delight rather than fear. Torchlight, smoke swirls, magical mischief. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 31. 丑小鸭

- 目标文件：`fairy-the-ugly-duckling.jpg`
- 年龄段：Preschool
- 场景：A farmyard pond in early spring; a grey fluffy duckling stands at the water's edge, head lowered, watching its own reflection with a sad tilt; behind it, a group of sleek white ducklings turn their backs, and a haughty goose lifts its beak; a mother duck looks on with worried eyes; willow branches, soft grey-green light, gentle melancholy.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A farmyard pond in early spring; a grey fluffy duckling stands at the water's edge, head lowered, watching its own reflection with a sad tilt; behind it, a group of sleek white ducklings turn their backs, and a haughty goose lifts its beak; a mother duck looks on with worried eyes; willow branches, soft grey-green light, gentle melancholy. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 32. 野天鹅

- 目标文件：`fairy-the-wild-swans.jpg`
- 年龄段：Explorer
- 场景：A rocky seaside cave at night; a young woman in a rough grey dress sits by a fire of driftwood, weaving a shirt from prickly nettles, hands red and scratched, jaw set, eyes tired but determined; beside her a pile of finished nettle shirts; through the cave mouth the sea glows silver; eleven swan silhouettes fly across the moon. Cool night palette, warm firelight, quiet endurance.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A rocky seaside cave at night; a young woman in a rough grey dress sits by a fire of driftwood, weaving a shirt from prickly nettles, hands red and scratched, jaw set, eyes tired but determined; beside her a pile of finished nettle shirts; through the cave mouth the sea glows silver; eleven swan silhouettes fly across the moon. Cool night palette, warm firelight, quiet endurance. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 33. 大拇指汤姆

- 目标文件：`fairy-thumb-tom.jpg`
- 年龄段：Growing
- 场景：A patchwork quilt landscape of a farmhouse kitchen at giant scale; a tiny boy the size of a thumb stands on the rim of a teacup, one hand on his hip, the other raised in a confident wave, expression cheeky and bold; a huge spoon and a steaming teapot behind him; a cat's curious eye peers in from the corner. Warm homely light, whimsical scale play.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A patchwork quilt landscape of a farmhouse kitchen at giant scale; a tiny boy the size of a thumb stands on the rim of a teacup, one hand on his hip, the other raised in a confident wave, expression cheeky and bold; a huge spoon and a steaming teapot behind him; a cat's curious eye peers in from the corner. Warm homely light, whimsical scale play. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 34. 拇指姑娘

- 目标文件：`fairy-thumbelina.jpg`
- 年龄段：Growing
- 场景：A giant flower blossom serving as a tiny house; a tiny girl in a petal dress with a leaf hat stands on the flower's edge, one hand lifted to the wind, looking up with wonder; beside her a small swallow with a bandaged wing rests on a leaf, head tilted affectionately; a world of enormous grass blades and flowers surrounds them. Warm golden-green light, dew drops, dreamy scale.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A giant flower blossom serving as a tiny house; a tiny girl in a petal dress with a leaf hat stands on the flower's edge, one hand lifted to the wind, looking up with wonder; beside her a small swallow with a bandaged wing rests on a leaf, head tilted affectionately; a world of enormous grass blades and flowers surrounds them. Warm golden-green light, dew drops, dreamy scale. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 35. 大拇指汤姆

- 目标文件：`fairy-tom-thumb.jpg`
- 年龄段：Preschool
- 场景：A country road with a horse-drawn cart; a tiny boy the size of a thumb sits inside the horse's ear, leaning out with both hands cupped around his mouth, shouting directions to the horse, cheeks puffed, expression gleeful; the farmer on the cart looks around in confusion, scratching his hat. Wheat field, blue sky, playful scale contrast.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A country road with a horse-drawn cart; a tiny boy the size of a thumb sits inside the horse's ear, leaning out with both hands cupped around his mouth, shouting directions to the horse, cheeks puffed, expression gleeful; the farmer on the cart looks around in confusion, scratching his hat. Wheat field, blue sky, playful scale contrast. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 36. 十二个月

- 目标文件：`fairy-twelve-months.jpg`
- 年龄段：Growing
- 场景：A snowy forest clearing where a ring of twelve cloaked figures stands around a bonfire, each in a different colour robe from white to deep green to gold; in the centre one tall grey-bearded figure in a winter cloak gestures, and a patch of spring has bloomed through the snow at his feet: green shoots and red strawberries; a small girl in a thin coat kneels to gather them, eyes shining. Magical warm-cold contrast.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A snowy forest clearing where a ring of twelve cloaked figures stands around a bonfire, each in a different colour robe from white to deep green to gold; in the centre one tall grey-bearded figure in a winter cloak gestures, and a patch of spring has bloomed through the snow at his feet: green shoots and red strawberries; a small girl in a thin coat kneels to gather them, eyes shining. Magical warm-cold contrast. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 37. 丑小鸭

- 目标文件：`fairy-ugly-duckling.jpg`
- 年龄段：Preschool
- 场景：A still lake at spring dawn; a graceful white swan glides on the water, neck arched, wings slightly raised, head bent to look at its own reflection with a surprised, joyful expression; in the background a flock of swans flies up; on the shore, three ducks watch with open beaks. Soft pink and gold sky, mist on the water, hopeful mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A still lake at spring dawn; a graceful white swan glides on the water, neck arched, wings slightly raised, head bent to look at its own reflection with a surprised, joyful expression; in the background a flock of swans flies up; on the shore, three ducks watch with open beaks. Soft pink and gold sky, mist on the water, hopeful mood. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 38. 勇敢的小裁缝

- 目标文件：`fairy-valiant-little-tailor.jpg`
- 年龄段：Growing
- 场景：A country road; a jaunty little tailor in a green coat and feathered cap stands with hands on hips, chest out, showing off a wide belt with seven small embroidered marks; around him scattered seven flies on the ground; a huge bearded giant looms behind, leaning down with wide eyes and open mouth, clearly alarmed. Bright daylight, comic scale contrast.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A country road; a jaunty little tailor in a green coat and feathered cap stands with hands on hips, chest out, showing off a wide belt with seven small embroidered marks; around him scattered seven flies on the ground; a huge bearded giant looms behind, leaning down with wide eyes and open mouth, clearly alarmed. Bright daylight, comic scale contrast. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 39. 野天鹅

- 目标文件：`fairy-wild-swans.jpg`
- 年龄段：Growing
- 场景：A rocky shore at dusk; a young woman in a plain dress kneels among nettles, weaving them into a shirt, hands bleeding, expression patient and steadfast; behind her eleven white swans with golden crowns wait on the water, necks turned toward her; a bundle of finished shirts rests on a rock. Grey-blue sea, low light, quiet sacrifice.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A rocky shore at dusk; a young woman in a plain dress kneels among nettles, weaving them into a shirt, hands bleeding, expression patient and steadfast; behind her eleven white swans with golden crowns wait on the water, necks turned toward her; a bundle of finished shirts rests on a rock. Grey-blue sea, low light, quiet sacrifice. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 40. 七只小山羊

- 目标文件：`fairy-wolf-and-seven-kids.jpg`
- 年龄段：Preschool
- 场景：A cottage door inside; seven little white goats in simple clothes huddle together, one peeking into a big flour sack, another pointing at the door with a shaking hoof, all with wide eyes and open mouths; through the window the silhouette of a grey wolf with a chalk-white paw retreats; a kettle whistles on the stove, a sewing basket on the table. Warm interior, comic tension.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A cottage door inside; seven little white goats in simple clothes huddle together, one peeking into a big flour sack, another pointing at the door with a shaking hoof, all with wide eyes and open mouths; through the window the silhouette of a grey wolf with a chalk-white paw retreats; a kettle whistles on the stove, a sewing basket on the table. Warm interior, comic tension. Setting and costume: Classic European storybook setting: castles, cottages, deep forest, cobbled paths, possible soft magic sparks; clothing follows the story's own culture. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

---

<a id="myth"></a>

## 神话传说 · Myths & Legends（34 条）

> 分类键：`myth`｜场景与服饰约束见 README 第四节。

### 1. 梁山伯与祝英台

- 目标文件：`myth-butterfly-lovers.jpg`
- 年龄段：Explorer
- 场景：A spring meadow full of blossom; two scholars' robes lie folded on the grass, one blue and one pale pink, while two luminous butterflies, one deep blue and one warm rose, spiral upward together above the flowers, wings catching sunlight; petals drift, soft golden backlight, gentle romantic mood, no people visible.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A spring meadow full of blossom; two scholars' robes lie folded on the grass, one blue and one pale pink, while two luminous butterflies, one deep blue and one warm rose, spiral upward together above the flowers, wings catching sunlight; petals drift, soft golden backlight, gentle romantic mood, no people visible. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 2. 仓颉造字

- 目标文件：`myth-cangjie-creates-writing.jpg`
- 年龄段：Growing
- 场景：A riverside mudflat at dawn; a bearded man in a rough animal-hide cloak over a hemp robe crouches, tracing shapes in the wet sand with a stick, eyes alight with sudden discovery; around his marks, clear bird and animal footprints pattern the mud; a clay pot and a knotted rope lie abandoned behind him. Low golden light, reeds, mist.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A riverside mudflat at dawn; a bearded man in a rough animal-hide cloak over a hemp robe crouches, tracing shapes in the wet sand with a stick, eyes alight with sudden discovery; around his marks, clear bird and animal footprints pattern the mud; a clay pot and a knotted rope lie abandoned behind him. Low golden light, reeds, mist. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 3. 仓颉造字

- 目标文件：`myth-cangjie-invents-writing.jpg`
- 年龄段：Growing
- 场景：A snowy plain under a pale sky; a man in a fur-lined hide cloak kneels in fresh snow, one hand sweeping aside powder to reveal clear bird tracks, the other holding a sharpened stick; he looks up at the sky with wide inspired eyes; a scroll of knotted cords lies forgotten at his knee. Blue-white tones, soft snowfall, distant mountains.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A snowy plain under a pale sky; a man in a fur-lined hide cloak kneels in fresh snow, one hand sweeping aside powder to reveal clear bird tracks, the other holding a sharpened stick; he looks up at the sky with wide inspired eyes; a scroll of knotted cords lies forgotten at his knee. Blue-white tones, soft snowfall, distant mountains. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 4. 鲤鱼跳龙门

- 目标文件：`myth-carp-leaps-over-dragon-gate.jpg`
- 年龄段：Growing
- 场景：A towering rocky gorge with a waterfall thundering down; a small orange carp arcs through the air at the top of the falls, body curving, scales flashing gold as light breaks over it, tiny dragon horns just beginning to shimmer on its head; spray and mist, rainbows in the water droplets, many other carp watching from the churning pool below.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A towering rocky gorge with a waterfall thundering down; a small orange carp arcs through the air at the top of the falls, body curving, scales flashing gold as light breaks over it, tiny dragon horns just beginning to shimmer on its head; spray and mist, rainbows in the water droplets, many other carp watching from the churning pool below. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 5. 嫦娥奔月

- 目标文件：`myth-chang-e-flies-to-the-moon.jpg`
- 年龄段：Growing
- 场景：A moonlit courtyard with an osmanthus tree; a woman in flowing white and pale-blue layered robes with long ribbons and an elaborate high bun floats upward, sleeves and hair streaming, one hand reaching back down, expression both wonder and sorrow; below, a strong archer in a red-brown robe runs forward with arms outstretched. A huge round moon fills the sky, silver light.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A moonlit courtyard with an osmanthus tree; a woman in flowing white and pale-blue layered robes with long ribbons and an elaborate high bun floats upward, sleeves and hair streaming, one hand reaching back down, expression both wonder and sorrow; below, a strong archer in a red-brown robe runs forward with arms outstretched. A huge round moon fills the sky, silver light. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 6. 嫦娥奔月

- 目标文件：`myth-change-flies-to-the-moon.jpg`
- 年龄段：Explorer
- 场景：Night sky above tiled rooftops: a woman in layered white silk with wide trailing sleeves rises toward a vast bright moon, her long ribbons spiralling around her, face turned back with a wistful smile; far below a man in a dark archer's robe stands alone in a courtyard, one arm lifted, the other holding a small empty box. Stars, drifting clouds, silver-blue palette.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: Night sky above tiled rooftops: a woman in layered white silk with wide trailing sleeves rises toward a vast bright moon, her long ribbons spiralling around her, face turned back with a wistful smile; far below a man in a dark archer's robe stands alone in a courtyard, one arm lifted, the other holding a small empty box. Stars, drifting clouds, silver-blue palette. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 7. 牛郎织女

- 目标文件：`myth-cowherd-and-weaver-girl.jpg`
- 年龄段：Explorer
- 场景：A bridge of hundreds of magpies arcs across the starry Milky Way; on it a young man in a simple blue farmhand robe and a woman in a soft pink and lilac immortal's dress with flowing ribbons run toward each other, hands outstretched, faces bright with joy; magpies crowd the bridge edges, wings spread, a river of stars behind.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A bridge of hundreds of magpies arcs across the starry Milky Way; on it a young man in a simple blue farmhand robe and a woman in a soft pink and lilac immortal's dress with flowing ribbons run toward each other, hands outstretched, faces bright with joy; magpies crowd the bridge edges, wings spread, a river of stars behind. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 8. 龙王的传说

- 目标文件：`myth-dragon-king.jpg`
- 年龄段：Growing
- 场景：A dragon king's temple courtyard during a drought ceremony; farmers in straw capes and patched robes beat a drum and hold up incense, faces hopeful and anxious; above the tiled roof a majestic oriental dragon with turquoise scales and golden antlers coils through low rain clouds, one claw raised, rain beginning to fall in silver sheets. Cracked earth, wilting crops, dramatic sky.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A dragon king's temple courtyard during a drought ceremony; farmers in straw capes and patched robes beat a drum and hold up incense, faces hopeful and anxious; above the tiled roof a majestic oriental dragon with turquoise scales and golden antlers coils through low rain clouds, one claw raised, rain beginning to fall in silver sheets. Cracked earth, wilting crops, dramatic sky. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 9. 钻木取火

- 目标文件：`myth-fire-from-wood.jpg`
- 年龄段：Growing
- 场景：A cave mouth at dusk in prehistoric times; a bearded man in a rough hide tunic kneels over a wooden stick spun between his palms into a flat piece of dry wood, cheeks puffed with effort, a tiny thread of smoke rising; beside him a pile of dry tinder and flint stones, and behind him a family in fur wraps watches with wide eyes. Warm ember glow, cave walls.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A cave mouth at dusk in prehistoric times; a bearded man in a rough hide tunic kneels over a wooden stick spun between his palms into a flat piece of dry wood, cheeks puffed with effort, a tiny thread of smoke rising; beside him a pile of dry tinder and flint stones, and behind him a family in fur wraps watches with wide eyes. Warm ember glow, cave walls. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 10. 大闹天宫

- 目标文件：`myth-havoc-in-heaven.jpg`
- 年龄段：Explorer
- 场景：A celestial peach orchard in the clouds; a monkey king in golden armour with a red cape and a feathered headband sits high in a blossoming peach tree, one leg swinging, biting into a huge peach with a defiant grin; below, celestial guards in silver armour tumble backwards among scattered peach baskets, and a golden cudgel lies casually across a branch. Pink petals, cloud sea.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A celestial peach orchard in the clouds; a monkey king in golden armour with a red cape and a feathered headband sits high in a blossoming peach tree, one leg swinging, biting into a huge peach with a defiant grin; below, celestial guards in silver armour tumble backwards among scattered peach baskets, and a golden cudgel lies casually across a branch. Pink petals, cloud sea. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 11. 后羿射日

- 目标文件：`myth-houyi-shoots-the-suns.jpg`
- 年龄段：Growing
- 场景：A bare rocky summit above cracked earth; a powerful archer in a red-brown leather tunic and fur boots draws a huge bow to full tension, one eye shut, jaw clenched, muscles straining; in the burning sky nine blazing suns with angry faces are struck and falling as streaks of fire, one sun remains behind, pale and frightened. Heat haze, dry wind, dramatic light.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A bare rocky summit above cracked earth; a powerful archer in a red-brown leather tunic and fur boots draws a huge bow to full tension, one eye shut, jaw clenched, muscles straining; in the burning sky nine blazing suns with angry faces are struck and falling as streaks of fire, one sun remains behind, pale and frightened. Heat haze, dry wind, dramatic light. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 12. 精卫填海

- 目标文件：`myth-jingwei-fills-the-sea.jpg`
- 年龄段：Growing
- 场景：A rocky cliff above a vast blue sea; a small bird with a white head, red beak and dark wings hovers with a pebble and a twig in its beak, determined eyes fixed on the water far below; behind it green mountains; below, an enormous wave curls up with a sneering foam face. Strong wind, spray, dramatic scale contrast between tiny bird and huge ocean.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A rocky cliff above a vast blue sea; a small bird with a white head, red beak and dark wings hovers with a pebble and a twig in its beak, determined eyes fixed on the water far below; behind it green mountains; below, an enormous wave curls up with a sneering foam face. Strong wind, spray, dramatic scale contrast between tiny bird and huge ocean. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 13. 夸父追日

- 目标文件：`myth-kuafu-chases-the-sun.jpg`
- 年龄段：Explorer
- 场景：A giant in a simple hide wrap strides across a vast landscape, one enormous hand reaching toward a huge glowing sun low on the horizon, face streaked with sweat but grinning with resolve; beneath his feet rivers look like silver threads, mountains like small stones, a dry riverbed behind him; his wooden staff planted in the ground has begun sprouting peach blossoms. Golden-red sky.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A giant in a simple hide wrap strides across a vast landscape, one enormous hand reaching toward a huge glowing sun low on the horizon, face streaked with sweat but grinning with resolve; beneath his feet rivers look like silver threads, mountains like small stones, a dry riverbed behind him; his wooden staff planted in the ground has begun sprouting peach blossoms. Golden-red sky. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 14. 白蛇传

- 目标文件：`myth-legend-of-white-snake.jpg`
- 年龄段：Explorer
- 场景：A stone-arched bridge over a misty West Lake; a graceful woman in flowing white robes with a jade hairpin holds a folded oil-paper umbrella, smiling gently; opposite her a young scholar in a pale blue robe and scholar's cap bows slightly, startled and charmed; willows trail in the water, lotus leaves, distant pagoda in the mist, soft rain.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A stone-arched bridge over a misty West Lake; a graceful woman in flowing white robes with a jade hairpin holds a folded oil-paper umbrella, smiling gently; opposite her a young scholar in a pale blue robe and scholar's cap bows slightly, startled and charmed; willows trail in the water, lotus leaves, distant pagoda in the mist, soft rain. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 15. 宝莲灯

- 目标文件：`myth-lotus-lantern.jpg`
- 年龄段：Growing
- 场景：At the foot of a huge mountain split by a glowing crack; a determined boy in a red and gold short robe and cloth boots grips a luminous lotus-shaped lantern in one hand and a glowing axe in the other, feet planted, face streaked with dust but fierce with hope; warm light pours from the split rock, illuminating his face. Rocks, dust, dramatic glow.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: At the foot of a huge mountain split by a glowing crack; a determined boy in a red and gold short robe and cloth boots grips a luminous lotus-shaped lantern in one hand and a glowing axe in the other, feet planted, face streaked with dust but fierce with hope; warm light pours from the split rock, illuminating his face. Rocks, dust, dramatic glow. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 16. 哪吒闹海

- 目标文件：`myth-nezha-stirs-the-sea.jpg`
- 年龄段：Explorer
- 场景：Raging sea with towering waves; a small fierce boy with two hair buns, a red silk sash streaming around him, a golden ring in one hand, mid-leap above the water, expression bold and delighted; below, dragon soldiers with fish and crab features tumble backwards in panic, and a huge green dragon head rears up with bulging eyes. Spray, foam, dynamic diagonal motion.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: Raging sea with towering waves; a small fierce boy with two hair buns, a red silk sash streaming around him, a golden ring in one hand, mid-leap above the water, expression bold and delighted; below, dragon soldiers with fish and crab features tumble backwards in panic, and a huge green dragon head rears up with bulging eyes. Spray, foam, dynamic diagonal motion. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 17. 女娲造人

- 目标文件：`myth-nuwa-creates-humans.jpg`
- 年龄段：Preschool
- 场景：The bank of a wide yellow river at soft dawn; a goddess with a human head and a serpent's lower body, dressed in flowing pale green and gold robes, kneels and shapes a small clay figure with gentle hands, her face full of tenderness; around her feet dozens of tiny laughing clay people dance and clap. Wet clay, reeds, warm light, a vine dipped in mud nearby.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: The bank of a wide yellow river at soft dawn; a goddess with a human head and a serpent's lower body, dressed in flowing pale green and gold robes, kneels and shapes a small clay figure with gentle hands, her face full of tenderness; around her feet dozens of tiny laughing clay people dance and clap. Wet clay, reeds, warm light, a vine dipped in mud nearby. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 18. 女娲补天

- 目标文件：`myth-nuwa-mends-the-sky.jpg`
- 年龄段：Growing
- 场景：A vast cracked sky with a jagged hole pouring down light and water; a goddess with a serpent's tail and flowing robes stands on a peak, holding a glowing mass of five-coloured molten stone in both hands, its light reflecting on her determined face; below, a giant turtle's four legs stand as pillars at the corners of the earth. Rainbow colours, steam, dramatic clouds.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A vast cracked sky with a jagged hole pouring down light and water; a goddess with a serpent's tail and flowing robes stands on a peak, holding a glowing mass of five-coloured molten stone in both hands, its light reflecting on her determined face; below, a giant turtle's four legs stand as pillars at the corners of the earth. Rainbow colours, steam, dramatic clouds. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 19. 十二生肖的来历

- 目标文件：`myth-origin-of-the-zodiac.jpg`
- 年龄段：Preschool
- 场景：A celestial river crossing under a golden sky; an honest brown ox wades steadily through the water, and a tiny clever mouse sits perched on its horn, ready to leap; on the far bank a jade emperor in gold-trimmed robes stands beside twelve floating banners, one for each animal; a tiger, rabbit, dragon and snake are visible approaching in the distance. Cloud sea, festive mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A celestial river crossing under a golden sky; an honest brown ox wades steadily through the water, and a tiny clever mouse sits perched on its horn, ready to leap; on the far bank a jade emperor in gold-trimmed robes stands beside twelve floating banners, one for each animal; a tiger, rabbit, dragon and snake are visible approaching in the distance. Cloud sea, festive mood. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 20. 盘古开天辟地

- 目标文件：`myth-pan-gu-creates-the-world.jpg`
- 年龄段：Explorer
- 场景：A colossal giant in a simple hide wrap stands between a rising sky and a thickening earth, arms braced wide and legs planted, muscles straining, face calm and enduring; a massive axe lies at his feet; above him swirling light separates from heavy dark matter, stars beginning to form. Epic scale, deep blue-gold palette, cosmic drama.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A colossal giant in a simple hide wrap stands between a rising sky and a thickening earth, arms braced wide and legs planted, muscles straining, face calm and enduring; a massive axe lies at his feet; above him swirling light separates from heavy dark matter, stars beginning to form. Epic scale, deep blue-gold palette, cosmic drama. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 21. 盘古开天辟地

- 目标文件：`myth-pangu-creates-the-world.jpg`
- 年龄段：Growing
- 场景：A colossal giant in a hide wrap holds the sky up with both arms, head tilted back, jaw set, as the heavens arch higher and the earth spreads below; his long hair blows into storm clouds, his breath becomes wind, and around him mountains rise from his form. A giant axe rests against a peak. Vast cosmic landscape, cool blues and warm gold light.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A colossal giant in a hide wrap holds the sky up with both arms, head tilted back, jaw set, as the heavens arch higher and the earth spreads below; his long hair blows into storm clouds, his breath becomes wind, and around him mountains rise from his form. A giant axe rests against a peak. Vast cosmic landscape, cool blues and warm gold light. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 22. 神农尝百草

- 目标文件：`myth-shennong-tastes-herbs.jpg`
- 年龄段：Explorer
- 场景：A terraced mountain slope full of wild plants; a lean man in a rough hemp tunic and straw sandals kneels, chewing a green leaf with a thoughtful, slightly wry expression, one hand already reaching for another herb; a woven basket of leaves and roots at his side, a jade-green glow faintly surrounding his body; distant fields of grain and farmers. Bright daylight.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A terraced mountain slope full of wild plants; a lean man in a rough hemp tunic and straw sandals kneels, chewing a green leaf with a thoughtful, slightly wry expression, one hand already reaching for another herb; a woven basket of leaves and roots at his side, a jade-green glow faintly surrounding his body; distant fields of grain and farmers. Bright daylight. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 23. 日月潭的传说

- 目标文件：`myth-sun-moon-lake.jpg`
- 年龄段：Growing
- 场景：A dark mountain lake under a starless sky; a brave young hunter in a simple hide vest and a young woman in a patterned cloth dress stand back to back on a rock, holding a golden axe and a golden scissors up toward two enormous dark dragons coiling in the sky; in the dragons' claws glow a sun and a moon. Tension, moonlight, spray, dramatic composition.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A dark mountain lake under a starless sky; a brave young hunter in a simple hide vest and a young woman in a patterned cloth dress stand back to back on a rock, holding a golden axe and a golden scissors up toward two enormous dark dragons coiling in the sky; in the dragons' claws glow a sun and a moon. Tension, moonlight, spray, dramatic composition. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 24. 牛郎织女

- 目标文件：`myth-the-cowherd-and-the-weaver.jpg`
- 年龄段：Growing
- 场景：Two figures separated by a shimmering silver river of stars: on the left bank a young man in a blue farmhand robe holds the reins of an ox, reaching out helplessly; on the right a woman in soft pink immortal robes with long ribbons reaches back, tears in her eyes; between them a flock of magpies flies in, already forming a bridge. Deep night blue, glowing stars.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: Two figures separated by a shimmering silver river of stars: on the left bank a young man in a blue farmhand robe holds the reins of an ox, reaching out helplessly; on the right a woman in soft pink immortal robes with long ribbons reaches back, tears in her eyes; between them a flock of magpies flies in, already forming a bridge. Deep night blue, glowing stars. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 25. 八仙过海

- 目标文件：`myth-the-eight-immortals.jpg`
- 年龄段：Explorer
- 场景：A turbulent sea under a bright sky, with eight colourful figures each riding their own vessel across the waves: a gourd, a flower basket, a paper donkey, a sword, a fan, a lotus, a flute and a castanet; each immortal wears distinct flowing robes in jade, crimson, gold and white, laughing and gesturing to one another; sea spray, cloud, a distant banquet pavilion on a cliff.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A turbulent sea under a bright sky, with eight colourful figures each riding their own vessel across the waves: a gourd, a flower basket, a paper donkey, a sword, a fan, a lotus, a flute and a castanet; each immortal wears distinct flowing robes in jade, crimson, gold and white, laughing and gesturing to one another; sea spray, cloud, a distant banquet pavilion on a cliff. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 26. 宝莲灯

- 目标文件：`myth-the-lotus-lamp.jpg`
- 年龄段：Explorer
- 场景：A young boy in a red and gold short robe stands on a mountain trail with a glowing lotus lantern raised high, its warm light illuminating a narrow path between dark cliffs; he carries a small pack and a wooden staff, expression tired but determined, chin lifted; behind him a deep valley and a distant peak split by a beam of light. Heroic, warm glow.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A young boy in a red and gold short robe stands on a mountain trail with a glowing lotus lantern raised high, its warm light illuminating a narrow path between dark cliffs; he carries a small pack and a wooden staff, expression tired but determined, chin lifted; behind him a deep valley and a distant peak split by a beam of light. Heroic, warm glow. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 27. 年兽的故事

- 目标文件：`myth-the-nian-monster.jpg`
- 年龄段：Preschool
- 场景：A snowy village lane on New Year's Eve; red couplets on every door, red lanterns glowing, children in padded red jackets holding their ears as firecrackers pop with bright sparks; at the edge of the frame a big blue-green furry monster with round eyes and small horns turns away, covering its face with a paw, scared of the noise and red colour. Festive, warm, playful.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A snowy village lane on New Year's Eve; red couplets on every door, red lanterns glowing, children in padded red jackets holding their ears as firecrackers pop with bright sparks; at the edge of the frame a big blue-green furry monster with round eyes and small horns turns away, covering its face with a paw, scared of the noise and red colour. Festive, warm, playful. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 28. 年的来历

- 目标文件：`myth-the-story-of-nian.jpg`
- 年龄段：Preschool
- 场景：A village gate at night in winter; a family in padded cotton jackets hangs a red couplet on the door and lights a red lantern while a child waves a sparkler; just outside the gate a shaggy blue-grey monster with wide frightened eyes recoils from the red light and sparks, one paw raised. Snow, warm orange glow, cheerful and slightly comic.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A village gate at night in winter; a family in padded cotton jackets hangs a red couplet on the door and lights a red lantern while a child waves a sparkler; just outside the gate a shaggy blue-grey monster with wide frightened eyes recoils from the red light and sparks, one paw raised. Snow, warm orange glow, cheerful and slightly comic. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 29. 十二生肖的故事

- 目标文件：`myth-the-twelve-zodiac.jpg`
- 年龄段：Preschool
- 场景：A celestial race finish line on a cloud bank; a sturdy brown ox steps onto the shore while a tiny mouse leaps from its horn toward the finish ribbon, both mid-action, the mouse's face gleeful; behind them a tiger bounds through clouds, a rabbit hops, and a dragon coils above; jade emperor in gold robes watches with an amused smile, holding a scroll. Festive colours, clouds, motion.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A celestial race finish line on a cloud bank; a sturdy brown ox steps onto the shore while a tiny mouse leaps from its horn toward the finish ribbon, both mid-action, the mouse's face gleeful; behind them a tiger bounds through clouds, a rabbit hops, and a dragon coils above; jade emperor in gold robes watches with an amused smile, holding a scroll. Festive colours, clouds, motion. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 30. 白蛇传

- 目标文件：`myth-the-white-snake.jpg`
- 年龄段：Explorer
- 场景：A herbal medicine shop on a Hangzhou street; a gentle woman in white robes with a jade pin grinds herbs with a mortar and pestle, smiling warmly at an old woman patient; a young scholar in a blue robe arranges drawers of herbs behind the counter, glancing at her fondly; shelves of drawers, hanging dried herbs, warm afternoon light through the door.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A herbal medicine shop on a Hangzhou street; a gentle woman in white robes with a jade pin grinds herbs with a mortar and pestle, smiling warmly at an old woman patient; a young scholar in a blue robe arranges drawers of herbs behind the counter, glancing at her fondly; shelves of drawers, hanging dried herbs, warm afternoon light through the door. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 31. 三打白骨精

- 目标文件：`myth-three-battles-with-white-bone-demon.jpg`
- 年龄段：Explorer
- 场景：A mountain path with bare twisted trees; a monkey-faced warrior in golden armour and red cape stands protectively in front of a monk in an orange-brown robe and a pig-faced companion, his golden cudgel raised, eyes glowing with a fiery golden light as he stares down a swirling white skeletal shape half-hidden in mist; his expression is fierce and certain.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A mountain path with bare twisted trees; a monkey-faced warrior in golden armour and red cape stands protectively in front of a monk in an orange-brown robe and a pig-faced companion, his golden cudgel raised, eyes glowing with a fiery golden light as he stares down a swirling white skeletal shape half-hidden in mist; his expression is fierce and certain. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 32. 吴刚伐桂

- 目标文件：`myth-wu-gang-chops-the-cassia.jpg`
- 年龄段：Explorer
- 场景：A moon palace courtyard with a huge osmanthus tree, its bark scarred with countless axe marks yet perfectly smooth again; a muscular man in a simple grey work robe swings a large axe, sleeves rolled, sweat on his brow, expression weary but stubborn; silvery petals drift down, a jade rabbit watches from a stone bench. Cool silver-blue light, quiet melancholy.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A moon palace courtyard with a huge osmanthus tree, its bark scarred with countless axe marks yet perfectly smooth again; a muscular man in a simple grey work robe swings a large axe, sleeves rolled, sweat on his brow, expression weary but stubborn; silvery petals drift down, a jade rabbit watches from a stone bench. Cool silver-blue light, quiet melancholy. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 33. 大禹治水

- 目标文件：`myth-yu-controls-the-flood.jpg`
- 年龄段：Explorer
- 场景：A flooded river plain with workers in simple hemp clothes digging a channel with wooden spades; a tall man in a dark blue robe with mud-stained hem stands on a dyke pointing along the channel's line, face weathered and resolute, holding a measuring cord; water flows into the new channel toward distant hills. Grey sky, mist, earth tones, determination.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A flooded river plain with workers in simple hemp clothes digging a channel with wooden spades; a tall man in a dark blue robe with mud-stained hem stands on a dyke pointing along the channel's line, face weathered and resolute, holding a measuring cord; water flows into the new channel toward distant hills. Grey sky, mist, earth tones, determination. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

### 34. 大禹治水

- 目标文件：`myth-yu-tames-the-flood.jpg`
- 年龄段：Explorer
- 场景：A mountain gorge where a wide river is being guided into a carved channel; a determined man in a plain dark robe with rolled sleeves stands ankle-deep in mud, one hand on a wooden survey pole, the other gesturing along the water's path; labourers behind him carry baskets of stone; behind him, on a distant hill, a small house with a lit window that he is walking away from. Overcast, earthy palette.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A mountain gorge where a wide river is being guided into a carved channel; a determined man in a plain dark robe with rolled sleeves stands ankle-deep in mud, one hand on a wooden survey pole, the other gesturing along the water's path; labourers behind him carry baskets of stone; behind him, on a distant hill, a small house with a lit window that he is walking away from. Overcast, earthy palette. Setting and costume: Ancient Chinese mythological setting: flowing robes and armour, auspicious clouds, immortal peaks, palace halls, and oriental dragons, phoenixes or other mythic beasts. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark, modern clothing, modern buildings, suits, t-shirts, jeans, sneakers, cars, skyscrapers
```

---

<a id="science"></a>

## 科普启蒙 · Science（43 条）

> 分类键：`science`｜场景与服饰约束见 README 第四节。

### 1. 护树小卫士

- 目标文件：`character-protect-the-tree.jpg`
- 年龄段：Growing
- 场景：A residential courtyard with a newly planted sapling supported by two bamboo stakes and a soft rope tie; two children in school clothes kneel beside it, one holding a small wooden sign painted with the tree's bark, the other carefully tucking soil around the base with a trowel; a watering can and a spade on the grass; nearby adult residents step around the tree instead of leaning on it. Bright spring morning, friendly warm mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A residential courtyard with a newly planted sapling supported by two bamboo stakes and a soft rope tie; two children in school clothes kneel beside it, one holding a small wooden sign painted with the tree's bark, the other carefully tucking soil around the base with a trowel; a watering can and a spade on the grass; nearby adult residents step around the tree instead of leaning on it. Bright spring morning, friendly warm mood. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 2. 关紧的水龙头

- 目标文件：`character-save-water.jpg`
- 年龄段：Growing
- 场景：A bright school washroom; a dripping faucet with a large shimmering droplet hanging from it, caught mid-fall, ripples in the basin; a small girl in a school uniform reaches out with both hands to turn the tap handle firmly, expression earnest; a bucket of water and a potted plant beside the sink; a poster-free plain wall, clean tiles, daylight from a window.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A bright school washroom; a dripping faucet with a large shimmering droplet hanging from it, caught mid-fall, ripples in the basin; a small girl in a school uniform reaches out with both hands to turn the tap handle firmly, expression earnest; a bucket of water and a potted plant beside the sink; a poster-free plain wall, clean tiles, daylight from a window. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 3. 蚂蚁搬家要下雨吗

- 目标文件：`science-ants-move-home.jpg`
- 年龄段：Growing
- 场景：A cutaway view of a sandy bank: an ant colony's tunnels visible below, the lower chambers already wet with seeping groundwater; above, a column of black ants streams up the slope in a neat line, each carrying a white egg or a seed, antennae alert; a dark cloud bank gathers in the sky behind, and a second, higher nest mound is visible at the top of the bank. Educational cross-section style, earthy palette.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A cutaway view of a sandy bank: an ant colony's tunnels visible below, the lower chambers already wet with seeping groundwater; above, a column of black ants streams up the slope in a neat line, each carrying a white egg or a seed, antennae alert; a dark cloud bank gathers in the sky behind, and a second, higher nest mound is visible at the top of the bank. Educational cross-section style, earthy palette. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 4. 蜜蜂的舞蹈地图

- 目标文件：`science-bee-dance.jpg`
- 年龄段：Growing
- 场景：A close-up cutaway of a honeycomb comb face, wax cells hexagonal and golden; a single honeybee stands on the comb doing a figure-eight waggle dance, drawn with faint motion arcs, abdomen wiggling; three other bees stand facing her, antennae forward, watching attentively; in the background a stylised sun and a stylised flower patch hang like a diagram, a dotted line connecting them. Warm amber palette, clear infographic feel, no text.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A close-up cutaway of a honeycomb comb face, wax cells hexagonal and golden; a single honeybee stands on the comb doing a figure-eight waggle dance, drawn with faint motion arcs, abdomen wiggling; three other bees stand facing her, antennae forward, watching attentively; in the background a stylised sun and a stylised flower patch hang like a diagram, a dotted line connecting them. Warm amber palette, clear infographic feel, no text. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 5. 小鸟的窝

- 目标文件：`science-bird-nests.jpg`
- 年龄段：Preschool
- 场景：A budding spring tree branch showing three different bird nests: a cup-shaped nest of twigs and moss, a hanging woven pouch nest, and a round hole nest in a trunk; a small brown bird carries a tuft of grass in its beak toward the cup nest, another tucks a feather into the lining; inside the nest, three pale blue eggs. Fresh green leaves, soft morning light, clear and friendly.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A budding spring tree branch showing three different bird nests: a cup-shaped nest of twigs and moss, a hanging woven pouch nest, and a round hole nest in a trunk; a small brown bird carries a tuft of grass in its beak toward the cup nest, another tucks a feather into the lining; inside the nest, three pale blue eggs. Fresh green leaves, soft morning light, clear and friendly. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 6. 蝴蝶的一生

- 目标文件：`science-butterfly-life-cycle.jpg`
- 年龄段：Preschool
- 场景：A single milkweed plant divided visually into four stages, arranged on one continuous stem: tiny round eggs on a leaf, a striped caterpillar chewing a leaf edge, a jade-green chrysalis hanging from a twig with golden dots, and an emerged orange monarch butterfly drying its wings; soft motion arcs connect them. Bright meadow background, saturated greens, clear educational composition.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A single milkweed plant divided visually into four stages, arranged on one continuous stem: tiny round eggs on a leaf, a striped caterpillar chewing a leaf edge, a jade-green chrysalis hanging from a twig with golden dots, and an emerged orange monarch butterfly drying its wings; soft motion arcs connect them. Bright meadow background, saturated greens, clear educational composition. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 7. 云朵和雨

- 目标文件：`science-clouds-and-rain.jpg`
- 年龄段：Preschool
- 场景：A cross-section illustration of the water cycle: the sea on the left with wavy lines of vapour rising, a bright sun above; the vapour forming a puffy cloud in the middle with visible tiny droplets clustering inside it; rain falling as blue drops over green hills on the right, a small stream running back to the sea with an arrow curving around. Clean diagrammatic scene with a friendly sun, bright palette, no text.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A cross-section illustration of the water cycle: the sea on the left with wavy lines of vapour rising, a bright sun above; the vapour forming a puffy cloud in the middle with visible tiny droplets clustering inside it; rain falling as blue drops over green hills on the right, a small stream running back to the sea with an arrow curving around. Clean diagrammatic scene with a friendly sun, bright palette, no text. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 8. 珊瑚不是石头

- 目标文件：`science-coral-is-alive.jpg`
- 年龄段：Explorer
- 场景：An underwater reef scene: branches of pink and orange coral shown half as branching hard skeleton and half as a living surface covered in tiny flower-like polyps, one enlarged polyp cutaway revealing a small green algae cell nestled inside it, drawn in a soft magnified circle; a tiny clownfish and a sea turtle nearby; clear turquoise water, sunbeams, educational detail.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: An underwater reef scene: branches of pink and orange coral shown half as branching hard skeleton and half as a living surface covered in tiny flower-like polyps, one enlarged polyp cutaway revealing a small green algae cell nestled inside it, drawn in a soft magnified circle; a tiny clownfish and a sea turtle nearby; clear turquoise water, sunbeams, educational detail. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 9. 萤火虫的小灯笼

- 目标文件：`science-fireflies.jpg`
- 年龄段：Preschool
- 场景：A summer meadow at night; several fireflies hover above tall grass, each with a soft warm-yellow glowing abdomen, light halos trailing behind them; one enlarged firefly shown in cross-section on the left, its glowing organ highlighted with a soft round glow and tiny bubbles of air, drawn as a magnified inset; a child crouches admiring from a distance without touching. Deep blue-green night, warm gold accents, gentle wonder.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A summer meadow at night; several fireflies hover above tall grass, each with a soft warm-yellow glowing abdomen, light halos trailing behind them; one enlarged firefly shown in cross-section on the left, its glowing organ highlighted with a soft round glow and tiny bubbles of air, drawn as a magnified inset; a child crouches admiring from a distance without touching. Deep blue-green night, warm gold accents, gentle wonder. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 10. 一年为什么有四季

- 目标文件：`science-four-seasons.jpg`
- 年龄段：Growing
- 场景：The sun at the centre with a large tilted globe on an elliptical orbit shown as a dotted ring; four positions of the globe are labelled by scene instead of text: snowy trees, blooming flowers, bright wheat, falling orange leaves; one side of the globe is bathed in golden sunlight, the other in shadow; small arrows show rotation and orbit. Clean cosmic illustration, deep blue with warm sun, clear geometry.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: The sun at the centre with a large tilted globe on an elliptical orbit shown as a dotted ring; four positions of the globe are labelled by scene instead of text: snowy trees, blooming flowers, bright wheat, falling orange leaves; one side of the globe is bathed in golden sunlight, the other in shadow; small arrows show rotation and orbit. Clean cosmic illustration, deep blue with warm sun, clear geometry. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 11. 磁铁的好朋友

- 目标文件：`science-friends-of-magnets.jpg`
- 年龄段：Growing
- 场景：A child's wooden table with a simple experiment laid out: an arch-shaped red and blue horseshoe magnet held by a small hand, paper clips and iron nails leaping toward its poles in mid-air, a wooden block and an eraser and a plastic toy sitting unmoved nearby; a sheet of paper with clips beneath it, the magnet above, an arrow showing the clips sliding along. Bright natural light, playful scientific mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A child's wooden table with a simple experiment laid out: an arch-shaped red and blue horseshoe magnet held by a small hand, paper clips and iron nails leaping toward its poles in mid-air, a wooden block and an eraser and a plastic toy sitting unmoved nearby; a sheet of paper with clips beneath it, the magnet above, an arrow showing the clips sliding along. Bright natural light, playful scientific mood. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 12. 青蛙的成长

- 目标文件：`science-frog-life-cycle.jpg`
- 年龄段：Preschool
- 场景：A pond scene in a single arc: a cluster of jelly-like frog eggs on a reed, a black tadpole with a long tail, a larger tadpole with tiny hind legs, then front legs and a shortening tail, then a small green frog sitting on a lily pad; dotted motion arcs connect the stages; lily pads, dragonflies, clear shallow water. Bright greens, friendly educational composition.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A pond scene in a single arc: a cluster of jelly-like frog eggs on a reed, a black tadpole with a long tail, a larger tadpole with tiny hind legs, then front legs and a shortening tail, then a small green frog sitting on a lily pad; dotted motion arcs connect the stages; lily pads, dragonflies, clear shallow water. Bright greens, friendly educational composition. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 13. 蚂蚁的家

- 目标文件：`science-home-of-ants.jpg`
- 年龄段：Preschool
- 场景：A cutaway of a grassy mound: a large underground ant nest shown in cross-section with branching tunnels and round chambers, one chamber full of white eggs and larvae tended by worker ants, one chamber storing seeds, one with a larger queen ant surrounded by attendants; above ground, a small hole entrance with a guarded ant, and a second ant carrying a crumb. Sunny meadow, earthy palette, clear structure.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A cutaway of a grassy mound: a large underground ant nest shown in cross-section with branching tunnels and round chambers, one chamber full of white eggs and larvae tended by worker ants, one chamber storing seeds, one with a larger queen ant surrounded by attendants; above ground, a small hole entrance with a guarded ant, and a second ant carrying a crumb. Sunny meadow, earthy palette, clear structure. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 14. 蜜蜂怎样采蜜

- 目标文件：`science-how-bees-make-honey.jpg`
- 年龄段：Growing
- 场景：A split scene: on the left a bee hovers at a flower, its long tubular tongue dipping into the bloom, pollen dusting its legs, a dotted line showing nectar flowing into its abdomen; on the right a cutaway of a honeycomb with bees fanning their wings over open cells, water vapour lines rising, golden honey glistening in the cells. Warm amber and green palette, clear cause-and-effect composition.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A split scene: on the left a bee hovers at a flower, its long tubular tongue dipping into the bloom, pollen dusting its legs, a dotted line showing nectar flowing into its abdomen; on the right a cutaway of a honeycomb with bees fanning their wings over open cells, water vapour lines rising, golden honey glistening in the cells. Warm amber and green palette, clear cause-and-effect composition. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 15. 四季是怎样来的

- 目标文件：`science-how-seasons-come.jpg`
- 年龄段：Growing
- 场景：A diagrammatic cosmic scene: a large tilted globe on an orbit around the sun, shown at two positions; at the summer position the upper hemisphere faces the sun with bright golden rays, at the winter position the rays strike at a slant and the hemisphere is shadowed blue; in between, small seasonal vignettes of blossom, wheat, and snow. Clean dark blue space, luminous sun, crisp geometry, no text.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A diagrammatic cosmic scene: a large tilted globe on an orbit around the sun, shown at two positions; at the summer position the upper hemisphere faces the sun with bright golden rays, at the winter position the rays strike at a slant and the hemisphere is shadowed blue; in between, small seasonal vignettes of blossom, wheat, and snow. Clean dark blue space, luminous sun, crisp geometry, no text. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 16. 声音是怎么跑的

- 目标文件：`science-how-sound-travels.jpg`
- 年龄段：Growing
- 场景：A cutaway of a small drum with visible vibration arcs around the drumhead; concentric expanding rings travel through the air toward a child's ear on the right, drawn as layered pale blue curves, and below them a wooden table offers a second path with denser, faster-travelling rings; a hand taps the drum. Cutaway detail, clean educational style, warm wood tones with cool blue waves.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A cutaway of a small drum with visible vibration arcs around the drumhead; concentric expanding rings travel through the air toward a child's ear on the right, drawn as layered pale blue curves, and below them a wooden table offers a second path with denser, faster-travelling rings; a hand taps the drum. Cutaway detail, clean educational style, warm wood tones with cool blue waves. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 17. 神奇的磁铁

- 目标文件：`science-magnets.jpg`
- 年龄段：Growing
- 场景：Two bar magnets facing each other, one held in each of two children's hands: the red north poles push apart with visible repulsion arcs and small arrows, while the blue and red ends of a second pair snap together; between them a paper clip chain hangs suspended from one magnet; a scattered pile of clips, nails, wood and plastic nearby. Bright tabletop light, clear demonstration.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: Two bar magnets facing each other, one held in each of two children's hands: the red north poles push apart with visible repulsion arcs and small arrows, while the blue and red ends of a second pair snap together; between them a paper clip chain hangs suspended from one magnet; a scattered pile of clips, nails, wood and plastic nearby. Bright tabletop light, clear demonstration. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 18. 月亮为什么会变形状

- 目标文件：`science-moon-phases.jpg`
- 年龄段：Growing
- 场景：A large blue earth with the moon on a dotted circular orbit around it, shown at four positions; sunlight comes from the right as broad golden rays; each moon position shows the lit half facing the sun, and a small inset moon below shows what an observer on earth would see: full, half, crescent, new. Dark space with stars, clean diagram composition, no text.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A large blue earth with the moon on a dotted circular orbit around it, shown at four positions; sunlight comes from the right as broad golden rays; each moon position shows the lit half facing the sun, and a small inset moon below shows what an observer on earth would see: full, half, crescent, new. Dark space with stars, clean diagram composition, no text. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 19. 种子的力量

- 目标文件：`science-power-of-a-seed.jpg`
- 年龄段：Preschool
- 场景：A cross-section of dark soil with a small seed split open and a pale green shoot pushing upward, one root already reaching down; the shoot is shown bending slightly and then breaking through the soil surface with a tiny crack and crumb of earth lifting; above ground a sprout with two seed leaves unfolds toward a warm sun and raindrops. Rich brown soil, fresh green, hopeful light.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A cross-section of dark soil with a small seed split open and a pale green shoot pushing upward, one root already reaching down; the shoot is shown bending slightly and then breaking through the soil surface with a tiny crack and crumb of earth lifting; above ground a sprout with two seed leaves unfolds toward a warm sun and raindrops. Rich brown soil, fresh green, hopeful light. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 20. 彩虹是怎么来的

- 目标文件：`science-rainbow.jpg`
- 年龄段：Preschool
- 场景：A clearing sky after rain; a wide arc of seven clean colour bands from red on the outside to violet on the inside, arching over green hills; in the foreground a large water droplet floats magnified, with a beam of white sunlight entering one side and fanning into a rainbow spectrum out the other side; small droplets float in the air. Bright joyful palette, clear scientific inset.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A clearing sky after rain; a wide arc of seven clean colour bands from red on the outside to violet on the inside, arching over green hills; in the foreground a large water droplet floats magnified, with a beam of white sunlight entering one side and fanning into a rainbow spectrum out the other side; small droplets float in the air. Bright joyful palette, clear scientific inset. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 21. 彩虹的秘密

- 目标文件：`science-secret-of-the-rainbow.jpg`
- 年龄段：Preschool
- 场景：A meadow after rain; a rainbow arching over a soft grey cloud; in the foreground a single large dewdrop on a blade of grass is drawn as a magnified inset: a white light beam enters, bends, and splits into seven colour bands spreading out; smaller droplets around it each show a faint rainbow glint. Fresh green and rainbow colours, dew highlights, gentle educational mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A meadow after rain; a rainbow arching over a soft grey cloud; in the foreground a single large dewdrop on a blade of grass is drawn as a magnified inset: a white light beam enters, bends, and splits into seven colour bands spreading out; smaller droplets around it each show a faint rainbow glint. Fresh green and rainbow colours, dew highlights, gentle educational mood. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 22. 牙齿的悄悄话

- 目标文件：`science-secret-talk-of-teeth.jpg`
- 年龄段：Preschool
- 场景：A friendly cartoon cross-section of a tooth: white enamel on the outside, dentine beneath, a pink pulp centre with tiny nerves; on the tooth's surface a small patch is under attack by three round purple bacteria with tiny mischievous faces, releasing acid droplets that etch a little hole; a toothbrush with foamy bubbles arrives from the left. Clean bright illustration, playful but clear.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A friendly cartoon cross-section of a tooth: white enamel on the outside, dentine beneath, a pink pulp centre with tiny nerves; on the tooth's surface a small patch is under attack by three round purple bacteria with tiny mischievous faces, releasing acid droplets that etch a little hole; a toothbrush with foamy bubbles arrives from the left. Clean bright illustration, playful but clear. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 23. 种子发芽的秘密

- 目标文件：`science-seed-sprouts.jpg`
- 年龄段：Preschool
- 场景：A cutaway of a flower pot: a seed in dark soil sending down one pale root and pushing up a curved green shoot; above the soil, a watering can tips out drops, and a warm sun shines through the window; next to the pot a slightly older seedling with two leaves, and a proud little girl in an apron holds the pot with both hands. Warm windowsill light, fresh green, clear growth stages.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A cutaway of a flower pot: a seed in dark soil sending down one pale root and pushing up a curved green shoot; above the soil, a watering can tips out drops, and a warm sun shines through the window; next to the pot a slightly older seedling with two leaves, and a proud little girl in an apron holds the pot with both hands. Warm windowsill light, fresh green, clear growth stages. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 24. 影子为什么跟着我

- 目标文件：`science-shadows.jpg`
- 年龄段：Preschool
- 场景：A sunny playground; a child stands with arms out, casting a long dark shadow on the paving; the sun low on the left is drawn with straight rays, and a diagram-style dotted line shows the light being blocked by the child's body to create the shadow; a second smaller shadow shape beside it shows the same child at noon with a shorter shadow. Bright clean daylight, clear educational visual.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A sunny playground; a child stands with arms out, casting a long dark shadow on the paving; the sun low on the left is drawn with straight rays, and a diagram-style dotted line shows the light being blocked by the child's body to create the shadow; a second smaller shadow shape beside it shows the same child at noon with a shorter shadow. Bright clean daylight, clear educational visual. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 25. 沉下去还是浮起来

- 目标文件：`science-sink-or-float.jpg`
- 年龄段：Preschool
- 场景：A clear glass basin of water on a wooden table; a stone and an eraser rest at the bottom with small bubbles, while a wooden block, a leaf and a ping-pong ball float on the surface; a child's hand hovers above, about to drop in one more object; small arrows show the downward and upward forces as simple arcs. Bright window light, water reflections, neat experiment mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A clear glass basin of water on a wooden table; a stone and an eraser rest at the bottom with small bubbles, while a wooden block, a leaf and a ping-pong ball float on the surface; a child's hand hovers above, about to drop in one more object; small arrows show the downward and upward forces as simple arcs. Bright window light, water reflections, neat experiment mood. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 26. 为什么会打喷嚏

- 目标文件：`science-sneezing.jpg`
- 年龄段：Growing
- 场景：A friendly cutaway of a child's nose and face in profile: inside the nasal passage fine hairs and a pink moist lining are visible, catching small grey dust specks and pollen grains; a burst of air arrows rushes outward from the nostril carrying the specks away; the child holds a tissue near the face. Clean bright illustration, soft skin tones, clear cause and effect.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A friendly cutaway of a child's nose and face in profile: inside the nasal passage fine hairs and a pink moist lining are visible, catching small grey dust specks and pollen grains; a burst of air arrows rushes outward from the nostril carrying the specks away; the child holds a tissue near the face. Clean bright illustration, soft skin tones, clear cause and effect. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 27. 雪花的形状

- 目标文件：`science-snowflakes.jpg`
- 年龄段：Preschool
- 场景：A child's red mitten held out in falling snow; on the mitten a large snowflake sits, magnified in an inset circle beside it to show its perfect six-fold branching symmetry; around them other snowflakes of different six-armed shapes drift down; behind, a soft blue winter street. Cool blue-white palette, delicate detail, quiet wonder.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A child's red mitten held out in falling snow; on the mitten a large snowflake sits, magnified in an inset circle beside it to show its perfect six-fold branching symmetry; around them other snowflakes of different six-armed shapes drift down; behind, a soft blue winter street. Cool blue-white palette, delicate detail, quiet wonder. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 28. 太阳和地球

- 目标文件：`science-sun-and-earth.jpg`
- 年龄段：Growing
- 场景：A bright sun on the left radiating golden light toward a blue-green earth on the right, with a dotted orbit line curving around; on earth a small figure stands on the daylit side with the sun overhead, while the far side is in night with tiny stars; an arrow shows the earth's spin. Clean cosmic illustration, warm sun, deep blue space, clear scale.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A bright sun on the left radiating golden light toward a blue-green earth on the right, with a dotted orbit line curving around; on earth a small figure stands on the daylit side with the sun overhead, while the far side is in night with tiny stars; an arrow shows the earth's spin. Clean cosmic illustration, warm sun, deep blue space, clear scale. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 29. 向日葵为什么追太阳

- 目标文件：`science-sunflower-follows-sun.jpg`
- 年龄段：Preschool
- 场景：A field of tall sunflowers with big round faces all turned toward a bright sun; one sunflower shown enlarged in cross-section: its stem is longer on the shaded side and shorter on the sunlit side, drawn with clear arrows, which tips the head toward the sun; a dotted arc shows the head's daily movement from east to west. Golden afternoon light, warm cheerful palette.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A field of tall sunflowers with big round faces all turned toward a bright sun; one sunflower shown enlarged in cross-section: its stem is longer on the shaded side and shorter on the sunlit side, drawn with clear arrows, which tips the head toward the sun; a dotted arc shows the head's daily movement from east to west. Golden afternoon light, warm cheerful palette. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 30. 水的三个样子

- 目标文件：`science-three-states-of-water.jpg`
- 年龄段：Growing
- 场景：Three side-by-side panels in one scene: a glass of liquid water with clear blue surface, a block of ice with crystalline facets and frost, and a kettle puffing white steam that thins into invisible vapour; small arrows between them show heating and cooling, with a sun over the melting ice and a flame-like warm glow under the kettle. Clear, bright, diagrammatic but friendly.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: Three side-by-side panels in one scene: a glass of liquid water with clear blue surface, a block of ice with crystalline facets and frost, and a kettle puffing white steam that thins into invisible vapour; small arrows between them show heating and cooling, with a sun over the melting ice and a flame-like warm glow under the kettle. Clear, bright, diagrammatic but friendly. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 31. 牙齿的小敌人

- 目标文件：`science-tooth-decay.jpg`
- 年龄段：Preschool
- 场景：A cheerful bathroom scene: a small boy in pyjamas holds a toothbrush, one hand on his cheek with a pained wince; beside him a magnified inset of a tooth surface where little purple bacteria are feeding on a sugar crystal and producing a shiny acid drop that etches a small cavity; a plate with a half-eaten candy sits on the sink. Warm bathroom light, playful educational tone.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A cheerful bathroom scene: a small boy in pyjamas holds a toothbrush, one hand on his cheek with a pained wince; beside him a magnified inset of a tooth surface where little purple bacteria are feeding on a sugar crystal and producing a shiny acid drop that etches a small cavity; a plate with a half-eaten candy sits on the sink. Warm bathroom light, playful educational tone. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 32. 大树几岁了

- 目标文件：`science-tree-rings.jpg`
- 年龄段：Growing
- 场景：A cut tree stump seen from above, its rings varied in width, with a forester's hand holding a magnifier over one section; on the left a diagram-like inset shows a wide ring paired with a sun and raindrops, and a narrow dark ring paired with a cracked dry sun; scattered sawdust and an axe on the ground. Warm wood tones, clear educational detail.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A cut tree stump seen from above, its rings varied in width, with a forester's hand holding a magnifier over one section; on the left a diagram-like inset shows a wide ring paired with a sun and raindrops, and a narrow dark ring paired with a cracked dry sun; scattered sawdust and an axe on the ground. Warm wood tones, clear educational detail. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 33. 小水滴的旅行

- 目标文件：`science-water-drop-journey.jpg`
- 年龄段：Preschool
- 场景：A looping journey illustrated in one scene: a smiling droplet in the blue sea on the left, warm sun rays making wavy lines of vapour rise, a white cloud in the middle with droplets clustering inside, rain falling over green hills on the right, a stream running back toward the sea with a curved arrow completing the loop; a rainbow glints. Bright cheerful palette, clear cycle.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A looping journey illustrated in one scene: a smiling droplet in the blue sea on the left, warm sun rays making wavy lines of vapour rise, a white cloud in the middle with droplets clustering inside, rain falling over green hills on the right, a stream running back toward the sea with a curved arrow completing the loop; a rainbow glints. Bright cheerful palette, clear cycle. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 34. 云朵是什么做的

- 目标文件：`science-what-clouds-are-made-of.jpg`
- 年龄段：Preschool
- 场景：A puffy white cloud drawn as a soft shape with a cutaway section revealing many tiny round water droplets and small ice crystals clustered together; below, warm sun rays over a lake send wavy vapour lines upward into the cloud; on the right the cloud grows heavy and darker, with a few drops beginning to fall. Soft blue sky, friendly diagram style, clear cause and effect.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A puffy white cloud drawn as a soft shape with a cutaway section revealing many tiny round water droplets and small ice crystals clustered together; below, warm sun rays over a lake send wavy vapour lines upward into the cloud; on the right the cloud grows heavy and darker, with a few drops beginning to fall. Soft blue sky, friendly diagram style, clear cause and effect. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 35. 恐龙去哪儿了

- 目标文件：`science-where-dinosaurs-went.jpg`
- 年龄段：Growing
- 场景：A layered earth cross-section: on the surface a green prehistoric landscape with a few friendly cartoon dinosaurs and ferns, and above them a changing sky; in the sediment layers below, a dinosaur skeleton fossil is partially exposed, with a paleontologist's brush and trowel carefully clearing the rock around a rib bone. Warm ochre and green palette, clear educational framing.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A layered earth cross-section: on the surface a green prehistoric landscape with a few friendly cartoon dinosaurs and ferns, and above them a changing sky; in the sediment layers below, a dinosaur skeleton fossil is partially exposed, with a paleontologist's brush and trowel carefully clearing the rock around a rib bone. Warm ochre and green palette, clear educational framing. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 36. 影子从哪里来

- 目标文件：`science-where-shadows-come-from.jpg`
- 年龄段：Preschool
- 场景：A sunlit garden; a child stands casting a shadow behind them, and the scene is drawn as a clear geometric diagram: straight rays from the sun pass the child's body and are blocked, leaving a dark shape on the ground; beside it a small inset shows the same child at different sun angles with short and long shadows; a hand making a shadow puppet of a rabbit on a wall. Bright clean light.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A sunlit garden; a child stands casting a shadow behind them, and the scene is drawn as a clear geometric diagram: straight rays from the sun pass the child's body and are blocked, leaving a dark shape on the ground; beside it a small inset shows the same child at different sun angles with short and long shadows; a hand making a shadow puppet of a rabbit on a wall. Bright clean light. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 37. 风从哪里来

- 目标文件：`science-where-the-wind-comes-from.jpg`
- 年龄段：Growing
- 场景：A cross-section of a coastal landscape: over warm land the air is drawn rising with curly arrows, while over the cooler sea cooler air sinks and slides inland to replace it; a windmill on the hill turns, a small sailboat leans, leaves and a kite stream sideways; a sun over the land and a blue sea with a few clouds. Fresh blue-green palette, clear airflow arrows.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A cross-section of a coastal landscape: over warm land the air is drawn rising with curly arrows, while over the cooler sea cooler air sinks and slides inland to replace it; a windmill on the hill turns, a small sailboat leans, leaves and a kite stream sideways; a sun over the land and a blue sea with a few clouds. Fresh blue-green palette, clear airflow arrows. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 38. 鸟为什么会飞

- 目标文件：`science-why-birds-fly.jpg`
- 年龄段：Growing
- 场景：A bird in gliding flight shown in cutaway: hollow bone structure visible inside one wing, broad feathered wings spread, flight feathers painted with clean detail; airflow lines curve over the wing's top surface and under the bottom, with a small upward lift arrow; near the tail a few contour feathers fan out; below, a distant small airplane echoes the wing shape. Clean sky background, clear aerodynamic diagram.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A bird in gliding flight shown in cutaway: hollow bone structure visible inside one wing, broad feathered wings spread, flight feathers painted with clean detail; airflow lines curve over the wing's top surface and under the bottom, with a small upward lift arrow; near the tail a few contour feathers fan out; below, a distant small airplane echoes the wing shape. Clean sky background, clear aerodynamic diagram. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 39. 树叶为什么会变色

- 目标文件：`science-why-leaves-change-color.jpg`
- 年龄段：Growing
- 场景：A single maple tree half green and half in autumn colour; on the green side an enlarged leaf inset shows round green chlorophyll shapes absorbing sunlight; on the gold-red side the same inset shows the green shapes fading away to reveal yellow and orange pigments beneath; fallen leaves drift down. Warm autumn palette, crisp educational comparison.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A single maple tree half green and half in autumn colour; on the green side an enlarged leaf inset shows round green chlorophyll shapes absorbing sunlight; on the gold-red side the same inset shows the green shapes fading away to reveal yellow and orange pigments beneath; fallen leaves drift down. Warm autumn palette, crisp educational comparison. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 40. 星星为什么眨眼睛

- 目标文件：`science-why-stars-twinkle.jpg`
- 年龄段：Growing
- 场景：A night sky with stars above, and a cutaway of the earth's atmosphere drawn as wavy layered bands; a star's light beam enters from the top and bends and wiggles as it passes through moving air layers, drawn with a slightly fractured, shimmering line; below, a child on a hill looks up, and the star appears to flicker. Deep blue night, warm yellow star, soft magical-but-clear style.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A night sky with stars above, and a cutaway of the earth's atmosphere drawn as wavy layered bands; a star's light beam enters from the top and bends and wiggles as it passes through moving air layers, drawn with a slightly fractured, shimmering line; below, a child on a hill looks up, and the star appears to flicker. Deep blue night, warm yellow star, soft magical-but-clear style. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 41. 月亮为什么会变

- 目标文件：`science-why-the-moon-changes.jpg`
- 年龄段：Growing
- 场景：A diagrammatic night scene: the sun off to the right shining on a large earth, the moon at four points on its orbit, and four small moon discs along the bottom showing the crescent, half, full and new shapes as seen from earth; a spotlight-like cone of light illustrates which half of the moon is lit; stars and a soft dark blue background. Clean, clear, no text.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A diagrammatic night scene: the sun off to the right shining on a large earth, the moon at four points on its orbit, and four small moon discs along the bottom showing the crescent, half, full and new shapes as seen from earth; a spotlight-like cone of light illustrates which half of the moon is lit; stars and a soft dark blue background. Clean, clear, no text. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 42. 为什么会打雷闪电

- 目标文件：`science-why-thunder-and-lightning.jpg`
- 年龄段：Growing
- 场景：A dramatic but friendly thundercloud shown in cutaway, with bright zigzag lightning bolts leaping from the cloud base to the ground and small glowing spark-like charge marks floating inside the cloud; concentric sound wave arcs radiate from the lightning path; below, a child watches safely from a window with a warm-lit room; a distant tree bends in wind. Deep purple-blue storm sky, bright white-blue bolts, no text.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A dramatic but friendly thundercloud shown in cutaway, with bright zigzag lightning bolts leaping from the cloud base to the ground and small glowing spark-like charge marks floating inside the cloud; concentric sound wave arcs radiate from the lightning path; below, a child watches safely from a window with a warm-lit room; a distant tree bends in wind. Deep purple-blue storm sky, bright white-blue bolts, no text. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 43. 我们为什么会打喷嚏

- 目标文件：`science-why-we-sneeze.jpg`
- 年龄段：Preschool
- 场景：A cheerful close-up of a child's face mid-sneeze, eyes squeezed shut, mouth open, one hand raising a tissue; beside the face a magnified cutaway shows the nasal passage with fine hairs trapping grey dust and yellow pollen grains, and a strong curved arrow of air rushing out; small sparkle-like specks fly away. Bright, friendly, clean illustration, clear cause and effect.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A cheerful close-up of a child's face mid-sneeze, eyes squeezed shut, mouth open, one hand raising a tissue; beside the face a magnified cutaway shows the nasal passage with fine hairs trapping grey dust and yellow pollen grains, and a strong curved arrow of air rushing out; small sparkle-like specks fly away. Bright, friendly, clean illustration, clear cause and effect. Setting and costume: Friendly science illustration: clear, legible shapes and gentle cutaways that explain the mechanism at a glance, objects may be personified with simple faces, diagram parts stay clean and readable. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

---

<a id="character"></a>

## 品格教育 · Character（26 条）

> 分类键：`character`｜场景与服饰约束见 README 第四节。

### 1. 一句温暖的话

- 目标文件：`character-a-warm-thought.jpg`
- 年龄段：Preschool
- 场景：A bright kindergarten art corner; a small girl in a yellow smock sits with her shoulders rounded, chin down, holding a paintbrush limply over a half-finished painting with a smudged corner, eyes lowered; beside her a cheerful classmate in a blue smock kneels, one hand pointing at a vivid red-orange patch on the painting, expression warm and encouraging, the other hand offering a brush. Painted walls, craft supplies, soft daylight.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A bright kindergarten art corner; a small girl in a yellow smock sits with her shoulders rounded, chin down, holding a paintbrush limply over a half-finished painting with a smudged corner, eyes lowered; beside her a cheerful classmate in a blue smock kneels, one hand pointing at a vivid red-orange patch on the painting, expression warm and encouraging, the other hand offering a brush. Painted walls, craft supplies, soft daylight. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 2. 轻轻关门

- 目标文件：`character-be-quiet-for-others.jpg`
- 年龄段：Preschool
- 场景：A hallway of an apartment; a small boy in a striped shirt stands at a half-open door, both hands on the handle, easing it shut with an exaggerated careful crouch, one eye squinting, socks on tiptoe; behind him through the doorway a small sister sleeps in a bed with a soft blanket; a mother in the kitchen doorway smiles with a hand at her mouth. Warm afternoon light, gentle hush.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A hallway of an apartment; a small boy in a striped shirt stands at a half-open door, both hands on the handle, easing it shut with an exaggerated careful crouch, one eye squinting, socks on tiptoe; behind him through the doorway a small sister sleeps in a bed with a soft blanket; a mother in the kitchen doorway smiles with a hand at her mouth. Warm afternoon light, gentle hush. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 3. 认真做好小事

- 目标文件：`character-care-about-small-things.jpg`
- 年龄段：Growing
- 场景：A primary school reading corner; a girl in a school uniform and neat braids kneels on the rug, arranging picture books by colour-coded labels, smoothing a curled page flat with one palm; a notebook of borrowing records open at her knee; behind her a bookshelf in mid-reorganisation and two classmates looking on with respect; bright window light, tidy and warm mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A primary school reading corner; a girl in a school uniform and neat braids kneels on the rug, arranging picture books by colour-coded labels, smoothing a curled page flat with one palm; a notebook of borrowing records open at her knee; behind her a bookshelf in mid-reorganisation and two classmates looking on with respect; bright window light, tidy and warm mood. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 4. 生气的小火山

- 目标文件：`character-control-temper.jpg`
- 年龄段：Growing
- 场景：A classroom corner with floor cushions; a boy in a green sweater sits cross-legged with eyes closed, both hands on his knees, cheeks puffed out mid exhale, a small paper chart of numbers beside him; a nearby block tower lies scattered on the floor from a moment ago; a teacher in a light dress crouches at a respectful distance with an encouraging nod. Soft afternoon light, calm breathing mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A classroom corner with floor cushions; a boy in a green sweater sits cross-legged with eyes closed, both hands on his knees, cheeks puffed out mid exhale, a small paper chart of numbers beside him; a nearby block tower lies scattered on the floor from a moment ago; a teacher in a light dress crouches at a respectful distance with an encouraging nod. Soft afternoon light, calm breathing mood. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 5. 道歉的勇气

- 目标文件：`character-courage-to-apologize.jpg`
- 年龄段：Growing
- 场景：A classroom desk area; a boy in a blue shirt stands with his hands clasped in front of him, head slightly bowed, mouth open in a quiet apology, cheeks pink; across from him a classmate in a striped sweater holds a smudged notebook, initial surprise turning into a forgiving smile; a dropped pencil case and a scuffed page on the floor between them. Bright classroom light, sincere warm mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A classroom desk area; a boy in a blue shirt stands with his hands clasped in front of him, head slightly bowed, mouth open in a quiet apology, cheeks pink; across from him a classmate in a striped sweater holds a smudged notebook, initial surprise turning into a forgiving smile; a dropped pencil case and a scuffed page on the floor between them. Bright classroom light, sincere warm mood. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 6. 扶一把

- 目标文件：`character-help-the-classmate.jpg`
- 年龄段：Growing
- 场景：A school sports ground edge; a boy in a gym shirt kneels beside a classmate who sits on the track holding his scraped knee, one hand out to help him up, the other steadying his arm; a white first-aid kit and a water bottle on the grass; other students run in the background; the helper's expression is concerned and friendly. Warm sunny light, caring mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A school sports ground edge; a boy in a gym shirt kneels beside a classmate who sits on the track holding his scraped knee, one hand out to help him up, the other steadying his arm; a white first-aid kit and a water bottle on the grass; other students run in the background; the helper's expression is concerned and friendly. Warm sunny light, caring mood. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 7. 分享的快乐

- 目标文件：`character-joy-of-sharing.jpg`
- 年龄段：Preschool
- 场景：A living room floor covered with colourful building blocks; a small boy in a yellow shirt hesitates, both hands clutching a red block to his chest, then extends it toward two friends sitting opposite; a half-built tower stands between them, and more blocks are being offered; a mother on the sofa watches with a warm smile. Soft afternoon light, warm and playful.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A living room floor covered with colourful building blocks; a small boy in a yellow shirt hesitates, both hands clutching a red block to his chest, then extends it toward two friends sitting opposite; a half-built tower stands between them, and more blocks are being offered; a mother on the sofa watches with a warm smile. Soft afternoon light, warm and playful. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 8. 说到做到

- 目标文件：`character-keep-your-word.jpg`
- 年龄段：Growing
- 场景：A rainy morning at a school gate; a girl in a yellow raincoat and hood holds a picture book pressed protectively inside her coat with one arm, an umbrella tilting in the other hand, rain streaming off the edge; at the gate a friend waits under the eaves, waving and laughing; puddles reflecting the grey sky. Cool rain tones with warm emotional brightness.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A rainy morning at a school gate; a girl in a yellow raincoat and hood holds a picture book pressed protectively inside her coat with one arm, an umbrella tilting in the other hand, rain streaming off the edge; at the gate a friend waits under the eaves, waving and laughing; puddles reflecting the grey sky. Cool rain tones with warm emotional brightness. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 9. 外婆的故事

- 目标文件：`character-listen-to-grandma.jpg`
- 年龄段：Growing
- 场景：A sunlit living room; a grandmother in a soft grey bun and knitted cardigan sits in an armchair, hands shaping a story in the air, eyes crinkled with laughter; a grandchild in a school sweater sits on a small stool pulled close, chin propped on both hands, listening with wide attentive eyes; a photo album open on the side table, a cup of tea steaming. Warm golden indoor light, tender mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A sunlit living room; a grandmother in a soft grey bun and knitted cardigan sits in an armchair, hands shaping a story in the air, eyes crinkled with laughter; a grandchild in a school sweater sits on a small stool pulled close, chin propped on both hands, listening with wide attentive eyes; a photo album open on the side table, a cup of tea steaming. Warm golden indoor light, tender mood. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 10. 篱笆上的钉子

- 目标文件：`character-nails-in-the-fence.jpg`
- 年龄段：Growing
- 场景：A backyard fence of weathered wooden planks; a boy in a t-shirt stands with a small hammer in one hand and a nail in the other, a wooden board beside him dense with hammered nails; an older man with a grey beard kneels next to him, pointing at the small holes left behind where some nails have been pulled out; a tin of nails on the grass. Late afternoon light, quiet reflective mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A backyard fence of weathered wooden planks; a boy in a t-shirt stands with a small hammer in one hand and a nail in the other, a wooden board beside him dense with hammered nails; an older man with a grey beard kneels next to him, pointing at the small holes left behind where some nails have been pulled out; a tin of nails on the grass. Late afternoon light, quiet reflective mood. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 11. 迟到的蜗牛

- 目标文件：`character-one-more-minute.jpg`
- 年龄段：Growing
- 场景：A front doorway; a boy in a backpack hops on one foot pulling on a shoe, face flustered, one sock missing; behind him a school bus is already pulling away down the street, visible through the doorway, and a father stands with car keys and a patient, slightly amused expression; a clock on the wall and a plate of half-eaten breakfast. Morning light, comic urgency.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A front doorway; a boy in a backpack hops on one foot pulling on a shoe, face flustered, one sock missing; behind him a school bus is already pulling away down the street, visible through the doorway, and a father stands with car keys and a patient, slightly amused expression; a clock on the wall and a plate of half-eaten breakfast. Morning light, comic urgency. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 12. 可以说不

- 目标文件：`character-say-no-gently.jpg`
- 年龄段：Growing
- 场景：A school corridor; a boy in a blue uniform stands with a hand raised politely, palm out, expression calm but firm, mouth open in a gentle refusal; in front of him a classmate holds an exercise book and a pen, expression shifting from pushy to thoughtful; lockers and a window with afternoon light behind them. Bright clean setting, respectful mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A school corridor; a boy in a blue uniform stands with a hand raised politely, palm out, expression calm but firm, mouth open in a gentle refusal; in front of him a classmate holds an exercise book and a pen, expression shifting from pushy to thoughtful; lockers and a window with afternoon light behind them. Bright clean setting, respectful mood. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 13. 谢谢你，司机叔叔

- 目标文件：`character-say-thank-you.jpg`
- 年龄段：Preschool
- 场景：The front door of a city bus; a small boy in a kindergarten smock and backpack stands at the top step, one hand on the rail, waving with a bright grin and mouth open in a cheerful thank-you; the driver in a blue uniform turns in his seat, surprised and smiling; behind the boy a parent waits; sunlit street visible through the windshield. Warm everyday light.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: The front door of a city bus; a small boy in a kindergarten smock and backpack stands at the top step, one hand on the rail, waving with a bright grin and mouth open in a cheerful thank-you; the driver in a blue uniform turns in his seat, surprised and smiling; behind the boy a parent waits; sunlit street visible through the windshield. Warm everyday light. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 14. 半块面包

- 目标文件：`character-share-lunch.jpg`
- 年龄段：Growing
- 场景：A classroom desk during lunch; a boy in a blue shirt tears a bread roll in half and holds one piece out to the girl beside him, whose desk is empty of food, her hands in her lap and eyes shy; his own lunchbox is open with a small apple inside; other students eating in the background. Warm midday light, kind and simple mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A classroom desk during lunch; a boy in a blue shirt tears a bread roll in half and holds one piece out to the girl beside him, whose desk is empty of food, her hands in her lap and eyes shy; his own lunchbox is open with a small apple inside; other students eating in the background. Warm midday light, kind and simple mood. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 15. 一句对不起

- 目标文件：`character-sorry-then-hug.jpg`
- 年龄段：Preschool
- 场景：A playroom floor with scattered building blocks; two small children sit back to back with arms crossed, both pouting, a collapsed tower between them; one of them is just turning his head with an apologetic expression and an outstretched block; the other's shoulder has begun to relax. Soft warm lamplight, gentle reconciliation mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A playroom floor with scattered building blocks; two small children sit back to back with arms crossed, both pouting, a collapsed tower between them; one of them is just turning his head with an apologetic expression and an outstretched block; the other's shoulder has begun to relax. Soft warm lamplight, gentle reconciliation mood. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 16. 打碎的花瓶

- 目标文件：`character-the-broken-vase.jpg`
- 年龄段：Preschool
- 场景：A living room; a shattered ceramic vase on the floor with water spreading across the rug and a few flowers scattered; a small boy in a jumper stands with hands behind his back, head down, lips pressed, one toe scuffing the floor; his mother kneels beside him with a dustpan, one hand on his shoulder, expression gentle and forgiving. Warm afternoon light, honest tender mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A living room; a shattered ceramic vase on the floor with water spreading across the rug and a few flowers scattered; a small boy in a jumper stands with hands behind his back, head down, lips pressed, one toe scuffing the floor; his mother kneels beside him with a dustpan, one hand on his shoulder, expression gentle and forgiving. Warm afternoon light, honest tender mood. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 17. 守时的值日生

- 目标文件：`character-the-honest-little-guard.jpg`
- 年龄段：Growing
- 场景：A classroom windowsill lined with potted green plants; a boy in a rain-spotted school jacket carefully waters each pot with a small watering can, tongue between his teeth in concentration, sleeves pushed up; rain streaks the window behind him, and a wet umbrella leans by the door; a class duty chart on the wall. Cool rainy light with warm green plants.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A classroom windowsill lined with potted green plants; a boy in a rain-spotted school jacket carefully waters each pot with a small watering can, tongue between his teeth in concentration, sleeves pushed up; rain streaks the window behind him, and a wet umbrella leans by the door; a class duty chart on the wall. Cool rainy light with warm green plants. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 18. 一句鼓励的话

- 目标文件：`character-the-kind-word.jpg`
- 年龄段：Growing
- 场景：A school stage with a red curtain; a small girl in a dress stands frozen at the microphone, hands clasped, eyes wide with stage fright, mouth half open; in the front row a classmate leans forward with both hands cupped around her mouth in an encouraging whisper, face bright with support; a few other children watch. Warm stage light, tender suspense.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A school stage with a red curtain; a small girl in a dress stands frozen at the microphone, hands clasped, eyes wide with stage fright, mouth half open; in the front row a classmate leans forward with both hands cupped around her mouth in an encouraging whisper, face bright with support; a few other children watch. Warm stage light, tender suspense. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 19. 种花的邮差

- 目标文件：`character-the-little-postman-plants-flowers.jpg`
- 年龄段：Explorer
- 场景：A long country dirt road; a postman in a blue uniform and cap rides a bicycle, one hand tossing seeds from a cloth bag onto the roadside verge; behind him the road stretches with flowers blooming along its length, and further ahead the verge is still bare dirt; a small wooden mailbox and a distant cottage. Bright sky, warm dusty light, hopeful mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A long country dirt road; a postman in a blue uniform and cap rides a bicycle, one hand tossing seeds from a cloth bag onto the roadside verge; behind him the road stretches with flowers blooming along its length, and further ahead the verge is still bare dirt; a small wooden mailbox and a distant cottage. Bright sky, warm dusty light, hopeful mood. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 9-12: fuller composition, layered foreground and background, richer detail, still fully cartoon. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 20. 雪地里的手套

- 目标文件：`character-the-lost-mitten.jpg`
- 年龄段：Preschool
- 场景：A snowy park path; a small girl in a red coat and woolly hat stands beside a bench holding a single red knitted mitten up with both hands, looking around with a concerned expression, snow on her shoulders; her own bare hand tucked under her arm; in the distance a smaller child in a blue coat runs toward her, one hand bare. Snow, soft grey light, warm-hearted mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A snowy park path; a small girl in a red coat and woolly hat stands beside a bench holding a single red knitted mitten up with both hands, looking around with a concerned expression, snow on her shoulders; her own bare hand tucked under her arm; in the distance a smaller child in a blue coat runs toward her, one hand bare. Snow, soft grey light, warm-hearted mood. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 21. 接力赛的接力棒

- 目标文件：`character-the-relay-baton.jpg`
- 年龄段：Growing
- 场景：A school running track; four children in sports vests stand in a huddle, one holding a relay baton and pointing at the track lanes while the others nod; behind them a whiteboard-like chart drawn in the dirt showing the order of runners; starting blocks and lane markings visible, other classes warming up in the background. Bright morning light, teamwork mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A school running track; four children in sports vests stand in a huddle, one holding a relay baton and pointing at the track lanes while the others nod; behind them a whiteboard-like chart drawn in the dirt showing the order of runners; starting blocks and lane markings visible, other classes warming up in the background. Bright morning light, teamwork mood. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 22. 会分享的小木船

- 目标文件：`character-the-shared-boat.jpg`
- 年龄段：Preschool
- 场景：A small pond in a park; a little wooden rowboat with two oars; two children sit inside, one holding an oar and rowing with a happy focused face, the other sitting opposite as a passenger, pointing at ducks and laughing; a life ring hanging from a post, willow trees, sunlight on the water. Warm cheerful mood, gentle ripples.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A small pond in a park; a little wooden rowboat with two oars; two children sit inside, one holding an oar and rowing with a happy focused face, the other sitting opposite as a passenger, pointing at ducks and laughing; a life ring hanging from a post, willow trees, sunlight on the water. Warm cheerful mood, gentle ripples. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 23. 再试一次

- 目标文件：`character-try-again.jpg`
- 年龄段：Growing
- 场景：A courtyard with a jump rope lying on the paving; a girl in a t-shirt and shorts stands with fists clenched, bottom lip out, eyes wet with frustration, one foot on the rope; an elderly woman in a knitted vest crouches nearby holding the rope's other handle, smiling patiently, one hand raised in encouragement; chalk marks on the wall counting jumps. Late afternoon light, determined mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A courtyard with a jump rope lying on the paving; a girl in a t-shirt and shorts stands with fists clenched, bottom lip out, eyes wet with frustration, one foot on the rope; an elderly woman in a knitted vest crouches nearby holding the rope's other handle, smiling patiently, one hand raised in encouragement; chalk marks on the wall counting jumps. Late afternoon light, determined mood. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 6-9: balanced composition, clearly readable subject, simple background with a little environment detail. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 24. 姐妹分蛋糕

- 目标文件：`character-two-sisters-share-the-cake.jpg`
- 年龄段：Preschool
- 场景：A kitchen table with a single slice of cake on a plate; an older girl in a striped top holds a knife poised over it, tongue between her teeth, concentrating on cutting it exactly in half; a younger sister in pigtails watches with her hands clasped and eyes bright; a mother leans in from the side with a warm approving smile. Warm kitchen light, fair and happy mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A kitchen table with a single slice of cake on a plate; an older girl in a striped top holds a knife poised over it, tongue between her teeth, concentrating on cutting it exactly in half; a younger sister in pigtails watches with her hands clasped and eyes bright; a mother leans in from the side with a warm approving smile. Warm kitchen light, fair and happy mood. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 25. 排队的小滑梯

- 目标文件：`character-wait-for-turn.jpg`
- 年龄段：Preschool
- 场景：A playground slide; a neat line of children in colourful jackets waits at the ladder, each with hands on the shoulders of the one ahead, forming a little train; the child at the top slides down with arms up and a big grin; a teacher stands beside the line with an approving nod; sunny playground, other equipment in the background. Bright cheerful mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A playground slide; a neat line of children in colourful jackets waits at the ladder, each with hands on the shoulders of the one ahead, forming a little train; the child at the top slides down with arms up and a big grin; a teacher stands beside the line with an approving nod; sunny playground, other equipment in the background. Bright cheerful mood. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

### 26. 给花浇水的孩子

- 目标文件：`character-water-the-flower.jpg`
- 年龄段：Preschool
- 场景：A classroom windowsill with a row of small potted flowers; a boy in a school sweater holds a small watering can, carefully tipping water into one pot, his face close to the plant with a proud, focused smile; one pot already shows a bright open blossom; a growth chart and a sunlit window behind. Warm morning light, patient caring mood.
- 提示词（Prompt）：

```text
Children's picture-book illustration, cartoon style, rounded friendly character designs, soft clean linework, bright warm palette, gentle flat colouring with light texture. Scene: A classroom windowsill with a row of small potted flowers; a boy in a school sweater holds a small watering can, carefully tipping water into one pot, his face close to the plant with a proud, focused smile; one pot already shows a bright open blossom; a growth chart and a sunlit window behind. Warm morning light, patient caring mood. Setting and costume: Present-day children's everyday life: modern clothes, classrooms, homes, playgrounds, warm relatable details, emotion carried by faces and body language. For ages 3-6: very simple composition, one large clear subject, few details, bright cheerful colours. Composition: main subject centred, generous safe margin on all sides, all important content kept in the middle band of the frame, landscape 16:9, absolutely no text, letters, numbers, logos or watermarks anywhere in the image.
```

- 负面提示词（Negative）：

```text
photorealistic, realistic human portrait, 3D photoreal render, text, Chinese characters, letters, numbers, watermark, signature, border, frame, collage, split panels, dark horror, gore, blood, violence, weapons, low resolution, blurry, deformed limbs, extra fingers, duplicated faces, brand logo, trademark
```

---
