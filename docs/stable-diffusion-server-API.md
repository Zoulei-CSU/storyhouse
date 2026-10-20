# stable-diffusion.cpp 生图服务 Web API 使用文档

本文档介绍 `sd-server`（stable-diffusion.cpp 的 `examples/server`）对外提供的 HTTP API，
适用于任意部署了该服务的机器。文中示例默认服务地址为 `http://127.0.0.1:1234`，
实际使用时请替换为你的服务地址。

接口、状态码、字段均已在 z-image、flux2-klein、krea2、qwen2.1 这四类模型上验证。
具体模型、采样器、调度器、分辨率上限、队列大小等**均以运行时 `GET /sdcpp/v1/capabilities`
的返回为准**，本文中的数值仅为常见默认值/推荐值。

---

## 1. 概览

服务由 `sd-server`（`examples/server`）提供，一个进程同时暴露三套 API 家族：

| API 家族 | 路径前缀 | 特点 | 适用场景 |
| --- | --- | --- | --- |
| **sdcpp 原生 API** | `/sdcpp/v1/...` | 异步任务、原生参数、能力发现 | 推荐；想要完整参数控制和异步队列 |
| **Stable Diffusion WebUI API** | `/sdapi/v1/...` | 兼容 A1111 / WebUI | 已有 WebUI 客户端/脚本迁移 |
| **OpenAI API** | `/v1/...` | 兼容 OpenAI images 接口 | 已有 OpenAI 图像客户端 |

另外根路径 `/` 提供内置 Web UI（可视化界面）。

- 基础地址：`http://127.0.0.1:1234`
- 无鉴权：当前版本没有 API Key / Token 机制，任何人只要能访问端口即可调用。
- 已开启 CORS：响应会回显请求的 `Origin`，允许任意方法/头，浏览器前端可直接跨域调用。
- 图像/视频统一以 **Base64** 返回（JSON 内嵌）。

### 实例信息（来自 `GET /sdcpp/v1/capabilities`）

每个部署实例的模型、LoRA、默认参数都不同，**应以实际查询结果为准**。典型字段示例：

| 字段 | 示例值 | 说明 |
| --- | --- | --- |
| `model.name` | `flux-2-klein-9b-Q4_0.gguf` | 当前加载的扩散模型 |
| `supported_modes` | `["img_gen"]` | 是否支持 `vid_gen` |
| `output_formats` | `png`、`jpeg`、`webp` | 可用输出格式 |
| `defaults.width` / `defaults.height` | 512 / 512 | 服务默认尺寸 |
| `defaults.sample_params.sample_steps` | 20 | 服务默认步数 |
| `defaults.seed` | 42 | 服务默认 seed |
| `limits.max_queue_size` | 64 | 队列上限 |
| `limits.min_width` / `max_width` | 64 / 4096 | 尺寸范围 |
| `loras` | `[{"name","path"}, ...]` | 该实例可用的 LoRA |
| `samplers` / `schedulers` | 字符串数组 | 该模型支持的采样器/调度器 |

> 说明：模型不同（例如换用视频模型），`capabilities` 中的 `supported_modes`、`output_formats`、
> `samplers`、`schedulers` 都会变化。**写程序时应先查询 capabilities，而不是写死。**
>
> 注意：`defaults` 是服务通用默认值（常见为 20 步、`txt_cfg` 7.0），**不一定是某个具体模型的
> 推荐参数**。实际生成请按 §4 的模型推荐值显式传入采样参数。

---

## 2. 快速开始

### 2.1 探查服务是否在线

```bash
curl http://127.0.0.1:1234/sdcpp/v1/capabilities
```

### 2.2 最小可用的异步出图（sdcpp 原生 API）

流程：`提交任务 → 轮询任务 → 取回 Base64 图片`。

```bash
BASE=http://127.0.0.1:1234

# 1) 提交任务，拿到 job id
ID=$(curl -s -X POST "$BASE/sdcpp/v1/img_gen" \
  -H 'Content-Type: application/json' \
  -d '{
        "prompt": "a red apple on a wooden table, photo",
        "width": 512,
        "height": 512,
        "sample_params": {
          "sample_steps": 8,
          "sample_method": "euler",
          "scheduler": "discrete",
          "guidance": { "txt_cfg": 1.0 }
        }
      }' | sed -n 's/.*"id":"\([^"]*\)".*/\1/p')
echo "job id = $ID"

# 2) 轮询直到完成
while true; do
  J=$(curl -s "$BASE/sdcpp/v1/jobs/$ID")
  ST=$(echo "$J" | sed -n 's/.*"status":"\([^"]*\)".*/\1/p')
  echo "status = $ST"
  if [ "$ST" = "completed" ]; then break; fi
  if [ "$ST" = "failed" ] || [ "$ST" = "cancelled" ]; then echo "$J"; exit 1; fi
  sleep 1
done

# 3) 提取第一张图并解码
echo "$J" | sed -n 's/.*"b64_json":"\([^"]*\)".*/\1/p' | head -1 | base64 -d > out.png
file out.png
```

### 2.3 Python 完整示例

