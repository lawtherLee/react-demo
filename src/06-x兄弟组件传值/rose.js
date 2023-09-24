import { Component } from "react";

class Rose extends Component {
  render() {
    const { msg } = this.props;
    return <div>rose:{msg}</div>;
  }
}

export default Rose;
