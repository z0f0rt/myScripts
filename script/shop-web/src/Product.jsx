import sorry from "./sorry.png";

export function Product(props) {
  function incr() {
    props.setCount(props.count + 1);
  }

  function decr() {
    if (props.count > 1) {
      props.setCount(props.count - 1);
    } else {
      props.setCount(undefined);
    }
  }

  return (
    <div className="prod">
      <div className="prod-inner">
        <img src={props.item} width="170" height="170" alt={sorry} />
        <br />
        <br />
        {props.name}
        <br />
        <br />
        <div className="flex-btn">
          <button className="btn-right" onClick={incr}>
            +
          </button>
          <div>{props.count}</div>
          <button className="btn-left" onClick={decr}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}