```python
import base64
import time
import requests

BASE = "http://127.0.0.1:1234"

def generate(payload: dict, poll_interval: float = 1.0, timeout: float = 600.0):
    """提交 sdcpp 异步生图任务并等待结果，返回 (job, [png_bytes, ...])。"""
    r = requests.post(f"{BASE}/sdcpp/v1/img_gen", json=payload, timeout=30)
    r.raise_for_status()
    job = r.json()
    job_url = BASE + job["poll_url"]

    deadline = time.time() + timeout
    while True:
        j = requests.get(job_url, timeout=30).json()
        if j["status"] == "completed":
            images = [base64.b64decode(img["b64_json"]) for img in j["result"]["images"]]
            return j, images
        if j["status"] in ("failed", "cancelled"):
            raise RuntimeError(f'{j["status"]}: {j["error"]}')
        if time.time() > deadline:
            raise TimeoutError("generation timed out")
        time.sleep(poll_interval)

if __name__ == "__main__":
    job, images = generate({
        "prompt": "a red apple on a wooden table, photo",
        "negative_prompt": "",
        "width": 512,
        "height": 512,
        "sample_params": {
            "sample_steps": 8,
            "sample_method": "euler",
            "scheduler": "discrete",
            "guidance": {"txt_cfg": 1.0},
        },
    })
    for i, data in enumerate(images):
        open(f"out_{i}.png", "wb").write(data)
        print(f"saved out_{i}.png ({len(data)} bytes)")
```

---

## 3. sdcpp 原生 API（推荐）

前缀 `/sdcpp/v1`。所有生图/生视频都是**异步任务**：提交后立即返回 `202` 和一个 `job id`，
再通过轮询获取结果。

### 3.1 `GET /sdcpp/v1/capabilities`

返回当前模型能力与默认参数，用于驱动客户端表单和校验。

关键字段：

| 字段 | 说明 |
| --- | --- |
| `model.name` / `model.stem` / `model.path` | 已加载模型的文件名 / 去扩展名 / 完整路径 |
| `supported_modes` | 支持的模式，如 `["img_gen"]`、`["img_gen","vid_gen"]` |
| `current_mode` | 顶层兼容字段镜像的模式 |
| `defaults` | 当前模式的默认生成参数（**推荐用它作为请求模板**） |
| `defaults_by_mode` | 各模式的默认参数，`defaults_by_mode.img_gen` / `defaults_by_mode.vid_gen` |
| `output_formats` / `output_formats_by_mode` | 可用输出格式 |
| `features` / `features_by_mode` | 各模式支持的功能开关 |
| `samplers` | 可用采样方法列表 |
| `schedulers` | 可用调度器列表 |
| `loras` | 可用 LoRA：`[{"name","path"}]` |
| `upscalers` | 可用放大方式（含 `Lanczos`、`Nearest`、`Latent` 系列及模型放大） |
| `limits` | `min_width`/`max_width`/`min_height`/`max_height`/`max_batch_count`/`max_queue_size` |

字段含义与上传项对应表：

- `features_by_mode.img_gen` 中出现 `true` 的字段才建议在请求里使用：
  `init_image`、`mask_image`、`control_image`、`ip_adapter_image`、`ref_images`、`lora`、
  `vae_tiling`、`hires`、`cache`。
- `cancel_queued` 表示排队中的任务可取消；`cancel_generating` 表示生成中的任务能否中断
  （当前实现为 `false`，即生成中不可中断）。

### 3.2 `POST /sdcpp/v1/img_gen`（图像生成）

**成功**：`202 Accepted`

```json
{
  "id": "job_6ad37d82_00000001",
  "kind": "img_gen",
  "status": "queued",
  "created": 1792245122,
  "poll_url": "/sdcpp/v1/jobs/job_6ad37d82_00000001"
}
```

**请求体字段（可只传需要覆盖的项，其余取服务默认值）：**

顶层：

| 字段 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| `prompt` | string | `""` | 提示词 |
| `negative_prompt` | string | `""` | 负面提示词 |
| `width` / `height` | int | 512 | 64 ~ 4096 |
| `seed` | int | 42 | `-1` 表示随机 |
| `batch_count` | int | 1 | 生成张数，上限 8 |
| `clip_skip` | int | -1 | `-1` 表示模型默认 |
| `strength` | float | 0.75 | img2img/init_image 的强度 0~1 |
| `control_strength` | float | 0.9 | ControlNet 强度 |
| `ip_adapter_strength` | float | 1.0 | IP-Adapter 强度 |
| `auto_resize_ref_image` | bool | true | 自动缩放参考图 |
| `increase_ref_index` | bool | false | 参考图索引递增 |
| `embed_image_metadata` | bool | true | 是否把生成参数写入图片元数据 |
| `qwen_image_layers` | int | 3 | Qwen-Image 相关层数 |
| `output_format` | string | `png` | `png` / `jpeg` / `webp`（以 capabilities 为准） |
| `output_compression` | int | 100 | 0~100，仅 jpeg/webp 用 |

图像字段（值为 Base64 或 data URL，见 §6）：

| 字段 | 类型 | 通道 | 说明 |
| --- | --- | --- | --- |
| `init_image` | string \| null | 3 | 图生图/重绘初始图 |
| `mask_image` | string \| null | 1 | 蒙版 |
| `control_image` | string \| null | 3 | ControlNet 条件图 |
| `ip_adapter_image` | string \| null | 3 | IP-Adapter 参考图 |
| `ref_images` | string[] | 3 | 多张参考图 |

