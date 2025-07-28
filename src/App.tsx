import { useState } from "react";
import { stories } from "./data/stories"
import StorySidebar from "./components/Sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";

function App() {
  const [currentStory, setCurrentStory] = useState(stories[0]);

  const handleStoryChange = (story: any) => {
    setCurrentStory(story);
  };

  return (
     <ProSidebarProvider>
    <div style={{ display: 'flex', height: '100vh' }}>
      <StorySidebar
        stories={stories}
        currentStoryId={currentStory.id}
        setStory={handleStoryChange}
      />
      <main style={{ flex: 1, padding: '2rem' }}>
        {/* Inhalt */}
        todo
      </main>
    </div>
    </ProSidebarProvider>
  );
}

export default App;
