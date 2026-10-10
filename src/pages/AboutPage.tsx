import { useEffect, useState } from 'react';
import { CATEGORIES } from '@/data/taxonomy';
import { allStories } from '@/data/stories';
import { apiUrl } from '@/config';
import type { HealthInfo } from '@/types/build';
import type { VoiceOption } from '@/types/voice';

function formatTime(iso: string): string {
  // 2026-10-03T10:15:30Z -> 2026-10-03 18:15:30（本地时区）
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  const pad = (n: number) => String(n).padStart(2, '0');
  return (
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ` +
    `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
  );
}

export function AboutPage() {
  const [health, setHealth] = useState<HealthInfo | null>(null);
  const [voices, setVoices] = useState<VoiceOption[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetch(apiUrl('/api/health'), { headers: { Accept: 'application/json' } })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: HealthInfo | null) => {
        if (!cancelled && data) setHealth(data);
      })
      .catch(() => {
        /* 纯前端部署没有后端，忽略 */
      });
    fetch(apiUrl('/api/voices'), { headers: { Accept: 'application/json' } })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { voices?: VoiceOption[] } | null) => {
        if (!cancelled && Array.isArray(data?.voices)) setVoices(data!.voices);
      })
      .catch(() => {
        /* 同上 */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const build = health?.build;
  const hasVoices = health?.features?.audioVoices === true;

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-6 sm:py-8">
      <h1 className="text-2xl font-extrabold text-ink-strong sm:text-3xl">关于小星星故事屋</h1>
      <p className="mt-3 text-ink">
        小星星故事屋是一个专门为小朋友准备的故事网站，目前收录了 {allStories.length} 篇故事，覆盖
        {CATEGORIES.length} 个分类。所有故事都配有寓意解读，并支持浏览器语音朗读，方便亲子共读与睡前聆听。
      </p>

      <section className="toy-card mt-6 p-5">
        <h2 className="text-lg font-extrabold text-ink-strong">内容来源</h2>
        <p className="mt-2 text-sm text-ink">
          故事选自世界公版作品（如伊索寓言、中国古代寓言、格林童话、安徒生童话、中国神话传说）以及原创改写。
          我们尽量只收录适合儿童、情节温和、寓意正向的内容，并对原文做了适合朗读的改编。
        </p>
        <p className="mt-2 text-sm text-ink-muted">
          如果发现内容有误或希望调整，欢迎告诉我们。
        </p>
      </section>

      <section className="toy-card mt-4 p-5">
        <h2 className="text-lg font-extrabold text-ink-strong">给家长的小提示</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink">
          <li>3-6 岁建议选择「启蒙」年龄段，边听边看插画。</li>
          <li>语音朗读可用时，可以调节语速，陪孩子一起跟读。</li>
          <li>收藏喜欢的故事，睡前直接打开「我的收藏」。</li>
        </ul>
      </section>

      <section className="toy-card mt-4 p-5">
        <h2 className="text-lg font-extrabold text-ink-strong">版本信息</h2>
        {build ? (
          <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm text-ink">
            <dt className="font-bold text-ink-muted">版本</dt>
            <dd className="font-mono">{build.version}</dd>
            <dt className="font-bold text-ink-muted">构建时间</dt>
            <dd className="font-mono">{formatTime(build.buildTime)}</dd>
            <dt className="font-bold text-ink-muted">源码提交</dt>
            <dd className="font-mono">{build.gitCommit}</dd>
            <dt className="font-bold text-ink-muted">运行模式</dt>
            <dd className="font-mono">
              服务端
              {health?.storage === 'file' ? '（数据落盘）' : '（内存存储）'}
            </dd>
            <dt className="font-bold text-ink-muted">音色音频</dt>
            <dd className="font-mono">
              {hasVoices
                ? `已启用（${voices.length} 个音色：${voices.map((v) => v.name).join('、')}）`
                : '未启用（服务端未找到音色目录，或目录为空）'}
            </dd>
          </dl>
        ) : (
          <p className="mt-2 text-sm text-ink-muted">
            纯前端部署（无后端服务）。若你是通过服务端访问，请确认运行的是最新版本。
          </p>
        )}
        <p className="mt-3 text-xs text-ink-muted">
          构建时间与源码提交由编译时注入，可用于确认页面是否为最新版本。
        </p>
        {hasVoices && (
          <p className="mt-2 text-xs text-ink-muted">
            在故事页的「声音来源」中即可切换音色，无需登录。
          </p>
        )}
      </section>
    </main>
  );
}
