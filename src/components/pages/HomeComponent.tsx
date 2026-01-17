// components/StoryContent.tsx
import React from "react";
import type { Story } from "../../data/stories";

interface HomeComponentProps {
  story: Story;
}

export const HomeComponent: React.FC<HomeComponentProps> = ({ story }) => {
  return (
    <div>
      <h1>{story.title}</h1>
      Hier ist die default landing page
    </div>
  );
};