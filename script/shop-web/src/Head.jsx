import { Link } from "react-router-dom";
import { LINKS } from "./constants/links";
import icon from "./logo.jpg";
export function Head(props) {
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
        <div className="bascket"> ({props.bascketValue}) Корзина</div>
      </Link>
    </div>
  );
}
