import { products } from "./constants/products";
import { BasketProduct } from "./BasketProduct";

export function Basket(props) {
  let finalScore = 0;
  
  return (
    <div className="basket-products">
      {products.map((el, i) => {
        if (props.countAll[i] !== undefined && props.countAll[i] !== null ) {
          let each = el.price * props.countAll[i];
          finalScore = finalScore + each;
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
      <div className = 'flex-basket'>
      <div className="basket-items">Выбрано товаров:{props.bascketValue}</div>
      <div className="basket-score">Итого:{finalScore}</div>
      </div>
    </div>
  );
}
