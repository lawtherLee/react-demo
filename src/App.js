import React, { Component } from "react";
import PropTypes from "prop-types";

class App extends Component {
  render() {
    return (
      <div>
        <Mouse>
          {(mouse) => (
            <p>
              鼠标位置：{mouse.x} {mouse.y}
            </p>
          )}
        </Mouse>
      </div>
    );
  }
}

class Mouse extends Component {
  state = {
    x: 0,
    y: 0,
  };

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  }

  render() {
    return this.props.children(this.state);
  }
}

Mouse.propTypes = {
  children: PropTypes.func.isRequired,
};
export default App;
