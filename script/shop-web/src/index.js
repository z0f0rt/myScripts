import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const initState = {
  count: [],
};

const startProducts = {
  products: [],
};

const productsProp = (state = startProducts, action) => {
  switch (action.type) {
    case "PRODUCTS":
      state.products = action.payload;
      return { ...state, products: [...state.products] };
    default:
      return state;
  }
};

const productsCounterReducer = (state = initState, action) => {
  switch (action.type) {
    case "INIT":
      if (action.payload.local) {
        return { ...state, count: action.payload.local };
      }
      let newCount = [];
      for (let i = 0; i < action.payload; i++) {
        newCount.push(undefined);
      }
      return { ...state, count: newCount };
    // case "INCREMENT":
    //   state.count[action.payload] += 1;
    //   return { ...state, count: [...state.count] };
    // case "DECREMENT":
    //   state.count[action.payload] -= 1;
    //   return { ...state, count: [...state.count] };
    case "SETCOUNTFORINDEX":
      state.count[action.payload.index] = action.payload.count;
      return { ...state, count: [...state.count] };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counters: productsCounterReducer,
  prodProps: productsProp,
});

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
