import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { SpeechBar } from '@/components/audio/SpeechBar';
import { Button } from '@/components/common/Button';
import { StoryCover } from '@/components/story/StoryCover';
import { StoryImageLightbox } from '@/components/story/StoryImageLightbox';
import { StoryMeta } from '@/components/story/StoryMeta';
import { StoryReader } from '@/components/story/StoryReader';
import { allStories, getStory } from '@/data/stories';
import { useNarration } from '@/hooks/useNarration';
import { useStoryImages } from '@/hooks/useStoryImages';
import { audioUrl, fetchVoices, getVoiceIndex } from '@/services/voiceRepository';
import { useFavoritesStore } from '@/store/favoritesStore';
import { usePreferencesStore, type FontSize } from '@/store/preferencesStore';
import type { NarrationSource, VoiceOption } from '@/types/voice';

const FONT_OPTIONS: { id: FontSize; label: string }[] = [
  { id: 'base', label: '标准' },
  { id: 'large', label: '大' },
  { id: 'xlarge', label: '特大' },
];

/** 故事不存在时复用同一个空数组，避免每次渲染都产生新引用。 */
const EMPTY_PARAGRAPHS: string[] = [];

export function StoryDetailPage() {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const story = getStory(id);

  const isFavorite = useFavoritesStore((state) => state.favoriteIds.includes(id));
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const markAsRead = useFavoritesStore((state) => state.markAsRead);
  const fontSize = usePreferencesStore((state) => state.fontSize);
  const setFontSize = usePreferencesStore((state) => state.setFontSize);
  const speechRate = usePreferencesStore((state) => state.speechRate);
  const setSpeechRate = usePreferencesStore((state) => state.setSpeechRate);
  const narrationSource = usePreferencesStore((state) => state.narrationSource);
  const setNarrationSource = usePreferencesStore((state) => state.setNarrationSource);
  const [voices, setVoices] = useState<VoiceOption[]>([]);
  // 音色列表是否已探测完成。避免在列表尚未返回时把用户已保存的音色误判为失效。
  const [voicesReady, setVoicesReady] = useState(false);
  const [voiceIndex, setVoiceIndex] = useState<Set<string>>(() => new Set());
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  // 保持引用稳定：灯箱的 Esc/焦点副作用依赖 onClose，回调每次新建会反复重建监听
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);
  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);
  // 没有后端时返回空数组，封面回落到图标 + 渐变
  const storyImages = useStoryImages(story?.id ?? '');

  const paragraphs = story?.paragraphs ?? EMPTY_PARAGRAPHS;
  const storyId = story?.id ?? '';
  // 音色无需登录：服务端配置了音色时，任何人都可以选用
  const source: NarrationSource = narrationSource;
  const selectedVoiceId = source.kind === 'voice' ? source.voiceId : '';
  const hasVoice = selectedVoiceId ? voiceIndex.has(storyId) : false;
  const audioSrc = selectedVoiceId && storyId ? audioUrl(selectedVoiceId, storyId) : undefined;

  const narration = useNarration({
    storyId,
    paragraphs,
    rate: speechRate,
    source,
    hasVoice,
    audioSrc,
  });

  useEffect(() => {
    let cancelled = false;
    fetchVoices().then((list) => {
      if (cancelled) return;
      setVoices(list);
      setVoicesReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    // 仅当音色列表确实探测完成、且服务端一个音色都没有时，
    // 才把已保存的音色偏好退回 TTS。否则会在首屏（voices 尚未返回）
    // 就把用户的音色选择清掉。
    if (voicesReady && voices.length === 0 && narrationSource.kind === 'voice') {
      setNarrationSource({ kind: 'tts' });
    }
  }, [voicesReady, voices, narrationSource, setNarrationSource]);

  useEffect(() => {
    if (!selectedVoiceId) {
      setVoiceIndex(new Set());
      return;
    }
    let cancelled = false;
    getVoiceIndex(selectedVoiceId).then((ids) => {
      if (!cancelled) setVoiceIndex(ids);
    });
    return () => {
      cancelled = true;
    };
  }, [selectedVoiceId]);

  useEffect(() => {
    if (story) markAsRead(story.id);
    // 切换到别的故事时，若大图还开着，先关掉
    setLightboxOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [story, markAsRead]);

  if (!story) {
    return (
      <main className="mx-auto w-full max-w-3xl px-4 py-16 text-center">
        <p className="text-6xl" aria-hidden="true">
          🔎
        </p>
        <h1 className="mt-4 text-2xl font-extrabold text-ink-strong">这个故事不见了</h1>
        <p className="mt-2 text-ink-muted">也许它去别的书架上玩啦。</p>
        <Button className="mt-6" onClick={() => navigate('/explore')}>
          回到故事书架
        </Button>
      </main>
    );
  }

  const index = allStories.findIndex((item) => item.id === story.id);
  const prev = index > 0 ? allStories[index - 1] : null;
  const next = index >= 0 && index < allStories.length - 1 ? allStories[index + 1] : null;

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-6 sm:py-8">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="focus-ring mb-4 inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-bold text-ink-muted hover:bg-surface-soft"
      >
        ← 返回
      </button>

      <header className="toy-card flex flex-col gap-4 p-4 sm:p-6">
        <StoryCover
          story={story}
          size="lg"
          images={storyImages}
          onImageClick={openLightbox}
        />
        <div className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-extrabold text-ink-strong sm:text-3xl">{story.title}</h1>
            <p className="mt-2 text-sm text-ink-muted">{story.summary}</p>
          </div>
          <button
            type="button"
            onClick={() => toggleFavorite(story.id)}
            aria-pressed={isFavorite}
            aria-label={isFavorite ? '取消收藏' : '收藏故事'}
            className="focus-ring shrink-0 rounded-full p-2 text-3xl transition active:scale-90"
          >
            {isFavorite ? '⭐' : '☆'}
          </button>
        </div>
        <StoryMeta story={story} />
      </header>

      <div className="mt-5">
        <SpeechBar
          narration={narration}
          rate={speechRate}
          onRateChange={setSpeechRate}
          voices={voices}
          source={source}
          onSourceChange={setNarrationSource}
        />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span className="text-sm font-bold text-ink-muted">字号</span>
        {FONT_OPTIONS.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => setFontSize(option.id)}
            aria-pressed={fontSize === option.id}
            className={[
              'focus-ring min-h-[40px] rounded-full border-2 px-4 text-sm font-bold transition',
              fontSize === option.id
                ? 'border-transparent bg-brand text-brand-contrast'
                : 'border-brand-soft bg-surface-soft text-ink',
            ].join(' ')}
          >
            {option.label}
          </button>
        ))}
      </div>

      <article className="toy-card mt-5 p-5 sm:p-8">
        <StoryReader story={story} currentParagraph={narration.currentIndex} />
      </article>

      <aside className="mt-5 rounded-blob border-4 border-brand-soft bg-brand-softer p-5">
        <p className="text-sm font-bold text-brand">故事告诉我们</p>
        <p className="mt-2 text-lg font-extrabold text-brand-ink">{story.moral}</p>
      </aside>

      <nav className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {prev ? (
          <Link
            to={`/story/${prev.id}`}
            className="focus-ring rounded-blob border-4 border-line bg-surface-soft p-4 text-left hover:-translate-y-0.5"
          >
            <span className="text-xs font-bold text-ink-muted">上一篇</span>
            <span className="mt-1 block font-extrabold text-ink-strong">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/story/${next.id}`}
            className="focus-ring rounded-blob border-4 border-line bg-surface-soft p-4 text-right hover:-translate-y-0.5"
          >
            <span className="text-xs font-bold text-ink-muted">下一篇</span>
            <span className="mt-1 block font-extrabold text-ink-strong">{next.title}</span>
          </Link>
        ) : null}
      </nav>

      <StoryImageLightbox
        open={lightboxOpen}
        images={storyImages}
        index={lightboxIndex}
        onIndexChange={setLightboxIndex}
        onClose={closeLightbox}
      />
    </main>
  );
}
