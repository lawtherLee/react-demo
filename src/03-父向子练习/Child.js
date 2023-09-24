import { Component } from "react";

class Child extends Component {
  render() {
    const { row } = this.props;
    return (
      <div className="child">
        <h3>{row.title}</h3>
        <div className="detail">
          <span>{row.publisher}</span>
          <span>{row.like_count}</span>
        </div>
      </div>
    );
  }
}

export default Child;
