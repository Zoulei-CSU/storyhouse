export type ThemeId = 'sun' | 'ocean' | 'forest' | 'grape' | 'sakura' | 'night';

export interface ThemeMeta {
  id: ThemeId;
  label: string;
  emoji: string;
  description: string;
  swatch: [string, string];
}

export const THEMES: ThemeMeta[] = [
  {
    id: 'sun',
    label: '暖阳',
    emoji: '🌞',
    description: '温暖的琥珀与橙色，默认配色',
    swatch: ['#ffb703', '#fb8500'],
  },
  {
    id: 'ocean',
    label: '海洋',
    emoji: '🌊',
    description: '清透的天蓝与青色',
    swatch: ['#38bdf8', '#0284c7'],
  },
  {
    id: 'forest',
    label: '森林',
    emoji: '🌿',
    description: '清新的草绿与薄荷',
    swatch: ['#4ade80', '#16a34a'],
  },
  {
    id: 'grape',
    label: '葡萄',
    emoji: '🍇',
    description: '柔和的紫色与靛蓝',
    swatch: ['#a78bfa', '#7c3aed'],
  },
  {
    id: 'sakura',
    label: '樱花',
    emoji: '🌸',
    description: '甜甜的粉色与桃红',
    swatch: ['#f9a8d4', '#db2777'],
  },
  {
    id: 'night',
    label: '星夜',
    emoji: '🌙',
    description: '适合睡前的深色夜空',
    swatch: ['#818cf8', '#1e1b4b'],
  },
];

export const DEFAULT_THEME: ThemeId = 'sun';

const THEME_IDS = new Set<string>(THEMES.map((theme) => theme.id));

export function resolveTheme(input: unknown): ThemeId {
  return typeof input === 'string' && THEME_IDS.has(input) ? (input as ThemeId) : DEFAULT_THEME;
}
