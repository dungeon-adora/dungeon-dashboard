// components/StoryContent.tsx
import React from "react";
import type { Story } from "../data/stories";
import sushiImg from "../data/sushi.jpg"
interface StoryContentProps {
  story: Story;
}

const StoryContent: React.FC<StoryContentProps> = ({ story }) => {
  if (story.id === "new-story") {
    return <div>Hallo Welt</div>;
  }

  return (
    <div>
      <h2>{story.title}</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
       <img className="sushi-class"src={sushiImg}></img>
      </div>
    </div>
  );
};

export default StoryContent;
