import { Product } from "./Product";
import { useSelector } from "react-redux";

export function Products() {
  const products = useSelector((state) => state.prodProps.products);

  return (
    <div className="WindowProduct1">
      {products.map((el, i) => {
        return (
          <Product
            index={i}
            key={el.id}
            id={el.id}
            name={el.name}
            item={el.image}
            // count={count[i] || 0}
            // setCount={(count) => setCountForIndex(i, count)}
          />
        );
      })}
    </div>
  );
}
