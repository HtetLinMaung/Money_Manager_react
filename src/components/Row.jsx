import React, { Component } from "react";
import "./Row.css";

class Row extends Component {
  render() {
    const classProps = `row ${this.props.class || ""}`;
    
    return <div className={classProps}>{this.props.children}</div>;
  }
}

export default Row;
