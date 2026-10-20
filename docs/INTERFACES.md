# 接口定义

本文档定义小星星故事屋的路由、数据模型、状态接口与组件契约。作为纯前端应用，这里的「接口」指内部模块间的契约。

## 页面路由

| 路径 | 页面 | 说明 |
|------|------|------|
| `/` | HomePage | 首页：年龄段切换、分类入口、精选与最近故事 |
| `/explore` | ExplorePage | 探索页：多维筛选 + 搜索 + 结果列表 |
| `/story/:id` | StoryDetailPage | 故事详情与朗读；`id` 不存在时跳转 404 |
| `/favorites` | FavoritesPage | 收藏列表与最近阅读 |
| `/login` | LoginPage | 输入名字登录（无需密码），并展示当前存储模式 |
| `/profile` | ProfilePage | 个人主页：头像、介绍、收藏与最近阅读；未登录时引导去登录 |
| `/about` | AboutPage | 关于本站、内容来源与版权说明 |
| `*` | NotFoundPage | 404 |

支持的查询参数（`/explore`）:

| 参数 | 类型 | 说明 |
|------|------|------|
| `age` | `Preschool \| Growing \| Explorer` | 年龄段筛选 |
| `category` | `string` | 分类 id |
| `q` | `string` | 搜索关键词 |
| `sort` | `latest \| shortest \| popular` | 排序方式，默认 `latest` |

## 数据模型

### 类型定义

```ts
export type AgeGroup = 'Preschool' | 'Growing' | 'Explorer';

export type CategoryId =
  | 'fable'
  | 'idiom'
  | 'bedtime'
  | 'fairy'
  | 'myth'
  | 'science'
  | 'character';

export interface Story {
  id: string;
  title: string;
  summary: string;
  ageGroup: AgeGroup;
  categories: CategoryId[];
  tags: string[];
  paragraphs: string[];
  moral: string;
  readMinutes: number;
  source: string;
  isPublicDomain: boolean;
  cover: CoverSpec;
  accentColor: string;
  createdAt: string;
}

export interface CoverSpec {
  illustration: string;
  emoji?: string;
  bgGradient?: [string, string];
}
```

### 字段约束

| 字段 | 约束 |
|------|------|
| `id` | 全局唯一，kebab-case，例如 `the-tortoise-and-the-hare` |
| `title` | 2-20 字，不含书名号 |
| `summary` | 20-60 字，用于卡片 |
| `paragraphs` | 至少 3 段，每段建议 30-120 字 |
| `moral` | 一句话寓意，20-50 字 |
| `readMinutes` | 正整数，按每分钟约 150 字估算 |
| `accentColor` | 十六进制色值，需满足与白色文字的对比度要求 |
| `isPublicDomain` | 公版内容为 `true`，原创改写需注明 `source` |

### 分类法

| 年龄段 | 标签 | 建议 |
|--------|------|------|
| `Preschool` 启蒙 | 3-6 岁 | 短句、大图、重复句式，优先寓言与睡前 |
| `Growing` 成长 | 6-9 岁 | 情节完整，含成语与童话 |
| `Explorer` 探索 | 9-12 岁 | 篇幅较长，含神话、科普与品格 |

| 分类 id | 名称 | 内容方向 |
|---------|------|----------|
| `fable` | 寓言故事 | 伊索寓言、中国寓言，动物主角、点明道理 |
| `idiom` | 成语故事 | 成语典故与用法 |
| `bedtime` | 睡前故事 | 温柔舒缓，适合睡前朗读 |
| `fairy` | 童话故事 | 公版童话与原创童话 |
| `myth` | 神话传说 | 中国神话、民间传说 |
| `science` | 科普启蒙 | 自然、动物、生活中的科学 |
| `character` | 品格教育 | 诚实、勇敢、分享、坚持等主题 |

## 账号与存储接口

登录只凭名字、不含密码。存储位置由运行时探测决定：能连上后台服务时写入服务器，否则写入浏览器 `localStorage`。

### 用户模型

```ts
export type StorageMode = 'server' | 'local';

export interface UserProfile {
  name: string;
  bio: string;
  avatarEmoji: string;
  avatarColor: string;
  favorites: string[];
  history: string[];
  createdAt: string;
  updatedAt: string;
}

export interface UserProfilePatch {
  bio?: string;
  avatarEmoji?: string;
  avatarColor?: string;
  favorites?: string[];
  history?: string[];
}
```

