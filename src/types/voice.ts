export interface VoiceOption {
  id: string;
  name: string;
  emoji?: string;
  description?: string;
  count?: number;
}

export type NarrationSource = { kind: 'tts' } | { kind: 'voice'; voiceId: string };

export const TTS_SOURCE: NarrationSource = { kind: 'tts' };
