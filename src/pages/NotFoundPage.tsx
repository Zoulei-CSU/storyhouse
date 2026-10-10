import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/common/Button';

export function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-20 text-center">
      <p className="text-6xl" aria-hidden="true">
        🌠
      </p>
      <h1 className="mt-4 text-2xl font-extrabold text-ink-strong">这颗小星星飞走了</h1>
      <p className="mt-2 text-ink-muted">你要找的页面不存在，回故事屋看看吧。</p>
      <Button className="mt-6" onClick={() => navigate('/')}>
        回到首页
      </Button>
    </main>
  );
}
