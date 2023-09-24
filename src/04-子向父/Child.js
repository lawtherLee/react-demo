import { Component } from "react";

class Child extends Component {
  render() {
    const { money, buyMobile } = this.props;
    return (
      <div>
        子组件的钱:{money}
        <button onClick={() => buyMobile(2000)}>买手机</button>
        <button onClick={() => buyMobile(10000)}>买口红</button>
      </div>
    );
  }
}

export default Child;
