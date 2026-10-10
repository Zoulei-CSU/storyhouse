# 开发指南

## 环境要求

- Node.js >= 18（推荐 20 LTS）
- 包管理器：npm >= 9（或 pnpm / yarn，团队内保持一致）
- Go >= 1.23（仅在需要编译单文件后台时用到）
- 现代浏览器：Chrome / Edge / Safari 最新版（语音朗读依赖 Web Speech API）

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器（同时拉起可选 Node 后台与 Vite）
npm run dev

# 只启动前端
npm run dev:web

# 只启动 Node 后台
npm run dev:api

# 生产构建
npm run build

# 编译 Go 单文件后台（内嵌 dist）
npm run build:go

# 预览构建产物
npm run preview
```

开发服务器默认运行在 `http://localhost:5173`，Vite 会把 `/api` 反向代理到 `http://localhost:3001`。前端在探测不到后台时会自动回退到浏览器 `localStorage` 模式，因此也可以只跑前端。

## 项目结构说明

目录职责详见 [架构设计](./ARCHITECTURE.md#项目结构建议)。要点：

- `src/data/stories/` 是内容仓库，每新增一个分类文件，都要在 `index.ts` 中注册
- `src/pages/` 只做页面编排，业务逻辑下沉到 `src/hooks/`
- `src/components/` 保持无业务副作用，通过 props 接收数据
- `src/store/` 只存放需要跨页面共享且需持久化的状态

## 开发规范

### 命名规范

- 组件文件与组件名使用 `PascalCase`
- Hook 以 `use` 开头，使用 `camelCase`
- 故事 `id` 使用 kebab-case，且与英文标题对应
- 分类 id 使用小写英文单词

### 代码风格

- 统一使用 TypeScript，禁止 `any`（必要时使用 `unknown` + 收窄）
- 组件使用函数式组件 + Hooks
- 样式优先使用 Tailwind 工具类，复杂组件可在 `styles/` 中抽公共类
- ESLint + Prettier 统一格式，提交前执行 `npm run lint`

### 提交规范

```
feat(story): 新增 5 篇伊索寓言
fix(speech): 修复切换故事后朗读未停止
style(home): 优化首页卡片间距
docs(guide): 补充新增故事流程
```

## 常见任务

### 新增一篇故事

1. 在对应分类文件（如 `src/data/stories/fables.ts`）中追加对象
2. 填写全部必填字段，`paragraphs` 至少 3 段
3. 运行 `npm run dev`，开发期校验器会检查 `id` 唯一性与字段完整性
4. 在首页与探索页确认筛选、搜索、朗读均正常

### 新增一个分类

1. 在 `src/data/taxonomy.ts` 的 `CategoryId` 与分类元数据中注册
2. 在 `src/data/stories/` 新建数据文件并导出 `Story[]`
3. 在 `src/data/stories/index.ts` 中合并进 `allStories`
4. 补充分类插画到 `src/assets/illustrations/`

### 调整视觉主题

- 颜色、圆角、字号集中在 `tailwind.config.ts` 的 `theme.extend`
- 全局背景纹理与字体在 `src/styles/index.css` 中定义

### 新增一个音色

1. 用 `npm run audio:manifest` 重新生成 `docs/audio/voice-manifest.json`（含每篇的 `id` 与待朗读 `text`）
2. 用 AI 按目标音色朗读清单中的 `text`，导出 mp3
3. 以故事 id 命名，放进 `audio-voices/<音色名>/`，例如 `audio-voices/音色1/bedtime-bears-moon-pillow.mp3`
4. 启动后端时指定 `--audio-dir ./audio-voices`（Node 用 `STORY_HOUSE_AUDIO_DIR`）
5. 打开任一故事页验证：音色出现在「声音来源」里（**无需登录**），逐篇试听；缺音频会明确报错

音频文件体积大，已在 `.gitignore` 中排除，**部署时需单独上传到服务器**。目录不存在或没有子文件夹时，音色功能自动关闭，界面与纯前端部署一致。

> 新增故事后必须重新生成清单与音频，否则该故事在音色模式下会提示缺音频。

## 内容规划与收录策略

**收录原则**：只收录公版（Public Domain）作品或团队原创改写，避免版权风险。优先选择情节简单、寓意正向、适合朗读的短篇。

| 分类 | 当前数量 | 主要来源 | 难度分布 |
|------|---------|---------|---------|
| 寓言故事 | 93 | 伊索寓言、中国寓言 | 启蒙 / 成长 |
| 成语故事 | 80 | 常用成语典故 | 成长 / 探索 |
| 睡前故事 | 33 | 原创温柔短篇 | 启蒙 |
| 童话故事 | 39 | 公版童话、原创 | 启蒙 / 成长 |
| 神话传说 | 34 | 中国神话、民间传说 | 成长 / 探索 |
| 科普启蒙 | 41 | 自然、动物、生活科学 | 成长 / 探索 |
| 品格教育 | 41 | 诚实、勇敢、分享、坚持 | 全年龄 |
| **合计** | **361** | | |

每批故事按分类补充，新增后运行 `npm run dev`，开发环境的校验器会自动检查重复 `id` 与缺失字段。

## 构建与发布

```bash
# 生产构建，产物输出到 dist/
npm run build
```

- 构建产物为纯静态文件，可部署到任意静态托管
- 前端以 `base: './'` 构建，并对子路径部署提供运行时支持：Go 后台会向 `index.html` 注入 `<base>` 与 `window.__STORY_HOUSE_CONFIG__`
- 开发服务器默认监听全部网卡（`host: true`），便于用局域网 IP 或反向代理访问；如需限制可访问的主机名，可自行添加 `server.allowedHosts`

### 部署为单个可执行文件（Go）

Go 后台位于 `go_backend/`，用 `//go:embed all:dist` 把前端产物内嵌进二进制，因此无需在目标机器上安装 Node 或保留静态文件目录。前端构建产物输出到 `go_backend/dist/`。

```bash
# 先构建前端并编译本机二进制（Windows 下产出 .exe）
npm run build:go

# 交叉编译 Linux x64
npm run build:go:linux

# 一次产出全部平台
npm run build:go:all

# 等价的手动步骤（Linux x64）
npm run build
cd go_backend
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -trimpath -ldflags="-s -w" -o storyhouse-linux-amd64 .

# 运行；按提示输入端口、URL 前缀、数据目录、音色音频目录
cd go_backend
./storyhouse-linux-amd64            # Linux / macOS
./storyhouse-windows-amd64.exe      # Windows
```

编译逻辑统一在 `scripts/build-go.mjs`：它通过 Node 的 `spawnSync` 传入 `GOOS`/`GOARCH`/`CGO_ENABLED`，**不依赖 shell 的环境变量前缀语法**，因此同一条命令在 Windows cmd 与 bash 下行为一致。详见 [Go 后台编译与部署](../go_backend/docs/GO_BACKEND_BUILD_DEPLOY.md)。

- 绑定端口默认 `8080`
- URL 前缀默认 `/`；填 `/story` 即在 `http://host:port/story/` 提供服务，静态资源与 `/api` 接口都会带上该前缀
- 用户数据目录留空表示仅使用内存存储，进程退出后数据丢失；填写目录则按名字落盘为 JSON 文件
- 音色音频目录默认 `audio-voices`；每个子文件夹即一个音色，内放 `<故事id>.mp3`。**音频不入库**，需单独上传，启动时用 `--audio-dir` 指定
- 用户文件名采用名字小写后的 base64url 编码，与 `server/index.js` 完全一致，两种后台可共用同一份数据

最小体积编译、全平台交叉编译与 systemd 部署的完整说明见 [Go 后台编译与部署](../go_backend/docs/GO_BACKEND_BUILD_DEPLOY.md)，后台内部设计见 [Go 后台设计](../go_backend/docs/GO_BACKEND_DESIGN.md)。

## 可访问性与兼容性

- 正文默认字号不低于 18px，提供「大 / 特大」两档
- 所有可点击元素最小尺寸 44x44px，保证儿童触控准确
- 颜色对比度满足 WCAG AA
- 语音朗读不可用时，隐藏控制条并提示「你的浏览器暂不支持朗读，可以自己读一读哦」
