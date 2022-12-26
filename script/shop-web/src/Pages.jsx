import { useDispatch } from "react-redux";

export function Pages(props) {
  const dispatch = useDispatch();

  function productsFetch(url) {
    return fetch(url).then((res) => res.json());
  }
  let whichPageSend = props.index;
  function getProductsOfNewPage() {
    const objForSend = {
      count: 3,
      whichPageSend: whichPageSend,
    };

    let url = new URL("http://localhost:5000/get-new-page");
    Object.keys(objForSend).forEach((key) =>
      url.searchParams.append(key, objForSend[key])
    );
    let newPage = productsFetch(url);
    newPage.then((res) => {
      console.log(res);
      dispatch({ type: "PRODUCTS", payload: res.page });
    });
  }
  return <div onClick={getProductsOfNewPage}>{props.el}</div>;
}
