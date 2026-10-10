import { useMemo, useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { createProfile, MAX_NAME_LENGTH, normalizeName } from '@/services/userRepository';
import { useAuthStore } from '@/store/authStore';
import type { StorageMode } from '@/types/user';

const MODE_LABEL: Record<StorageMode, string> = {
  server: '已连接后台服务，资料会保存到服务器',
  local: '未检测到后台服务，资料会保存在本机浏览器',
};

export function LoginPage() {
  const navigate = useNavigate();
  const mode = useAuthStore((state) => state.mode);
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const busy = useAuthStore((state) => state.status === 'loading');

  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [detecting, setDetecting] = useState(false);

  const preview = useMemo(() => createProfile(normalizeName(name) || '小星星'), [name]);

  if (user) {
    return (
      <main className="mx-auto w-full max-w-lg px-4 py-10 text-center">
        <p className="text-6xl" aria-hidden="true">
          {user.avatarEmoji}
        </p>
        <h1 className="mt-4 text-2xl font-extrabold text-ink-strong">你已经登录啦</h1>
        <p className="mt-2 text-ink-muted">当前名字：{user.name}</p>
        <Button className="mt-6" onClick={() => navigate('/profile')}>
          进入我的主页
        </Button>
      </main>
    );
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    try {
      await login(name);
      navigate('/profile');
    } catch (err) {
      setError(err instanceof Error ? err.message : '登录失败，请再试一次');
    }
  };

  const handleDetect = async () => {
    setDetecting(true);
    await useAuthStore.getState().detect(true);
    setDetecting(false);
  };

  return (
    <main className="mx-auto w-full max-w-lg px-4 py-8 sm:py-12">
      <div className="toy-card p-6 sm:p-8">
        <div className="flex flex-col items-center text-center">
          <span
            className="flex h-20 w-20 items-center justify-center rounded-full text-4xl shadow-card"
            style={{ backgroundColor: preview.avatarColor }}
            aria-hidden="true"
          >
            {preview.avatarEmoji}
          </span>
          <h1 className="mt-4 text-2xl font-extrabold text-ink-strong">登录小星星故事屋</h1>
          <p className="mt-1 text-sm text-ink-muted">输入一个名字就可以啦，不需要密码。</p>
        </div>

        <form className="mt-6 flex flex-col gap-3" onSubmit={handleSubmit}>
          <label className="text-sm font-bold text-ink" htmlFor="login-name">
            你的名字
          </label>
          <input
            id="login-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            maxLength={MAX_NAME_LENGTH}
            placeholder="例如：小星星、朵朵"
            autoComplete="nickname"
            className="focus-ring h-12 w-full rounded-full border-4 border-line bg-surface px-4 text-base shadow-card placeholder:text-ink-muted"
          />
          {error ? <p className="text-sm font-bold text-rose-500">{error}</p> : null}
          <Button type="submit" disabled={busy || !normalizeName(name)} className="mt-1 w-full">
            {busy ? '登录中…' : '开始我的故事屋'}
          </Button>
        </form>

        <div className="mt-5 rounded-blob bg-brand-softer p-4 text-sm text-ink">
          <p className="font-bold text-brand-ink">资料存在哪里？</p>
          <p className="mt-1">
            {mode ? MODE_LABEL[mode] : '正在检测后台服务…'}
          </p>
          <button
            type="button"
            onClick={handleDetect}
            disabled={detecting}
            className="focus-ring mt-2 rounded-full px-3 py-1.5 text-xs font-bold text-brand hover:bg-surface-soft disabled:opacity-50"
          >
            {detecting ? '检测中…' : '重新检测'}
          </button>
        </div>

        <p className="mt-4 text-center text-xs text-ink-muted">
          用同一个名字再次登录，就能取回之前收藏的故事。
        </p>
      </div>
    </main>
  );
}
