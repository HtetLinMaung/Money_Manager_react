import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    const classProps = `card ${this.props.class || ""}`;

    return <div className={classProps}>{this.props.children}</div>;
  }
}

export default Card;
