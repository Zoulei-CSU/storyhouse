import type { AgeGroup, CategoryId, Story } from '@/types/story';

export interface StorySeed {
  id: string;
  title: string;
  age: AgeGroup;
  cats: CategoryId[];
  tags: string[];
  summary: string;
  paragraphs: string[];
  moral: string;
  source: string;
  emoji: string;
  bg: [string, string];
  date?: string;
}

const DEFAULT_DATE = '2026-09-23';

export function makeStory(seed: StorySeed): Story {
  const textLength = seed.paragraphs.join('').length;
  return {
    id: seed.id,
    title: seed.title,
    summary: seed.summary,
    ageGroup: seed.age,
    categories: seed.cats,
    tags: seed.tags,
    paragraphs: seed.paragraphs,
    moral: seed.moral,
    readMinutes: Math.max(1, Math.round(textLength / 160)),
    source: seed.source,
    isPublicDomain: true,
    cover: {
      illustration: seed.cats[0],
      emoji: seed.emoji,
      bgGradient: seed.bg,
    },
    accentColor: seed.bg[0],
    createdAt: seed.date ?? DEFAULT_DATE,
  };
}
