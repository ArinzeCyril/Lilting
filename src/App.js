import Body from './components/main/body'
import SideBar from './components/sideBar/sideBar'
import MusicPlayer from './components/musicPlayer/musicPlayer'
import { useState } from 'react';

function App() {
  const [navExpanded, setNavExpanded] = useState(false)

  return (
    <div className='home-page'>
      <SideBar 
        navExpanded={navExpanded} 
        setNavExpanded={setNavExpanded} 
      />
      <Body  
        navExpanded={navExpanded} 
        setNavExpanded={setNavExpanded} 
      />
      <MusicPlayer />
    </div>
  );
}

export default App;
