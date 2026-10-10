import { useMemo } from 'react';
import { allStories } from '@/data/stories';
import type { Story, StoryFilter } from '@/types/story';

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

export function matchesKeyword(story: Story, keyword: string): boolean {
  const query = normalize(keyword);
  if (!query) return true;
  return [story.title, story.summary, story.moral, ...story.tags]
    .map(normalize)
    .some((field) => field.includes(query));
}

export function useStoryFilter(filter: StoryFilter): {
  results: Story[];
  total: number;
  isEmpty: boolean;
} {
  const { ageGroup, category, keyword = '', sort = 'latest' } = filter;

  const results = useMemo(() => {
    const filtered = allStories.filter((story) => {
      if (ageGroup && story.ageGroup !== ageGroup) return false;
      if (category && !story.categories.includes(category)) return false;
      return matchesKeyword(story, keyword);
    });

    const sorted = [...filtered];
    if (sort === 'shortest') {
      sorted.sort((a, b) => a.readMinutes - b.readMinutes || a.title.localeCompare(b.title, 'zh'));
    } else if (sort === 'popular') {
      sorted.sort((a, b) => b.readMinutes - a.readMinutes || a.title.localeCompare(b.title, 'zh'));
    } else {
      sorted.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    }
    return sorted;
  }, [ageGroup, category, keyword, sort]);

  return { results, total: results.length, isEmpty: results.length === 0 };
}
