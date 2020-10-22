import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Gateway from "./components/gateway.js";
import Nav from "./components/nav.js";
import Library from "./components/library.js";

function App() {
  return (
    <Router>
      <div id="masterContainer">
        <Switch>
          <Route exact path="/">
            <Gateway />
          </Route>
          <Route path="/library">
            <Nav />
            <Library />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