采样字段 `sample_params`：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `sample_steps` | int | 采样步数 |
| `sample_method` | string | 采样方法，取值见 `capabilities.samplers`（如 `euler`、`euler_a`、`dpm++2m`…） |
| `scheduler` | string | 调度器，取值见 `capabilities.schedulers`（如 `discrete`、`karras`、`simple`…） |
| `eta` | float | 随机性（部分采样器用） |
| `shifted_timestep` | int | 偏移时间步 |
| `flow_shift` | float | Flow 模型位移 |
| `custom_sigmas` | float[] | 自定义 sigma 序列；存在时忽略 `scheduler`，序列长度 - 1 决定实际步数 |
| `guidance.txt_cfg` | float | 文本 CFG |
| `guidance.img_cfg` | float | 图像 CFG；省略时跟随 `txt_cfg` |
| `guidance.distilled_guidance` | float | 蒸馏引导 |
| `guidance.slg.layers` | int[] | 跳层，如 `[7,8,9]` |
| `guidance.slg.layer_start` / `layer_end` / `scale` | float | SLG 区间与强度 |

高清修复 `hires`（两步放大）：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `enabled` | bool | 是否启用 |
| `upscaler` | string | `Lanczos` / `Nearest` / `Latent` / `Latent (nearest)` / `Latent (nearest-exact)` / `Latent (antialiased)` / `Latent (bicubic)` / `Latent (bicubic antialiased)`，或 `capabilities.upscalers[].name` |
| `scale` | float | 放大倍数（当 `target_width/height` 为 0 时生效） |
| `target_width` / `target_height` | int | 目标尺寸 |
| `steps` | int | 二阶段步数，`0` 复用 `steps` |
| `denoising_strength` | float | 二阶段重绘强度 |
| `custom_sigmas` | float[] | 覆盖二阶段 sigma |
| `upscale_tile_size` | int | 分块放大尺寸 |

VAE 分块（大图/省显存）`vae_tiling_params`：

`enabled`、`temporal_tiling`、`tile_size_x`、`tile_size_y`、`target_overlap`、
`rel_size_x`、`rel_size_y`、`extra_tiling_args`。

缓存加速 `cache_mode` / `cache_option` / `scm_mask` / `scm_policy_dynamic`：

- `cache_mode`：`disabled`、`easycache`、`ucache`、`dbcache`、`taylorseer`、`cache-dit`、`spectrum`
- `cache_option`：键值串，如 `threshold=0.25,start=0.15,end=0.95`

LoRA `lora`（结构化，**不支持 prompt 内 `<lora:...>` 标签**）：

```json
"lora": [
  { "path": "<capabilities.loras[].path>", "multiplier": 0.8, "is_high_noise": false }
]
```

`path` 直接用 `capabilities.loras[].path`；`multiplier` 为权重；`is_high_noise` 仅视频高噪声阶段使用。

**最小请求体：**

```json
{ "prompt": "a cat", "width": 512, "height": 512 }
```

### 3.3 `GET /sdcpp/v1/jobs/{id}`（查询任务）

| 状态码 | 含义 |
| --- | --- |
| `200 OK` | 返回任务详情（见下） |
| `404 Not Found` | 任务不存在 |
| `410 Gone` | 任务已完成且超过保留时间被回收 |

**排队中：**

```json
{
  "id": "job_6ad37d82_00000001",
  "kind": "img_gen",
  "status": "queued",
  "created": 1792245122,
  "started": null,
  "completed": null,
  "queue_position": 2,
  "result": null,
  "error": null
}
```

**完成后：**

```json
{
  "id": "job_6ad37d82_00000001",
  "kind": "img_gen",
  "status": "completed",
  "created": 1792245122,
  "started": 1792245123,
  "completed": 1792245131,
  "queue_position": 0,
  "result": {
    "output_format": "png",
    "images": [
      { "index": 0, "b64_json": "iVBORw0KGgoAAA..." }
    ]
  },
  "error": null
}
```

**失败：**

```json
{
  "status": "failed",
  "result": null,
  "error": { "code": "generation_failed", "message": "generate_image returned no results" }
}
```

任务状态机：`queued → generating → completed`，异常分支为 `failed` / `cancelled`。

时间字段 `created` / `started` / `completed` 均为 **Unix 秒**。

> 任务保留时间：完成后（含失败/取消）约 **600 秒**后从内存清除；之后短时间内查询会返回
> `410 Gone`。请及时取回 Base64 结果。

### 3.4 `POST /sdcpp/v1/jobs/{id}/cancel`（取消任务）

| 状态码 | 含义 |
| --- | --- |
| `200 OK` | 取消成功（或任务已结束，返回最终状态） |
| `404 Not Found` | 任务不存在 |
| `409 Conflict` | 任务正在生成中，当前不可中断；或队列状态已变化 |
| `410 Gone` | 任务已过期回收 |

当前实现只支持取消 **排队中** 的任务；已在生成中的任务会返回 `409`。

### 3.5 `POST /sdcpp/v1/vid_gen`（视频生成）

仅当模型支持视频（`supported_modes` 含 `vid_gen`）时可用；否则调用会返回 `400`。

与 `img_gen` 的差异：

- 视频是单条序列，**没有 `batch_count`**
- 去掉 `ref_images`、`mask_image`、`control_image`、`control_strength`、`ip_adapter_image`、`ip_adapter_strength`
- 新增：`video_frames`（帧数，默认 33）、`fps`（默认 16）、`moe_boundary`（默认 0.875）、`vace_strength`（默认 1.0）、`end_image`、`control_frames`、`high_noise_sample_params`
- `output_format` 为 `webm` / `webp`（动图）/ `avi`

`video_frames` 会被规整为不超过请求值的最大 `4n+1`（例：33→33，34→33，32→29）。

