
function updateState(state, action) {
  if (action.type === "INCREMENT") {
    return state + action.amount;
  } else if (action.type === "DECREMENT") {
    return state - action.amount;
  } else {
    return state;
  }
}
class Store {
  constructor(updateState, state) {
    this._updateState = updateState;
    this._state = state;
    this._callbacks = [];
  }

  get state() {
    return this._state;
  }
  update(action) {
    this._state = this._updateState(this._state, action);
    this._callbacks.forEach((callback) => callback());
  }

  subscribe(callback) {
    this._callbacks.push(callback);
    return () =>
      (this._callbacks = this._callbacks.filter((cb) => cb !== callback));
  }
}
const store = new Store(updateState, 0);

const incrementAction = { type: "INCREMENT", amount: 5 };
const decrementAction = { type: "DECREMENT", amount: 3 };

const unsubscribe1 = store.subscribe(() =>
  console.log("State changed 1", store.state)
);
console.log(unsubscribe1());
// // const unsubscribe3 = store.subscribe(() =>
// //   console.log("State changed 3", store.state)
// // );
// store.update(incrementAction);
// unsubscribe1();

// const unsubscribe2 = store.subscribe(() =>
//   console.log("State changed 2", store.state)
// );
// store.update(decrementAction);
// unsubscribe2();
// store.update({});
