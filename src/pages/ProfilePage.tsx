import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { EmptyState } from '@/components/common/EmptyState';
import { StoryList } from '@/components/story/StoryList';
import { getStory } from '@/data/stories';
import { AVATAR_COLORS, AVATAR_EMOJIS } from '@/services/userRepository';
import { useAuthStore } from '@/store/authStore';
import { useFavoritesStore } from '@/store/favoritesStore';

function formatDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '很久以前';
  return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function ProfilePage() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const mode = useAuthStore((state) => state.mode);
  const logout = useAuthStore((state) => state.logout);
  const updateProfile = useAuthStore((state) => state.updateProfile);

  const favoriteIds = useFavoritesStore((state) => state.favoriteIds);
  const history = useFavoritesStore((state) => state.history);
  const clearHistory = useFavoritesStore((state) => state.clearHistory);

  const [bio, setBio] = useState(user?.bio ?? '');
  const [saving, setSaving] = useState(false);
  const [savedHint, setSavedHint] = useState(false);

  useEffect(() => {
    setBio(user?.bio ?? '');
  }, [user?.bio]);

  if (!user) {
    return (
      <main className="mx-auto w-full max-w-lg px-4 py-12">
        <EmptyState
          title="还没有登录"
          description="输入一个名字就能登录，收藏和最近听过的故事会为你保存。"
          action={<Button onClick={() => navigate('/login')}>去登录</Button>}
        />
      </main>
    );
  }

  const favoriteStories = favoriteIds
    .map((id) => getStory(id))
    .filter((story): story is NonNullable<typeof story> => Boolean(story));
  const recentStories = history
    .map((id) => getStory(id))
    .filter((story): story is NonNullable<typeof story> => Boolean(story));

  const handleSaveBio = async () => {
    setSaving(true);
    setSavedHint(false);
    try {
      await updateProfile({ bio });
      setSavedHint(true);
      window.setTimeout(() => setSavedHint(false), 2000);
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-6 sm:py-8">
      <section className="toy-card p-5 sm:p-7">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
          <span
            className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full text-5xl shadow-card"
            style={{ backgroundColor: user.avatarColor }}
            aria-hidden="true"
          >
            {user.avatarEmoji}
          </span>

          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center">
              <h1 className="text-2xl font-extrabold text-ink-strong sm:text-3xl">{user.name}</h1>
              <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand-ink">
                {mode === 'server' ? '云端同步' : '本机保存'}
              </span>
            </div>
            <p className="mt-1 text-sm text-ink-muted">加入时间：{formatDate(user.createdAt)}</p>
            <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
              <span className="rounded-full bg-accent-soft px-3 py-1 text-sm font-bold text-ink">
                收藏 {favoriteStories.length} 篇
              </span>
              <span className="rounded-full bg-brand-soft px-3 py-1 text-sm font-bold text-brand-ink">
                听过 {recentStories.length} 篇
              </span>
            </div>
          </div>

          <Button variant="secondary" onClick={handleLogout} className="shrink-0">
            退出登录
          </Button>
        </div>
      </section>

      <section className="toy-card mt-4 p-5 sm:p-6">
        <h2 className="text-lg font-extrabold text-ink-strong">换一个头像</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {AVATAR_EMOJIS.map((emoji) => (
            <button
              key={emoji}
              type="button"
              onClick={() => void updateProfile({ avatarEmoji: emoji })}
              aria-label={`选择头像 ${emoji}`}
              aria-pressed={user.avatarEmoji === emoji}
              className={[
                'focus-ring flex h-11 w-11 items-center justify-center rounded-full border-2 text-2xl transition',
                user.avatarEmoji === emoji ? 'border-brand bg-brand-soft' : 'border-line bg-surface-soft',
              ].join(' ')}
            >
              {emoji}
            </button>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {AVATAR_COLORS.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => void updateProfile({ avatarColor: color })}
              aria-label={`选择颜色 ${color}`}
              aria-pressed={user.avatarColor === color}
              style={{ backgroundColor: color }}
              className={[
                'focus-ring h-9 w-9 rounded-full border-2 transition',
                user.avatarColor === color ? 'border-ink' : 'border-line',
              ].join(' ')}
            />
          ))}
        </div>
      </section>

      <section className="toy-card mt-4 p-5 sm:p-6">
        <h2 className="text-lg font-extrabold text-ink-strong">自我介绍</h2>
        <p className="mt-1 text-sm text-ink-muted">写一句话介绍自己，比如最喜欢的故事。</p>
        <textarea
          value={bio}
          onChange={(event) => setBio(event.target.value.slice(0, 200))}
          rows={3}
          maxLength={200}
          placeholder="我喜欢听睡前故事……"
          className="focus-ring mt-3 w-full rounded-blob border-4 border-line bg-surface p-4 text-base shadow-card placeholder:text-ink-muted"
        />
        <div className="mt-3 flex items-center gap-3">
          <Button onClick={handleSaveBio} disabled={saving || bio === user.bio}>
            {saving ? '保存中…' : '保存'}
          </Button>
          {savedHint ? <span className="text-sm font-bold text-emerald-500">已保存</span> : null}
          <span className="ml-auto text-xs text-ink-muted">{bio.length}/200</span>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-extrabold text-ink-strong">我的收藏</h2>
        <div className="mt-3">
          {favoriteStories.length > 0 ? (
            <StoryList stories={favoriteStories} onOpen={(id) => navigate(`/story/${id}`)} />
          ) : (
            <EmptyState
              title="还没有收藏故事"
              description="在故事卡片或故事页点一下星星，就能把它收进来。"
              action={<Button onClick={() => navigate('/explore')}>去挑故事</Button>}
            />
          )}
        </div>
      </section>

      {recentStories.length > 0 ? (
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
          <StoryList stories={recentStories} onOpen={(id) => navigate(`/story/${id}`)} />
        </section>
      ) : null}
    </main>
  );
}
