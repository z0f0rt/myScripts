import React, { useEffect } from "react";
import "./App.css";
// import { products } from "./constants/products";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Products } from "./Products";
import { Basket } from "./Basket";
import { LINKS } from "./constants/links";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  function productsFetch(url) {
    return fetch(url).then((res) => res.json());
  }

  useEffect(() => {
    const products = productsFetch("http://localhost:5000");
    products.then((res) => {
      
    });
    const countLocal = localStorage.getItem("count");
    const countParse = JSON.parse(countLocal);
    dispatch({
      type: "INIT",
      payload: { initCounts: products.length, local: countParse },
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Products />} />
        <Route path={LINKS.BASKET} element={<Basket />} />
      </Route>
    </Routes>
  );
}

export default App;
