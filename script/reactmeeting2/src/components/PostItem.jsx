import React from "react";
import MyButton from "./UI/Button/MyButton";

function PostItem(props) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => props.deletePost(props.post)}>
          Удалить
        </MyButton>
      </div>
    </div>
  );
}

export default PostItem;
