import React, { Component } from "react";

export default class MessageBoard extends Component {
  render() {
    return <div className="MessageBoard">{this.props.message}</div>;
  }
}
