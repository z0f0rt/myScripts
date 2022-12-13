import React, { useState} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import { PostForm } from "./components/PostForm";
// import PostItem from "./components/PostItem";
// import Counter from "./components/Counter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript 1", body: "Description1" },
    { id: 2, title: "JavaScript 2", body: "Description2" },
    { id: 3, title: "JavaScript 3", body: "Description3" },
    { id: 4, title: "JavaScript 4", body: "Description4" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (post) => {
    setPosts(posts.filter((e) => e.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length !== 0 ? (
        <PostList deletePost={deletePost} posts={posts} title="Посты про JS" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Постов нет!</h1>
      )}
    </div>
  );
}

export default App;
