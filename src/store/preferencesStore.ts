import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DEFAULT_THEME, type ThemeId } from '@/data/themes';
import type { AgeGroup } from '@/types/story';
import { TTS_SOURCE, type NarrationSource } from '@/types/voice';

export type FontSize = 'base' | 'large' | 'xlarge';

interface PreferencesState {
  ageGroup: AgeGroup;
  fontSize: FontSize;
  speechRate: number;
  theme: ThemeId;
  narrationSource: NarrationSource;
  /** 读完自动进入下一篇并继续朗读；默认关闭，避免老用户被自动跳页 */
  continuousPlay: boolean;
  setAgeGroup: (age: AgeGroup) => void;
  setFontSize: (size: FontSize) => void;
  setSpeechRate: (rate: number) => void;
  setTheme: (theme: ThemeId) => void;
  setNarrationSource: (source: NarrationSource) => void;
  setContinuousPlay: (enabled: boolean) => void;
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      ageGroup: 'Preschool',
      fontSize: 'base',
      speechRate: 0.9,
      theme: DEFAULT_THEME,
      narrationSource: TTS_SOURCE,
      continuousPlay: false,
      setAgeGroup: (ageGroup) => set({ ageGroup }),
      setFontSize: (fontSize) => set({ fontSize }),
      setSpeechRate: (speechRate) => set({ speechRate }),
      setTheme: (theme) => set({ theme }),
      setNarrationSource: (narrationSource) => set({ narrationSource }),
      setContinuousPlay: (continuousPlay) => set({ continuousPlay }),
    }),
    { name: 'story-house:preferences' },
  ),
);
