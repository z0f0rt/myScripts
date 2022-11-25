import { BasketProduct } from "./BasketProduct";
import { useSelector, useDispatch } from "react-redux";

export function Basket() {
  let finalScore = 0;
  const count = useSelector((state) => state.counters.count);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.prodProps.products);

  const setCountForIndex = (i, count) => {
    dispatch({ type: "SETCOUNTFORINDEX", payload: { index: i, count: count } });
  };

  let bascketValue = count.reduce((acc, v) => {
    if (v === undefined) {
      return acc;
    }
    return acc + v;
  }, 0);

  return (
    <div className="basket-products">
      {products.map((el, i) => {
        if (count[i] !== undefined && count[i] !== null) {
          let each = el.price * count[i];
          finalScore = finalScore + each;
          return (
            <BasketProduct
              key={products.id}
              name={el.name}
              item={el.image}
              count={count[i] || 0}
              setCount={(count) => setCountForIndex(i, count)}
            />
          );
        }
        return null;
      })}
      <div className="flex-basket">
        <div className="basket-items">Выбрано товаров:{bascketValue}</div>
        <div className="basket-score">Итого:{finalScore}</div>
      </div>
    </div>
  );
}
