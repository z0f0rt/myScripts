export function BasketProduct(props) {

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
      <div className='prod'> 
        <div className='prod-inner'>
          <div className="name-basket">
          {props.name}
          </div>
          <div className="flex-btn">
          <button className="btn-right-basket" onClick={incr}>+</button>
          <div className="count-basket">{props.count}</div>
          <button className="btn-left-basket" onClick={decr}>-</button>
          </div>
        </div>
        </div>
    );
  
  }