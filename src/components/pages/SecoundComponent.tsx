// components/StoryContent.tsx
import React from "react";
import type { Story } from "../../data/stories";

interface SecoundComponentProps {
  story: Story;
}

export const SecoundComponent: React.FC<SecoundComponentProps> = ({ story }) => {
  return (
    <div>
      <h1>{story.title}</h1>
     Hier wird die seite 1 veröffentlicht
    </div>
  );
};