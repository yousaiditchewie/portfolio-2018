import React, { Component } from "react";

import MessageBoard from "./MessageBoard";
import ScoreBoard from "./ScoreBoard";
import GameBoard from "./GameBoard";
import Buttons from "./Buttons";

// import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class RPS extends Component {
  state = {
    message: "Play a Hand..."
  };
  render() {
    return (
      <div className="RPS">
        <h1 className="RPS-heading">Welcome to my&nbsp;website</h1>
        <p className="RPS-intro">
          You look like a worthy&nbsp;opponent.<br />Beat my computer 2 out of 3
          in a game of Rock Paper Scissors, and I'll let you see the rest of
          my&nbsp;site.
        </p>
        <MessageBoard message={this.state.message} />
        <ScoreBoard
          computer={{ name: "computer", score: 0 }}
          you={{ name: "You", score: 0 }}
        />
        <GameBoard />
        <Buttons />
      </div>
    );
  }
}
