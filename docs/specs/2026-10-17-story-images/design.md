# 故事配图设计

## 1. 目标与边界

为每篇故事配一张 AI 生成的卡通插画，替换当前的「渐变 + emoji」图标封面。

- 图片由外部 AI 生图工具生成，**不引入运行时生成**
- 图片按故事 id 命名，放在服务端独立目录，**不入库**
- 纯前端部署没有后端，保持现有图标封面不变
- 首屏仍显示图标，图片在页面加载后异步替换，**不阻塞首屏、不产生布局位移**

复用现有音色音频的架构（`--audio-dir` → `/api/voices/...` → `voiceRepository`），
保证两条链路的设计语言一致。

## 2. 图片规格

| 项 | 取值 |
|---|---|
| 尺寸 | 1536×864（16:9 横版） |
| 格式 | JPEG，质量 85 左右 |
| 单张体积 | 目标 ≤ 300 KB |
| 命名 | `<storyId>.jpg`，如 `idiom-a-promise-worth-a-thousand-gold.jpg` |
| 总规模 | 361 张，约 90 MB（部署时单独上传） |

**为什么是 16:9**：详情页封面容器是 `h-56`（224px）满宽，桌面端约 3.2:1。
16:9 在移动端（约 3:2）与桌面端之间折中，配合 `object-cover` 裁切后失真最小。

生图时必须要求「主体居中、四周留安全边距、重要信息集中在画面中部」，
否则桌面端宽幅裁切会切掉头部或关键动作。

## 3. 后端（Go）

### 3.1 启动参数

新增 `--image-dir <path>`，默认 `story-images`，`-` 表示关闭：

```bash
storyhouse --image-dir ./story-images
storyhouse --image-dir -            # 关闭配图，仅用图标
```

问答模式增加第 5 个问题（默认 `story-images`，输入 `-` 表示不用）。
启动横幅增加一行：

```
故事插画: 361 张（./story-images）
故事插画: 已关闭（使用图标封面）
```

### 3.2 接口

| 方法 | 路径 | 说明 |
|---|---|---|
| GET/HEAD | `/api/images/<storyId>.jpg` | 返回图片；不存在返回 404 JSON |
| GET | `/api/images` | 可选：返回 `{count, storyIds}`，用于统计与预检 |

`/api/health` 的 `features` 增加 `coverImages: <count> > 0`。

### 3.3 实现要点

沿用音频已有的安全与缓存逻辑：

- `isSafeSegment(storyID)` 过滤非法 id，`isInsideDir` 防目录穿越
- 只接受 `.jpg`（大小写不敏感），其余扩展名不认
- `http.ServeContent` 自动处理 `Range`、`ETag`、`Last-Modified`
- `Cache-Control: public, max-age=86400`（1 天）
  - 图片可能被重新生成，同名内容会变，因此不用 `immutable`
  - 有 ETag，过期后回源校验成本很低
- 目录不存在或为空时静默关闭，接口返回 404，不报错、不影响启动

新增方法（与 `resolveAudioFile` / `serveAudio` 对应）：

```go
func (s *server) resolveImageFile(storyID string) (string, os.FileInfo, bool)
func (s *server) serveImage(w http.ResponseWriter, r *http.Request, storyID string)
func (s *server) listImageIndex() []string
```

### 3.4 Node 后台（可选）

`server/index.js` 同样支持 `STORY_HOUSE_IMAGE_DIR` 与上述接口，
保证两条后端契约一致。纯前端或未配置时返回 404。

## 4. 前端

### 4.1 新增 `src/services/imageRepository.ts`

与 `voiceRepository` 同构：

```ts
/** 图片地址；纯前端模式下调用方应先用 isImageEnabled() 判断。 */
export function storyImageUrl(storyId: string): string

/** 已确认不存在的图片，避免反复 404。 */
export function isKnownMissing(storyId: string): boolean
export function markMissing(storyId: string): void
```

- 模块级 `Set<string>` 记录 404 过的 id（跨路由复用，避免每次进页面再请求）
- 不做预检请求：直接让 `<img>` 去请求，404 走 `onError` 回退。
  这样少一次往返，且浏览器自身的 404 缓存也能兜底

### 4.2 `StoryCover` 渐进增强

给组件增加两个可选属性：

```ts
interface StoryCoverProps {
  story: Story;
  size?: 'sm' | 'md' | 'lg';
  /** 传入后才尝试加载真实插画；不传则永远是图标封面 */
  withImage?: boolean;
}
```

渲染结构（**图标层始终存在**，图片层覆盖其上）：

