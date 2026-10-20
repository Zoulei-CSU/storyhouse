import { create } from 'zustand';

interface PlaybackState {
  /**
   * 需要自动开始朗读的故事 id。
   *
   * 只在「连续播放」跳转的瞬间使用：上一页写入，落地页消费后立即清空。
   * 刻意不持久化，也不放进 URL——刷新或前进后退不应该突然自动播放。
   */
  autoPlayId: string | null;
  requestAutoPlay: (storyId: string) => void;
  clearAutoPlay: () => void;
}

export const usePlaybackStore = create<PlaybackState>((set) => ({
  autoPlayId: null,
  requestAutoPlay: (storyId) => set({ autoPlayId: storyId }),
  clearAutoPlay: () => set({ autoPlayId: null }),
}));
