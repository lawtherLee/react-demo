import { Component } from "react";

class Child extends Component {
  render() {
    const { money } = this.props;
    return <div>子组件的钱:{money}</div>;
  }
}

export default Child;