### UserRepository（双模式适配器）

```ts
export interface UserRepository {
  readonly mode: StorageMode;
  getUser(name: string): Promise<UserProfile | null>;
  createOrGetUser(name: string): Promise<UserProfile>;
  updateUser(name: string, patch: UserProfilePatch): Promise<UserProfile>;
}

// 探测后台：GET /api/health 返回 JSON 且 mode === 'server' 时用 remote，否则用 local
export function detectStorageMode(force?: boolean): Promise<StorageMode>;
export function getUserRepository(force?: boolean): Promise<UserRepository>;
```

- `remoteUserRepository.mode === 'server'`：请求 `/api/users` 系列接口，数据落在服务器 JSON 文件
- `localUserRepository.mode === 'local'`：写入 `localStorage`，key 前缀 `story-house:user:`
- 探测失败、超时或返回非 JSON（例如静态托管的 SPA 回退到 `index.html`）时回退为 `local`

### 后台 HTTP API（可选服务）

| 方法 | 路径 | 说明 |
|------|------|------|
| `GET` | `/api/health` | 健康检查，返回 `{ ok, mode: 'server', storage: 'file' \| 'memory', features: { audioVoices, coverImages }, build: { version, buildTime, gitCommit } }` |
| `POST` | `/api/users` | body `{ name }`，按名字创建或读取用户 |
| `GET` | `/api/users/:name` | 读取用户，不存在返回 404 |
| `PUT` | `/api/users/:name` | 局部更新 `UserProfilePatch`，返回更新后的用户 |
| `GET` | `/api/voices` | 音色列表（遍历音频目录的子文件夹），无音频目录时返回空数组 |
| `GET` | `/api/voices/:voice/index` | 该音色已存在音频的故事 id 列表 |
| `GET` | `/api/voices/:voice/:id.mp3` | 返回音频，支持 `Range` 断点续播；缺文件返回 404 |
| `GET` | `/api/story-images/:id` | 该故事的全部配图 `{ storyId, count, images: [{ folder, file }] }`，按目录名排序 |
| `GET` | `/api/images` | 有配图的故事 `{ count, images, storyIds }`（`images` 是文件总数） |
| `GET/HEAD` | `/api/images/:folder/:file` | 返回指定子目录里的图片；缺文件返回 404 |
| `GET/HEAD` | `/api/images/:id.jpg` | 旧地址兼容，返回该故事的第一张 |

项目内置两种等价的后台实现，前端无需区分：

- **Node 后台 `server/index.js`**：零依赖 `node:http`，端口取 `API_PORT`/`PORT`（默认 3001），用户文件存放于 `server/data/`（已 gitignore）
- **Go 单文件后台 `go_backend/main.go`**：用 `//go:embed all:dist` 把构建后的 `go_backend/dist/` 内嵌进二进制，单文件即可完整运行；启动时从控制台读取绑定端口、URL 前缀、用户数据目录、音色目录与配图目录

用户文件名为名字的 base64url 编码，文件内容即 `UserProfile`；两种实现命名规则一致，可互相读取。

### imageRepository

`src/services/imageRepository.ts`，故事配图的数据获取、地址与缓存。

```ts
export interface StoryImage { folder: string; file: string }
export function storyImageLabel(image: StoryImage): string;  // 目录名/文件名
export function storyImageUrl(image: StoryImage): string;    // /api/images/<folder>/<file>
export function fetchStoryImages(storyId: string): Promise<StoryImage[]>;
export function isKnownMissing(storyId: string): boolean;
export function markMissing(storyId: string): void;
```

- 同一故事的并发请求合并成一次，成功后缓存在模块级 `Map`，来回切页不重复请求
- 缺失记录保存在模块级 `Set`，切页时不会重复请求同一个没有配图的故事
- 是否发起请求由 `fetchStoryImages` 内部先经 `detectStorageMode()` 判断，纯前端部署直接返回空数组
- 网络异常**不**写入缺失记录，下次进入详情页仍会重试

`src/hooks/useStoryImages.ts` 负责取列表并在空闲时上屏，返回 `StoryImage[]`。

### Go 单文件后台

```bash
# 一键构建前端并编译单文件二进制（内嵌 dist）
npm run build:go

# 运行；随后按提示输入端口 / URL 前缀 / 数据目录
cd go_backend && ./storyhouse
```

启动交互：

