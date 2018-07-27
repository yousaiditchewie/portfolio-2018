import React, { Component } from "react";
import { Link } from "react-router-dom";

import MessageBoard from "./MessageBoard";
import GameBoard from "./GameBoard";

// import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class RPS extends Component {
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
      <div className="RPS">
        <h1 className="RPS-heading">Welcome to my&nbsp;website</h1>
        <p className="RPS-intro">
          You look like a worthy opponent.<br />Beat me 2 out of 3 in a game of
          Rock, Paper, Scissors, and I'll let you see the rest of my site.
        </p>
        <MessageBoard />
        <GameBoard />
        <button className="button">Reset</button>
        <Link to="/home" className="button">
          I Give Up
        </Link>
      </div>
    );
  }
}
