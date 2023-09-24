import { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  state = {
    money: 1000000,
  };

  buyMobile = (money) => {
    this.setState({
      money: this.state.money - money,
    });
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
        <Child money={this.state.money} buyMobile={this.buyMobile} />
      </div>
    );
  }
}

export default Parent;
