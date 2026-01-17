// components/StoryContent.tsx
import React from "react";
import type { Story } from "../../data/stories";
import bannerHeader from "../../images/banner-header.png";

interface HomeComponentProps {
  story: Story;
}

export const HomeComponent: React.FC<HomeComponentProps> = ({ story }) => {
  return (
    <div style={{
      backgroundImage: `url(${bannerHeader})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
  width:'800px',
 
      borderRadius: '8px',
      display: 'inline-block',
      color: 'white'
    }}>
     <div style={{ marginLeft: '60px' }}><h1>{story.title}</h1>
      Hier ist die default landing page
      </div>  
    </div>
  );
};