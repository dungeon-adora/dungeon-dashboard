import React from 'react';
import { stories } from '../data/stories';
import './navigation.scss';

interface NavigationProps {
  currentStoryId: string;
  onStoryChange: (story: any) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentStoryId,
  onStoryChange,
}) => {
  return (
    <nav className="sword-navigation">
      <div className="sword-background">
        {stories.map((story) => (
          <button
            key={story.id}
            className={`story-banner ${currentStoryId === story.id ? 'active' : ''}`}
            onClick={() => onStoryChange(story)}
          >
            <span className="story-title">{story.title}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
