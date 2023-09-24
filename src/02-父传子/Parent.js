import { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  state = {
    money: 1000000,
  };

  render() {
    return (
      <div>
        父组件的钱:{this.state.money}
        <button
          onClick={() => this.setState({ money: this.state.money + 100000 })}
        >
          收钱
        </button>
        <Child money={this.state.money} />
      </div>
    );
  }
}

export default Parent;
