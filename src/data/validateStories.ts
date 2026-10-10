import type { Story } from '@/types/story';
import { CATEGORIES } from '@/data/taxonomy';

const HEX = /^#[0-9a-fA-F]{6}$/;

export function validateStories(stories: Story[]): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  const ids = new Set<string>();
  const categoryIds = new Set(CATEGORIES.map((category) => category.id));

  for (const story of stories) {
    if (ids.has(story.id)) errors.push(`重复的故事 id: ${story.id}`);
    ids.add(story.id);

    if (!story.title.trim()) errors.push(`${story.id}: 标题为空`);
    if (!story.summary.trim()) errors.push(`${story.id}: 摘要为空`);
    if (story.paragraphs.length < 3) errors.push(`${story.id}: 正文至少需要 3 段`);
    if (story.paragraphs.some((paragraph) => !paragraph.trim())) {
      errors.push(`${story.id}: 存在空段落`);
    }
    if (!story.moral.trim()) errors.push(`${story.id}: 寓意说明为空`);
    if (!HEX.test(story.accentColor)) errors.push(`${story.id}: accentColor 不是合法十六进制`);
    if (story.categories.length === 0) errors.push(`${story.id}: 至少需要一个分类`);
    if (story.categories.some((category) => !categoryIds.has(category))) {
      errors.push(`${story.id}: 存在未知分类`);
    }
  }

  return { valid: errors.length === 0, errors };
}
