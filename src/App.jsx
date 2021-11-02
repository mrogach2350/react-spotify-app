import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Playlists from '@/views/Playlists';
import SpotifyRedirect from '@/views/SpotifyRedirect';
import AppBar from './components/AppBar';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar />
        <Switch>
          <Route path="/callback">
            <SpotifyRedirect />
          </Route>
          <Route path="/">
            <Playlists />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
