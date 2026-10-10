import type { UseNarrationResult } from '@/hooks/useNarration';
import type { NarrationSource, VoiceOption } from '@/types/voice';
import { Button } from '@/components/common/Button';

interface SpeechBarProps {
  narration: UseNarrationResult;
  rate: number;
  onRateChange: (rate: number) => void;
  voices: VoiceOption[];
  source: NarrationSource;
  onSourceChange: (source: NarrationSource) => void;
}

export function SpeechBar({ narration, rate, onRateChange, voices, source, onSourceChange }: SpeechBarProps) {
  const canChooseVoice = voices.length > 0;
  const selected = source.kind === 'voice' ? source.voiceId : 'tts';

  const handleSourceChange = (value: string) => {
    narration.stop();
    onSourceChange(value === 'tts' ? { kind: 'tts' } : { kind: 'voice', voiceId: value });
  };

  const chipClass = (active: boolean) =>
    [
      'focus-ring min-h-[36px] rounded-full border-2 px-3 text-sm font-bold transition',
      active ? 'border-transparent bg-brand text-brand-contrast' : 'border-brand-soft bg-surface-soft text-ink',
    ].join(' ');

  return (
    <div className="rounded-blob border-4 border-line bg-surface px-4 py-3 shadow-toy">
      {canChooseVoice && (
        <div className="mb-3 flex flex-wrap items-center gap-2 border-b-2 border-dashed border-line pb-3">
          <span className="text-sm font-bold text-ink-muted">声音来源</span>
          <button type="button" onClick={() => handleSourceChange('tts')} aria-pressed={selected === 'tts'} className={chipClass(selected === 'tts')}>
            浏览器朗读
          </button>
          {voices.map((voice) => (
            <button
              key={voice.id}
              type="button"
              onClick={() => handleSourceChange(voice.id)}
              aria-pressed={selected === voice.id}
              className={chipClass(selected === voice.id)}
            >
              {voice.emoji ? `${voice.emoji} ` : ''}
              {voice.name}
            </button>
          ))}
        </div>
      )}

      {narration.isSupported ? (
        <div className="flex flex-wrap items-center gap-3">
          {narration.isSpeaking ? (
            narration.isPaused ? (
              <Button icon="▶️" onClick={narration.resume}>
                继续朗读
              </Button>
            ) : (
              <Button icon="⏸️" onClick={narration.pause}>
                暂停
              </Button>
            )
          ) : (
            <Button icon="🔊" onClick={() => narration.play(0)}>
              朗读故事
            </Button>
          )}

          <Button variant="secondary" icon="⏹️" onClick={narration.stop} disabled={!narration.isSpeaking}>
            停止
          </Button>

          {narration.mode === 'tts' && (
            <label className="ml-auto flex items-center gap-2 text-sm font-bold text-ink-muted">
              语速
              <input
                type="range"
                min={0.6}
                max={1.4}
                step={0.1}
                value={rate}
                onChange={(event) => onRateChange(Number(event.target.value))}
                className="h-2 w-28 cursor-pointer accent-brand"
                aria-label="朗读语速"
              />
              <span className="w-8 text-right">{rate.toFixed(1)}</span>
            </label>
          )}
        </div>
      ) : (
        <p className="text-sm text-ink-muted">你的浏览器暂不支持自动朗读，可以自己读一读哦。</p>
      )}

      {narration.error && (
        <p className="mt-3 text-sm font-bold text-rose-600" role="alert">
          {narration.error}
        </p>
      )}
    </div>
  );
}
