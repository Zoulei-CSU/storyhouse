# Go 单文件后台 编译与部署文档

本文档描述 `go_backend/` 的编译（含最小体积编译与交叉编译）与部署（直接运行、nohup、systemd）。设计细节见 [设计文档](./GO_BACKEND_DESIGN.md)。

## 1. 前置条件

- Go >= 1.23（`go version` 可查看）
- Node.js >= 18 与 npm >= 9（仅用于构建前端资源）
- 可选：`upx`（对二进制做进一步压缩）

Go 后台仅依赖标准库，`go.mod` 无 require，可离线构建。

## 2. 目录与产物

```
go_backend/
├── main.go            # 后台源码
├── go.mod             # module storyhouse
└── dist/              # 前端构建产物，由 npm run build 生成
```

编译前必须先构建前端，因为 `main.go` 用 `//go:embed all:dist` 在编译期读取 `go_backend/dist/`。若该目录不存在或为空，编译会失败。

产物文件名带平台标识与扩展名（Windows 为 `.exe`，其他平台无扩展名）：

```
go_backend/
├── main.go                        # 后台源码
├── go.mod                         # module storyhouse
├── dist/                          # 前端构建产物，由 npm run build 生成
├── storyhouse-windows-amd64.exe   # 本机（Windows）构建产物
├── storyhouse-linux-amd64         # 交叉编译产物
└── storyhouse-linux-arm64
```

## 3. 标准构建

一键构建前端并编译本机二进制：

```bash
npm run build:go
```

在 Windows 上产出 `storyhouse-windows-amd64.exe`，在 Linux/macOS 上产出对应平台的无扩展名文件。脚本为 `scripts/build-go.mjs`，它通过 Node 的 `spawnSync` 传入 `GOOS`/`GOARCH`/`CGO_ENABLED`，**不依赖 shell 的环境变量前缀语法**，因此同一条命令在 Windows cmd 与 bash 下行为一致。

常用参数：

```bash
node scripts/build-go.mjs                      # 本机平台
node scripts/build-go.mjs --target linux-amd64 # 指定目标
node scripts/build-go.mjs --all                # 一次产出全部平台
```

对应的 npm 脚本：

| 命令 | 产物 |
|------|------|
| `npm run build:go` | 本机平台（Win → `storyhouse-windows-amd64.exe`） |
| `npm run build:go:linux` | `storyhouse-linux-amd64` |
| `npm run build:go:all` | 全部 6 个平台 |

> ⚠ **必须先构建前端**：`//go:embed` 在**编译期**把 `go_backend/dist/` 读进二进制。
> 若前端源码已改但没跑 `npm run build`，编出来的服务端会内嵌**旧页面**且不报错。
> `scripts/build-go.mjs` 会比较 `src/` 与 `dist/index.html` 的修改时间，
> 发现源码更新时直接中止并提示先执行 `npm run build`。
>
> 部署后可在页面「关于 → 版本信息」查看构建时间与源码提交，确认跑的是哪一版。

等价的手动步骤（以 Linux x64 为例）：

```bash
npm run build
cd go_backend
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -trimpath -ldflags="-s -w" -o storyhouse-linux-amd64 .
```

> Windows 上如果用 cmd 执行带 `CGO_ENABLED=0 GOOS=...` 前缀的命令会报
> `'CGO_ENABLED' 不是内部或外部命令`，请改用 `scripts/build-go.mjs`。

`npm run build` 由 Vite 输出到 `go_backend/dist/`，产物文件名带内容哈希，已 minify。

## 4. 最小体积编译

在保证功能不变的前提下，用以下参数压缩产物体积：

```bash
cd go_backend
CGO_ENABLED=0 go build -trimpath -ldflags="-s -w" -o storyhouse .
```

> Windows 上若用 cmd 执行，请改用 `node scripts/build-go.mjs`（见 3. 节），
> 或省略 `CGO_ENABLED=0` 前缀——Go 默认即为静态编译。

各参数作用：

