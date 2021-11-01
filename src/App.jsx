import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Spotify from "@/views/Spotify";
import SpotifyRedirect from "@/views/SpotifyRedirect";
import { useState, useEffect } from "react";
import AppBar from "./components/AppBar";

function App() {
  const [auth, setAuth] = useState({});

  return (
    <Router>
      <div className="App">
        <AppBar />
        <Switch>
          <Route path="/callback">
            <SpotifyRedirect setAuth={setAuth} />
          </Route>
          <Route path="/">
            <Spotify />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
