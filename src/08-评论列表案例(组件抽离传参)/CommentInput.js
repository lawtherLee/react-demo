import React, { Component } from "react";

class CommentInput extends Component {
  state = {
    content: "",
  };
  contentChange = (e) => {
    this.setState({
      content: e.target.value.trim(),
    });
  };

  sendComment = () => {
    const { content } = this.state;
    if (content === "") return alert("请输入内容");
    this.props.addComments(this.state.content);
    this.setState({
      content: "",
    });
  };

  render() {
    const { content } = this.state;
    return (
      <div className="comm-input">
        <textarea
          value={content}
          onChange={this.contentChange}
          placeholder="爱发评论的人，运气都很棒"
        ></textarea>
        <div className="foot">
          <div className="word">{content.length}/100</div>
          <div className="btn" onClick={this.sendComment}>
            发表评论
          </div>
        </div>
      </div>
    );
  }
}

export default CommentInput;
