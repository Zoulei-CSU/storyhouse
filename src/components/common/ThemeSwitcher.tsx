import { useEffect, useRef, useState } from 'react';
import { THEMES } from '@/data/themes';
import { usePreferencesStore } from '@/store/preferencesStore';

export function ThemeSwitcher() {
  const theme = usePreferencesStore((state) => state.theme);
  const setTheme = usePreferencesStore((state) => state.setTheme);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="切换配色主题"
        aria-haspopup="listbox"
        aria-expanded={open}
        className="focus-ring flex min-h-[44px] min-w-[44px] items-center justify-center gap-1 rounded-full px-3 text-sm font-bold text-ink transition hover:bg-surface-soft"
      >
        <span aria-hidden="true">🎨</span>
        <span className="hidden sm:inline">配色</span>
      </button>

      {open ? (
        <div
          role="listbox"
          aria-label="选择配色主题"
          className="absolute right-0 z-40 mt-2 w-60 overflow-hidden rounded-3xl border-4 border-line bg-surface p-2 shadow-card"
        >
          {THEMES.map((item) => {
            const active = item.id === theme;
            return (
              <button
                key={item.id}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => {
                  setTheme(item.id);
                  setOpen(false);
                }}
                className={[
                  'focus-ring flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-left transition',
                  active ? 'bg-brand-soft' : 'hover:bg-surface-soft',
                ].join(' ')}
              >
                <span className="flex -space-x-1" aria-hidden="true">
                  <span
                    className="h-5 w-5 rounded-full border-2 border-line"
                    style={{ backgroundColor: item.swatch[0] }}
                  />
                  <span
                    className="h-5 w-5 rounded-full border-2 border-line"
                    style={{ backgroundColor: item.swatch[1] }}
                  />
                </span>
                <span className="flex-1">
                  <span className={['block text-sm font-bold', active ? 'text-brand-ink' : 'text-ink-strong'].join(' ')}>
                    {item.emoji} {item.label}
                  </span>
                  <span className="block text-xs text-ink-muted">{item.description}</span>
                </span>
                {active ? (
                  <span className="text-brand" aria-hidden="true">
                    ✓
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
