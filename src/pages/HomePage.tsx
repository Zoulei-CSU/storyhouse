import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AgeSwitcher } from '@/components/common/AgeSwitcher';
import { Button } from '@/components/common/Button';
import { StoryList } from '@/components/story/StoryList';
import { CATEGORIES } from '@/data/taxonomy';
import { allStories, getStory } from '@/data/stories';
import { useFavoritesStore } from '@/store/favoritesStore';
import { usePreferencesStore } from '@/store/preferencesStore';

export function HomePage() {
  const navigate = useNavigate();
  const ageGroup = usePreferencesStore((state) => state.ageGroup);
  const setAgeGroup = usePreferencesStore((state) => state.setAgeGroup);
  const history = useFavoritesStore((state) => state.history);

  const featured = useMemo(
    () =>
      allStories
        .filter((story) => story.ageGroup === ageGroup)
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .slice(0, 6),
    [ageGroup],
  );

  const recent = useMemo(
    () => history.map((id) => getStory(id)).filter((story): story is NonNullable<typeof story> => Boolean(story)).slice(0, 4),
    [history],
  );

  const openRandom = () => {
    const pool = allStories.filter((story) => story.ageGroup === ageGroup);
    const target = pool[Math.floor(Math.random() * pool.length)] ?? allStories[0];
    if (target) navigate(`/story/${target.id}`);
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:py-8">
      <section className="relative overflow-hidden rounded-blob border-4 border-line bg-gradient-to-br from-brand-soft via-brand-softer to-accent-soft px-6 py-8 shadow-card sm:px-10 sm:py-12">
        <div className="absolute -right-6 -top-6 text-8xl opacity-30" aria-hidden="true">
          🌈
        </div>
        <p className="text-sm font-bold text-brand">欢迎来到</p>
        <h1 className="mt-1 text-3xl font-extrabold text-brand sm:text-5xl">小星星故事屋</h1>
        <p className="mt-3 max-w-xl text-base text-ink">
          这里有 {allStories.length} 篇寓言、成语、童话、神话、科普和品格故事，点一下就能听，让好故事陪小朋友长大。
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button icon="🎲" onClick={openRandom}>
            随便听一个
          </Button>
          <Button variant="secondary" icon="🧭" onClick={() => navigate('/explore')}>
            去故事书架
          </Button>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-ink-strong">选择小朋友的年龄段</h2>
        <AgeSwitcher value={ageGroup} onChange={setAgeGroup} />
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-ink-strong">按分类找故事</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => navigate(`/explore?category=${category.id}`)}
              className="toy-card focus-ring flex flex-col items-start gap-1 p-4 text-left hover:-translate-y-1"
            >
              <span className="text-3xl" aria-hidden="true">
                {category.emoji}
              </span>
              <span className="text-base font-extrabold text-ink-strong">{category.label}</span>
              <span className="text-xs text-ink-muted">{category.description}</span>
            </button>
          ))}
        </div>
      </section>

      {recent.length > 0 ? (
        <section className="mt-8">
          <h2 className="mb-3 text-xl font-extrabold text-ink-strong">最近听过</h2>
          <StoryList stories={recent} onOpen={(id) => navigate(`/story/${id}`)} />
        </section>
      ) : null}

      <section className="mt-8">
        <h2 className="mb-3 text-xl font-extrabold text-ink-strong">为你精选</h2>
        <StoryList stories={featured} onOpen={(id) => navigate(`/story/${id}`)} />
      </section>
    </main>
  );
}
