import { products } from "./constants/products";
import { BasketProduct } from "./BasketProduct";
export function Basket(props) {
  return (
    <div className="basket-products">
      {products.map((el, i) => {
        if (props.countAll[i] !== undefined) {
          localStorage.setItem(`number${i}`, JSON.stringify(el));
          return (
            <BasketProduct
              key={i}
              name={el.name}
              item={el.image}
              count={props.countAll[i] || 0}
              setCount={(count) => props.setCountForIndex(i, count)}
            />
          );
        }
        return null;
      })}
    </div>
  );
}
