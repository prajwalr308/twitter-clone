import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Feed from './Feed';
import Siderbar from './Siderbar';
import Widget from './Widget';
import BottomNav from './BottomNav';
import Notifications from './Notifications';
import Messages from './Messages';
import Explore from './Explore';
import PostDetails from './PostDetails';

function App() {
  return (
    <Router>
      <div className="app">
        <Siderbar />
        <Switch>
          <Route path="/" exact component={Feed} />
          <Route path="/explore" component={Explore} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/messages" component={Messages} />
          <Route path="/post/:postId" component={PostDetails} />
        </Switch>
        <Widget />
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
