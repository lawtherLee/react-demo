import React, { Component } from "react";
import "../css/index.css";
import classNames from "classnames";

export default class Comment extends Component {
  state = {
    // 当前用户
    user: {
      name: "清风徐来",
      vip: true,
      avatar: "https://static.youku.com/lvip/img/avatar/310/6.png",
    },
    // 评论列表
    comments: [
      {
        id: 100,
        name: "__RichMan",
        avatar: "https://r1.ykimg.com/051000005BB36AF28B6EE4050F0E3BA6",
        content:
          "这阵容我喜欢😍靳东&闫妮，就这俩名字，我就知道是良心剧集...锁了🔒",
        time: "2021/10/12 10:10:23",
        vip: true,
        collect: false,
      },
      {
        id: 101,
        name: "糖蜜甜筒颖",
        avatar:
          "https://image.9xsecndns.cn/image/uicon/712b2bbec5b58d6066aff202c9402abc3370674052733b.jpg",
        content:
          "突围神仙阵容 人民的名义第三部来了 靳东陈晓闫妮秦岚等众多优秀演员实力派 守护人民的财产 再现国家企业发展历程",
        time: "2021/09/23 15:12:44",
        vip: false,
        collect: true,
      },
      {
        id: 102,
        name: "清风徐来",
        avatar: "https://static.youku.com/lvip/img/avatar/310/6.png",
        content:
          "第一集看的有点费力，投入不了，闫妮不太适合啊，职场的人哪有那么多表情，一点职场的感觉都没有",
        time: "2021/07/01 00:30:51",
        vip: true,
        collect: false,
      },
    ],
    content: "",
  };

  // 输入框
  changeContent = (e) => {
    if (e.target.value.length > 100) return;
    this.setState({
      content: e.target.value,
    });
  };
  // 发布评论
  sendComment = () => {
    const { content, comments, user } = this.state;
    if (!content.length) return alert("请输入内容");
    this.setState({
      comments: [
        {
          id: Math.random(),
          content,
          time: new Date().toLocaleString(),
          collect: false,
          ...user,
        },
        ...comments,
      ],
    });
  };

  // 删除评论
  delComment = (id) => {
    this.setState({
      comments: this.state.comments.filter((item) => item.id !== id),
    });
  };

  // 收藏
  collectComment = (id) => {
    this.setState({
      comments: this.state.comments.map((item) => {
        if (item.id === id) {
          return { ...item, collect: !item.collect };
        } else {
          return item;
        }
      }),
    });
  };

  render() {
    const { user, comments, content } = this.state;
    return (
      <div className="comments">
        <h3 className="comm-head">评论</h3>
        <div className="comm-input">
          <textarea
            value={content}
            onChange={this.changeContent}
            placeholder="爱发评论的人，运气都很棒"
          ></textarea>
          <div className="foot">
            <div className="word">{content.length}/100</div>
            <div className="btn" onClick={this.sendComment}>
              发表评论
            </div>
          </div>
        </div>
        <h3 className="comm-head">
          热门评论<sub>(5)</sub>
        </h3>
        <ul className="comm-list">
          {comments.map((item) => {
            return (
              <li className="comm-item" key={item.id}>
                <div
                  className="avatar"
                  style={{ backgroundImage: `url(${item.avatar})` }}
                ></div>
                <div className="info">
                  <p className={classNames("name", { vip: item.vip })}>
                    {item.name}
                    {item.vip ? (
                      <img
                        alt=""
                        src="https://gw.alicdn.com/tfs/TB1c5JFbGSs3KVjSZPiXXcsiVXa-48-48.png"
                      />
                    ) : (
                      ""
                    )}
                  </p>
                  <p className="time">
                    {item.time}
                    <span
                      onClick={() => this.collecA3tComment(item.id)}
                      className={`iconfont icon-collect${
                        item.collect ? "-sel" : ""
                      }`}
                    ></span>
                    {item.name === user.name ? (
                      <span
                        onClick={() => this.delComment(item.id)}
                        className="del"
                      >
                        删除
                      </span>
                    ) : null}
                  </p>
                  <p>{item.content} </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
