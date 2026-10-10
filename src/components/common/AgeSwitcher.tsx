import { AGE_GROUPS } from '@/data/taxonomy';
import type { AgeGroup } from '@/types/story';

interface AgeSwitcherProps {
  value: AgeGroup;
  onChange: (value: AgeGroup) => void;
}

export function AgeSwitcher({ value, onChange }: AgeSwitcherProps) {
  return (
    <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3" role="tablist" aria-label="年龄段">
      {AGE_GROUPS.map((age) => {
        const active = age.id === value;
        return (
          <button
            key={age.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(age.id)}
            className={[
              'focus-ring flex min-h-[76px] flex-col items-center justify-center gap-1 rounded-blob border-4 px-2 py-3 text-center transition sm:min-h-[64px] sm:flex-1 sm:flex-row sm:gap-3 sm:px-4 sm:py-3 sm:text-left',
              active
                ? 'border-brand bg-brand-soft shadow-toy'
                : 'border-line bg-surface-soft hover:border-brand-soft',
            ].join(' ')}
          >
            <span className="text-2xl sm:text-3xl" aria-hidden="true">
              {age.emoji}
            </span>
            <span>
              <span className="block text-xs font-extrabold text-ink-strong sm:text-base">
                {age.label} · {age.range}
              </span>
              <span className="hidden text-xs text-ink-muted sm:block">{age.description}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
