import { Product } from "./Product";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Page } from "./Page";
import { ELEMS_PER_PAGE } from "./constants/pagination";

export function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.prodProps.products);
  const pages = useSelector((state) => state.pagersCount);

  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");

  function productsFetch(url) {
    return fetch(url).then((res) => res.json());
  }
  const sendRequiest = () => {
    const filtersForm = { count: ELEMS_PER_PAGE, whichPageSend: 0 };
    if (secondInput === "" && firstInput === "") {
      return;
    }
    if (firstInput !== "") {
      filtersForm.first = Number(firstInput);
    }
    if (secondInput !== "") {
      filtersForm.second = Number(secondInput);
    }
    // props.setSearchParams(filtersForm);
    let url = new URL("http://localhost:5000/price-filter");
    Object.keys(filtersForm).forEach((key) =>
      url.searchParams.append(key, filtersForm[key])
    );
    let newProducts = productsFetch(url);
    newProducts.then((res) => {
      console.log(res);
      dispatch({ type: "PRODUCTS", payload: res });
    });
  };

  let pagesArray = [];
  for (let i = 1; i <= pages; i++) {
    pagesArray.push(i);
  }

  return (
    <div>
      <div className="form-filter-value">
      <div className="name-filter-value">Фильтрация по цене</div>
      <div className="filter-value">
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
      </div>
      <div className="window-product-1">
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
      <div className="pagination">
        {pagesArray.map((el, i) => {
          return (
            <Page
              pageNumber={el}
              key={i}
              pages={pages}
              // searchParams={props.searchParams}
              // setSearchParams={props.setSearchParams}
            />
          );
        })}
      </div>
    </div>
  );
}
