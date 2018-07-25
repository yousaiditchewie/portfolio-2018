import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class Home extends Component {
  state = {
    key: 1
  };
  componentDidMount() {
    setInterval(() => {
      let key = this.state.key;
      key += 1;
      this.setState({ key });
      console.log("key: ", this.state.key);
    }, 5000);
  }
  render() {
    console.log("initial key: ", this.state.key);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={5000}
          transitionEnter={false}
          transitionLeave={false}
        >
          <h1>Fading at Initial Mount</h1>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