完成后 `result` 为整段编码容器：

```json
"result": {
  "output_format": "webm",
  "mime_type": "video/webm",
  "fps": 16,
  "frame_count": 33,
  "b64_json": "GkXfo59ChoEB..."
}
```

MIME 对照：`webm → video/webm`、`webp → image/webp`、`avi → video/x-msvideo`。

### 3.6 `img_gen` 提交错误码

| 状态码 | 触发条件 |
| --- | --- |
| `202 Accepted` | 任务创建成功 |
| `400 Bad Request` | 空 body、JSON 解析失败、参数非法、模型不支持该模式、输出格式非法 |
| `429 Too Many Requests` | 队列已满（`limits.max_queue_size`，以 capabilities 为准） |
| `500 Internal Server Error` | 服务端异常 |

错误响应体形如：

```json
{ "error": "invalid json", "message": "..." }
```

---

## 4. 模型调用参数（按模型分类）

不同模型的推荐采样参数差异很大（蒸馏/Turbo 模型用低步数低 CFG，基础模型用高步数高 CFG）。
本节按模型整理推荐值。**未列出的参数请保留服务默认值**（见 `GET /sdcpp/v1/capabilities`）。

### 4.0 参数名对照

| 通用说法 | sdcpp 请求字段 | 取值范围 |
| --- | --- | --- |
| 步数 steps | `sample_params.sample_steps` | 正整数 |
| CFG / 引导强度 | `sample_params.guidance.txt_cfg` | 浮点 |
| 采样器 sampler | `sample_params.sample_method` | 见 `capabilities.samplers` |
| 调度器 scheduler | `sample_params.scheduler` | 见 `capabilities.schedulers` |
| shift（Flow 位移） | `sample_params.flow_shift` | 浮点；省略 / `null` 表示 auto |
| 自定义 sigma 序列 | `sample_params.custom_sigmas` | float[]；存在时忽略 `scheduler`，长度 - 1 = 实际步数 |
| 随机种子 seed | `seed` | 整数；**`-1` = 每次随机**（一般都用 `-1`） |

**常用模型速查：**

| 模型 | steps | txt_cfg | sampler | scheduler | flow_shift | custom_sigmas |
| --- | --- | --- | --- | --- | --- | --- |
| Z-Image-Turbo | 8 | 1.0 | `euler` | `simple` | 3 | — |
| Z-Image（基础） | 20~30 | 5.0 | `euler` / `dpm++2m` | `simple` / `karras` | 3 | — |
| **FLUX.2-klein-9B/4B（蒸馏）** | **4** | **1.0** | **`euler`** | **`flux2`** | **auto** | — |
| FLUX.2-klein-base-9B/4B | 20 | 4.0 | `euler` | `flux2` | auto | — |
| FLUX.2-dev | 4~20 | 1.0 | `euler` | `flux2` | auto | — |
| **Krea-2-Turbo** | **8** | **1.0**（要负面词时 1.3~1.5） | **`euler`** | **省略（auto）** | **省略（auto）** | — |
| Krea-2-Raw（基础） | 52 | 3.5 | `euler` | 省略（auto） | 省略（auto） | — |
| **Qwen-Image-2.1-Turbo** | **8** | **1.0** | **`euler`** | 省略（被 sigmas 接管） | auto | **官方 9 值序列（见 §4.4）** |

> **关于 "DPM++ SDE Karras"：** 在 WebUI 里这是「采样器 + 调度器」的组合名。
> 换算到 sdcpp：采样器 `dpm++2m_sde` + 调度器 `karras`。也就是说，如果你选择 Karras 调度，
> `scheduler` 就应填 `karras` 而不是 `simple`；二者不要混用。

### 4.1 Z-Image

含 `Z-Image-Turbo`（`z_image_turbo`）与基础版 `Z-Image`。

#### Z-Image-Turbo（蒸馏版，推荐低步数 + CFG 1.0）

| 参数 | 推荐值 |
| --- | --- |
| 步数 `sample_steps` | **8** |
| CFG `guidance.txt_cfg` | **1.0** |
| 采样器 `sample_method` | **`euler`**（推荐）或 `dpm++2m_sde`（即 WebUI 的 "DPM++ SDE"，此时 `scheduler` 用 `karras`） |
| 调度器 `scheduler` | **`simple`** |
| shift `flow_shift` | **3**（默认值） |

说明：

- Turbo 模型经过蒸馏，**步数不要超过 ~10**，CFG 必须接近 1.0；调高 CFG 容易过曝/失真。
- CFG = 1.0 时负面提示词基本不起作用，`negative_prompt` 可留空。
- `scheduler` 与 `sampler` 有两种常见组合，二选一：
  - `sample_method = euler` + `scheduler = simple`（本表默认，更通用稳妥）
  - `sample_method = dpm++2m_sde` + `scheduler = karras`（即 "DPM++ SDE Karras"）
- 分辨率推荐 1024×1024 或 1024×768 等；上限见 `limits.max_width` / `limits.max_height`。

请求示例（原生 API）：

```json
{
  "prompt": "a cinematic photo of a hooded figure in a rainy neon city at night",
  "negative_prompt": "",
  "width": 1024,
  "height": 1024,
  "seed": -1,
  "sample_params": {
    "sample_steps": 8,
    "sample_method": "euler",
    "scheduler": "simple",
    "flow_shift": 3,
    "guidance": { "txt_cfg": 1.0 }
  }
}
```

