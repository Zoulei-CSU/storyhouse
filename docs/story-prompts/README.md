# 故事配图提示词

由 `scripts/generate-image-prompts.mjs` 生成，共 361 篇。

## 规格

| 项 | 取值 |
|---|---|
| 尺寸 | 1536×864（16:9 横版） |
| 格式 | JPEG，质量 85 |
| 单张体积 | 建议 ≤ 300 KB |
| 命名 | `<storyId>.jpg` |
| 存放 | 仓库根目录 `story-images/`（不入库，部署时单独上传） |

## 使用流程

1. 在下面按分类打开清单，逐条复制提示词到生图工具。
2. 挑选合适的图，下载后重命名为清单里的文件名。
3. 放进 `story-images/`，运行 `npm run images:status` 查看覆盖率。

> 建议每批 10-20 张，同一批次固定模型与参数，减少风格漂移。
> 成语故事必须是中国古代服饰，提示词已内置该要求并屏蔽现代服饰。

## 分类清单

| 分类 | 篇数 | 文件 |
|---|---|---|
| 寓言故事 | 98 | [fable.md](./prompts/fable.md) |
| 成语故事 | 86 | [idiom.md](./prompts/idiom.md) |
| 睡前故事 | 34 | [bedtime.md](./prompts/bedtime.md) |
| 童话故事 | 40 | [fairy.md](./prompts/fairy.md) |
| 神话传说 | 34 | [myth.md](./prompts/myth.md) |
| 科普启蒙 | 43 | [science.md](./prompts/science.md) |
| 品格教育 | 26 | [character.md](./prompts/character.md) |
