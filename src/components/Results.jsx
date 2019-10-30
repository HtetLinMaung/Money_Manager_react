import React, { Component } from "react";

import Card from "./Card";
import Row from "./Row";
import Column from "./Column";

class Results extends Component {
  render() {
    const { income, expense, balance } = this.props.result;

    return (
      <Card>
        <Row>
          <Column class="text-align-center">
            <p className="mb-0">Income</p>
            <h2 className="mt-0">{income}</h2>
          </Column>
          <Column class="text-align-center">
            <div
              style={{
                borderLeft: "1px solid #d6d6d6",
                borderRight: "1px solid #d6d6d6"
              }}
            >
              <p className="mb-0">Expense</p>
              <h2 className="mt-0">{expense}</h2>
            </div>
          </Column>
          <Column class="text-align-center">
            <p className="mb-0">Balance</p>
            <h2 className="mt-0">{balance}</h2>
          </Column>
        </Row>
      </Card>
    );
  }
}

export default Results;
