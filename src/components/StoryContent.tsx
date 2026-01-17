// components/StoryContent.tsx
import React from "react";
import type { Story } from "../data/stories";
import { HomeComponent } from "./pages/HomeComponent";
import { FirstComponent } from "./pages/FirstComponent";
import { SecoundComponent } from "./pages/SecoundComponent";

interface StoryContentProps {
  story: Story;
}

const StoryContent: React.FC<StoryContentProps> = ({ story }) => {
  if (story.id === "1") {
    return <FirstComponent story={story} />;
  } else if (story.id === "2") {
    return <SecoundComponent story={story} />;
  }

  return <HomeComponent story={story} />
};

export default StoryContent;
