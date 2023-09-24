export default function CommentList({
  comments,
  active,
  user,
  delComment,
  collectComment,
}) {
  const newComments = [...comments];
  if (active === "time") {
    newComments.sort((a, b) => a.time - b.time);
  } else {
    newComments.sort((a, b) => a.id - b.id);
  }
  return (
    <ul className="comm-list">
      {newComments.map((item) => (
        <li key={item.id} className="comm-item">
          <div
            className="avatar"
            style={{ backgroundImage: `url(${item.avatar})` }}
          ></div>
          <div className="info">
            <p className="name vip">
              {item.name}
              <img
                alt=""
                src="https://gw.alicdn.com/tfs/TB1c5JFbGSs3KVjSZPiXXcsiVXa-48-48.png"
              />
            </p>
            <p className="time">
              {item.time.toLocaleString("chinese", { hour12: false })}
              <span
                onClick={() => collectComment(item.id)}
                className={`iconfont icon-collect${item.collect ? "-sel" : ""}`}
              ></span>
              {user.name === item.name ? (
                <span onClick={() => delComment(item.id)} className="del">
                  删除
                </span>
              ) : null}
            </p>
            <p>{item.content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
