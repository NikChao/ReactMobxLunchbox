import React, { Component } from "react";
import { observer } from "mobx-react";
import { autobind } from "core-decorators";
import CounterStore from "./counter-store";

@observer
@autobind
export default class CounterComponent extends Component {
  store = new CounterStore();

  increment() {
    this.store.increment();
  }

  decrement() {
    this.store.decrement();
  }

  render() {
    const { count } = this.store;

    return (
      <div>
        <p>Count: {count}</p>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <button onClick={this.increment}>increment</button>
          <button onClick={this.decrement}>decrement</button>
        </div>
      </div>
    );
  }
}
