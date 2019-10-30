import React, { Component, Fragment } from "react";
import "./App.css";

import MoneyManager from "./components/MoneyManager";
import Results from "./components/Results";
import ExpenseList from "./components/ExpenseList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      income: 200000,
      expense: 78650,
      balance: 121350,
      items: [
        [
          { id: 1, icon: "", text: "Snacks", value: "- 1600" },
          { id: 2, icon: "", text: "Fried Chicken", value: "- 600" },
          { id: 3, icon: "", text: "Bus Fee", value: "- 400" }
        ]
      ]
    };
  }

  render() {
    const { income, expense, balance, items } = this.state;
    return (
      <Fragment>
        <MoneyManager>
          <Results result={{ income, expense, balance }} />
          <ExpenseList items={items} />
        </MoneyManager>
        <button className="btn btn-primary dark icon add-btn">Add</button>
      </Fragment>
    );
  }
}

export default App;
