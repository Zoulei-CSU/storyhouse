import { motion } from 'framer-motion';
import type { Story } from '@/types/story';
import { StoryCard } from './StoryCard';

interface StoryListProps {
  stories: Story[];
  onOpen?: (id: string) => void;
}

export function StoryList({ stories, onOpen }: StoryListProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {stories.map((story, index) => (
        <motion.div
          key={story.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: Math.min(index, 8) * 0.03 }}
        >
          <StoryCard story={story} onOpen={onOpen} />
        </motion.div>
      ))}
    </div>
  );
}
