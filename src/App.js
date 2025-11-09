import React, { useState } from 'react';

import './App.css';
import Feed from './Feed';
import Siderbar from './Siderbar';
import Widget from './Widget';
import BottomNav from './BottomNav';
import Notifications from './Notifications';
import Messages from './Messages';
import Explore from './Explore';

function App() {
  const [activeScreen, setActiveScreen] = useState('home');

  const renderMainContent = () => {
    switch(activeScreen) {
      case 'home':
        return <Feed />;
      case 'explore':
        return <Explore />;
      case 'notifications':
        return <Notifications />;
      case 'messages':
        return <Messages />;
      default:
        return <Feed />;
    }
  };

  return (
    <div className="app">
     {/* sidebar */}
     <Siderbar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />

     {/* main content area */}
     {renderMainContent()}

     {/* widgets */}
     <Widget />

     {/* bottom navigation for mobile */}
     <BottomNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    </div>
  );
}

export default App;
