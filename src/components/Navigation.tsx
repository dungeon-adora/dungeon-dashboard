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
        {stories.map((story, index) => (
          <button
            key={story.id}
            className={`nav-icon ${currentStoryId === story.id ? 'active' : ''}`}
            onClick={() => onStoryChange(story)}
            title={story.title}
            style={{
              top: `${150 + index * 60}px`,
            }}
          >
            <span className="icon-text">{story.title.split(' ')[0]}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
