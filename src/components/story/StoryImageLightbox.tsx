import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

interface StoryImageLightboxProps {
  open: boolean;
  src: string;
  /** 无障碍标签与图注，一般是「《故事名》的插画」 */
  alt: string;
  onClose: () => void;
}

/**
 * 故事插画大图浏览。
 *
 * 通过 portal 挂到 body：封面容器有 overflow-hidden，
 * 直接渲染会被裁掉，也会受父级层叠上下文影响。
 */
export function StoryImageLightbox({ open, src, alt, onClose }: StoryImageLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    restoreFocusRef.current = document.activeElement as HTMLElement | null;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      // 弹层里只有关闭按钮可聚焦，Tab 时把焦点按在弹层内，避免跑到背后的页面
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
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={onClose}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="关闭大图"
            className="focus-ring absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-lg font-bold text-slate-700 shadow-lg transition hover:bg-white active:scale-95"
          >
            ✕
          </button>

          <motion.figure
            className="relative flex max-h-full max-w-full flex-col items-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              className="max-h-[86vh] max-w-[94vw] rounded-2xl object-contain shadow-2xl"
            />
            <figcaption className="mt-3 text-center text-sm font-bold text-white/70">{alt}</figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