| 参数 | 作用 |
|------|------|
| `CGO_ENABLED=0` | 关闭 cgo，产出纯静态二进制，不依赖系统 libc |
| `-trimpath` | 去掉二进制中记录的本地源码路径 |
| `-ldflags="-s -w"` | `-s` 去掉符号表，`-w` 去掉 DWARF 调试信息 |

在以上基础上进一步减少体积的可选项：

- **UPX 压缩**：需先安装 `upx`，压缩后体积通常可再降 50% 以上

```bash
upx --best --lzma storyhouse
```

注意：UPX 压缩后的程序启动时有解压开销，且部分杀毒软件会对 UPX 壳误报，Windows 平台需谨慎使用。

若要查看各段体积构成，可使用 `go tool nm` 或 `go build -ldflags="-s -w"` 前后对比。内嵌的 `dist/` 为前端 minify 后的资源，是体积的主要来源之一，减小前端体积（代码分割、移除未用依赖）同样能显著缩小二进制。

## 5. 交叉编译

Go 原生支持交叉编译，无需在目标平台安装工具链。核心是设置 `GOOS`、`GOARCH`（ARM 32 位还需 `GOARM`），并保持 `CGO_ENABLED=0`。

| 目标平台 | GOOS | GOARCH | GOARM | 产物后缀 |
|----------|------|--------|-------|----------|
| Windows x64 | `windows` | `amd64` | - | `.exe` |
| Windows ARM64 | `windows` | `arm64` | - | `.exe` |
| Linux x64 | `linux` | `amd64` | - | 无 |
| Linux ARM64 | `linux` | `arm64` | - | 无 |
| Linux ARMv7 | `linux` | `arm` | `7` | 无 |
| macOS Intel | `darwin` | `amd64` | - | 无 |
| macOS Apple Silicon | `darwin` | `arm64` | - | 无 |

各平台编译示例：

Windows x64：

```bash
cd go_backend
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build -trimpath -ldflags="-s -w" -o storyhouse-windows-amd64.exe .
```

Windows ARM64：

```bash
cd go_backend
CGO_ENABLED=0 GOOS=windows GOARCH=arm64 go build -trimpath -ldflags="-s -w" -o storyhouse-windows-arm64.exe .
```

Linux x64：

```bash
cd go_backend
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -trimpath -ldflags="-s -w" -o storyhouse-linux-amd64 .
```

Linux ARM64：

```bash
cd go_backend
CGO_ENABLED=0 GOOS=linux GOARCH=arm64 go build -trimpath -ldflags="-s -w" -o storyhouse-linux-arm64 .
```

Linux ARMv7：

```bash
cd go_backend
CGO_ENABLED=0 GOOS=linux GOARCH=arm GOARM=7 go build -trimpath -ldflags="-s -w" -o storyhouse-linux-armv7 .
```

macOS Intel：

```bash
cd go_backend
CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build -trimpath -ldflags="-s -w" -o storyhouse-darwin-amd64 .
```

macOS Apple Silicon：

```bash
cd go_backend
CGO_ENABLED=0 GOOS=darwin GOARCH=arm64 go build -trimpath -ldflags="-s -w" -o storyhouse-darwin-arm64 .
```

### 一次构建全部平台

在 `go_backend/` 下执行以下脚本，可一次产出全部目标：

```bash
#!/bin/sh
set -eu

cd "$(dirname "$0")"
mkdir -p build

LDFLAGS="-s -w"
FLAGS="-trimpath -ldflags=$LDFLAGS"

export CGO_ENABLED=0

GOOS=windows GOARCH=amd64 go build $FLAGS -o build/storyhouse-windows-amd64.exe .
GOOS=windows GOARCH=arm64 go build $FLAGS -o build/storyhouse-windows-arm64.exe .
GOOS=linux   GOARCH=amd64 go build $FLAGS -o build/storyhouse-linux-amd64 .
GOOS=linux   GOARCH=arm64 go build $FLAGS -o build/storyhouse-linux-arm64 .
GOOS=linux   GOARCH=arm   GOARM=7 go build $FLAGS -o build/storyhouse-linux-armv7 .
GOOS=darwin  GOARCH=amd64 go build $FLAGS -o build/storyhouse-darwin-amd64 .
GOOS=darwin  GOARCH=arm64 go build $FLAGS -o build/storyhouse-darwin-arm64 .

echo "build done:"
ls -lh build
```