完整 curl：

```bash
curl -s -X POST http://127.0.0.1:1234/sdcpp/v1/img_gen \
  -H 'Content-Type: application/json' \
  -d '{
    "prompt": "a cinematic photo of a hooded figure in a rainy neon city at night",
    "width": 1024, "height": 1024,
    "sample_params": {
      "sample_steps": 8,
      "sample_method": "euler",
      "scheduler": "simple",
      "flow_shift": 3,
      "guidance": { "txt_cfg": 1.0 }
    }
  }'
```

若走兼容 API，把上述原生参数用 `sd_cpp_extra_args` 嵌入 `prompt`：

```bash
curl -s -X POST http://127.0.0.1:1234/sdapi/v1/txt2img \
  -H 'Content-Type: application/json' \
  -d '{
    "prompt": "a cinematic photo of a hooded figure in a rainy neon city <sd_cpp_extra_args>{\"sample_params\":{\"sample_steps\":8,\"sample_method\":\"euler\",\"scheduler\":\"simple\",\"flow_shift\":3,\"guidance\":{\"txt_cfg\":1.0}}}</sd_cpp_extra_args>",
    "width": 1024, "height": 1024, "steps": 8, "cfg_scale": 1.0
  }'
```

#### Z-Image（基础版）

基础模型需要更高步数与 CFG（参考官方示例 `--cfg-scale 5.0`）：

| 参数 | 推荐值 |
| --- | --- |
| 步数 `sample_steps` | 20 ~ 30 |
| CFG `guidance.txt_cfg` | **5.0** |
| 采样器 `sample_method` | `euler` / `dpm++2m` |
| 调度器 `scheduler` | `simple` 或 `karras` |
| shift `flow_shift` | 3（默认值） |

### 4.2 FLUX.2（dev / klein）

官方文档：`docs/flux2.md`（stable-diffusion.cpp 仓库内）。

含 `FLUX.2-dev`、`FLUX.2-klein-9B/4B`（蒸馏版）与 `FLUX.2-klein-base-9B/4B`（基础版）。

#### 关键差异（相对 Z-Image）

| 项 | FLUX.2 | 说明 |
| --- | --- | --- |
| 调度器 | **`flux2`** | 这是该模型的默认调度器（见源码 `default_scheduler()`），**不要沿用 z-image 的 `simple`** |
| shift `flow_shift` | **auto（省略 / `null`）** | 由服务按模型自动决定，flux2 通常为 1.0（带 guidance 层时 1.15）；**不要写死 3**（那是 z-image 的值） |
| 预测类型 | `flux_flow` | 服务自动识别，无需手动指定 |

#### FLUX.2-klein-9B（蒸馏版，推荐）

| 参数 | 推荐值 |
| --- | --- |
| 步数 `sample_steps` | **4** |
| CFG `guidance.txt_cfg` | **1.0** |
| 采样器 `sample_method` | **`euler`** |
| 调度器 `scheduler` | **`flux2`** |
| shift `flow_shift` | **省略**（auto） |

说明：

- 官方示例即 `--cfg-scale 1.0 --steps 4`；klein 是蒸馏模型，**步数不要明显超过 ~8**，CFG 保持 1.0。
- CFG = 1.0 时负面提示词不生效，`negative_prompt` 可留空。
- 生成耗时与硬件、量化等级、分辨率强相关，请按实际环境估算，不要照搬别处的耗时数字。
- klein 也支持参考图编辑（`ref_images` / `-r`），同样用 4 步 + CFG 1.0。

请求示例（原生 API，1024×1024；尺寸可按需修改）：

```json
{
  "prompt": "children book cartoon illustration, a lovely cat on a wooden table",
  "negative_prompt": "",
  "width": 1024,
  "height": 1024,
  "seed": -1,
  "output_format": "jpeg",
  "output_compression": 85,
  "sample_params": {
    "sample_steps": 4,
    "sample_method": "euler",
    "scheduler": "flux2",
    "guidance": { "txt_cfg": 1.0 }
  }
}
```

完整 curl：

```bash
curl -s -X POST http://127.0.0.1:1234/sdcpp/v1/img_gen \
  -H 'Content-Type: application/json' \
  -d '{
    "prompt": "children book cartoon illustration, a lovely cat on a wooden table",
    "width": 1024, "height": 1024,
    "output_format": "jpeg", "output_compression": 85,
    "sample_params": {
      "sample_steps": 4,
      "sample_method": "euler",
      "scheduler": "flux2",
      "guidance": { "txt_cfg": 1.0 }
    }
  }'
```

#### FLUX.2-klein-base-9B（基础版）

非蒸馏版本需要更高 CFG 与步数（官方示例 `--cfg-scale 4.0 --steps 20`）：

| 参数 | 推荐值 |
| --- | --- |
| 步数 `sample_steps` | **20** |
| CFG `guidance.txt_cfg` | **4.0** |
| 采样器 `sample_method` | `euler` |
| 调度器 `scheduler` | `flux2` |
| shift `flow_shift` | 省略（auto） |

> CFG > 1 时负面提示词才生效，此时可用 `negative_prompt` 压制文字/水印等。

#### FLUX.2-dev

官方示例使用 `--cfg-scale 1.0 --sampling-method euler`，同样建议 `scheduler = flux2`、`flow_shift` 留空。
dev 版需要更大的文本编码器（Mistral-Small-3.2-24B），显存/内存占用明显高于 klein。

