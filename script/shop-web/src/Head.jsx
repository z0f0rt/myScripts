import icon from "./logo.jpg";
export function Head(props) {
  return (
    <div className="container2">
      <img
        className={props.className}
        src={icon}
        width="100"
        height="100"
        alt="sorry"
      />{" "}
      <div className="magazine-name">
        <h1>OpelsTechnic</h1>{" "}
      </div>
      <div className="bascket"> ({props.bascketValue}) Корзина</div>
    </div>
  );
}
