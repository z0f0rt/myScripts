import React, { useEffect } from "react";
import "./App.css";
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
    const countLocal = localStorage.getItem("count");
    const countParse = JSON.parse(countLocal);
    const objectFour = { c: 3 };
    let url = new URL("http://localhost:5000");
    Object.keys(objectFour).forEach((key) =>
      url.searchParams.append(key, objectFour[key])
    );
    const products = productsFetch(url);
    products.then((res) => {
      dispatch({ type: "PAGES", payload: res.howManyPages });
      dispatch({ type: "PRODUCTS", payload: res.page });
      dispatch({
        type: "INIT",
        payload: countParse,
      });
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={LINKS.BASKET} element={<Basket />} />
        <Route index element={<Products />} />
      </Route>
    </Routes>
  );
}

export default App;
