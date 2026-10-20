# 故事配图目录说明

服务端预生成的故事插画，用于替换故事详情页的图标封面。**仅「带后端服务」的部署支持**；
纯前端部署没有 `/api/images`，页面始终显示图标封面。

## 目录约定

- 一篇故事可以有**多张**插画：同一个 `<故事id>.jpg` 放在不同的**一级子目录**里即可
- 一个一级子目录 = 一套图（图片集），**目录名会显示在大图浏览的图片名下**（`目录名/文件名`）
- 只读一级子目录；直接放在根目录下的 jpg **不会被读取**
- 目录名按码位排序，决定同一故事的图片顺序；建议用有意义的短名，如 `default`、`水彩`
- 故事 id 见 [`docs/story-prompts/image-prompts.json`](./story-prompts/image-prompts.json)
- 只认 `.jpg`（大小写不敏感）；缺失的图片由前端回退为图标，不影响使用
- 图片**与登录无关**，任何访客都能加载

```text
story-images/                                  # 配图根目录（图片不入库，需单独上传）
  default/                                     # 一套图（一级子目录）
    idiom-a-promise-worth-a-thousand-gold.jpg
    bedtime-bears-moon-pillow.jpg
    character-a-warm-thought.jpg
  水彩/                                         # 另一套图；同名文件 => 该故事多一张
    idiom-a-promise-worth-a-thousand-gold.jpg
```

## 图片规格

| 项 | 取值 |
|---|---|
| 尺寸 | 1536×864（16:9 横版） |
| 格式 | JPEG，质量 80 左右 |
| 单张体积 | ≤ 300 KB |
| 风格 | 儿童绘本插画、卡通；成语故事人物必须为中国古代服饰 |

## 生成流程

```bash
npm run images:prompts    # 生成/更新提示词清单
npm run images:status     # 查看已生成的覆盖率
```

1. 打开 `docs/story-prompts/prompts/<分类>.md`，逐条复制提示词到生图工具。
2. 按 **1536×864（16:9）** 生成。多数工具只提供 1536×1024（3:2），
   需中心裁切到 16:9（保留主体、去掉上下多余部分）。
3. 导出 JPEG（质量 80 左右），命名为 `<故事id>.jpg`，放入 `story-images/<集名>/`。
4. 运行 `npm run images:status` 确认覆盖率。

### 批量裁切与转码

生图工具通常输出 1536×1024（3:2），且右下角带水印。用脚本统一处理：

```bash
# 依赖 Python 3.8+ 与 Pillow：pip install Pillow
npm run images:prepare -- --src .tmp-gen --ids id1,id2,id3
npm run images:prepare -- --src .tmp-gen --map mapping.json   # 显式映射，最稳
npm run images:prepare -- --src .tmp-gen --ids ... --set 水彩  # 写入 story-images/水彩/
npm run images:prepare -- --src .tmp-gen --dry-run            # 只预览不写文件
```

脚本做三件事：裁到 16:9（**纵向偏上，正好切掉底部水印**）→ 转 JPEG →
质量从 85 逐级下压到 300 KB 以内。输出目录默认 `story-images/<集名>/`，
集名由 `--set` 指定（默认 `default`）。文件名本身就是 `<故事id>` 时可省略 `--ids`。

> 建议每批 10–20 张，同一批次固定模型与参数，减少风格漂移。
> 新增故事后需重跑 `npm run images:prompts`，并为新故事补图。

需要把生图工作交给其他 AI 或同事时，直接拷走 **`docs/image-handover/`** 整个目录：
里面有任务说明、全部 361 条提示词、结构化 CSV 与风格参考图，对方无需再问任何背景。

## 启动配置

```bash
# Go 单文件后台
./storyhouse-linux-amd64 --image-dir ./story-images
./storyhouse-linux-amd64 --image-dir -          # 关闭配图

# Node 后台
STORY_HOUSE_IMAGE_DIR=./story-images npm run dev:api
```

默认目录为 `story-images`；目录不存在或为空时功能自动关闭，不报错。
后端启动时扫描一级子目录并建立索引；**运行中新增图片需重启后端**（Node 开发服务每次请求重扫）。

## 接口

| 方法 | 路径 | 说明 |
|---|---|---|
| GET | `/api/story-images/<故事id>` | 返回 `{storyId, count, images:[{folder, file}]}`，按目录名排序 |
| GET/HEAD | `/api/images/<目录>/<文件名>` | 返回指定图片；不存在返回 404 JSON |
| GET/HEAD | `/api/images/<故事id>.jpg` | 旧地址兼容：返回该故事的第一张 |
| GET | `/api/images` | 返回 `{count, images, storyIds}`，`count` 是有图的故事数，`images` 是文件总数 |

`/api/health` 的 `features.coverImages` 表示是否配置了可用配图。

- 响应带 `Cache-Control: public, max-age=86400` 与 `Last-Modified`
- 目录名与文件名都经过安全校验，禁止路径穿越；中文目录名需 URL 编码

## 前端行为

| 该故事的图片数 | 表现 |
|---|---|
| 0 | 保持图标 + 渐变底色，与没有后端时完全一致 |
| 1 | 显示单图，无翻页控件 |
| >1 | 显示轮播：左右按钮、圆点（≤7 张时）、`1 / n` 计数，手机上可横向滑动 |

详情页首屏先显示图标封面；拿到图片列表后，页面空闲时（`requestIdleCallback`，最迟 1.5 秒）
再上屏，避免与首屏渲染抢带宽。请求失败则回退图标并记住缺失，不在切页时反复请求。

点击图片打开大图浏览：

- 底部显示图片名，即 **`目录名/文件名`**
- 多张时可用左右按钮或键盘 ←/→ 翻页
- Esc、点击遮罩、右上角 ✕ 均可关闭；打开期间锁定背景滚动，关闭后焦点回到封面

**没有后端（纯前端部署）时完全不请求图片**，页面与以前一致。
列表卡片始终使用图标封面，不加载配图。

> 图片体积较大，已在 `.gitignore` 中排除，请部署时单独上传到服务器。
> 设计细节见 [故事配图设计](./specs/2026-10-17-story-images/design.md)。
