import React, { useState } from "react";

function App() {
  const [counts, setCount] = useState(0);
  const kek = 0;
  function increment() {
    setCount(counts + 1);
  }

  function decrement() {
    setCount(counts - 1);
  }

  function multiply2() {
    setCount(counts * 2);
  }

  function squareroot() {
    setCount(Math.sqrt(counts));
  }

  function clear() {
    setCount(counts * kek);
  }
  return (
    <div className="App">
      <h1>{counts}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={multiply2}>x2</button>
      <button onClick={squareroot}>&radic;</button>
      <button onClick={clear}>clear</button>
    </div>
  );
}

export default App;
