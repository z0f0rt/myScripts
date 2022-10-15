
export function Product(props) {

  function incr() {
    props.setCount(props.count + 1);
  }
  function decr() {
    if (props.count >= 1) {
      props.setCount(props.count - 1);
    } else {
      props.setCount(props.count);
    }
  }
  return (
      <div className={props.className}>
        <img src={props.item} width="170" height="170" alt={props.sorry}/>
        <br />
        <br />
        {props.name}
        <br />
        <br />
        <div className="flex-btn">
        <button className="btn-right" onClick={incr}>+</button>
        <div>{props.count}</div>
        <button className="btn-left" onClick={decr}>-</button>
        </div>
      </div>
  );

}
