import { getAgeGroup } from '@/data/taxonomy';
import type { Story } from '@/types/story';

interface StoryMetaProps {
  story: Story;
}

export function StoryMeta({ story }: StoryMetaProps) {
  const age = getAgeGroup(story.ageGroup);
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
      <span className="rounded-full bg-brand-soft px-3 py-1 text-brand-ink">
        {age.emoji} {age.range}
      </span>
      <span className="rounded-full bg-surface-soft px-3 py-1 text-ink">约 {story.readMinutes} 分钟</span>
      <span className="rounded-full bg-surface-soft px-3 py-1 text-ink">{story.source}</span>
      {story.tags.slice(0, 3).map((tag) => (
        <span key={tag} className="rounded-full bg-surface-soft px-3 py-1 text-ink-muted">
          #{tag}
        </span>
      ))}
    </div>
  );
}
