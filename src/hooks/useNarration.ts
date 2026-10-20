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

  const teardownAudio = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.onended = null;
      audio.onerror = null;
      audio.pause();
      audioRef.current = null;
    }
    setVoiceSpeaking(false);
    setVoicePaused(false);
  }, []);

  const { stop: ttsStop } = tts;

  // 切换来源 / 切换故事 / 音频地址变化时，停止另一条路径并清理本次播放。
  // 目的：切歌后不会继续朗读上一个故事，用户需重新点「朗读故事」。
  useEffect(() => {
    setVoiceError(null);
    if (voiceMode) {
      ttsStop();
    } else {
      teardownAudio();
    }
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
          setVoiceError('音频加载失败，请检查文件是否存在。');
        };
        audioRef.current = audio;
      }
      audio.playbackRate = rate;
      audio
        .play()
        .then(() => {
          setVoiceSpeaking(true);
          setVoicePaused(false);
        })
        .catch(() => {
          setVoiceSpeaking(false);
          setVoiceError('音频播放失败，请稍后再试。');
        });
    },
    [voiceMode, tts, hasVoice, audioSrc, rate, storyId],
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
      audio
        .play()
        .then(() => setVoicePaused(false))
        .catch(() => setVoiceError('音频播放失败，请稍后再试。'));
    }
  }, [voiceMode, tts]);

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
