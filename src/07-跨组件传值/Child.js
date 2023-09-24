import {Component} from "react";
import {Consumer} from "../App"; // console.log(Consumer);

// console.log(Consumer);
export default class Child extends Component {
  render() {
    return (
      <div>
        子组件{" "}
        <Consumer>{(data) => <div>爷爷给的钱：{data.money}</div>}</Consumer>
        <Consumer>
          {({ addMoney }) => (
            <button onClick={() => addMoney(100000)}>给爷爷钱</button>
          )}
        </Consumer>
      </div>
    );
  }
}
