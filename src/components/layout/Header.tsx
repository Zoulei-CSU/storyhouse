import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeSwitcher } from '@/components/common/ThemeSwitcher';
import { useAuthStore } from '@/store/authStore';
import { useFavoritesStore } from '@/store/favoritesStore';

const LINKS = [
  { to: '/', label: '首页', emoji: '🏠' },
  { to: '/explore', label: '探索', emoji: '🧭' },
  { to: '/favorites', label: '收藏', emoji: '⭐' },
  { to: '/about', label: '关于', emoji: '💡' },
];

export function Header() {
  const favoriteCount = useFavoritesStore((state) => state.favoriteIds.length);
  const user = useAuthStore((state) => state.user);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'focus-ring flex min-h-[44px] items-center gap-1 rounded-full px-3 text-sm font-bold transition sm:px-4',
      isActive ? 'bg-surface text-brand shadow-card' : 'text-ink hover:bg-surface-soft',
    ].join(' ');

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'focus-ring flex min-h-[48px] items-center gap-3 rounded-2xl px-4 text-base font-bold transition',
      isActive ? 'bg-surface text-brand shadow-card' : 'text-ink hover:bg-surface-soft',
    ].join(' ');

  return (
    <header
      ref={menuRef}
      className="sticky top-0 z-30 border-b-4 border-line/70 bg-brand-softer/80 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <NavLink to="/" className="focus-ring flex items-center gap-2 rounded-full px-2 py-1">
          <span className="text-3xl" aria-hidden="true">
            ⭐
          </span>
          <span className="text-lg font-extrabold text-brand sm:text-xl">小星星故事屋</span>
        </NavLink>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav className="hidden items-center gap-1 sm:flex sm:gap-2">
            {LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={desktopLinkClass}>
                <span aria-hidden="true">{link.emoji}</span>
                <span>{link.label}</span>
                {link.to === '/favorites' && favoriteCount > 0 ? (
                  <span className="rounded-full bg-star-pink px-1.5 text-xs text-white">{favoriteCount}</span>
                ) : null}
              </NavLink>
            ))}
          </nav>

          <ThemeSwitcher />

          {user ? (
            <NavLink
              to="/profile"
              className={({ isActive }) => `hidden sm:flex ${desktopLinkClass({ isActive })}`}
            >
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full text-lg"
                style={{ backgroundColor: user.avatarColor }}
                aria-hidden="true"
              >
                {user.avatarEmoji}
              </span>
              <span className="hidden max-w-[6rem] truncate sm:inline">{user.name}</span>
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) => `hidden sm:flex ${desktopLinkClass({ isActive })}`}
            >
              <span aria-hidden="true">👤</span>
              <span>登录</span>
            </NavLink>
          )}

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="打开导航菜单"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            className="focus-ring flex h-11 w-11 items-center justify-center rounded-full text-ink transition hover:bg-surface-soft sm:hidden"
          >
            <span className="sr-only">菜单</span>
            {menuOpen ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="absolute inset-x-0 top-full z-40 border-b-4 border-line bg-surface p-3 shadow-card sm:hidden">
          <nav className="flex flex-col gap-1" aria-label="主导航">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMenuOpen(false)}
                className={mobileLinkClass}
              >
                <span className="text-xl" aria-hidden="true">
                  {link.emoji}
                </span>
                <span>{link.label}</span>
                {link.to === '/favorites' && favoriteCount > 0 ? (
                  <span className="ml-auto rounded-full bg-star-pink px-2 py-0.5 text-xs text-white">
                    {favoriteCount}
                  </span>
                ) : null}
              </NavLink>
            ))}

            <div className="my-2 border-t-2 border-line" />

            {user ? (
              <NavLink to="/profile" onClick={() => setMenuOpen(false)} className={mobileLinkClass}>
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full text-lg"
                  style={{ backgroundColor: user.avatarColor }}
                  aria-hidden="true"
                >
                  {user.avatarEmoji}
                </span>
                <span className="truncate">{user.name}</span>
                <span className="ml-auto text-xs text-ink-muted">个人主页</span>
              </NavLink>
            ) : (
              <NavLink to="/login" onClick={() => setMenuOpen(false)} className={mobileLinkClass}>
                <span className="text-xl" aria-hidden="true">
                  👤
                </span>
                <span>登录</span>
              </NavLink>
            )}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
