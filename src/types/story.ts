export type AgeGroup = 'Preschool' | 'Growing' | 'Explorer';

export type CategoryId =
  | 'fable'
  | 'idiom'
  | 'bedtime'
  | 'fairy'
  | 'myth'
  | 'science'
  | 'character';

export interface CoverSpec {
  illustration: string;
  emoji?: string;
  bgGradient?: [string, string];
}

export interface Story {
  id: string;
  title: string;
  summary: string;
  ageGroup: AgeGroup;
  categories: CategoryId[];
  tags: string[];
  paragraphs: string[];
  moral: string;
  readMinutes: number;
  source: string;
  isPublicDomain: boolean;
  cover: CoverSpec;
  accentColor: string;
  createdAt: string;
}

export type SortKey = 'latest' | 'shortest' | 'popular';

export interface StoryFilter {
  ageGroup?: AgeGroup;
  category?: CategoryId;
  keyword?: string;
  sort?: SortKey;
}
