import React, { Component } from "react";
import Computer from "./Computer";
import Player from "./Player";

export default class GameBoard extends Component {
  render() {
    return (
      <div className="GameBoard">
        <Player name="Computer" score="0" />
        <Player name="You" score="0" />
      </div>
    );
  }
}
