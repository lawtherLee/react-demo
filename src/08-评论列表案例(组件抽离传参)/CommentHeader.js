import React from "react";

export default function CommentHeader({ active, setActive }) {
  return (
    <h3 className="comm-head">
      热门评论<sub>(5)</sub>
      <span
        onClick={() => setActive("default")}
        className={active === "default" ? "active" : ""}
      >
        默认
      </span>
      <span
        onClick={() => setActive("time")}
        className={active === "time" ? "active" : ""}
      >
        时间
      </span>
    </h3>
  );
}
