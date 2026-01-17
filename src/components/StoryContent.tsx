// components/StoryContent.tsx
import React from "react";
import type { Story } from "../data/stories";

interface StoryContentProps {
  story: Story;
}

const StoryContent: React.FC<StoryContentProps> = ({ story }) => {
  if (story.id === "1") {
    return <div>
      <h1>{story.title}</h1>
      Hier wird die seite 1 veröffentlicht
      </div>;
  } else if (story.id === "2") {
    return <div>
      <h1>{story.title}</h1>
      Hier wird die seite 2 veröffentlicht
      </div>;
  }

  return (
    <div>
      <h1>Home</h1>
      Hier ist die default landing page
    </div>
  );
};

export default StoryContent;
