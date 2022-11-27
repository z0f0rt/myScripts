import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

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
      if (action.payload) {
        return { ...state, count: action.payload };
      }
      let newCount = [];
      return { ...state, count: newCount };
    case "INCREMENT":
      let counterDecrement = state.count.find((el) => el.id === action.payload);
      if (!counterDecrement) {
        let objectI = { count: 1, id: action.payload };
        return { ...state, count: [...state.count, objectI] };
      }
      counterDecrement.count++;
      return { ...state, count: [...state.count] };
    case "DECREMENT":
      let counterIncrement = state.count.find((el) => el.id === action.payload);
      if (counterIncrement && counterIncrement.count >= 1) {
        counterIncrement.count--;
        return { ...state, count: [...state.count] };
      }
      let objectD = { count: 0, id: action.payload };
      return { ...state, count: [...state.count, objectD] };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counters: productsCounterReducer,
  prodProps: productsProp,
});

const store = createStore(rootReducer, composeWithDevTools());

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
