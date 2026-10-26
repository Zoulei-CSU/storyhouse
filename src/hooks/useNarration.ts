import { useCallback, useEffect, useRef, useState } from 'react';
import { useSpeech } from '@/hooks/useSpeech';
import type { NarrationSource } from '@/types/voice';

interface UseNarrationOptions {
  storyId: string;
  paragraphs: string[];
  rate?: number;
  lang?: string;
  source: NarrationSource;
  /** 当前故事在当前音色下是否有音频文件。 */
  hasVoice: boolean;
  /** 音频播放地址；没有时传入 undefined。 */
  audioSrc?: string;
  /**
   * 自然朗读结束时触发（音色与 TTS 都算）。
   * 用户停止、暂停、切换故事都不会触发。
   */
  onEnd?: () => void;
}

export interface UseNarrationResult {
  isSupported: boolean;
  isSpeaking: boolean;
  isPaused: boolean;
  currentIndex: number;
  play: (fromIndex?: number) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
  mode: 'tts' | 'voice';
  error: string | null;
  /** 被浏览器自动播放策略拦下，等用户点一下页面即可续播。 */
  needsGesture: boolean;
}

/**
 * 统一朗读能力：按来源在「浏览器 TTS」与「服务端音色音频」之间切换，
 * 对外暴露与 useSpeech 一致的接口，供朗读条直接使用。
 *
 * 音色模式下若当前故事缺少 mp3（hasVoice=false），播放会直接报错，
 * 不会静默回退，方便站长发现漏生成的音频。
 */
