// props基本使用
// const Hello = (props) => {
//   console.log(props);
//   return (
//     <div>
//       姓名：{props.name} 年龄：{props.age}
//     </div>
//   );
// };

// 类
import {Component} from "react";

class Hello extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        name:{name} age:{age}
      </div>
    );
  }
}

function App() {
  return (
    <div className={"App"}>
      <Hello name={"zs"} age={19} />
    </div>
  );
}

export default App;
