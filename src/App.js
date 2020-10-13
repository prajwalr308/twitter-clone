import React from 'react';

import './App.css';
import Feed from './Feed';
import Siderbar from './Siderbar';
import Widget from './Widget';

function App() {
  return (
    <div className="app">
     {/* sidebar */}
     <Siderbar />
     
     {/* feed */}
     <Feed  />

     {/* widgets */}
     <Widget />
    </div>
  );
}

export default App;
