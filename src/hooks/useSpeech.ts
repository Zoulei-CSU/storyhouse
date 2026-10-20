import { useCallback, useEffect, useRef, useState } from 'react';

interface UseSpeechOptions {
  paragraphs: string[];
  rate?: number;
  lang?: string;
  /**
   * 自然读完最后一个段落时触发。
   * stop / pause / 切换文本都不会触发，调用方可据此判断「真的读完了」。
   */
  onEnd?: () => void;
}

/** 朗读文本的稳定标识：内容变化时才需要中断当前朗读。 */
function paragraphsKey(paragraphs: string[]): string {
  return paragraphs.join('\u0000');
}

export interface UseSpeechResult {
  isSupported: boolean;
  isSpeaking: boolean;
  isPaused: boolean;
  currentIndex: number;
  play: (fromIndex?: number) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
}

function pickChineseVoice(lang: string): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  const prefix = lang.split('-')[0].toLowerCase();
  return (
    voices.find((v) => v.lang.toLowerCase() === lang.toLowerCase()) ??
    voices.find((v) => v.lang.toLowerCase().startsWith(prefix)) ??
    null
  );
}

/**
 * 浏览器 TTS 朗读。
 *
 * 注意 `play` 通过 ref 读取**最新的** `paragraphs`：切换故事后
 * `play` 一定念当前故事，而不是闭包里捕获的上一个故事。
 */
export function useSpeech({ paragraphs, rate = 1, lang = 'zh-CN', onEnd }: UseSpeechOptions): UseSpeechResult {
  const [isSupported] = useState(
    () => typeof window !== 'undefined' && 'speechSynthesis' in window,
  );
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const indexRef = useRef(-1);
  const cancelledRef = useRef(false);

  // 用 ref 保存最新回调，避免父组件每次渲染都重建 play 的依赖
  const onEndRef = useRef(onEnd);
  onEndRef.current = onEnd;

  // 始终保留最新的朗读文本。切歌时若 play 仍读到闭包里捕获的旧 paragraphs，
  // 会先念上一个故事的内容，因此这里统一从 ref 取「当前」文本。
  const paragraphsRef = useRef(paragraphs);
  paragraphsRef.current = paragraphs;

  const stop = useCallback(() => {
    if (!isSupported) return;
    cancelledRef.current = true;
    window.speechSynthesis.cancel();
    indexRef.current = -1;
    setCurrentIndex(-1);
    setIsSpeaking(false);
    setIsPaused(false);
  }, [isSupported]);

  const play = useCallback(
    (fromIndex = 0) => {
      const current = paragraphsRef.current;
      if (!isSupported || current.length === 0) return;
      window.speechSynthesis.cancel();
      cancelledRef.current = false;
      indexRef.current = fromIndex;
      setCurrentIndex(fromIndex);
      setIsSpeaking(true);
      setIsPaused(false);

      const speakNext = () => {
        if (cancelledRef.current) return;
        const index = indexRef.current;
        if (index >= current.length) {
          cancelledRef.current = true;
          indexRef.current = -1;
          setCurrentIndex(-1);
          setIsSpeaking(false);
          setIsPaused(false);
          // 先置 cancelled，保证这里只走一次；stop() 也会置 cancelled，故不会误触发
          onEndRef.current?.();
          return;
        }
        const utterance = new SpeechSynthesisUtterance(current[index]);
        utterance.lang = lang;
        utterance.rate = rate;
        utterance.pitch = 1.05;
        const voice = pickChineseVoice(lang);
        if (voice) utterance.voice = voice;
        utterance.onend = () => {
          if (cancelledRef.current) return;
          indexRef.current = index + 1;
          setCurrentIndex(index + 1);
          speakNext();
        };
        utterance.onerror = () => {
          if (cancelledRef.current) return;
          cancelledRef.current = true;
          window.speechSynthesis.cancel();
          indexRef.current = -1;
          setCurrentIndex(-1);
          setIsSpeaking(false);
          setIsPaused(false);
        };
        window.speechSynthesis.speak(utterance);
      };

      speakNext();
    },
    [isSupported, lang, rate],
  );

  const pause = useCallback(() => {
    if (!isSupported) return;
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  }, [isSupported]);

  const resume = useCallback(() => {
    if (!isSupported) return;
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  }, [isSupported]);

  useEffect(() => {
    if (!isSupported) return;
    const warmUp = () => window.speechSynthesis.getVoices();
    warmUp();
    window.speechSynthesis.addEventListener('voiceschanged', warmUp);
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', warmUp);
      window.speechSynthesis.cancel();
    };
  }, [isSupported]);

  // 朗读文本内容变化（切换故事）时中断当前朗读。
  // 用内容键而非数组引用做依赖，避免父组件每次渲染产生的新数组触发无谓的 stop。
  const contentKey = paragraphsKey(paragraphs);
  useEffect(() => {
    stop();
  }, [contentKey, stop]);

  return { isSupported, isSpeaking, isPaused, currentIndex, play, pause, resume, stop };
}
