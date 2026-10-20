import { StoryImageCarousel } from '@/components/story/StoryImageCarousel';
import { getCategory } from '@/data/taxonomy';
import type { StoryImage } from '@/services/imageRepository';
import type { Story } from '@/types/story';

interface StoryCoverProps {
  story: Story;
  size?: 'sm' | 'md' | 'lg';
  /**
   * 已加载到的配图。
   *
   * 为空时保持「图标 + 渐变底色」；一张时显示单图；多张时自动变成轮播。
   * 由调用方负责取数据，组件本身不发请求。
   */
  images?: StoryImage[];
  /** 点击当前图片，参数是图片序号 */
  onImageClick?: (index: number) => void;
}

const SIZES = {
  sm: 'h-24 text-4xl',
  md: 'h-40 text-5xl',
  lg: 'h-56 text-7xl',
};

export function StoryCover({ story, size = 'md', images = [], onImageClick }: StoryCoverProps) {
  const primary = getCategory(story.categories[0]);
  const gradient = story.cover.bgGradient ?? ['#ffffff', '#fff3d6'];

  return (
    <div
      className={`group relative flex w-full items-center justify-center overflow-hidden rounded-3xl ${SIZES[size]}`}
      style={{ background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }}
    >
      {/* 有真实图时把图标层从读屏树里摘掉，避免和轮播的标签重复播报 */}
      <div
        role={images.length > 0 ? undefined : 'img'}
        aria-hidden={images.length > 0 || undefined}
        aria-label={images.length > 0 ? undefined : `${story.title} 的插画`}
        className="flex items-center justify-center"
      >
        <span className="drop-shadow-sm">{story.cover.emoji ?? primary.emoji}</span>
      </div>
      <span className="pointer-events-none absolute left-3 top-3 z-30 rounded-full bg-white/70 px-2 py-0.5 text-xs font-bold text-slate-500">
        {primary.label}
      </span>
      {images.length > 0 && (
        <StoryImageCarousel
          images={images}
          alt={`${story.title} 的插画`}
          onOpen={(index) => onImageClick?.(index)}
        />
      )}
    </div>
  );
}
