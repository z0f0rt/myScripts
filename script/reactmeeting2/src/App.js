import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";
// import PostItem from "./components/PostItem";
// import Counter from "./components/Counter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript 1", body: "Description1" },
    { id: 2, title: "JavaScript 2", body: "Description2" },
    { id: 3, title: "JavaScript 3", body: "Description3" },
    { id: 4, title: "JavaScript 4", body: "Description4" },
  ]);

  const [title, setTitle] = useState("");

  const addNewPost = (event) => {
    event.preventDefault();
    console.log(title);
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Название поста"
        />
        <MyInput type="text" placeholder="Описание поста" />
        <MyButton >Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
