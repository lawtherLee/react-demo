import React from "react";
import * as ReactDom from "react-dom";

const ele = React.createElement("div", { className: "myDiv" }, [
  React.createElement("h1", null, "水果"),
  React.createElement("ul", null, [
    React.createElement("li", null, "apple"),
    React.createElement("li", null, "orange"),
  ]),
]);

ReactDom.render(ele, document.getElementById("root"));
