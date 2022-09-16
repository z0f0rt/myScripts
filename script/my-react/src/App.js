import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const kek = 0;

  function increment() {
    setCount(count + 1);
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function multiply2() {
    setCount(count * 2);
  }

  function root() {
    if (count > 0) {
      setCount(Math.sqrt(count));
    } else {
      alert("Ошибка");
    }
  }

  function clear() {
    setCount(count * kek);
  }
  function square() {
    setCount(count ** 2);
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <input value={count}></input>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={multiply2}>x2</button>
      <button onClick={root}>&radic;</button>
      <button onClick={square}>square</button>
      <button onClick={clear}>clear</button>
    </div>
  );
}

export default App;
