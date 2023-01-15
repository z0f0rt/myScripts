import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Products } from "./Products";
import { Basket } from "./Basket";
import { LINKS } from "./constants/links";
import { useDispatch } from "react-redux";
import { ELEMS_PER_PAGE } from "./constants/pagination";
import { useSearchParams } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  function productsFetch(url) {
    return fetch(url).then((res) => res.json());
  }

  useEffect(() => {
    const countLocal = localStorage.getItem("count");
    const countParse = JSON.parse(countLocal);

    let page = searchParams.get("page");
    let min = searchParams.get("min");
    let max = searchParams.get("max");
    let value = searchParams.get("value");
    console.log(min, max);
    const objForSend = {
      count: ELEMS_PER_PAGE,
      page: page || 1,
      min,
      max,
      value,
    };

    let url = new URL("http://localhost:5000/products");
    Object.keys(objForSend).forEach(
      (key) => objForSend[key] && url.searchParams.append(key, objForSend[key])
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
