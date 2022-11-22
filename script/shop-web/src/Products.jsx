import { Product } from "./Product";
import { useSelector, useDispatch } from "react-redux";

export function Products() {
  const count = useSelector((state) => state.counters.count);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.prodProps.products);
  const setCountForIndex = (i, count) => {
    dispatch({ type: "SETCOUNTFORINDEX", payload: { index: i, count: count } });
    // countAll[i] = count;
    // setCountAll([...countAll]);
  };

  return (
    <div className="WindowProduct1">
      {products.map((el, i) => {
        return (
          <Product
            key={i}
            name={el.name}
            item={el.image}
            count={count[i] || 0}
            setCount={(count) => setCountForIndex(i, count)}
          />
        );
      })}
    </div>
  );
}
