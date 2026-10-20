import { useEffect, useState } from 'react';
import { fetchStoryImages, type StoryImage } from '@/services/imageRepository';

/** requestIdleCallback 在部分环境缺失，这里只做能力探测。 */
type IdleCapableWindow = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

/**
 * 详情页的配图列表。
 *
 * 首屏先渲染图标封面，拿到列表后挑空闲时机再上屏：
 * 图片下载不跟首屏渲染抢带宽，也保留原有的「先图标后插画」观感。
 * 没有后端时 fetchStoryImages 返回空数组，页面与以前完全一致。
 */
export function useStoryImages(storyId: string): StoryImage[] {
  const [images, setImages] = useState<StoryImage[]>([]);

  useEffect(() => {
    setImages([]);
    if (!storyId) return;

    let cancelled = false;
    let idleHandle: number | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;

    fetchStoryImages(storyId).then((list) => {
      if (cancelled || list.length === 0) return;
      const idleWindow = window as IdleCapableWindow;
      if (typeof idleWindow.requestIdleCallback === 'function') {
        idleHandle = idleWindow.requestIdleCallback(() => {
          if (!cancelled) setImages(list);
        }, { timeout: 1500 });
      } else {
        timer = setTimeout(() => {
          if (!cancelled) setImages(list);
        }, 300);
      }
    });

    return () => {
      cancelled = true;
      const idleWindow = window as IdleCapableWindow;
      if (idleHandle !== undefined) idleWindow.cancelIdleCallback?.(idleHandle);
      if (timer !== undefined) clearTimeout(timer);
    };
  }, [storyId]);

  return images;
}
