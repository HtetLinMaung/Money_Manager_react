import React, { Component } from "react";
import "./Column.css";

class Column extends Component {
  render() {
    const classProp = `col ${this.props.class || ''}`;
    return <div className={classProp}>{this.props.children}</div>;
  }
}

export default Column;
