import { Product } from "./Product";
import { products } from "./constants/products";
export function Products(props) {
    return (
        <div className="WindowProduct1">
        {products.map((el, i) => {
          return (
            <Product
              name={el.name}
              item={el.image}
              count={props.countAll[i] || 0}
              setCount={(count) => props.setCountForIndex(i, count)}
            />
          );
        })}
      </div>
    );
}
