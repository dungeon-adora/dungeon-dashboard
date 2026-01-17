// components/StoryContent.tsx
import React from "react";
import type { Story } from "../../data/stories";

interface FirstComponentProps {
  story: Story;
}

export const FirstComponent: React.FC<FirstComponentProps> = ({ story }) => {
  return (
    <div>
      <h1>{story.title}</h1>
     Hier wird die seite 1 veröffentlicht
    </div>
  );
};