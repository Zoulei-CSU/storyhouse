export interface StoryHouseConfig {
  base: string;
  apiBase: string;
}

declare global {
  interface Window {
    __STORY_HOUSE_CONFIG__?: Partial<StoryHouseConfig>;
  }
}

function normalizeBase(input: string | undefined): string {
  if (!input) return '/';
  let value = input.trim();
  if (value === '' || value === '/') return '/';
  if (!value.startsWith('/')) value = `/${value}`;
  value = value.replace(/\/+$/, '');
  return value === '' ? '/' : value;
}

function readConfig(): StoryHouseConfig {
  const injected = typeof window !== 'undefined' ? window.__STORY_HOUSE_CONFIG__ : undefined;
  const base = normalizeBase(injected?.base);
  const apiBase = injected?.apiBase !== undefined ? normalizeBase(injected.apiBase) : base;
  return { base, apiBase: apiBase === '/' ? '' : apiBase };
}

export const storyHouseConfig = readConfig();

/** 应用根路径（挂载点）。根部署时为 `/`，否则形如 `/story/`。 */
export const appBasePath = storyHouseConfig.base === '/' ? '/' : `${storyHouseConfig.base}/`;

/** React Router 的 basename；根部署时返回 undefined。 */
export const routerBasename = storyHouseConfig.base === '/' ? undefined : storyHouseConfig.base;

/** 把 `/api/...` 之类的接口路径拼上运行时前缀。 */
export function apiUrl(path: string): string {
  const suffix = path.startsWith('/') ? path : `/${path}`;
  return `${storyHouseConfig.apiBase}${suffix}`;
}
