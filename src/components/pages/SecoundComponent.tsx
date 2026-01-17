// components/StoryContent.tsx
import React from "react";
import type { Story } from "../../data/stories";
import bannerHeader from "../../images/banner-header.png";

interface SecoundComponentProps {
  story: Story;
}

export const SecoundComponent: React.FC<SecoundComponentProps> = ({ story }) => {
  return (
    <div style={{
      backgroundImage: `url(${bannerHeader})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '1.5rem',
      borderRadius: '8px',
      display: 'inline-block',
      color: 'white'
    }}>
      <h1>{story.title}</h1>
     Hier wird die seite 2 veröffentlicht
    </div>
  );
};