| 提示 | 默认值 | 说明 |
|------|--------|------|
| 绑定端口 | `8080` | 监听端口 |
| URL 前缀 | `/` | 形如 `/story`，用于子路径部署 |
| 用户数据存储目录 | 空 | 留空表示仅存内存，进程退出即丢失；填写则按名字落盘为 JSON 文件 |
| 音色音频目录 | `audio-voices` | 每个子文件夹即一个音色，内放 `<故事id>.mp3`；输入 `-` 关闭音色功能 |

### 运行时前端配置

前端在 `index.html` 的 `<head>` 中读取 `window.__STORY_HOUSE_CONFIG__`，以支持任意 URL 前缀部署：

```ts
export interface StoryHouseConfig {
  base: string;    // 应用挂载点，如 '/story'
  apiBase: string; // 接口前缀，如 '/story'，根部署时为空串
}

// src/config.ts
export const appBasePath: string;      // '/story/' 或 '/'
export const routerBasename?: string;  // '/story' 或 undefined
export function apiUrl(path: string): string; // 拼接运行时接口前缀
```

- Go 后台在返回 `index.html` 时会注入 `<base href="...">` 与 `window.__STORY_HOUSE_CONFIG__`
- 前端以 `base: './'` 构建，配合注入的 `<base>` 标签即可在任意子路径下正确解析静态资源
- 无注入时（如 Vite 开发服务器）自动退化为根路径，接口走同源 `/api`

### authStore

```ts
interface AuthState {
  status: 'idle' | 'loading' | 'ready' | 'error';
  mode: StorageMode | null;
  userName: string | null;
  user: UserProfile | null;
  error: string | null;
  detect: (force?: boolean) => Promise<StorageMode>;
  login: (rawName: string) => Promise<UserProfile>;
  logout: () => void;
  refresh: () => Promise<void>;
  updateProfile: (patch: UserProfilePatch) => Promise<void>;
  persistLibrary: (favoriteIds: string[], history: string[]) => Promise<void>;
}
```

- 只持久化 `userName` 与 `user` 到 `localStorage`（key `story-house:auth`），用于刷新后恢复会话
- 首次登录且账号为空时，会把本机已有的收藏/历史并入账号；否则以账号数据为准
- 登录后收藏与最近阅读变化会自动同步到当前存储模式

## 状态接口（Zustand Store）

### favoritesStore

```ts
interface FavoritesState {
  favoriteIds: string[];
  history: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  markAsRead: (id: string) => void;
  clearHistory: () => void;
  replaceLibrary: (library: { favoriteIds: string[]; history: string[] }) => void;
}
```

### preferencesStore

```ts
interface PreferencesState {
  ageGroup: AgeGroup;
  fontSize: 'base' | 'large' | 'xlarge';
  speechRate: number;
  theme: ThemeId;
  narrationSource: NarrationSource;
  /** 读完自动进入下一篇；默认 false */
  continuousPlay: boolean;
  setAgeGroup: (age: AgeGroup) => void;
  setFontSize: (size: PreferencesState['fontSize']) => void;
  setSpeechRate: (rate: number) => void;
  setTheme: (theme: ThemeId) => void;
  setNarrationSource: (source: NarrationSource) => void;
  setContinuousPlay: (enabled: boolean) => void;
}
```

### playbackStore

`src/store/playbackStore.ts`，**不持久化**，只用于「连续播放」跳转瞬间的表面信号：

```ts
interface PlaybackState {
  autoPlayId: string | null;                     // 需要自动开始朗读的故事 id
  requestAutoPlay: (storyId: string) => void;
  clearAutoPlay: () => void;
}
```

- 上一页写入，落地页消费后立刻清空
- 刻意不放进 URL：刷新或前进后退不应该突然自动播放
- 离开详情页时若仍未消费，会被清理，避免以后手动回到该篇时自动念起来

两个持久化 store 通过 `persist` 中间件写入 `localStorage`，key 分别为 `story-house:favorites` 与 `story-house:preferences`。

## Hook 接口

### useSpeech

```ts
interface UseSpeechOptions {
  paragraphs: string[];
  rate?: number;
  lang?: string;
  /** 自然读完最后一个段落时触发；stop/pause/切文本都不触发 */
  onEnd?: () => void;
}

interface UseSpeechResult {
  isSupported: boolean;
  isSpeaking: boolean;
  isPaused: boolean;
  currentIndex: number;
  play: (fromIndex?: number) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
}
```