建议把 `build/` 加入 `.gitignore`。

## 6. 命令行参数

编译产物支持以下参数，`storyhouse --help` 可查看完整说明：

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `--port <int>` | `8080` | 监听端口，1-65535 |
| `--prefix <path>` | `/` | URL 前缀，如 `/story` |
| `--data-dir <path>` | 空 | 用户数据目录；留空则仅存内存 |
| `--audio-dir <path>` | `audio-voices` | 音色音频目录；每个子文件夹即一个音色 |
| `--version` | - | 显示版本号并退出 |
| `-h`, `--help` | - | 显示帮助并退出 |

不带任何参数运行时会进入问答模式，依次询问端口、URL 前缀、数据目录、音色音频目录；直接回车使用默认值。音频目录输入 `-` 表示关闭音色功能（仅浏览器朗读）。

## 7. 部署

### 7.1 直接运行（前台）

适合首次验证与调试，日志直接打印到终端，`Ctrl+C` 结束：

```bash
cd go_backend
# Windows
./storyhouse-windows-amd64.exe --port 8080 --prefix / --data-dir ./storyhouse-data
# Linux / macOS（无扩展名）
./storyhouse-linux-amd64 --port 8080 --prefix / --data-dir ./storyhouse-data
```

启动后验证：

```bash
curl http://127.0.0.1:8080/api/health
```

预期返回包含 `"mode":"server"` 与 `"storage":"file"`（内存模式则为 `"memory"`）的 JSON。

### 7.2 nohup 运行（后台常驻）

适合没有 systemd 或临时长期运行的场景：

```bash
mkdir -p /var/log/storyhouse

nohup /opt/storyhouse/storyhouse \
  --port 8080 \
  --prefix / \
  --data-dir /var/lib/storyhouse \
  > /var/log/storyhouse/storyhouse.log 2>&1 &

echo $! > /var/run/storyhouse.pid
```

查看日志：

```bash
tail -n 100 /var/log/storyhouse/storyhouse.log
```

停止服务：

```bash
kill "$(cat /var/run/storyhouse.pid)"
```

注意：nohup 方式在机器重启后不会自动拉起，需要自行通过 `crontab @reboot` 或其它机制处理；生产环境推荐 systemd。

### 7.3 systemd 运行（推荐）

准备运行用户与目录（以专用用户 `storyhouse` 为例）：

```bash
useradd --system --no-create-home --shell /usr/sbin/nologin storyhouse
mkdir -p /opt/storyhouse /var/lib/storyhouse
cp go_backend/storyhouse /opt/storyhouse/storyhouse
chmod +x /opt/storyhouse/storyhouse
chown -R storyhouse:storyhouse /var/lib/storyhouse
```

创建 `/etc/systemd/system/storyhouse.service`：

```ini
[Unit]
Description=Little Star Story House (Go backend)
After=network.target

[Service]
Type=simple
User=storyhouse
Group=storyhouse
WorkingDirectory=/opt/storyhouse
ExecStart=/opt/storyhouse/storyhouse --port 8080 --prefix / --data-dir /var/lib/storyhouse
Restart=on-failure
RestartSec=3
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
```

加载并启动：

```bash
systemctl daemon-reload
systemctl enable --now storyhouse
```

常用管理命令：

```bash
systemctl status storyhouse
systemctl restart storyhouse
systemctl stop storyhouse
journalctl -u storyhouse -f
journalctl -u storyhouse --since "1 hour ago"
```

修改 unit 文件后需要再次执行 `systemctl daemon-reload`。

### 7.4 子路径部署

在 `--prefix /story` 下，服务会自动：

