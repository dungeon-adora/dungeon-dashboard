// components/StoryContent.tsx
import React from "react";
import type { Story } from "../../data/stories";
import bannerHeader from "../../images/banner-header.png";

interface FirstComponentProps {
  story: Story;
}

export const FirstComponent: React.FC<FirstComponentProps> = ({ story }) => {
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
     Hier wird die seite 1 veröffentlicht
    </div>
  );
};