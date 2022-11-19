import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const state1 = useSelector((state) => state.first.count1);
  const state2 = useSelector((state) => state.second.count2);
  const state3 = useSelector((state) => state.third.count3);
  const state4 = useSelector((state) => state.four.count4);
  const state5 = useSelector((state) => state.five.count5);
  const state6 = useSelector((state) => state.six.count6);

  const increment1 = () => {
    dispatch({ type: "INCREMENT1", payload: 1 });
  };

  const decrement2 = () => {
    dispatch({ type: "DECREMENT2", payload: 1 });
  };

  const increment3 = () => {
    dispatch({ type: "INCREMENT3", payload: 1 });
  };

  const decrement4 = () => {
    dispatch({ type: "DECREMENT4", payload: 1 });
  };

  const increment5 = () => {
    dispatch({ type: "INCREMENT5", payload: 1 });
  };

  const decrement6 = () => {
    dispatch({ type: "DECREMENT6", payload: 1 });
  };

  const increment7 = () => {
    dispatch({ type: "INCREMENT7", payload: 1 });
  };

  const decrement8 = () => {
    dispatch({ type: "DECREMENT8", payload: 1 });
  };

  const increment9 = () => {
    dispatch({ type: "INCREMENT9", payload: 1 });
  };

  const decrement10 = () => {
    dispatch({ type: "DECREMENT10", payload: 1 });
  };

  const increment11 = () => {
    dispatch({ type: "INCREMENT11", payload: 1 });
  };

  const decrement12 = () => {
    dispatch({ type: "DECREMENT12", payload: 1 });
  };

  return (
    <div className="App">
      <div>{state1}</div>
      <button onClick={increment1}>+</button>
      <button onClick={decrement2}>-</button>
      <div>{state2}</div>
      <button onClick={increment3}>+</button>
      <button onClick={decrement4}>-</button>
      <div>{state3}</div>
      <button onClick={increment5}>+</button>
      <button onClick={decrement6}>-</button>
      <div>{state4}</div>
      <button onClick={increment7}>+</button>
      <button onClick={decrement8}>-</button>
      <div>{state5}</div>
      <button onClick={increment9}>+</button>
      <button onClick={decrement10}>-</button>
      <div>{state6}</div>
      <button onClick={increment11}>+</button>
      <button onClick={decrement12}>-</button>
    </div>
  );
}

export default App;