export function useNarration({
  storyId,
  paragraphs,
  rate = 1,
  lang = 'zh-CN',
  source,
  hasVoice,
  audioSrc,
  onEnd,
}: UseNarrationOptions): UseNarrationResult {
  const tts = useSpeech({ paragraphs, rate, lang, onEnd: source.kind === 'voice' ? undefined : onEnd });
  const voiceMode = source.kind === 'voice';
  const voiceId = source.kind === 'voice' ? source.voiceId : '';

  // 用 ref 保存，避免把 onEnd 塞进 play 的依赖里导致音频被重建
  const onEndRef = useRef(onEnd);
  onEndRef.current = onEnd;

  const [voiceSpeaking, setVoiceSpeaking] = useState(false);
  const [voicePaused, setVoicePaused] = useState(false);
  const [voiceError, setVoiceError] = useState<string | null>(null);
  const [needsGesture, setNeedsGesture] = useState(false);

  // 整个会话复用同一个 audio 元素，只换 src。
  // 手机浏览器（尤其 iOS，所有浏览器都是 WebKit）只允许被用户手势解锁过的元素程序化播放；
  // 每次切故事新建元素会退回未解锁状态，自动续播必被拒，而手动点击又正常。
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentSrcRef = useRef<string | null>(null);

  // 播放尝试的代号：teardown 或新一轮播放都会 +1，
  // 用来丢弃过期的失败回调与重试定时器，避免旧请求把新播放误判为失败。
  const playTokenRef = useRef(0);
  const retryTimerRef = useRef<number | null>(null);

  const clearRetryTimer = useCallback(() => {
    if (retryTimerRef.current !== null) {
      window.clearTimeout(retryTimerRef.current);
      retryTimerRef.current = null;
    }
  }, []);

  const teardownAudio = useCallback(() => {
    playTokenRef.current += 1;
    clearRetryTimer();
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setVoiceSpeaking(false);
    setVoicePaused(false);
    setNeedsGesture(false);
  }, [clearRetryTimer]);

  // 懒创建，处理函数只绑一次，靠 ref 取最新回调
  const ensureAudio = useCallback(() => {
    let audio = audioRef.current;
    if (audio) return audio;
    audio = new Audio();
    audio.preload = 'auto';
    audio.onended = () => {
      setVoiceSpeaking(false);
      setVoicePaused(false);
      audio!.currentTime = 0;
      // 只有自然播完才会走到这里；pause / 换 src 不会触发 onended
      onEndRef.current?.();
    };
    audio.onerror = () => {
      // 切换 src 时旧请求的报错可能迟到，只认当前地址
      if (audio!.getAttribute('src') !== currentSrcRef.current) return;
      setVoiceSpeaking(false);
      setVoicePaused(false);
      console.error('[narration] 音频加载失败', audio!.error?.code, audio!.error?.message);
      setVoiceError('音频加载失败，请检查文件是否存在。');
    };
    audioRef.current = audio;
    return audio;
  }, []);

  const { stop: ttsStop } = tts;

  // 切换来源 / 切换故事 / 音频地址变化时，两条路径都要停。
  // audio 元素本身保留（手机上靠它记住“已解锁”），只暂停并归零。
  useEffect(() => {
    setVoiceError(null);
    ttsStop();
    teardownAudio();
  }, [voiceMode, voiceId, storyId, audioSrc, ttsStop, teardownAudio]);

  useEffect(() => () => teardownAudio(), [teardownAudio]);

  // 被自动播放策略拦下时，等用户在页面任意处点一下再续播：
  // 只有在手势上下文里调用 play()，手机浏览器才允许出声。
  useEffect(() => {
    if (!needsGesture) return;
    const handler = () => {
      const audio = audioRef.current;
      if (!audio) return;
      playTokenRef.current += 1;
      setNeedsGesture(false);
      audio
        .play()
        .then(() => {
          setVoiceSpeaking(true);
          setVoicePaused(false);
          setVoiceError(null);
        })
        .catch((error: unknown) => {
          console.error('[narration] 手势后仍无法播放', error);
          setVoiceError('音频播放失败，请稍后再试。');
        });
    };
    window.addEventListener('pointerdown', handler, { once: true });
    window.addEventListener('keydown', handler, { once: true });
    return () => {
      window.removeEventListener('pointerdown', handler);
      window.removeEventListener('keydown', handler);
    };
  }, [needsGesture]);

  const play = useCallback(
    (fromIndex = 0) => {
      if (!voiceMode) {
        tts.play(fromIndex);
        return;
      }
      setVoiceError(null);
      if (!hasVoice || !audioSrc) {
        setVoiceError('这篇故事还没有这个音色的音频文件。');
        return;
      }
      const element = ensureAudio();
      // 只换地址、复用元素：新建元素会丢掉手势授权，手机自动续播会被拒
      if (element.getAttribute('src') !== audioSrc) {
        currentSrcRef.current = audioSrc;
        element.src = audioSrc;
        element.load();
      }
      element.playbackRate = rate;

      const token = ++playTokenRef.current;
      clearRetryTimer();
      const retries = 3;
      const retryDelay = 500;

      const attempt = (remaining: number) => {
        element
          .play()
          .then(() => {
            if (token !== playTokenRef.current) return;
            setVoiceSpeaking(true);
            setVoicePaused(false);
            setVoiceError(null);
            setNeedsGesture(false);
          })
          .catch((error: unknown) => {
            // 已经被停止或换了故事，这次失败与当前播放无关，静默丢弃
            if (token !== playTokenRef.current) return;
            // 自动播放策略：重试再多也没用，等用户点一下才可能恢复
            if ((error as { name?: string })?.name === 'NotAllowedError') {
              console.warn('[narration] 浏览器要求用户手势，等待点击后继续');
              setVoiceSpeaking(false);
              setVoicePaused(false);
              setVoiceError(null);
              setNeedsGesture(true);
              return;
            }
            if (remaining > 0) {
              // 解码未就绪、网络瞬时失败，等一会儿重试即可
              console.warn(
                `[narration] 播放失败，${retryDelay}ms 后重试（剩 ${remaining} 次）`,
                error,
              );
              retryTimerRef.current = window.setTimeout(() => {
                retryTimerRef.current = null;
                if (token !== playTokenRef.current) return;
                attempt(remaining - 1);
              }, retryDelay);
              return;
            }
            console.error('[narration] 播放失败（已重试 3 次）', error);
            setVoiceSpeaking(false);
            setVoiceError('音频播放失败，请稍后再试。');
          });
      };
      attempt(retries);
    },
    [voiceMode, tts, hasVoice, audioSrc, rate, storyId, clearRetryTimer],
  );

  const pause = useCallback(() => {
    if (!voiceMode) {
      tts.pause();
      return;
    }
    const audio = audioRef.current;
    if (audio && !audio.paused) {
      audio.pause();
      setVoicePaused(true);
    }
  }, [voiceMode, tts]);

  const resume = useCallback(() => {
    if (!voiceMode) {
      tts.resume();
      return;
    }
    const audio = audioRef.current;
    if (audio && audio.paused) {
      // 用户手动恢复：作废待执行的重试，直接播一次
      playTokenRef.current += 1;
      clearRetryTimer();
      audio
        .play()
        .then(() => setVoicePaused(false))
        .catch((error: unknown) => {
          console.error('[narration] 恢复播放失败', error);
          setVoiceError('音频播放失败，请稍后再试。');
        });
    }
  }, [voiceMode, tts, clearRetryTimer]);

  const stop = useCallback(() => {
    if (voiceMode) {
      teardownAudio();
    } else {
      tts.stop();
    }
  }, [voiceMode, teardownAudio, tts]);

  return {
    isSupported: voiceMode ? true : tts.isSupported,
    isSpeaking: voiceMode ? voiceSpeaking : tts.isSpeaking,
    isPaused: voiceMode ? voicePaused : tts.isPaused,
    currentIndex: voiceMode ? -1 : tts.currentIndex,
    play,
    pause,
    resume,
    stop,
    mode: voiceMode ? 'voice' : 'tts',
    error: voiceMode ? voiceError : null,
    needsGesture: voiceMode ? needsGesture : false,
  };
}
