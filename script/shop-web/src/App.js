import React, { useEffect } from "react";
import "./App.css";
import { products } from "./constants/products";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Products } from "./Products";
import { Basket } from "./Basket";
import { LINKS } from "./constants/links";
import { useDispatch } from "react-redux";

function App() {
  // const [countAll, setCountAll] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const countLocal = localStorage.getItem("count");
    const countParse = JSON.parse(countLocal);
    dispatch({
      type: "INIT",
      payload: { initCounts: products.length, local: countParse },
    });
    // const countAllInit = products.map(() => undefined);
    // if (countLocal) {
    //   setCountAll(JSON.parse(countAll));
    //   return;
    // }
    // setCountAll(countAllInit);
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
