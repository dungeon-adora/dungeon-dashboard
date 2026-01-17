// components/StoryContent.tsx
import React from "react";
import type { Story } from "../data/stories";
import bannerHeader from "../images/banner-header.png";
import { HomeComponent } from "./pages/HomeComponent";
import { FirstComponent } from "./pages/FirstComponent";
import { SecoundComponent } from "./pages/SecoundComponent";
import "./storyContent.scss";
import { SpellsComponent } from "./pages/SpellsComponent";

interface StoryContentProps {
  story: Story;
}

const StoryContent: React.FC<StoryContentProps> = ({ story }) => {
  return <div>
    <div className="banner-header" style={{ backgroundImage: `url(${bannerHeader})` }}>
      <h1 className="banner-title">{story.title}</h1>
    </div>
    <div className="story-main-content">
      {story.id === "1" ? <FirstComponent />
        : story.id === "2" ? <SecoundComponent />
        : story.id === "3" ? <SpellsComponent />
          : <HomeComponent />}
    </div>
  </div>
};

export default StoryContent;
