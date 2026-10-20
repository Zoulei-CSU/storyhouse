import { apiUrl } from '@/config';
import { detectStorageMode } from '@/services/userRepository';

/**
 * 一张故事配图。
 *
 * 后端把图片放在图片目录的一级子目录里，`folder` 就是这个子目录名，
 * `file` 是文件名（`<故事id>.jpg`）。同一个故事在不同子目录里可能各有一张。
 */
export interface StoryImage {
  folder: string;
  file: string;
}

/** 图片显示名，即需求里的「文件夹名称/ID.jpg」。 */
export function storyImageLabel(image: StoryImage): string {
  return `${image.folder}/${image.file}`;
}

/** 图片地址。目录名可能是中文，两段都要编码。 */
export function storyImageUrl(image: StoryImage): string {
  return apiUrl(`/api/images/${encodeURIComponent(image.folder)}/${encodeURIComponent(image.file)}`);
}

/**
 * 已确认没有配图的故事 id。
 *
 * 记录在模块级：用户在详情页之间来回切换时，缺失的故事不会每次都重新请求。
 */
const missing = new Set<string>();

export function isKnownMissing(storyId: string): boolean {
  return missing.has(storyId);
}

export function markMissing(storyId: string): void {
  missing.add(storyId);
}

/** 已拿到结果的故事，避免来回切页时重复请求。 */
const cache = new Map<string, StoryImage[]>();
/** 同一故事的并发请求合并成一次。 */
const pending = new Map<string, Promise<StoryImage[]>>();

function isStoryImage(value: unknown): value is StoryImage {
  if (!value || typeof value !== 'object') return false;
  const item = value as Record<string, unknown>;
  return (
    typeof item.folder === 'string' &&
    item.folder !== '' &&
    typeof item.file === 'string' &&
    item.file !== ''
  );
}

/**
 * 取某个故事的全部配图，按后端给的目录顺序。
 *
 * 没有后端（纯前端部署）时直接返回空数组，调用方保持「图标 + 纯色」的旧表现。
 * 网络异常不写入 missing，下一次进入详情页还能重试。
 */
export async function fetchStoryImages(storyId: string): Promise<StoryImage[]> {
  if (!storyId) return [];

  const cached = cache.get(storyId);
  if (cached) return cached;
  if (missing.has(storyId)) return [];

  const inflight = pending.get(storyId);
  if (inflight) return inflight;

  const task = (async () => {
    try {
      const mode = await detectStorageMode();
      if (mode !== 'server') return [];

      const response = await fetch(apiUrl(`/api/story-images/${encodeURIComponent(storyId)}`), {
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) {
        missing.add(storyId);
        return [];
      }

      const payload = await response.json();
      const raw = Array.isArray(payload?.images) ? payload.images : [];
      const images = raw.filter(isStoryImage);

      cache.set(storyId, images);
      if (images.length === 0) missing.add(storyId);
      return images;
    } catch {
      // 网络错误：不缓存「没有图」的结论
      return [];
    } finally {
      pending.delete(storyId);
    }
  })();

  pending.set(storyId, task);
  return task;
}
