import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getUserRepository, normalizeName } from '@/services/userRepository';
import { useFavoritesStore } from '@/store/favoritesStore';
import type { StorageMode, UserProfile, UserProfilePatch } from '@/types/user';

type AuthStatus = 'idle' | 'loading' | 'ready' | 'error';

interface AuthState {
  status: AuthStatus;
  mode: StorageMode | null;
  userName: string | null;
  user: UserProfile | null;
  error: string | null;
  detect: (force?: boolean) => Promise<StorageMode>;
  login: (rawName: string) => Promise<UserProfile>;
  logout: () => void;
  refresh: () => Promise<void>;
  updateProfile: (patch: UserProfilePatch) => Promise<void>;
  persistLibrary: (favoriteIds: string[], history: string[]) => Promise<void>;
}

function sameList(a: string[], b: string[]): boolean {
  return a.length === b.length && a.every((item, index) => item === b[index]);
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : '操作没有成功，请再试一次';
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      status: 'idle',
      mode: null,
      userName: null,
      user: null,
      error: null,

      detect: async (force = false) => {
        const repo = await getUserRepository(force);
        set({ mode: repo.mode });
        return repo.mode;
      },

      login: async (rawName) => {
        const name = normalizeName(rawName);
        if (!name) {
          const message = '请先输入名字';
          set({ error: message });
          throw new Error(message);
        }

        set({ status: 'loading', error: null });
        try {
          const repo = await getUserRepository();
          let account = await repo.createOrGetUser(name);

          const { favoriteIds, history } = useFavoritesStore.getState();
          const accountIsEmpty = account.favorites.length === 0 && account.history.length === 0;
          if (accountIsEmpty && (favoriteIds.length > 0 || history.length > 0)) {
            account = await repo.updateUser(name, { favorites: favoriteIds, history });
          }

          useFavoritesStore.getState().replaceLibrary({
            favoriteIds: account.favorites,
            history: account.history,
          });
          set({ status: 'ready', mode: repo.mode, userName: account.name, user: account, error: null });
          return account;
        } catch (error) {
          set({ status: 'error', error: errorMessage(error) });
          throw error;
        }
      },

      logout: () => {
        set({ userName: null, user: null, status: 'ready', error: null });
      },

      refresh: async () => {
        const mode = await get().detect();
        const { userName } = get();
        if (!userName) {
          set({ status: 'ready', mode });
          return;
        }

        try {
          const repo = await getUserRepository();
          const account = await repo.getUser(userName);
          if (!account) {
            set({ userName: null, user: null, status: 'ready', mode: repo.mode });
            return;
          }
          useFavoritesStore.getState().replaceLibrary({
            favoriteIds: account.favorites,
            history: account.history,
          });
          set({ user: account, mode: repo.mode, status: 'ready', error: null });
        } catch {
          set({ status: 'ready', mode, error: null, user: null });
        }
      },

      updateProfile: async (patch) => {
        const { user } = get();
        if (!user) return;
        const repo = await getUserRepository();
        const updated = await repo.updateUser(user.name, patch);
        set({ user: updated, error: null });
      },

      persistLibrary: async (favoriteIds, history) => {
        const { user } = get();
        if (!user) return;
        if (sameList(user.favorites, favoriteIds) && sameList(user.history, history)) return;
        try {
          const repo = await getUserRepository();
          const updated = await repo.updateUser(user.name, { favorites: favoriteIds, history });
          set({ user: updated });
        } catch {
          // 同步失败时保留本地数据，下次操作会再次尝试
        }
      },
    }),
    {
      name: 'story-house:auth',
      partialize: (state) => ({ userName: state.userName, user: state.user }),
    },
  ),
);

let lastFavorites = useFavoritesStore.getState().favoriteIds;
let lastHistory = useFavoritesStore.getState().history;

useFavoritesStore.subscribe((state) => {
  if (state.favoriteIds === lastFavorites && state.history === lastHistory) return;
  lastFavorites = state.favoriteIds;
  lastHistory = state.history;
  void useAuthStore.getState().persistLibrary(state.favoriteIds, state.history);
});
