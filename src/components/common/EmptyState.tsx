import type { ReactNode } from 'react';

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-blob border-4 border-dashed border-brand-soft bg-surface-soft px-6 py-12 text-center">
      <span className="text-5xl" aria-hidden="true">
        🌟
      </span>
      <h3 className="text-xl font-extrabold text-ink-strong">{title}</h3>
      {description ? <p className="max-w-md text-sm text-ink-muted">{description}</p> : null}
      {action}
    </div>
  );
}
