import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Chip } from '@/components/common/Chip';
import { EmptyState } from '@/components/common/EmptyState';
import { SearchBar } from '@/components/common/SearchBar';
import { StoryList } from '@/components/story/StoryList';
import { CATEGORIES, SORT_OPTIONS } from '@/data/taxonomy';
import { useStoryFilter } from '@/hooks/useStoryFilter';
import type { AgeGroup, CategoryId, SortKey } from '@/types/story';

const AGE_OPTIONS: { id: AgeGroup; label: string; emoji: string }[] = [
  { id: 'Preschool', label: '启蒙 3-6', emoji: '🧸' },
  { id: 'Growing', label: '成长 6-9', emoji: '🎈' },
  { id: 'Explorer', label: '探索 9-12', emoji: '🔭' },
];

export function ExplorePage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [age, setAge] = useState<AgeGroup | undefined>(
    (searchParams.get('age') as AgeGroup | null) ?? undefined,
  );
  const [category, setCategory] = useState<CategoryId | undefined>(
    (searchParams.get('category') as CategoryId | null) ?? undefined,
  );
  const [keyword, setKeyword] = useState(searchParams.get('q') ?? '');
  const [sort, setSort] = useState<SortKey>((searchParams.get('sort') as SortKey | null) ?? 'latest');

  const { results, total, isEmpty } = useStoryFilter({ ageGroup: age, category, keyword, sort });

  useEffect(() => {
    const params = new URLSearchParams();
    if (age) params.set('age', age);
    if (category) params.set('category', category);
    if (keyword) params.set('q', keyword);
    if (sort !== 'latest') params.set('sort', sort);
    setSearchParams(params, { replace: true });
  }, [age, category, keyword, sort, setSearchParams]);

  const clearAll = () => {
    setAge(undefined);
    setCategory(undefined);
    setKeyword('');
    setSort('latest');
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:py-8">
      <h1 className="text-2xl font-extrabold text-ink-strong sm:text-3xl">故事书架</h1>
      <p className="mt-1 text-sm text-ink-muted">共 {total} 个故事，慢慢挑一个喜欢的吧</p>

      <div className="mt-5 flex flex-col gap-4 rounded-blob border-4 border-line bg-surface-soft p-4 shadow-card sm:p-5">
        <SearchBar value={keyword} onChange={setKeyword} />

        <div>
          <p className="mb-2 text-sm font-bold text-ink-muted">年龄段</p>
          <div className="flex flex-wrap gap-2">
            <Chip label="全部" active={!age} onClick={() => setAge(undefined)} />
            {AGE_OPTIONS.map((option) => (
              <Chip
                key={option.id}
                label={option.label}
                emoji={option.emoji}
                active={age === option.id}
                onClick={() => setAge(option.id)}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-bold text-ink-muted">分类</p>
          <div className="flex flex-wrap gap-2">
            <Chip label="全部" active={!category} onClick={() => setCategory(undefined)} />
            {CATEGORIES.map((item) => (
              <Chip
                key={item.id}
                label={item.label}
                emoji={item.emoji}
                color={item.color}
                active={category === item.id}
                onClick={() => setCategory(item.id)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-bold text-ink-muted">排序</p>
          {SORT_OPTIONS.map((option) => (
            <Chip
              key={option.id}
              label={option.label}
              active={sort === option.id}
              onClick={() => setSort(option.id)}
            />
          ))}
          <button
            type="button"
            onClick={clearAll}
            className="focus-ring ml-auto rounded-full px-3 py-2 text-sm font-bold text-brand hover:bg-brand-softer"
          >
            重置筛选
          </button>
        </div>
      </div>

      <div className="mt-6">
        {isEmpty ? (
          <EmptyState
            title="没有找到合适的故事"
            description="换一个年龄段、分类或关键词再试试吧。"
            action={
              <button
                type="button"
                onClick={clearAll}
                className="focus-ring rounded-full px-4 py-2 text-sm font-bold text-brand hover:bg-brand-softer"
              >
                重置筛选
              </button>
            }
          />
        ) : (
          <StoryList stories={results} onOpen={(id) => navigate(`/story/${id}`)} />
        )}
      </div>
    </main>
  );
}