#### FLUX.2 的 LoRA

FLUX.2 系列通常有配套的 LoRA（风格、人物等），可用列表以 `capabilities.loras` 为准，
常见命名如 `FLUX.2-klein-9B-*`、`Ghibli_style_*` 等，但**具体有哪些取决于服务端 `--lora-model-dir`
下的文件**，不要假设固定清单。

用法走结构化字段（prompt 内 `<lora:...>` 标签无效）：

```json
"lora": [ { "path": "<capabilities.loras[].path>", "multiplier": 0.8 } ]
```

### 4.3 Krea-2（Turbo / Raw）

官方文档：`docs/krea2.md`。含 `Krea-2-Turbo`（蒸馏版）与 `Krea-2-Raw`（基础版）。

#### 关键差异（相对 Z-Image / FLUX.2）

| 项 | Krea-2 | 说明 |
| --- | --- | --- |
| 调度器 `scheduler` | **省略（auto）** | 服务对 Krea2 默认使用 `discrete`；**不要**沿用 z-image 的 `simple`，也不要套用 flux2 的 `flux2` |
| shift `flow_shift` | **省略（auto）** | 服务自动取约 **1.15**（官方 timestep shift mu）；不要写死 3 |
| CFG | Turbo 官方为 1.0 | 即官方 `cfg 0.0`（关闭 CFG）；CFG = 1.0 时负面词不生效 |

#### Krea-2-Turbo（推荐）

| 参数 | 推荐值 |
| --- | --- |
| 步数 `sample_steps` | **8** |
| CFG `guidance.txt_cfg` | **1.0**（官方）；需要负面词时 **1.3 ~ 1.5** |
| 采样器 `sample_method` | **`euler`** |
| 调度器 `scheduler` | **省略**（auto） |
| shift `flow_shift` | **省略**（auto，约 1.15） |

说明：

- 官方 Turbo 参数为 8 步、关闭 CFG（官方 `cfg 0.0` ≙ sdcpp `txt_cfg 1.0`）、timestep shift mu = 1.15。
- CFG = 1.0 时负面提示词完全不生效。若需要压制画面文字/水印，可把 `txt_cfg` 提到
  1.3 ~ 1.5 并填写 `negative_prompt`；代价是每张图多一次无条件前向，耗时约翻倍。
- CFG > 1 时，负面词里的 `border` / `frame`（边框、画框）偶尔会被画成白色画框，
  建议从负面词中去掉这两个词。
- 官方推荐尺寸：1024×1024、1184×896、1248×832、**1376×768（16:9）**、1568×672、
  928×1152、832×1248、768×1376。明显超出训练分辨率的尺寸（如 1920×1080）容易发糊。

请求示例（Turbo，官方默认 CFG 1.0）：

```json
{
  "prompt": "children book cartoon illustration, a bear cub asleep on a moon-shaped pillow",
  "negative_prompt": "",
  "width": 1536,
  "height": 864,
  "seed": -1,
  "output_format": "jpeg",
  "output_compression": 85,
  "sample_params": {
    "sample_steps": 8,
    "sample_method": "euler",
    "guidance": { "txt_cfg": 1.0 }
  }
}
```

> 注意：请求里**不要**带 `scheduler` 和 `flow_shift`，让服务按 Krea2 自动选择即可。

需要负面词时，把上面的 `txt_cfg` 改成 `1.5`，并在顶层补上 `negative_prompt`
（例如 `"text, letters, caption, speech bubble, watermark"`）。

#### Krea-2-Raw（基础版）

| 参数 | 推荐值 |
| --- | --- |
| 步数 `sample_steps` | **52**（常用起点；基础模型，未蒸馏） |
| CFG `guidance.txt_cfg` | **3.5** |
| 采样器 `sample_method` | `euler` |
| 调度器 `scheduler` | 省略（auto） |
| shift `flow_shift` | 省略（auto） |

CFG > 1 时负面词生效。Raw 版步数多、耗时长，通常只在需要更高质量或更强负面控制时使用。

### 4.4 Qwen-Image-2.1（Turbo / 基础版）

官方文档：`docs/qwen_image_2.1.md`。含 `Qwen-Image-2.1`（基础版）与
`Qwen-Image-2.1-Turbo`（蒸馏版）。

#### 关键点

| 项 | 说明 |
| --- | --- |
| 尺寸 | 宽高**必须能被 32 整除**（如 1024×1024、1536×864） |
| Turbo sigma | Turbo 必须使用官方固定 9 值 sigma 序列，通过 `custom_sigmas` 传入 |
| 调度器 | 传了 `custom_sigmas` 后由它接管，`scheduler` 可以省略 |
| 实际步数 | **sigma 个数 - 1**（9 个 sigma = 8 步）；与 `sample_steps` 不一致时以 sigma 个数为准 |

官方 Turbo 参数：

```text
--steps 8 --cfg-scale 1.0 --sampling-method euler
--sigmas 1.0,0.978453,0.95418,0.926626,0.89508,0.845148,0.704534,0.414568,0.0
```

> CLI 里也可以写 `--sigmas qwen-image-2.1-turbo` 这个预设名，但 **HTTP API 不解析预设名**，
> 必须展开成上面的数值数组传给 `sample_params.custom_sigmas`。

#### Qwen-Image-2.1-Turbo（推荐）

