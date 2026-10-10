import { useEffect, useState } from 'react';
import { usePreferencesStore } from '@/store/preferencesStore';
import type { Story } from '@/types/story';

interface StoryReaderProps {
  story: Story;
  currentParagraph?: number;
}

const FONT_CLASS = {
  base: 'text-story',
  large: 'text-2xl leading-loose',
  xlarge: 'text-3xl leading-loose',
};

export function StoryReader({ story, currentParagraph = -1 }: StoryReaderProps) {
  const fontSize = usePreferencesStore((state) => state.fontSize);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (currentParagraph < 0) {
      setActiveId(null);
      return;
    }
    const id = `paragraph-${currentParagraph}`;
    setActiveId(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [currentParagraph]);

  return (
    <div className={`story-text ${FONT_CLASS[fontSize]} text-ink-strong`}>
      {story.paragraphs.map((paragraph, index) => (
        <p
          key={`${story.id}-${index}`}
          id={`paragraph-${index}`}
          className={activeId === `paragraph-${index}` ? 'is-active' : undefined}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
