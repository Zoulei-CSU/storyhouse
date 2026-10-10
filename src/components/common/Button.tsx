import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  icon?: ReactNode;
}

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-brand text-brand-contrast hover:bg-brand-strong',
  secondary: 'bg-surface text-ink-strong hover:bg-brand-softer',
  ghost: 'bg-transparent text-ink hover:bg-surface-soft',
};

export function Button({ variant = 'primary', icon, className = '', children, ...rest }: ButtonProps) {
  return (
    <button className={`toy-button focus-ring ${VARIANTS[variant]} ${className}`} {...rest}>
      {icon ? <span aria-hidden="true">{icon}</span> : null}
      {children}
    </button>
  );
}
