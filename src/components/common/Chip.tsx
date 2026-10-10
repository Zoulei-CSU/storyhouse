interface ChipProps {
  label: string;
  active?: boolean;
  emoji?: string;
  color?: string;
  onClick?: () => void;
}

export function Chip({ label, active = false, emoji, color, onClick }: ChipProps) {
  const style = active && color ? { backgroundColor: color, borderColor: color } : undefined;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      style={style}
      className={[
        'focus-ring inline-flex min-h-[40px] items-center gap-1.5 rounded-full border-2 px-4 text-sm font-bold transition',
        active
          ? 'border-transparent text-white shadow-toy'
          : 'border-brand-soft bg-surface-soft text-ink hover:border-brand',
      ].join(' ')}
    >
      {emoji ? <span aria-hidden="true">{emoji}</span> : null}
      {label}
    </button>
  );
}
