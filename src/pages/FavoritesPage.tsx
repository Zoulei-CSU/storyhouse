import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { EmptyState } from '@/components/common/EmptyState';
import { StoryList } from '@/components/story/StoryList';
import { getStory } from '@/data/stories';
import { useFavoritesStore } from '@/store/favoritesStore';

export function FavoritesPage() {
  const navigate = useNavigate();
  const favoriteIds = useFavoritesStore((state) => state.favoriteIds);
  const history = useFavoritesStore((state) => state.history);
  const clearHistory = useFavoritesStore((state) => state.clearHistory);

  const stories = favoriteIds
    .map((id) => getStory(id))
    .filter((story): story is NonNullable<typeof story> => Boolean(story));
  const recent = history
    .map((id) => getStory(id))
    .filter((story): story is NonNullable<typeof story> => Boolean(story));

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:py-8">
      <h1 className="text-2xl font-extrabold text-ink-strong sm:text-3xl">我的收藏</h1>
      <p className="mt-1 text-sm text-ink-muted">喜欢的故事都收在这里</p>

      <div className="mt-6">
        {stories.length > 0 ? (
          <StoryList stories={stories} onOpen={(id) => navigate(`/story/${id}`)} />
        ) : (
          <EmptyState
            title="还没有收藏故事"
            description="在故事卡片或故事页点一下星星，就能把它收进来。"
            action={<Button onClick={() => navigate('/explore')}>去挑故事</Button>}
          />
        )}
      </div>

      {recent.length > 0 ? (
        <section className="mt-10">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xl font-extrabold text-ink-strong">最近听过</h2>
            <button
              type="button"
              onClick={clearHistory}
              className="focus-ring rounded-full px-3 py-2 text-sm font-bold text-ink-muted hover:bg-surface-soft"
            >
              清空记录
            </button>
          </div>
          <StoryList stories={recent} onOpen={(id) => navigate(`/story/${id}`)} />
        </section>
      ) : null}
    </main>
  );
}
