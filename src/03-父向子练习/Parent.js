import { Component } from "react";
import "./parent.css";
import Child from "./Child";

class Parent extends Component {
  state = {
    list: [
      {
        id: 99,
        title: "坚定不移走中国特色社会主义法治道路",
        publisher: "新华社",
        like_count: 774,
      },
      {
        id: 100,
        title: "2021年度法治人物——倪伯苍",
        publisher: "央视网",
        like_count: 108669,
      },
      {
        id: 101,
        title: "岁末年终 愿这份“温良”伴你乘风破浪",
        publisher: "央视新闻客户端",
        like_count: 1869934,
      },
    ],
  };

  render() {
    return (
      <div className="parent">
        <h1>今日要闻</h1>
        {this.state.list.map((item) => (
          <Child key={item.id} row={item} />
        ))}
      </div>
    );
  }
}

export default Parent;
