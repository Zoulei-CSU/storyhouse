import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rounded: [
          '"Yuanti SC"',
          '"YouYuan"',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
        },
        star: {
          yellow: '#ffb703',
          orange: '#fb8500',
          pink: '#ff5d8f',
          purple: '#8e7dff',
          green: '#43c59e',
          blue: '#4cc9f0',
        },
        brand: {
          DEFAULT: 'rgb(var(--brand) / <alpha-value>)',
          strong: 'rgb(var(--brand-strong) / <alpha-value>)',
          soft: 'rgb(var(--brand-soft) / <alpha-value>)',
          softer: 'rgb(var(--brand-softer) / <alpha-value>)',
          ink: 'rgb(var(--brand-ink) / <alpha-value>)',
          contrast: 'rgb(var(--brand-contrast) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          soft: 'rgb(var(--accent-soft) / <alpha-value>)',
        },
        page: {
          1: 'rgb(var(--page-1) / <alpha-value>)',
          2: 'rgb(var(--page-2) / <alpha-value>)',
          3: 'rgb(var(--page-3) / <alpha-value>)',
        },
        surface: {
          DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
          soft: 'rgb(var(--surface-soft) / <alpha-value>)',
        },
        ink: {
          strong: 'rgb(var(--ink-strong) / <alpha-value>)',
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
          muted: 'rgb(var(--ink-muted) / <alpha-value>)',
        },
        line: 'rgb(var(--line) / <alpha-value>)',
      },
      boxShadow: {
        toy: '0 10px 30px -12px rgba(251, 133, 0, 0.45)',
        card: '0 8px 24px -14px rgba(46, 52, 84, 0.35)',
      },
      borderRadius: {
        blob: '2rem',
      },
      fontSize: {
        story: ['1.25rem', { lineHeight: '2.1' }],
      },
    },
  },
  plugins: [],
} satisfies Config;