```text
<div relative>                     ← 固定高度，保证无 CLS
  <div 渐变 + emoji + 分类标签 />   ← 现有内容，首屏可见
  <img absolute inset-0 object-cover
       opacity-0 → opacity-100
       onLoad / onError />
</div>
```

- `opacity` 过渡 500ms，图片加载完成后淡入覆盖图标
- `onError` → `markMissing(storyId)`，卸载 `<img>`，界面回到图标
- `alt=""`（容器已有 `role="img"` 与 `aria-label`，避免重复朗读）
- `decoding="async"`、`fetchPriority="low"`，不抢首屏资源

### 4.3 加载时机

要求是「页面加载完毕后再去获取」，因此**不在渲染时设置 `src`**，
而是挂载后延迟触发：

```ts
useEffect(() => {
  if (!withImage || !story.id) return;
  if (isKnownMissing(story.id)) return;

  let cancelled = false;
  const start = () => { if (!cancelled) setSrc(storyImageUrl(story.id)); };
  const idle = 'requestIdleCallback' in window
    ? requestIdleCallback(start, { timeout: 1500 })
    : setTimeout(start, 300);

  return () => {
    cancelled = true;
    // 两种 API 分别清理
  };
}, [story.id, withImage]);
```

用 `requestIdleCallback` 而非 `useEffect` 立即执行，是为了让首屏渲染、
字体与样式先完成，再让位给图片下载；`timeout: 1500` 保证最迟 1.5 秒内必然发起。

切换故事（上一篇/下一篇）时 `story.id` 变化会重置 `src`，
旧图不会残留在新故事上。

### 4.4 生效范围

第一阶段**只开在详情页**（`StoryDetailPage`，`size="lg"`）：

```tsx
<StoryCover story={story} size="lg" withImage onImageClick={() => setLightboxOpen(true)} />
```

列表卡片（`StoryCard`）继续用图标：一页可能渲染几十张，加载真实图会拖慢列表，
且卡片尺寸小，图标辨识度足够。后续若要开，加 `loading="lazy"` 即可。

### 4.5 大图浏览

真实插画加载完成后，封面右下角出现放大图标，点击封面打开 `StoryImageLightbox`。

- **只在真实图加载完成后可点击**：图标封面点开大图没有意义，所以按钮的渲染条件是
  `imageLoaded && onImageClick`
- 用 `createPortal` 挂到 `body`：封面容器是 `overflow-hidden`，直接渲染会被裁掉
- 关闭方式：Esc、点击遮罩、右上角关闭按钮；点击图片本身不关闭
- 打开期间锁定 `body` 滚动，关闭后恢复原值
- 焦点管理：打开时聚焦关闭按钮，Tab 保持在弹层内，关闭后焦点回到触发元素
- 弹层内图片 `object-contain`，最大 94vw × 86vh，不放大到失真

## 5. 提示词体系

### 5.1 结构

每条提示词都**自包含**（可单独复制到任意生图工具），由四段拼成：

```text
[通用风格] + [故事场景] + [分类风格] + [年龄段构图] + [硬性要求]
```

- **通用风格**：儿童绘本插画、卡通、圆润可爱、线条柔和、明亮温暖、无文字
- **故事场景**：取故事首段（必要时加第二段首句），裁剪到 60 字以内
- **分类风格**：见下表
- **年龄段构图**：3-6 岁简单、6-9 岁适中、9-12 岁细节更丰富
- **硬性要求**：横版 16:9、主体居中、四周留安全边距、画面无任何文字

### 5.2 分类规则

| 分类 | 场景要求 |
|---|---|
| 成语故事 | **中国古代场景，人物穿中国传统古代服饰（汉服、长袍、襦裙、发冠/发髻），古代建筑与器物** |
| 神话传说 | 中国神话场景，古代服饰，祥云、仙山、神兽等东方神话元素 |
| 寓言故事 | 动物角色拟人化；若出现人物，按古代背景穿简朴古代服饰 |
| 童话故事 | 经典童话绘本场景，城堡、森林、魔法光点等 |
| 睡前故事 | 安静夜色，低饱和暖色，月亮、星星、柔软被褥 |
| 科普启蒙 | 科普卡通插画，用清晰图形解释现象，可拟人化 |
| 品格教育 | **现代**儿童日常生活场景，现代服装，注重情绪与互动 |

一篇故事常属于多个分类，必须定一个主分类决定场景风格。优先级：

```text
idiom > myth > fable > fairy > bedtime > science > character
```

`character` 排在最后是关键：数据里 15 篇标为 `character+fable`、6 篇标为
`character+myth`，若按数组顺序取第一个，**《盲人摸象》这类古代寓言会被判成
「现代日常生活场景，人物穿现代服装」**，直接违背内容。改优先级后正确落到
`fable` / `myth`，人物穿古代服饰。

