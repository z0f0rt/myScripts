import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { ELEMS_PER_PAGE } from "./constants/pagination";

export function Page(props) {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   let resultPage = searchParams.get("page");
    
  // }, []);

  function productsFetch(url) {
    return fetch(url).then((res) => res.json());
  }

  function getProductsOfNewPage() {
    let whichPageSend = props.pageNumber - 1;

    const objForSend = {
      count: ELEMS_PER_PAGE,
      whichPageSend: whichPageSend,
    };

    let url = new URL("http://localhost:5000/products");
    Object.keys(objForSend).forEach((key) =>
      url.searchParams.append(key, objForSend[key])
    );

    searchParams.set("page", props.pageNumber);
    setSearchParams(searchParams);

    let newPage = productsFetch(url);
    newPage.then((res) => {
      console.log(res);
      dispatch({ type: "PRODUCTS", payload: res.page });
    });
  }
  return (
    <div className="even-page-number" onClick={getProductsOfNewPage}>
      {props.pageNumber}
    </div>
  );
}
