import { Link } from "react-router-dom";
import { LINKS } from "./constants/links";
import icon from "./logo.jpg";
import { useSelector } from "react-redux";

export function Head(props) {
  const count = useSelector((state) => state.counters.count);

  let bascketValue = count.reduce((acc, v) => {
    if (v === undefined) {
      return acc;
    }
    return acc + v;
  }, 0);
  
  return (
    <div className="container2">
      <Link to={LINKS.HOME}>
        <img
          className={props.className}
          src={icon}
          width="100"
          height="100"
          alt="sorry"
        />
      </Link>
      <div className="magazine-name">
        <h1>OpelsTechnic</h1>
      </div>
      <Link to={LINKS.BASKET}>
        <div
          className="bascket"
          onClick={() => {
            console.log(count);
            localStorage.setItem("count", JSON.stringify(count));
          }}
        >
          {" "}
          ({bascketValue}) Корзина
        </div>
      </Link>
    </div>
  );
}
