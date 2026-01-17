import { useState } from "react";
import { stories } from "./data/stories"
import { ProSidebarProvider } from "react-pro-sidebar";
import StoryContent from "./components/StoryContent";
import Navigation from "./components/Navigation";
import backgroundImg from "./images/background.png";

function App() {
  const [currentStory, setCurrentStory] = useState(stories[0]);

  //for routing
  const handleStoryChange = (story: any) => {
    setCurrentStory(story);
  };

  return (
     <ProSidebarProvider>
    <div style={{ 
      display: 'flex', 
      height: '100vh',
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <Navigation currentStoryId={currentStory.id} onStoryChange={handleStoryChange} />
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto', backgroundColor: 'transparent' }}>
          <StoryContent story={currentStory} />
        </main>
    </div>
    </ProSidebarProvider>
  );

}

export default App;
