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
    let kek = searchParams.get("page");
    console.log(kek);
    const objForSend = {
      count: ELEMS_PER_PAGE,
      whichPageSend: 0,
    };

    let url = new URL("http://localhost:5000/products");
    Object.keys(objForSend).forEach((key) =>
      url.searchParams.append(key, objForSend[key])
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
        <Route
          index
          element={
            <Products
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
