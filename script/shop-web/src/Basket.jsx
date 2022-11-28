import { BasketProduct } from "./BasketProduct";
import { useSelector, useDispatch } from "react-redux";

export function Basket() {
  let finalScore = 0;
  const count = useSelector((state) => state.counters.count);
  console.log(count);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.prodProps.products);

  let bascketValue = count.reduce((acc, v) => {
    if (v.count === undefined) {
      return acc;
    }
    return acc + v.count;
  }, 0);

  let productsFilter = products.filter((el) => {
    return count.some((countEl) => countEl.id === el.id);
  //   for (let i = 0; i < count.length; i++) {
  //     if (el.id === count[i].id) {
  //       return true;
  //     }
  //   }
  //   return false;
  });

  return (
    <div className="basket-products">
      {productsFilter.map(
        (el) =>{
          return (
            <BasketProduct
              key={el.id}
              id={el.id}
              name={el.name}
              item={el.image}
            />
          );
        }
        //   return null;
        // }
      )}
      <div className="flex-basket">
        <div className="basket-items">Выбрано товаров:{bascketValue}</div>
        <div className="basket-score">Итого:{finalScore}</div>
      </div>
    </div>
  );
}
