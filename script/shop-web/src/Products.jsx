import { Product } from "./Product";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Pages } from "./Pages";
export function Products() {
  const products = useSelector((state) => state.prodProps.products);
  const pages = useSelector((state) => state.pagersCount);
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

  let kek = [];
  for (let i = 1; i <= pages; i++) {
    kek.push(i);
  }
  return (
    <div>
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
      <div className="WindowProduct1">
        {products.map((el, i) => {
          return (
            <Product
              index={i}
              key={el.id}
              id={el.id}
              name={el.name}
              item={el.image}
              price={el.price}
            />
          );
        })}
      </div>
      <div>
        {kek.map((el, i) => {
          return <Pages el={el} key={i} index={i} pages={pages} />;
        })}
      </div>
    </div>
  );
}