- 把 `http://host:port/story/` 作为首页
- 把 `/story/api/...` 作为接口
- 在返回首页时注入 `<base href="/story/">` 与运行时配置

因此前端资源无需重新构建即可挂载到任意前缀。

### 7.5 反向代理（可选）

如需在 Go 服务前加 Nginx 提供 TLS 或统一入口，将上游指向 Go 服务端口即可：

```nginx
server {
    listen 443 ssl;
    server_name example.com;

    location /story/ {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

`proxy_pass` 不带路径，保留原始请求路径，与 `--prefix /story` 配合正常。

### 7.6 部署音色音频（可选）

服务端音色音频让登录用户在「浏览器朗读」之外切换到预生成的 mp3。仅带后端的部署支持；纯前端部署没有 `/api/voices`，界面不会显示音色入口。

目录约定：**每个子文件夹 = 一个音色，文件夹名即音色 id 与显示名**；文件夹内放 `<故事id>.mp3`（兼容 `.m4a` / `.ogg`），故事 id 见 `docs/audio/voice-manifest.json`。

```text
/data/audio-voices/
  音色1/
    the-tortoise-and-the-hare.mp3
    bedtime-bears-moon-pillow.mp3
  音色2/
    ...
```

指定目录启动：

```bash
cd go_backend
./storyhouse --port 8080 --data-dir /var/lib/storyhouse --audio-dir /data/audio-voices
```

Node 后台用环境变量：`STORY_HOUSE_AUDIO_DIR=/data/audio-voices npm run dev:api`。

音频目录**不会**打进二进制（体积大），需单独上传到服务器。启动日志会打印实际使用的目录：

```text
音色音频: /data/audio-voices
```

验证：

```bash
curl http://127.0.0.1:8080/api/voices
# {"voices":[{"id":"音色1","name":"音色1","count":361}],"storage":"file"}

curl -I "http://127.0.0.1:8080/api/voices/音色1/bedtime-bears-moon-pillow.mp3"
# HTTP/1.1 200 OK ... Content-Type: audio/mpeg
```

行为约定：

- 目录不存在或没有子文件夹 → `/api/voices` 返回空数组，前端不显示音色选择，行为与纯前端一致。
- 某个故事缺少对应 mp3 → 播放时**直接报错**「这篇故事还没有这个音色的音频文件」，不静默回退到 TTS，便于发现漏生成的音频。
- 音频响应带 `Accept-Ranges`，支持拖动进度条。

生产流程：

1. `npm run audio:manifest` 生成 `docs/audio/voice-manifest.json`。
2. 用 AI 按目标音色朗读每篇的 `text`，导出 mp3。
3. 以故事 id 命名放入 `audio-voices/<音色名>/`。
4. 启动时用 `--audio-dir` 指向该目录。

## 8. 升级与回滚

升级：

```bash
systemctl stop storyhouse
cp storyhouse-new /opt/storyhouse/storyhouse
chmod +x /opt/storyhouse/storyhouse
systemctl start storyhouse
curl http://127.0.0.1:8080/api/health
```

推荐保留上一版本二进制，回滚时用旧文件替换并重启即可。因为二进制内嵌前端资源，升级前端也只需替换这一个文件。

## 9. 常见问题

| 现象 | 排查方向 |
|------|----------|
| 编译报错找不到 dist | 先执行 `npm run build`，确认 `go_backend/dist/index.html` 存在 |
| 启动报端口被占用 | 换端口，或用 `lsof -i :8080` / `ss -ltnp` 查占用进程 |
| 数据目录报权限错误 | 确认运行用户对 `--data-dir` 目录有读写权限 |
| 访问根路径 404 | 确认访问地址带上了 `--prefix`，例如 `/story/` |
| 页面打开但静态资源 404 | 确认 `dist/` 已重新构建；检查首页是否注入了正确的 `<base>` |
| systemd 启动即退出 | 用 `journalctl -u storyhouse` 查看错误，多为参数或目录权限问题 |
| 内存模式数据消失 | 属预期行为，指定 `--data-dir` 才会落盘 |
