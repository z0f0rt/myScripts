import { useSelector, useDispatch } from "react-redux";
export function BasketProduct(props) {
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

function deleteEl() {
  dispatch({type: 'DELETE', payload: props.id})
}
  return (
    <div className="flex-wrapper">
      <div className="prod-basket">
        <div className="prod-inner-basket">
          <div className="name-basket">{props.name}</div>
          <div className="flex-btn">
            <button className="btn-right-basket" onClick={incr}>
              +
            </button>
            <div className="count-basket">{count}</div>
            <button className="btn-left-basket" onClick={decr}>
              -
            </button>
            <button
              className="delete-btn"
              onClick={deleteEl}
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
