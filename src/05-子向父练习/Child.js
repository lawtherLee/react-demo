import { Component } from "react";

class Child extends Component {
  render() {
    const { row, addLike } = this.props;
    return (
      <div className="child">
        <h3>{row.title}</h3>
        <div className="detail">
          <span>{row.publisher}</span>
          <span>{row.like_count}</span>
          <span onClick={() => addLike(row.id)}>点赞+1</span>
        </div>
      </div>
    );
  }
}

export default Child;
