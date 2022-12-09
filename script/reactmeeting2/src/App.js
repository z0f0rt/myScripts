import React, { useState, useRef } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import { PostForm } from "./components/UI/PostForm";
// import PostItem from "./components/PostItem";
// import Counter from "./components/Counter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript 1", body: "Description1" },
    { id: 2, title: "JavaScript 2", body: "Description2" },
    { id: 3, title: "JavaScript 3", body: "Description3" },
    { id: 4, title: "JavaScript 4", body: "Description4" },
  ]);

 

  const addNewPost = (event) => {
    event.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "" });
  };

  return (
    <div className="App">
      <PostForm />
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
