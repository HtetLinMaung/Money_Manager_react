import React, { Component } from "react";
import "./List.css";

import Card from "./Card";
import Row from "./Row";
import Column from "./Column";

class List extends Component {
  render() {
    return (
      <Card class={this.props.class}>
        <div className="list-title">
          {this.props.title} <span>{this.props.titleAction}</span>
        </div>

        {this.props.items.map(item => (
          <Row key={item.id} class="pb-0 pt-0">
            <Column>
              <img src={item.icon} width="25" height="25" alt="icons" />
            </Column>
            <Column>
              <h3>{item.text}</h3>
            </Column>
            <Column>
              <h3 style={{ textAlign: "right" }}>{item.value}</h3>
            </Column>
          </Row>
        ))}
      </Card>
    );
  }
}

export default List;
