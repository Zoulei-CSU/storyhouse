import type { Story } from '@/types/story';
import { bedtimeStories } from './bedtime';
import { bedtimeStories2 } from './bedtime2';
import { characterStories } from './character';
import { characterStories2 } from './character2';
import { fableStories } from './fable';
import { fableStories2 } from './fable2';
import { fairyStories } from './fairy';
import { fairyStories2 } from './fairy2';
import { idiomStories } from './idiom';
import { idiomStories2 } from './idiom2';
import { mythStories } from './myth';
import { mythStories2 } from './myth2';
import { scienceStories } from './science';
import { scienceStories2 } from './science2';
import { validateStories } from '@/data/validateStories';

function dedupe(stories: Story[]): Story[] {
  const seen = new Set<string>();
  return stories.filter((story) => {
    if (seen.has(story.id)) return false;
    seen.add(story.id);
    return true;
  });
}

export const allStories: Story[] = dedupe([
  ...fableStories,
  ...fableStories2,
  ...idiomStories,
  ...idiomStories2,
  ...fairyStories,
  ...fairyStories2,
  ...mythStories,
  ...mythStories2,
  ...scienceStories,
  ...scienceStories2,
  ...characterStories,
  ...characterStories2,
  ...bedtimeStories,
  ...bedtimeStories2,
]);

const storyMap = new Map(allStories.map((story) => [story.id, story]));

export function getStory(id: string): Story | undefined {
  return storyMap.get(id);
}

export function getStoriesByCategory(categoryId: string): Story[] {
  return allStories.filter((story) => story.categories.includes(categoryId as Story['categories'][number]));
}

if (import.meta.env.DEV) {
  const { valid, errors } = validateStories(allStories);
  if (!valid) {
    console.warn('[小星星故事屋] 故事数据校验发现问题：');
    for (const error of errors) console.warn(` - ${error}`);
  }
}
