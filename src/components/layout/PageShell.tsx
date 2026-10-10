import type { ReactNode } from 'react';

interface PageShellProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

export function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:py-8">
      {title ? (
        <div className="mb-6">
          <h1 className="text-2xl font-extrabold text-ink-strong sm:text-3xl">{title}</h1>
          {subtitle ? <p className="mt-1 text-sm text-ink-muted">{subtitle}</p> : null}
        </div>
      ) : null}
      {children}
    </main>
  );
}
