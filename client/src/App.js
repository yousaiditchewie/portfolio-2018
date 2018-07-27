import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RPS from "./components/RPS";
import NotFound from "./components/NotFound";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={RPS} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
