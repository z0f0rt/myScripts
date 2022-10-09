import React from "react";
import "./App.css";
import { Head } from "./Head";
import { Products } from "./Products";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  function sum() {
    setCount(count + 1);
  }
   function minus() {
    setCount(count - 1);
  }
  return (
    <div className="App">
      <div className="container1">
        <Head className="logo" />
        <div className="bascket"> ({count}) Корзина</div>
      </div>
      <Products
        WindowProducts="WindowProducts"
        prod1="prod1"
        prod2="prod2"
        prod3="prod3"
        prod4="prod4"
        prod5="prod5"
        prod6="prod6"
        count={count}
        setCount={setCount}
      />
    </div>
  );
}

export default App;
