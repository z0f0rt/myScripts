import React, { useState } from "react";
import "./styles/App.css";
import PostItem from "./components/PostItem";
// import Counter from "./components/Counter";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript 1", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
    { id: 4, title: "JavaScript 4", body: "Description" }
  ]);



  return (
    <div className="App">
      {posts.map((post, index )=> 
        <PostItem post={post} key ={post.id}/>
      )}
    </div>
  );
}

export default App;
