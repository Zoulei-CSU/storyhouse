import { useCallback, useEffect, useRef, useState } from 'react';
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
import { usePlaybackStore } from '@/store/playbackStore';
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
  const continuousPlay = usePreferencesStore((state) => state.continuousPlay);
  const setContinuousPlay = usePreferencesStore((state) => state.setContinuousPlay);

  // 连续播放：读完 3 秒后跳到下一篇
  const [voiceIndexReady, setVoiceIndexReady] = useState(false);
  const [upcoming, setUpcoming] = useState<{ id: string; title: string } | null>(null);
  const [advanceSeconds, setAdvanceSeconds] = useState(0);
  const [advanceNotice, setAdvanceNotice] = useState<string | null>(null);
  const autoPlayId = usePlaybackStore((state) => state.autoPlayId);
  const requestAutoPlay = usePlaybackStore((state) => state.requestAutoPlay);
  const clearAutoPlay = usePlaybackStore((state) => state.clearAutoPlay);

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

  // 音色模式下「下一篇」必须是真有音频的那篇：用已加载的索引跳过缺音频的篇目。
  // 浏览器朗读没有音频依赖，直接取下一篇。
  const findNextPlayable = useCallback(
    (fromId: string, kind: NarrationSource['kind'], available: Set<string>) => {
      const start = allStories.findIndex((item) => item.id === fromId);
      if (start < 0) return null;
      for (let i = start + 1; i < allStories.length; i += 1) {
        const candidate = allStories[i];
        if (kind === 'voice' && !available.has(candidate.id)) continue;
        return candidate;
      }
      return null;
    },
    [],
  );

  const handleNarrationEnd = useCallback(() => {
    if (!continuousPlay) return;
    const target = findNextPlayable(storyId, source.kind, voiceIndex);
    if (!target) {
      setAdvanceNotice('已经是最后一篇啦');
      return;
    }
    setAdvanceNotice(null);
    setUpcoming({ id: target.id, title: target.title });
    setAdvanceSeconds(3);
  }, [continuousPlay, findNextPlayable, storyId, source.kind, voiceIndex]);

  const narration = useNarration({
    storyId,
    paragraphs,
    rate: speechRate,
    source,
    hasVoice,
    audioSrc,
    onEnd: handleNarrationEnd,
  });

  // 自动开始朗读用 ref 取最新的 play，避免把整个 narration 放进 effect 依赖
  const playRef = useRef(narration.play);
  playRef.current = narration.play;

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
      setVoiceIndexReady(true);
      return;
    }
    // 新音色的索引还没回来之前不能自动播放：此时 hasVoice 一定是 false，会误报缺音频
    setVoiceIndexReady(false);
    let cancelled = false;
    getVoiceIndex(selectedVoiceId).then((ids) => {
      if (cancelled) return;
      setVoiceIndex(ids);
      setVoiceIndexReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, [selectedVoiceId]);

  useEffect(() => {
    if (story) markAsRead(story.id);
    // 切换到别的故事时，若大图还开着，先关掉
    setLightboxOpen(false);
    setUpcoming(null);
    setAdvanceNotice(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [story, markAsRead]);

  // 3 秒倒计时：到点后跳转，并在落地页请求自动开始朗读
  useEffect(() => {
    if (!upcoming) return;
    if (advanceSeconds > 0) {
      const timer = window.setTimeout(() => setAdvanceSeconds((value) => value - 1), 1000);
      return () => window.clearTimeout(timer);
    }
    const targetId = upcoming.id;
    setUpcoming(null);
    requestAutoPlay(targetId);
    navigate(`/story/${targetId}`);
  }, [upcoming, advanceSeconds, navigate, requestAutoPlay]);

  // 落地页：等音色索引就绪后再自动播放，否则 hasVoice 还是 false
  useEffect(() => {
    if (autoPlayId !== storyId) return;
    if (source.kind === 'voice' && !voiceIndexReady) return;
    clearAutoPlay();
    if (source.kind === 'voice' && !voiceIndex.has(storyId)) return;
    playRef.current(0);
  }, [autoPlayId, storyId, source.kind, voiceIndexReady, voiceIndex, clearAutoPlay]);

  // 自动播放信号只对一次跳转有效：离开本页时若还没消费就清掉，
  // 避免以后手动回到这篇时突然自己念起来
  useEffect(
    () => () => {
      const state = usePlaybackStore.getState();
      if (state.autoPlayId === storyId) state.clearAutoPlay();
    },
    [storyId],
  );

  // 用户重新播放或换了声音来源，就取消待跳转
  useEffect(() => {
    if (narration.isSpeaking) setUpcoming(null);
  }, [narration.isSpeaking]);

  useEffect(() => {
    setUpcoming(null);
    setAdvanceNotice(null);
  }, [source]);

  // 关掉开关时立即取消待跳转
  useEffect(() => {
    if (!continuousPlay) setUpcoming(null);
  }, [continuousPlay]);

  // 「已经是最后一篇」这类提示过几秒自动淡出
  useEffect(() => {
    if (!advanceNotice) return;
    const timer = window.setTimeout(() => setAdvanceNotice(null), 4000);
    return () => window.clearTimeout(timer);
  }, [advanceNotice]);

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
          continuous={continuousPlay}
          onContinuousChange={setContinuousPlay}
        />
      </div>

      {(upcoming || advanceNotice) && (
        <p
          role="status"
          className="mt-3 rounded-2xl bg-brand-soft px-4 py-2 text-sm font-bold text-brand"
        >
          {upcoming ? `${advanceSeconds} 秒后播放《${upcoming.title}》` : advanceNotice}
        </p>
      )}

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
