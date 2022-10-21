import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import { products } from "./constants/products";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Products } from "./Products";
import { Basket } from "./Basket";
import { LINKS } from "./constants/links";

function App() {
  const [countAll, setCountAll] = useState([]);

  useEffect(() => {
    const countAllInit = products.map(() => undefined);
    setCountAll(countAllInit);
  }, []);

  const setCountForIndex = (i, count) => {
    countAll[i] = count;
    setCountAll([...countAll]);
  };

  let bascketValue = countAll.reduce((acc, v) => {
    if (v === undefined) {
      return acc;
    }
    return acc + v;
  }, 0);

  return (
    <Routes>
      <Route path="/" element={<Layout bascketValue={bascketValue} />}>
        <Route
          index
          element={
            <Products setCountForIndex={setCountForIndex} countAll={countAll} />
          }
        />
        <Route
          path={LINKS.BASKET}
          element={
            <Basket setCountForIndex={setCountForIndex} countAll={countAll} />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
