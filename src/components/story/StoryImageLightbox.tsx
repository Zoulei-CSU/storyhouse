import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { storyImageLabel, storyImageUrl, type StoryImage } from '@/services/imageRepository';

interface StoryImageLightboxProps {
  open: boolean;
  /** 与封面轮播共用同一份列表，序号才对得上 */
  images: StoryImage[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

/**
 * 故事配图大图浏览。
 *
 * 通过 portal 挂到 body：封面容器有 overflow-hidden，
 * 直接渲染会被裁掉，也会受父级层叠上下文影响。
 */
export function StoryImageLightbox({
  open,
  images,
  index,
  onIndexChange,
  onClose,
}: StoryImageLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  const total = images.length;
  const safeIndex = total === 0 ? 0 : Math.min(Math.max(index, 0), total - 1);
  const current = total > 0 ? images[safeIndex] : null;
  const label = current ? storyImageLabel(current) : '';

  // 键盘监听只挂一次：会变的值放进 ref，避免每次切图都重装监听、重锁滚动
  const latest = useRef({ total, safeIndex, onIndexChange, onClose });
  latest.current = { total, safeIndex, onIndexChange, onClose };

  useEffect(() => {
    if (!open) return;

    restoreFocusRef.current = document.activeElement as HTMLElement | null;

    const handleKeyDown = (event: KeyboardEvent) => {
      const state = latest.current;
      if (event.key === 'Escape') {
        event.preventDefault();
        state.onClose();
        return;
      }
      if ((event.key === 'ArrowLeft' || event.key === 'ArrowRight') && state.total > 1) {
        event.preventDefault();
        const delta = event.key === 'ArrowLeft' ? -1 : 1;
        state.onIndexChange((state.safeIndex + delta + state.total) % state.total);
        return;
      }
      // 弹层里只有关闭与翻页按钮可聚焦，Tab 时把焦点按在弹层内
      if (event.key === 'Tab') {
        event.preventDefault();
        closeRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // 打开期间锁住背景滚动，关闭后恢复原值
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 0);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
      restoreFocusRef.current?.focus?.();
    };
  }, [open]);

  const step = (delta: number) => {
    if (total <= 1) return;
    onIndexChange((safeIndex + delta + total) % total);
  };

  return createPortal(
    <AnimatePresence>
      {open && current && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={`图片浏览：${label}`}
          onClick={onClose}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="关闭大图"
            className="focus-ring absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-lg font-bold text-slate-700 shadow-lg transition hover:bg-white active:scale-95"
          >
            ✕
          </button>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  step(-1);
                }}
                aria-label="上一张"
                className="focus-ring absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 active:scale-95 sm:left-6"
              >
                <Chevron direction="left" />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  step(1);
                }}
                aria-label="下一张"
                className="focus-ring absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 active:scale-95 sm:right-6"
              >
                <Chevron direction="right" />
              </button>
            </>
          )}

          <figure
            className="relative flex max-h-full max-w-full flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <motion.img
              key={label}
              src={storyImageUrl(current)}
              alt={label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.18 }}
              className="max-h-[84vh] max-w-[94vw] rounded-2xl object-contain shadow-2xl"
            />
            <figcaption className="mt-3 flex max-w-[94vw] items-center gap-2 text-sm font-bold text-white/75">
              <span className="truncate">{label}</span>
              {total > 1 && (
                <span className="shrink-0 text-white/50">
                  {safeIndex + 1} / {total}
                </span>
              )}
            </figcaption>
          </figure>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

function Chevron({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
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
