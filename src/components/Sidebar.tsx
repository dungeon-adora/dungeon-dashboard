import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import type { Story } from '../data/stories';


interface Props {
  stories: Story[];
  currentStoryId: string;
  setStory: (story: Story) => void;
}

export default function StorySidebar({ stories, currentStoryId, setStory }: Props) {
  return (
    <Sidebar className='sidebar-custom'>
      <Menu>
        {stories.map((story) => (
          <MenuItem
            key={story.id}
            active={story.id === currentStoryId}
            onClick={() => setStory(story)}
          >
            {story.title}
          </MenuItem>
        ))}
      </Menu>
    </Sidebar>
  );
}
