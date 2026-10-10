import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const MAX_HISTORY = 30;

interface FavoritesState {
  favoriteIds: string[];
  history: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  markAsRead: (id: string) => void;
  clearHistory: () => void;
  replaceLibrary: (library: { favoriteIds: string[]; history: string[] }) => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favoriteIds: [],
      history: [],
      toggleFavorite: (id) =>
        set((state) => ({
          favoriteIds: state.favoriteIds.includes(id)
            ? state.favoriteIds.filter((item) => item !== id)
            : [id, ...state.favoriteIds],
        })),
      isFavorite: (id) => get().favoriteIds.includes(id),
      markAsRead: (id) =>
        set((state) => ({
          history: [id, ...state.history.filter((item) => item !== id)].slice(0, MAX_HISTORY),
        })),
      clearHistory: () => set({ history: [] }),
      replaceLibrary: ({ favoriteIds, history }) =>
        set({ favoriteIds: favoriteIds.slice(), history: history.slice(0, MAX_HISTORY) }),
    }),
    { name: 'story-house:favorites' },
  ),
);
