import { Link } from "react-router-dom";
import { LINKS } from "./constants/links";
import logo from "./logo.png";
import { useSelector } from "react-redux";

export function Head(props) {
  const count = useSelector((state) => state.counters.count);

  let bascketValue = count.reduce((acc, v) => {
    if (v.count === undefined) {
      return acc;
    }
    return acc + v.count;
  }, 0);

  return (
    <div className="container2">
      <Link to={LINKS.HOME}>
        <img
          className={props.className}
          src={logo}
          width="100"
          height="100"
          alt="sorry"
        />
      </Link>
      <div className="magazine-name">
        <h1>Device Discount</h1>
      </div>
      <h3>Its a fine day full of opportunity!</h3>
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