反面例子（已修正）：`character-blind-men-and-the-elephant`
分类 `character,fable` → 修正前主类 `character`，修正后 `fable`。

成语故事额外在负面词里屏蔽现代服装与建筑，作为双保险。

### 5.2.1 人工覆盖表

数据里还有 8 篇「内容明显是古代背景，但只标了 `character`」的故事，
按分类优先级仍会落到现代生活场景。因此在 `generate-image-prompts.mjs` 里
维护 `CATEGORY_OVERRIDES`，按 id 强制指定场景分类（不改故事数据本身）：

| 故事 | 数据分类 | 覆盖为 | 原因 |
|---|---|---|---|
| 塞翁失马 | character | idiom | 边塞古代背景 |
| 铁杵磨成针 | character | idiom | 李白，唐代 |
| 诚实的砍柴娃 | character | idiom | 古代民间故事 |
| 橘逾淮为枳 | character | idiom | 晏子使楚 |
| 苏武牧羊 | character | idiom | 汉代 |
| 手捧空花盆的孩子 | character | idiom | 老国王选继承人 |
| 乌鸦反哺 | character | fable | 动物寓言，非人类日常 |
| 皮诺曹的长鼻子 | character | fairy | 欧洲童话 |

覆盖结果会体现在：
- `image-prompts.json` 的 `primaryCategory` 与 `categoryOverride: true`
- 分类清单的分组（例如「塞翁失马」出现在 `prompts/idiom.md` 而非 `character.md`）
- `docs/image-handover/` 的 CSV 与总表

新增故事后若发现类似错位，直接在 `CATEGORY_OVERRIDES` 里加一行，再重跑
`npm run images:prompts` 与 `npm run images:handover` 即可。

### 5.3 负面提示词

统一使用（成语故事额外屏蔽现代服饰）：

```text
写实照片，真实人物肖像，3D 写实渲染，文字，汉字，英文，水印，签名，边框，
阴暗恐怖，血腥，暴力，武器，低清晰度，模糊，肢体畸形，多余手指，重复人脸
```

### 5.4 一致性

361 张图独立生成，风格统一靠两件事：

1. **固定的风格前缀与负面词**（脚本保证）
2. **固定的尺寸与模型**；建议同一批次用同一模型与同一套参数

不强制角色跨故事统一——每篇是独立短篇，读者不会期待同一个主角。

## 6. 生成流程

```bash
npm run images:prompts   # 生成提示词清单
npm run images:status    # 统计已生成覆盖率
```

产物：

```text
docs/story-prompts/
  image-prompts.json      # 机器可读：id / title / categories / file / prompt / negativePrompt
  prompts/
    README.md             # 使用说明与进度
    idiom.md              # 按分类拆分，便于分批生成
    myth.md
    fable.md
    fairy.md
    bedtime.md
    science.md
    character.md
```

每个分类文件是带复选框的清单：

```markdown
- [ ] 一诺千金 `idiom-a-promise-worth-a-thousand-gold.jpg`
  > 儿童绘本插画。故事《一诺千金》。画面内容：…… 横版 16:9。
```

建议每批 10-20 张：生成 → 人工挑选 → 按 `<storyId>.jpg` 放进 `story-images/` →
`npm run images:status` 看进度。

## 7. 上线与兼容

| 场景 | 行为 |
|---|---|
| 有后端 + 配了图片目录 | 首屏图标 → 图片淡入 |
| 有后端 + 未配/空目录 | 接口 404，始终图标，无报错 |
| 纯前端部署 | 不请求图片，始终图标 |
| 图片缺失单张 | 该篇回退图标，其他不受影响 |
| 子路径部署 | 走 `apiUrl()`，自动带前缀 |

**体积与部署**：图片总计约 90 MB，`.gitignore` 排除，部署时单独上传。
静态托管（无后端）无法使用本功能，这是设计上的取舍——若要纯静态支持，
只能把图片打进 `dist`，会让前端包膨胀近百倍。

## 8. 风险

1. **裁切**：3.2:1 的容器对 16:9 图裁切较狠，靠「主体居中 + 安全边距」缓解；
   若效果不佳，退路是把容器改成 `aspect-[16/9]`（会改变现有版式，需另行确认）
2. **风格漂移**：不同批次生成的图可能风格不一，建议固定模型与参数
3. **体积**：首次进入详情页会多一次约 250 KB 的请求，已用低优先级 + 空闲加载缓解
4. **缓存**：同名图片重新生成后有最多 1 天缓存，可加查询参数强制刷新（暂不做）
