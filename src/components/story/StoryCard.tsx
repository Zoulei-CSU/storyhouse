import { getAgeGroup, getCategory } from '@/data/taxonomy';
import { useFavoritesStore } from '@/store/favoritesStore';
import type { Story } from '@/types/story';
import { StoryCover } from './StoryCover';

interface StoryCardProps {
  story: Story;
  onOpen?: (id: string) => void;
}

export function StoryCard({ story, onOpen }: StoryCardProps) {
  const isFavorite = useFavoritesStore((state) => state.favoriteIds.includes(story.id));
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const age = getAgeGroup(story.ageGroup);
  const category = getCategory(story.categories[0]);

  return (
    <article className="toy-card group flex h-full flex-col gap-3 p-3 hover:-translate-y-1">
      <button
        type="button"
        onClick={() => onOpen?.(story.id)}
        className="focus-ring rounded-3xl text-left"
        aria-label={`打开故事 ${story.title}`}
      >
        <StoryCover story={story} size="sm" />
      </button>

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-extrabold leading-snug text-ink-strong">{story.title}</h3>
          <button
            type="button"
            onClick={() => toggleFavorite(story.id)}
            aria-label={isFavorite ? '取消收藏' : '收藏故事'}
            aria-pressed={isFavorite}
            className="focus-ring shrink-0 rounded-full p-1 text-2xl transition active:scale-90"
          >
            {isFavorite ? '⭐' : '☆'}
          </button>
        </div>

        <p className="line-clamp-2 text-sm text-ink-muted">{story.summary}</p>

        <div className="mt-auto flex flex-wrap items-center gap-2 text-xs font-bold">
          <span className="rounded-full bg-brand-soft px-2 py-1 text-brand-ink">
            {age.emoji} {age.range}
          </span>
          <span
            className="rounded-full px-2 py-1 text-white"
            style={{ backgroundColor: category.color }}
          >
            {category.label}
          </span>
          <span className="text-ink-muted">约 {story.readMinutes} 分钟</span>
        </div>
      </div>
    </article>
  );
}
