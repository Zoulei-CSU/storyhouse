import { useEffect, useState } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = '搜一搜故事、寓意或标签' }: SearchBarProps) {
  const [local, setLocal] = useState(value);

  useEffect(() => {
    setLocal(value);
  }, [value]);

  useEffect(() => {
    const timer = window.setTimeout(() => onChange(local), 250);
    return () => window.clearTimeout(timer);
  }, [local, onChange]);

  return (
    <div className="relative w-full">
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl" aria-hidden="true">
        🔍
      </span>
      <input
        type="search"
        value={local}
        onChange={(event) => setLocal(event.target.value)}
        placeholder={placeholder}
        aria-label="搜索故事"
        className="focus-ring h-12 w-full rounded-full border-4 border-line bg-surface pl-12 pr-4 text-base shadow-card placeholder:text-ink-muted"
      />
    </div>
  );
}
