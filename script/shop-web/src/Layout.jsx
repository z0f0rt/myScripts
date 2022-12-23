import { Outlet } from "react-router-dom";
import { Head } from "./Head";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
export function Layout() {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const dispatch = useDispatch();

  function productsFetch(url) {
    return fetch(url).then((res) => res.json());
  }
  const sendRequiest = () => {
    const filtersForm = {};
    if (secondInput === "" && firstInput === "") {
      return;
    }
    if (firstInput !== "") {
      filtersForm.first = Number(firstInput);
    }
    if (secondInput !== "") {
      filtersForm.second = Number(secondInput);
    }
    let url = new URL("http://localhost:5000/price-filter");
    Object.keys(filtersForm).forEach((key) =>
      url.searchParams.append(key, filtersForm[key])
    );
    let newProducts = productsFetch(url);
    newProducts.then((res) => {
      dispatch({ type: "PRODUCTS", payload: res });
    });
  };

  return (
    <div className="App">
      <Head className="logo" />
      <div>
        <input
          type="text"
          value={firstInput}
          onChange={(e) => setFirstInput(e.target.value)}
        />{" "}
        -{" "}
        <input
          type="text"
          value={secondInput}
          onChange={(e) => setSecondInput(e.target.value)}
        />{" "}
        <button onClick={sendRequiest}>Применить</button>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
