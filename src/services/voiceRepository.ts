import { apiUrl } from '@/config';
import { detectStorageMode } from '@/services/userRepository';
import type { VoiceOption } from '@/types/voice';

let voicesCache: VoiceOption[] | null = null;
let voicesPromise: Promise<VoiceOption[]> | null = null;
const indexCache = new Map<string, Set<string>>();
const indexPromises = new Map<string, Promise<Set<string>>>();

async function fetchJson<T>(path: string): Promise<T | null> {
  if (typeof fetch !== 'function') return null;
  try {
    const response = await fetch(apiUrl(path), { headers: { Accept: 'application/json' } });
    if (!response.ok) return null;
    const contentType = response.headers.get('content-type') ?? '';
    if (!contentType.includes('application/json')) return null;
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

/**
 * 探测后端可用的音色列表。仅在后端（server）模式下有意义；
 * 纯前端或请求失败时返回空数组，界面不展示音色入口。
 */
export async function fetchVoices(force = false): Promise<VoiceOption[]> {
  if (force) {
    voicesCache = null;
    voicesPromise = null;
  }
  if (voicesCache) return voicesCache;
  if (!voicesPromise) {
    voicesPromise = (async () => {
      const mode = await detectStorageMode();
      if (mode !== 'server') return [];
      const data = await fetchJson<{ voices?: VoiceOption[] }>('/api/voices');
      const list = Array.isArray(data?.voices)
        ? data!.voices.filter((voice): voice is VoiceOption => !!voice && typeof voice.id === 'string')
        : [];
      voicesCache = list;
      return list;
    })().catch(() => []);
  }
  return voicesPromise;
}

/** 某个音色已生成音频的故事 id 集合。 */
export async function getVoiceIndex(voiceId: string): Promise<Set<string>> {
  const cached = indexCache.get(voiceId);
  if (cached) return cached;
  let pending = indexPromises.get(voiceId);
  if (!pending) {
    pending = (async () => {
      const data = await fetchJson<{ storyIds?: string[] }>(
        `/api/voices/${encodeURIComponent(voiceId)}/index`,
      );
      const set = new Set(Array.isArray(data?.storyIds) ? data!.storyIds : []);
      indexCache.set(voiceId, set);
      return set;
    })().catch(() => new Set<string>());
    indexPromises.set(voiceId, pending);
  }
  return pending;
}

/** 指定音色、指定故事音频的播放地址。 */
export function audioUrl(voiceId: string, storyId: string): string {
  return apiUrl(`/api/voices/${encodeURIComponent(voiceId)}/${encodeURIComponent(storyId)}.mp3`);
}
