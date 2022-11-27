import sorry from "./sorry.png";
import { useSelector, useDispatch } from "react-redux";

export function Product(props) {

  const dispatch = useDispatch();

  function incr() {
    dispatch({ type: "INCREMENT", payload: props.id });
  }

  function decr() {
    dispatch({ type: "DECREMENT", payload: props.id });
  }

  const count = useSelector((state) => {
    let findCounter = state.counters.count.find((el) => el.id === props.id);
    if (!findCounter) {
      return 0;
    }
    return findCounter.count;
  });

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
          <div>{count}</div>
          <button className="btn-left" onClick={decr}>
            -
          </button>
          <button
            className="delete-btn-main"
            onClick={() => {
              props.setCount(undefined);
            }}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}
