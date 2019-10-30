import React, { Component, Fragment } from "react";

import List from "./List";

class ExpenseList extends Component {
  dropMinus(str) {
    return parseInt(str.substring(2, str.length));
  }

  render() {
    const { dropMinus } = this;
    let total = null;

    return (
      <Fragment>
        {this.props.items.map((item, index) => {
          total = 0;
          item.forEach(val => {
            total += dropMinus(val.value);
          });
          
          return (
            <List
              key={index}
              class="mt-2"
              title="10/29 Tue"
              titleAction={`Expenses: ${total}`}
              items={item}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default ExpenseList;
