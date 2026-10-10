# 音色音频目录说明

服务端预生成的故事音频，用于替代（或补充）浏览器 TTS 朗读。**仅「带后端服务」的部署支持**；
纯前端部署没有 `/api/voices`，界面不会出现声音来源选择。

## 约定

- 每个**子文件夹 = 一个音色**，文件夹名即音色 id 与显示名，例如 `音色1`、`妈妈朗读`、`爸爸朗读`。
- 文件夹内放 `<故事id>.mp3`，故事 id 见 [`docs/audio/voice-manifest.json`](./audio/voice-manifest.json)。
- 支持的扩展名：`.mp3`（首选）、`.m4a`、`.ogg`。
- 音色选择**与登录无关**，任何访客都能在故事页切换。

```text
audio-voices/                     # 音频根目录（音频文件不入库，需单独上传）
  妈妈朗读/
    the-tortoise-and-the-hare.mp3
    bedtime-bears-moon-pillow.mp3
  爸爸朗读/
    the-tortoise-and-the-hare.mp3
```

## 生成流程

1. 生成清单：`npm run audio:manifest` → [`docs/audio/voice-manifest.json`](./audio/voice-manifest.json)
2. 用 AI 按目标音色朗读清单中每篇的 `text`，导出 mp3。
3. 以 `<故事id>.mp3` 命名，放入对应音色文件夹。
4. 启动服务时指定目录：
   - Go：`./storyhouse-linux-amd64 --audio-dir ./audio-voices`
     （Windows 用 `./storyhouse-windows-amd64.exe`）
   - Node：`STORY_HOUSE_AUDIO_DIR=./audio-voices npm run dev:api`

> 新增故事后必须重新生成清单并补录音频，否则该故事在音色模式下会提示缺音频。

## 行为

- 后端遍历该目录的子文件夹，自动得到音色列表；**实时读取，新增音频后无需重启服务**。
- 音频响应带 `Accept-Ranges`，支持拖动进度条。
- 找不到某篇故事对应的 mp3 时，前端会**明确报错**「这篇故事还没有这个音色的音频文件」，不会静默回退到 TTS。
- 目录不存在或为空时，音色功能自动关闭，仅保留浏览器 TTS，界面与纯前端部署一致。

> 音频文件体积较大，已在 `.gitignore` 中排除，请部署时单独上传到服务器。
> 后端 API 契约与部署细节见 [Go 后台编译与部署](../go_backend/docs/GO_BACKEND_BUILD_DEPLOY.md#76-部署音色音频可选)。