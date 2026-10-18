#!/usr/bin/env python3
"""把 AI 生成的方图/3:2 图裁成 16:9、转 JPEG，并按故事 id 命名。

生图工具通常输出 1536x1024（3:2）且右下角带水印，本脚本统一处理：
居中偏上裁切到 16:9（正好切掉底部水印）→ 转 JPEG → 压到 300KB 以内。

依赖：Python 3.8+ 与 Pillow（`pip install Pillow`）。

用法：
  # 文件名已经是 <故事id>.png
  python scripts/prepare-story-images.py --src .tmp-gen

  # 文件名是工具自动生成的，按生成顺序给出 id
  python scripts/prepare-story-images.py --src .tmp-gen --ids fairy-cinderella,science-ants-move-home

  # 显式映射（最稳）：{"文件名.png": "故事id"}
  python scripts/prepare-story-images.py --src .tmp-gen --map mapping.json

  # 只预览，不写文件
  python scripts/prepare-story-images.py --src .tmp-gen --ids ... --dry-run
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PROMPTS_FILE = ROOT / "docs" / "story-prompts" / "image-prompts.json"
DEFAULT_OUT = ROOT / "story-images"
IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".webp"}
MAX_BYTES = 300 * 1024
TARGET_RATIO = 16 / 9


def fail(message: str) -> None:
    print(f"[错误] {message}", file=sys.stderr)
    sys.exit(1)


def load_known_ids() -> set[str]:
    try:
        data = json.loads(PROMPTS_FILE.read_text("utf-8"))
    except FileNotFoundError:
        return set()
    return {item["id"] for item in data.get("stories", [])}


def collect_sources(src: Path) -> list[Path]:
    if not src.is_dir():
        fail(f"源目录不存在：{src}")
    files = sorted(
        (p for p in src.iterdir() if p.is_file() and p.suffix.lower() in IMAGE_EXTS),
        key=lambda p: p.name,
    )
    if not files:
        fail(f"源目录里没有图片：{src}")
    return files


def crop_to_ratio(img, ratio: float, top_bias: float):
    """裁到目标宽高比。top_bias=0 贴顶、1 贴底；0.4 时能切掉右下角水印。"""
    width, height = img.size
    if width / height > ratio:
        new_w = int(height * ratio)
        left = (width - new_w) // 2
        return img.crop((left, 0, left + new_w, height))
    new_h = int(width / ratio)
    top = int((height - new_h) * top_bias)
    return img.crop((0, top, width, top + new_h))


def save_jpeg(img, out: Path) -> tuple[int, int]:
    """从高质量往下压，直到不超过体积上限。返回 (质量, 字节数)。"""
    quality = 85
    for quality in (85, 82, 78, 72, 66, 60):
        img.save(out, "JPEG", quality=quality, optimize=True, progressive=True)
        size = out.stat().st_size
        if size <= MAX_BYTES:
            return quality, size
    return quality, out.stat().st_size


def resolve_pairs(files: list[Path], args) -> list[tuple[Path, str]]:
    if args.map:
        mapping = json.loads(Path(args.map).read_text("utf-8"))
        pairs = [(src, mapping[src.name]) for src in files if src.name in mapping]
        if len(pairs) != len(files):
            missing = [src.name for src in files if src.name not in mapping]
            fail(f"映射缺少这些文件：{', '.join(missing)}")
        return pairs

    if args.ids:
        ids = [item.strip() for item in args.ids.replace("\n", ",").split(",") if item.strip()]
        if len(ids) != len(files):
            fail(f"id 数量({len(ids)})与图片数量({len(files)})不一致")
        return list(zip(files, ids))

    # 没有映射时，要求文件名本身就是故事 id
    return [(src, src.stem) for src in files]


def main() -> None:
    parser = argparse.ArgumentParser(description="裁切并转换故事配图")
    parser.add_argument("--src", required=True, help="生成图片所在目录")
    parser.add_argument("--out", default=str(DEFAULT_OUT), help="输出目录，默认 story-images/")
    parser.add_argument("--ids", help="按生成顺序逗号分隔的故事 id")
    parser.add_argument("--map", help="JSON 映射文件：{文件名: 故事id}")
    parser.add_argument("--width", type=int, default=1536, help="输出宽度，默认 1536")
    parser.add_argument("--top-bias", type=float, default=0.4, help="纵向裁切位置，0 贴顶 1 贴底")
    parser.add_argument("--dry-run", action="store_true", help="只打印计划，不写文件")
    args = parser.parse_args()

    try:
        from PIL import Image
    except ImportError:
        fail("缺少 Pillow，请先安装：pip install Pillow")
        return

    files = collect_sources(Path(args.src))
    pairs = resolve_pairs(files, args)
    known = load_known_ids()
    out_dir = Path(args.out)
    if not args.dry_run:
        out_dir.mkdir(parents=True, exist_ok=True)

    unknown = [story_id for _, story_id in pairs if known and story_id not in known]
    if unknown:
        print(f"[警告] 这些 id 不在提示词清单里：{', '.join(unknown)}")

    print(f"{'故事 id':44s} {'尺寸':>11s} {'体积':>9s}  质量")
    print("-" * 76)
    for src, story_id in pairs:
        img = Image.open(src).convert("RGB")
        img = crop_to_ratio(img, TARGET_RATIO, args.top_bias)
        if args.width and img.width != args.width:
            height = round(img.height * args.width / img.width)
            img = img.resize((args.width, height), Image.LANCZOS)

        out = out_dir / f"{story_id}.jpg"
        if args.dry_run:
            print(f"{story_id:44s} {img.width}x{img.height:6d} {'(预览)':>9s}  -")
            continue

        quality, size = save_jpeg(img, out)
        flag = "" if size <= MAX_BYTES else "  ← 超过 300KB"
        print(f"{story_id:44s} {img.width}x{img.height:<6d} {size/1024:7.1f}KB  q={quality}{flag}")

    print("-" * 76)
    action = "预览" if args.dry_run else f"已写入 {out_dir}"
    print(f"{len(pairs)} 张，{action}")


if __name__ == "__main__":
    main()
