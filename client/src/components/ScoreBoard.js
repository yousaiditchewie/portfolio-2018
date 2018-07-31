import React, { Component } from "react";

export default class ScoreBoard extends Component {
  render() {
    return (
      <div className="ScoreBoard">
        <div className="ScoreBoard-player">
          {this.props.computer.name}: {this.props.computer.score}
        </div>
        <div className="ScoreBoard-player">
          {this.props.you.name}: {this.props.you.score}
        </div>
      </div>
    );
  }
}
