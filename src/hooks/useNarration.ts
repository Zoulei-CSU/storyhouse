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
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
      audio.onended = null;
      audio.onerror = null;
      audio.pause();
      audioRef.current = null;
    }
    setVoiceSpeaking(false);
    setVoicePaused(false);
  }, [clearRetryTimer]);

  const { stop: ttsStop } = tts;

  // 切换来源 / 切换故事 / 音频地址变化时，两条路径都要停。
  // 音色模式下如果只停 TTS，旧的 Audio 元素会留在 ref 里，
  // 下一篇 play() 复用它，就会继续播上一篇的音频。
  useEffect(() => {
    setVoiceError(null);
    ttsStop();
    teardownAudio();
  }, [voiceMode, voiceId, storyId, audioSrc, ttsStop, teardownAudio]);

  useEffect(() => () => teardownAudio(), [teardownAudio]);

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
      let audio = audioRef.current;
      // 防御：元素绑定的还是别的地址时重建，避免切换故事后仍播上一篇
      if (audio && audio.getAttribute('src') !== audioSrc) {
        teardownAudio();
        audio = null;
      }
      if (!audio) {
        audio = new Audio(audioSrc);
        audio.preload = 'auto';
        audio.onended = () => {
          setVoiceSpeaking(false);
          setVoicePaused(false);
          if (audio) audio.currentTime = 0;
          // 只有自然播完才会走到这里；teardown / pause 不会触发 onended
          onEndRef.current?.();
        };
        audio.onerror = () => {
          setVoiceSpeaking(false);
          setVoicePaused(false);
          // 这里才是真正的加载失败（404 / 解码错误），播放被拒不会走到这里
          console.error('[narration] 音频加载失败', audio?.error?.code, audio?.error?.message);
          setVoiceError('音频加载失败，请检查文件是否存在。');
        };
        audioRef.current = audio;
      }
      const element = audio;
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
          })
          .catch((error: unknown) => {
            // 已经被停止或换了故事，这次失败与当前播放无关，静默丢弃
            if (token !== playTokenRef.current) return;
            if (remaining > 0) {
              // 自动播放策略拦截、解码未就绪等瞬时失败，等一会儿重试即可
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
  };
}
