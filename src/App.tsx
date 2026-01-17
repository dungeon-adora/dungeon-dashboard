import { useState } from "react";
import { stories } from "./data/stories"
import StorySidebar from "./components/Sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import StoryContent from "./components/StoryContent";

function App() {
  const [currentStory, setCurrentStory] = useState(stories[0]);

  const handleStoryChange = (story: any) => {
    setCurrentStory(story);
  };

  return (
     <ProSidebarProvider>
    <div className="first-container" style={{ display: 'flex', height: '100vh' }}>
      <StorySidebar
        stories={stories}
        currentStoryId={currentStory.id}
        setStory={handleStoryChange}
      />
      <main style={{ flex: 1, padding: '2rem' }}>
          <StoryContent story={currentStory} />
        </main>
    </div>
    </ProSidebarProvider>
  );
}

export default App;
