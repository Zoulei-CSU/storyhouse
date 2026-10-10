import { getCategory } from '@/data/taxonomy';
import type { Story } from '@/types/story';

interface StoryCoverProps {
  story: Story;
  size?: 'sm' | 'md' | 'lg';
}

const SIZES = {
  sm: 'h-24 text-4xl',
  md: 'h-40 text-5xl',
  lg: 'h-56 text-7xl',
};

export function StoryCover({ story, size = 'md' }: StoryCoverProps) {
  const primary = getCategory(story.categories[0]);
  const gradient = story.cover.bgGradient ?? ['#ffffff', '#fff3d6'];
  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden rounded-3xl ${SIZES[size]}`}
      style={{ background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }}
      role="img"
      aria-label={`${story.title} 的插画`}
    >
      <span className="absolute left-3 top-3 rounded-full bg-white/70 px-2 py-0.5 text-xs font-bold text-slate-500">
        {primary.label}
      </span>
      <span className="drop-shadow-sm">{story.cover.emoji ?? primary.emoji}</span>
    </div>
  );
}
