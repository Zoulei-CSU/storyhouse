import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import { storyImageLabel, storyImageUrl, type StoryImage } from '@/services/imageRepository';

interface StoryImageCarouselProps {
  images: StoryImage[];
  /** 用于无障碍标签，一般传「《故事名》的插画」 */
  alt: string;
  /** 点击当前图片，参数是图片序号 */
  onOpen: (index: number) => void;
}

/**
 * 故事封面轮播。
 *
 * 只有一张图时不显示任何控件，表现与单图一致。
 * 左右两侧留出按钮，手机上也可以横向滑动切换。
 */
export function StoryImageCarousel({ images, alt, onOpen }: StoryImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const startX = useRef<number | null>(null);
  // 滑动结束时浏览器仍会补一次 click，用它避免误触打开大图
  const suppressClick = useRef(false);

  const total = images.length;
  const safeIndex = total === 0 ? 0 : Math.min(index, total - 1);
  const current = images[safeIndex];
  const label = current ? storyImageLabel(current) : '';

  // 换故事时回到第一张
  useEffect(() => {
    setIndex(0);
  }, [images]);

  // 预加载相邻两张，切换时不闪白
  useEffect(() => {
    if (total <= 1) return;
    for (const offset of [-1, 1]) {
      const neighbor = images[(safeIndex + offset + total) % total];
      if (!neighbor) continue;
      const preload = new Image();
      preload.src = storyImageUrl(neighbor);
    }
  }, [images, safeIndex, total]);

  if (!current) return null;

  const go = (delta: number) => {
    if (total <= 1) return;
    setLoaded(false);
    setIndex((safeIndex + delta + total) % total);
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (startX.current === null) return;
    const delta = event.clientX - startX.current;
    startX.current = null;
    if (Math.abs(delta) <= 40) return;
    suppressClick.current = true;
    go(delta < 0 ? 1 : -1);
  };

  return (
    <div className="absolute inset-0 z-10">
      <img
        key={label}
        src={storyImageUrl(current)}
        alt=""
        aria-hidden="true"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <button
        type="button"
        onClick={() => {
          if (suppressClick.current) {
            suppressClick.current = false;
            return;
          }
          onOpen(safeIndex);
        }}
        onPointerDown={(event) => {
          startX.current = event.clientX;
          suppressClick.current = false;
        }}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          startX.current = null;
        }}
        aria-label={`查看大图：${label}`}
        title="查看大图"
        className="focus-ring absolute inset-0 z-10 cursor-zoom-in touch-pan-y focus-visible:ring-inset"
      />

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="上一张"
            className="focus-ring absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-slate-700 shadow-md transition hover:bg-white active:scale-95"
          >
            <Chevron direction="left" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="下一张"
            className="focus-ring absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-slate-700 shadow-md transition hover:bg-white active:scale-95"
          >
            <Chevron direction="right" />
          </button>

          {/* 图多了圆点会挤成一条，超过 7 张只保留计数 */}
          {total <= 7 && (
            <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5">
              {images.map((image, dotIndex) => (
                <button
                  key={storyImageLabel(image)}
                  type="button"
                  onClick={() => {
                    setLoaded(false);
                    setIndex(dotIndex);
                  }}
                  aria-label={`第 ${dotIndex + 1} 张`}
                  aria-current={dotIndex === safeIndex}
                  className={`focus-ring h-2 rounded-full transition-all ${
                    dotIndex === safeIndex ? 'w-5 bg-white' : 'w-2 bg-white/60 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          )}

          <span className="absolute bottom-2 right-3 z-20 rounded-full bg-slate-900/35 px-2 py-0.5 text-[11px] font-bold text-white/90">
            {safeIndex + 1} / {total}
          </span>
        </>
      )}

      <span className="pointer-events-none absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-slate-600 shadow-md">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
        </svg>
      </span>

      <span className="sr-only">{alt}</span>
    </div>
  );
}

function Chevron({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={direction === 'left' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'} />
    </svg>
  );
}
