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
    const countAll = localStorage.getItem("countAll");
    const countAllInit = products.map(() => undefined);
    if (countAll) {
      setCountAll(JSON.parse(countAll));
      return;
    }
    setCountAll(countAllInit);
  }, []);

  const setCountForIndex = (i, count) => {
    countAll[i] = count;
    setCountAll([...countAll]);
  };

  console.log(countAll);

  let bascketValue = countAll.reduce((acc, v) => {
    if (v === undefined) {
      return acc;
    }
    return acc + v;
  }, 0);

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout bascketValue={bascketValue} countAll={countAll} />}
      >
        <Route
          index
          element={
            <Products setCountForIndex={setCountForIndex} countAll={countAll} />
          }
        />
        <Route
          path={LINKS.BASKET}
          element={
            <Basket
              setCountForIndex={setCountForIndex}
              countAll={countAll}
              bascketValue={bascketValue}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
