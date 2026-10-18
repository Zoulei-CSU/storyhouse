import { apiUrl } from '@/config';

/**
 * 已确认没有配图的故事 id。
 *
 * 记录在模块级而不是组件里：用户在详情页之间来回切换时，
 * 缺失的故事不会每次都重新请求一遍 404。
 */
const missing = new Set<string>();

export function isKnownMissing(storyId: string): boolean {
  return missing.has(storyId);
}

export function markMissing(storyId: string): void {
  missing.add(storyId);
}

/** 配图地址。后端未配置图片目录时该地址返回 404。 */
export function storyImageUrl(storyId: string): string {
  return apiUrl(`/api/images/${encodeURIComponent(storyId)}.jpg`);
}
