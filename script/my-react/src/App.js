import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [notification, setNotification] = useState("");
  function increment() {
    setCount(count + 1);
    setNotification();
  }

  function decrement() {
    setCount(count - 1);
    setNotification();
  }

  function multiply2() {
    setCount(count * 2);
    setNotification();
  }

  function root() {
    if (count >= 0) {
      setCount(Math.sqrt(count));
      setNotification();
    } else {
      setNotification("Ошибка");
      // alert("Ошибка, нельзя извлекать корень из отрицательного числа");
    }
  }
  function clear() {
    setCount(0);
    setNotification();
  }
  function square() {
    setCount(count ** 2);
    setNotification();
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={multiply2}>x2</button>
      <button onClick={root}>&radic;</button>
      <button onClick={square}>square</button>
      <button onClick={clear}>clear</button>
      <h1>{notification}</h1>
    </div>
  );
}

export default App;
