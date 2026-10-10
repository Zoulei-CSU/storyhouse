import type { AgeGroup, CategoryId, SortKey } from '@/types/story';

export interface AgeGroupMeta {
  id: AgeGroup;
  label: string;
  range: string;
  emoji: string;
  description: string;
}

export const AGE_GROUPS: AgeGroupMeta[] = [
  {
    id: 'Preschool',
    label: '启蒙',
    range: '3-6 岁',
    emoji: '🧸',
    description: '短句大图，适合亲子共读和听故事',
  },
  {
    id: 'Growing',
    label: '成长',
    range: '6-9 岁',
    emoji: '🎈',
    description: '情节完整，开始自主阅读',
  },
  {
    id: 'Explorer',
    label: '探索',
    range: '9-12 岁',
    emoji: '🔭',
    description: '篇幅更长，读道理也读世界',
  },
];

export interface CategoryMeta {
  id: CategoryId;
  label: string;
  emoji: string;
  color: string;
  description: string;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'fable',
    label: '寓言故事',
    emoji: '🐢',
    color: '#43c59e',
    description: '动物的智慧，一两句就懂的道理',
  },
  {
    id: 'idiom',
    label: '成语故事',
    emoji: '📜',
    color: '#4cc9f0',
    description: '一个成语，一段典故',
  },
  {
    id: 'bedtime',
    label: '睡前故事',
    emoji: '🌙',
    color: '#8e7dff',
    description: '温柔舒缓，陪你进入梦乡',
  },
  {
    id: 'fairy',
    label: '童话故事',
    emoji: '🏰',
    color: '#ff5d8f',
    description: '会说话的城堡与森林',
  },
  {
    id: 'myth',
    label: '神话传说',
    emoji: '🐲',
    color: '#fb8500',
    description: '古老的中国故事与民间传说',
  },
  {
    id: 'science',
    label: '科普启蒙',
    emoji: '🔬',
    color: '#2a9d8f',
    description: '身边的小科学，好奇心的种子',
  },
  {
    id: 'character',
    label: '品格教育',
    emoji: '💛',
    color: '#ffb703',
    description: '诚实、勇敢、分享与坚持',
  },
];

export const SORT_OPTIONS: { id: SortKey; label: string }[] = [
  { id: 'latest', label: '最新' },
  { id: 'shortest', label: '最短' },
  { id: 'popular', label: '最长' },
];

const ageMap = new Map(AGE_GROUPS.map((a) => [a.id, a]));
const categoryMap = new Map(CATEGORIES.map((c) => [c.id, c]));

export function getAgeGroup(id: AgeGroup): AgeGroupMeta {
  return ageMap.get(id) ?? AGE_GROUPS[0];
}

export function getCategory(id: CategoryId): CategoryMeta {
  return categoryMap.get(id) ?? CATEGORIES[0];
}
