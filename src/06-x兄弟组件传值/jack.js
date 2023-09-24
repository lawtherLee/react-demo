import { Component } from "react";

class Jack extends Component {
  render() {
    return (
      <div>
        jack：
        <button onClick={() => this.props.setMsg("睡觉")}>告诉rose</button>
      </div>
    );
  }
}

export default Jack;
