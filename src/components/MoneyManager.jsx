import React, { Component } from "react";
import './MoneyManager.css'

class MoneyManager extends Component {
  render() {
    return (
      <div className="mm-app">
        {this.props.children}
      </div>
    );
  }
}

export default MoneyManager;