- `isSupported` 为 `false` 时，UI 需展示兼容性提示并隐藏控制条
- 段落切换通过 `currentIndex` 驱动正文高亮与自动滚动
- 组件卸载时自动调用 `speechSynthesis.cancel`
- `play` 从内部 ref 读取**最新的** `paragraphs`：切换故事后立即播放，朗读的一定是当前故事（修复了「切歌后念旧故事」的缺陷）
- 中断判定基于朗读文本内容（而非数组引用），同一故事的重渲染不会打断正在进行的朗读

### useNarration

`src/hooks/useNarration.ts`，对外暴露与 `useSpeech` 一致的接口，内部按
`narrationSource` 在浏览器 TTS 与服务端音色音频之间切换。

```ts
interface UseNarrationOptions {
  storyId: string;
  paragraphs: string[];
  rate?: number;
  lang?: string;
  source: NarrationSource;
  hasVoice: boolean;
  audioSrc?: string;
  /** 自然读完时触发（音色走 audio.onended，TTS 走段落读完）；stop/pause 不触发 */
  onEnd?: () => void;
}
```

- 音色模式下该篇缺音频（`hasVoice === false`）时播放直接报错，不静默回退到 TTS
- 切换来源、切换故事或组件卸载时，两条路径都会被停止并清理资源
- 切换故事后不会自动续读，需重新点「朗读故事」

### useStoryFilter

```ts
interface StoryFilter {
  ageGroup?: AgeGroup;
  category?: CategoryId;
  keyword?: string;
  sort?: 'latest' | 'shortest' | 'popular';
}

function useStoryFilter(filter: StoryFilter): {
  results: Story[];
  total: number;
  isEmpty: boolean;
};
```

- 关键词匹配范围：`title`、`tags`、`summary`、`moral`
- 空关键词返回全部；无匹配时 `isEmpty` 为 `true`

## 组件契约

| 组件 | 关键 Props | 说明 |
|------|-----------|------|
| `StoryCard` | `story: Story`, `onOpen?: (id) => void` | 列表卡片，展示封面、标题、寓意摘要、时长与收藏按钮 |
| `StoryCover` | `story: Story`, `size?: 'sm' \| 'md' \| 'lg'`, `images?: StoryImage[]`, `onImageClick?: (index: number) => void` | 根据 `cover` 渲染图标/渐变底色；`images` 为空时保持图标，一张时显示单图，多张时自动渲染轮播。组件本身不发请求 |
| `StoryImageCarousel` | `images: StoryImage[]`, `alt: string`, `onOpen: (index) => void` | 封面轮播：左右按钮、圆点（≤7 张）、`1 / n` 计数、手机横向滑动；点击当前图片触发 `onOpen` |
| `StoryImageLightbox` | `open: boolean`, `images: StoryImage[]`, `index: number`, `onIndexChange: (index) => void`, `onClose: () => void` | 多图大图浏览；底部显示「目录名/文件名」，支持 Esc/方向键/遮罩/关闭按钮，打开时锁滚动并管理焦点 |
| `StoryReader` | `story: Story`, `currentParagraph?: number` | 渲染分段正文并高亮当前朗读段 |
| `SpeechBar` | `narration: UseNarrationResult`, `rate: number`, `onRateChange: (n) => void`, `voices: VoiceOption[]`, `source: NarrationSource`, `onSourceChange: (s) => void`, `continuous: boolean`, `onContinuousChange: (v) => void` | 朗读条：播放/暂停/停止、声音来源切换、连续播放开关、TTS 下的语速控制 |
| `SearchBar` | `value: string`, `onChange: (v) => void`, `placeholder?: string` | 受控搜索框，带防抖 |
| `AgeSwitcher` | `value: AgeGroup`, `onChange: (v) => void` | 年龄段切换，大按钮、高对比 |
| `Chip` | `label: string`, `active?: boolean`, `onClick?: () => void` | 分类/标签筛选标签 |
| `EmptyState` | `title: string`, `description?: string`, `action?: ReactNode` | 无结果或空列表占位 |

## 数据校验接口

`src/data/validateStories.ts` 在开发环境启动时运行：

```ts
function validateStories(stories: Story[]): {
  valid: boolean;
  errors: string[];
};
```

校验项：`id` 唯一、必填字段非空、`paragraphs.length >= 3`、`accentColor` 为合法十六进制、`categories` 不为空。发现错误的 `id` 会输出到控制台，避免脏数据进入生产构建。
