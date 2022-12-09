import React, {useState} from "react";
import MyInput from "./Input/MyInput";
import MyButton from "./Button/MyButton";

export const PostForm = () => {
  const [post, setPost] = useState({ title: "", body: "" });
  return (
    <div>
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    </div>
  );
};