| 参数 | 推荐值 |
| --- | --- |
| 步数 `sample_steps` | **8** |
| CFG `guidance.txt_cfg` | **1.0** |
| 采样器 `sample_method` | **`euler`** |
| 调度器 `scheduler` | 省略（由 `custom_sigmas` 接管） |
| `custom_sigmas` | `[1.0, 0.978453, 0.95418, 0.926626, 0.89508, 0.845148, 0.704534, 0.414568, 0.0]` |

说明：

- CFG = 1.0 时负面提示词不生效，`negative_prompt` 可留空。
- Qwen 系列**文字渲染能力很强**：提示词里不要保留 `画面内容：`、`场景设定：` 这类结构化标签，
  也尽量别写「画面中不要出现文字」这种否定句——模型容易把标签或 `text` 本身画进画面。
  直接用肯定句描述「画什么」即可。
- 基础版（非 Turbo）官方示例使用 `--cfg-scale 6.0 --sampling-method euler`；
  步数随模型/调度器调整，**不要套用 Turbo 的 8 步 sigma 序列**。

请求示例（Turbo）：

```json
{
  "prompt": "children book cartoon illustration, a bear cub asleep on a moon-shaped pillow",
  "negative_prompt": "",
  "width": 1536,
  "height": 864,
  "seed": -1,
  "output_format": "jpeg",
  "output_compression": 85,
  "sample_params": {
    "sample_steps": 8,
    "sample_method": "euler",
    "custom_sigmas": [1.0, 0.978453, 0.95418, 0.926626, 0.89508,
                      0.845148, 0.704534, 0.414568, 0.0],
    "guidance": { "txt_cfg": 1.0 }
  }
}
```

> 若改用普通调度器（不传 `custom_sigmas`），就按 Qwen 基础版的参数走，
> 不要只传 8 步而省略 sigma 序列。

> 后续新增其它模型（如 SD3.x、Wan 视频等）时，可按同样格式在本节继续补充。

---

## 5. 兼容 API

### 5.1 Stable Diffusion WebUI API（`/sdapi/v1`）

**同步**接口：请求返回时结果已经在响应里。兼容 A1111 客户端。

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| POST | `/sdapi/v1/txt2img` | 文生图 |
| POST | `/sdapi/v1/img2img` | 图生图 |
| GET | `/sdapi/v1/loras` | LoRA 列表 |
| GET | `/sdapi/v1/upscalers` | 放大方式列表 |
| GET | `/sdapi/v1/latent-upscale-modes` | Latent 放大模式 |
| GET | `/sdapi/v1/samplers` | 采样方法 |
| GET | `/sdapi/v1/schedulers` | 调度器 |
| GET | `/sdapi/v1/sd-models` | 模型列表 |
| GET | `/sdapi/v1/options` | 全局选项 |

`txt2img` 常用请求字段：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `prompt` | string | **必填** |
| `negative_prompt` | string | 负面提示词 |
| `width` / `height` | int | 尺寸 |
| `steps` | int | 步数 |
| `cfg_scale` | number | CFG |
| `seed` | int | `-1` 随机 |
| `batch_size` | int | 张数 |
| `clip_skip` | int | 跳过层 |
| `sampler_name` | string | 采样器名（支持 WebUI 别名，如 `Euler a`、`DPM++ 2M`） |
| `scheduler` | string | 调度器 |
| `lora` | array | `[{"path","multiplier","is_high_noise"}]` |
| `extra_images` | string[] | Base64 / data URL 参考图 |
| `enable_hr` | bool | 启用高清修复 |
| `hr_upscaler` | string | 放大方式 |
| `hr_scale` | number | 放大倍数 |
| `hr_resize_x` / `hr_resize_y` | int | 目标尺寸（0 用 scale） |
| `hr_steps` | int | 二阶段步数（0 复用 steps） |
| `denoising_strength` | number | 高清修复重绘强度 |

`img2img` 额外字段：`init_images`（Base64/data URL 数组）、`mask`、`inpainting_mask_invert`、
`denoising_strength`（0~1）。

响应：

```json
{
  "images": ["<base64 png>", "..."],
  "parameters": { /* 回显请求体 */ },
  "info": "{\"prompt\":\"...\",\"seed\":123,...}"
}
```

注意：`info` 是 **字符串**（内部为 JSON 文本），不是对象。

```bash
curl -s -X POST http://127.0.0.1:1234/sdapi/v1/txt2img \
  -H 'Content-Type: application/json' \
  -d '{"prompt":"a blue cup","width":256,"height":256,"steps":8,"cfg_scale":1.0,"sampler_name":"euler"}'
```

### 5.2 OpenAI API（`/v1`）

**同步**接口。

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| POST | `/v1/images/generations` | 文生图（JSON） |
| POST | `/v1/images/edits` | 图生图/编辑（multipart） |
| GET | `/v1/models` | 模型列表（固定返回 `sd-cpp-local`） |

`/v1/images/generations` 请求字段：`prompt`（必填）、`n`、`size`（`WIDTHxHEIGHT`）、
`output_format`、`output_compression`。

响应：

```json
{
  "created": 1792245172,
  "output_format": "jpeg",
  "data": [ { "b64_json": "/9j/4AAQ..." } ]
}
```

```bash
curl -s -X POST http://127.0.0.1:1234/v1/images/generations \
  -H 'Content-Type: application/json' \
  -d '{"prompt":"a blue cup","size":"512x512","n":1,"output_format":"png"}'
```

`/v1/images/edits` 使用 `multipart/form-data`：字段 `prompt`、`image[]`（可多张，或旧的单张
`image`）、`mask`、`n`、`size`、`output_format`、`output_compression`。

