import { useEffect, useState } from 'react';
import { getCategory } from '@/data/taxonomy';
import { isKnownMissing, markMissing, storyImageUrl } from '@/services/imageRepository';
import { detectStorageMode } from '@/services/userRepository';
import type { Story } from '@/types/story';

interface StoryCoverProps {
  story: Story;
  size?: 'sm' | 'md' | 'lg';
  /** 开启后，首屏先显示图标，空闲时再加载真实插画并淡入覆盖。 */
  withImage?: boolean;
  /** 真实插画加载完成后点击封面触发，用于打开大图浏览。 */
  onImageClick?: () => void;
}

const SIZES = {
  sm: 'h-24 text-4xl',
  md: 'h-40 text-5xl',
  lg: 'h-56 text-7xl',
};

/** requestIdleCallback 在部分环境缺失，这里只做能力探测，不依赖 DOM lib 的类型声明。 */
type IdleCapableWindow = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

export function StoryCover({ story, size = 'md', withImage = false, onImageClick }: StoryCoverProps) {
  const primary = getCategory(story.categories[0]);
  const gradient = story.cover.bgGradient ?? ['#ffffff', '#fff3d6'];

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // 切换故事时先清掉上一张图，避免旧图残留到新故事上
    setImageSrc(null);
    setImageLoaded(false);

    if (!withImage || isKnownMissing(story.id)) return;

    let cancelled = false;
    let idleHandle: number | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const schedule = (task: () => void) => {
      const idleWindow = window as IdleCapableWindow;
      if (typeof idleWindow.requestIdleCallback === 'function') {
        idleHandle = idleWindow.requestIdleCallback(task, { timeout: 1500 });
      } else {
        timer = setTimeout(task, 300);
      }
    };

    // 纯前端部署没有 /api，先确认后端可用再发请求，避免无意义的 404。
    // detectStorageMode 内部有缓存，与音色探测共用同一次结果。
    detectStorageMode().then((mode) => {
      if (cancelled || mode !== 'server') return;
      // 等首屏渲染完成后再让位给图片下载
      schedule(() => {
        if (!cancelled) setImageSrc(storyImageUrl(story.id));
      });
    });

    return () => {
      cancelled = true;
      const idleWindow = window as IdleCapableWindow;
      if (idleHandle !== undefined) idleWindow.cancelIdleCallback?.(idleHandle);
      if (timer !== undefined) clearTimeout(timer);
    };
  }, [story.id, withImage]);

  return (
    <div
      className={`group relative flex w-full items-center justify-center overflow-hidden rounded-3xl ${SIZES[size]}`}
      style={{ background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }}
    >
      <div role="img" aria-label={`${story.title} 的插画`} className="flex items-center justify-center">
        <span className="drop-shadow-sm">{story.cover.emoji ?? primary.emoji}</span>
      </div>
      <span className="pointer-events-none absolute left-3 top-3 z-30 rounded-full bg-white/70 px-2 py-0.5 text-xs font-bold text-slate-500">
        {primary.label}
      </span>
      {imageSrc && (
        <img
          src={imageSrc}
          alt=""
          aria-hidden="true"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            markMissing(story.id);
            setImageSrc(null);
          }}
          className={`absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
      {/* 只有真实插画加载完成后才可点击：图标封面点开大图没有意义 */}
      {imageLoaded && onImageClick && (
        <button
          type="button"
          onClick={onImageClick}
          aria-label={`查看《${story.title}》大图`}
          title="查看大图"
          className="focus-ring absolute inset-0 z-20 cursor-zoom-in rounded-3xl focus-visible:ring-inset"
        >
          <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-slate-600 opacity-80 shadow-md transition group-hover:opacity-100">
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
        </button>
      )}
    </div>
  );
}