### 5.3 原生参数扩展 `sd_cpp_extra_args`

兼容 API（OpenAI / sdapi）本身只覆盖基础参数。想使用原生参数（`sample_params`、`hires`、
`cache_mode`、`vae_tiling_params` 等）时，可把一段原生 JSON 嵌进 `prompt`：

```text
a cat sitting on a chair <sd_cpp_extra_args>{"sample_params":{"sample_steps":28},"hires":{"enabled":true,"upscaler":"Latent","scale":2.0}}</sd_cpp_extra_args>
```

服务会提取该 JSON、按原生字段规则解析，并把这段文本从最终 prompt 中移除。
（`/sdcpp/v1/*` 本身已是原生 schema，**不要**再使用该扩展。）

---

## 6. 图像编码与 LoRA 规则

### 6.1 图像字段

所有图像字段接受两种形式：

- 纯 Base64 字符串，或
- data URL：`data:image/png;base64,....`

通道要求：

| 字段 | 通道 |
| --- | --- |
| `init_image` | 3 |
| `ref_images[]` | 3 |
| `control_image` | 3 |
| `ip_adapter_image` | 3 |
| `end_image`（视频） | 3 |
| `control_frames[]`（视频） | 3 |
| `mask_image` | 1（单通道灰度） |

省略或传 `null` 视为空图。

### 6.2 LoRA

- 服务端**不会**解析 prompt 中的 `<lora:...>` 标签（三套 API 都不支持）。
- 必须通过结构化字段 `lora: [{"path","multiplier","is_high_noise"}]` 使用。
- `path` 取 `capabilities.loras[].path` 或 `/sdapi/v1/loras` 返回的 `path`。

### 6.3 输出格式

- 图像：`png` / `jpeg` / `webp`（取决于编译时是否启用 WebP；以 capabilities 为准）
- 视频：`webm` / `webp`（动图）/ `avi`
- `output_compression` 仅对有损格式（jpeg/webp）有意义，范围 0~100。

---

## 7. 并发、队列与超时

- 单进程内串行/有限并发执行生成任务，队列上限由 `limits.max_queue_size` 给出。
- 队列满时提交返回 `429`。
- 排队中的任务可用 cancel 取消；生成中的任务不可中断。
- 任务结果保留约 600 秒，之后查询返回 `410`。
- 轮询建议间隔 500ms ~ 1s（Web UI 默认 100ms）。

---

## 8. 常见问题（FAQ）

**Q：返回 `{"error":"loaded model does not support vid_gen"}`**
A：当前加载的模型只支持图像生成。用 `capabilities.supported_modes` 判断后再调用。

**Q：调用出错 `invalid json`**
A：请求体不是合法 JSON，或 `Content-Type: application/json` 之外还传了非法内容。
注意 `curl -d ''` 会返回 `400 empty body`。

**Q：`prompt` 能不能不传？**
A：原生 `/sdcpp/v1/img_gen` 可以（会生成空提示词图像）；但 OpenAI / sdapi 要求 `prompt` 非空，
否则 `400 prompt required`。

**Q：尺寸限制？**
A：`limits.min_width/max_width/min_height/max_height`，具体范围以 capabilities 为准。

**Q：图片/视频怎么落盘？**
A：解码返回的 `b64_json` 即可（见 §2.2 / §2.3）。响应体中的 `output_format` / `mime_type`
说明实际格式。

**Q：支持并发请求吗？**
A：可以同时提交多个任务，服务会排队处理；但生成是共享同一个模型上下文的，实际是串行执行。

---

## 9. 接口速查表

| 方法 | 路径 | 同步/异步 | 说明 |
| --- | --- | --- | --- |
| GET | `/` | - | 内置 Web UI |
| GET | `/sdcpp/v1/capabilities` | - | 能力与默认参数 |
| POST | `/sdcpp/v1/img_gen` | 异步 | 提交图像任务（202） |
| POST | `/sdcpp/v1/vid_gen` | 异步 | 提交视频任务（202） |
| GET | `/sdcpp/v1/jobs/{id}` | - | 查询任务 |
| POST | `/sdcpp/v1/jobs/{id}/cancel` | - | 取消任务 |
| POST | `/sdapi/v1/txt2img` | 同步 | 文生图（WebUI 兼容） |
| POST | `/sdapi/v1/img2img` | 同步 | 图生图（WebUI 兼容） |
| GET | `/sdapi/v1/loras` `upscalers` `latent-upscale-modes` `samplers` `schedulers` `sd-models` `options` | - | 兼容性发现接口 |
| POST | `/v1/images/generations` | 同步 | OpenAI 兼容文生图 |
| POST | `/v1/images/edits` | 同步 | OpenAI 兼容编辑（multipart） |
| GET | `/v1/models` | - | OpenAI 兼容模型列表 |

---

## 10. 参考来源

- 上游字段级完整参考：`examples/server/api.md`（stable-diffusion.cpp 仓库内）
- 服务端实现：`examples/server/routes_sdcpp.cpp`、`routes_sdapi.cpp`、`routes_openai.cpp`、
  `async_jobs.cpp`、`runtime.cpp`、`main.cpp`
- 参数解析：`examples/common/common.cpp` 中 `SDGenerationParams::from_json_str`
- 当前实例 capabilities 快照可在运行时获取：`curl http://<host>:1234/sdcpp/v1/capabilities`
