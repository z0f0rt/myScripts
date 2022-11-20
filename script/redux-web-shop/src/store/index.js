import { createStore, combineReducers } from "redux";
import { firstReducer } from "./firstCountReducer";
import { secondReducer } from "./secondCountReducer";
import { thirdReducer } from "./thirdCountReducer";
import { fourthReducer } from "./fourthCountReducer";
import { fifthReducer } from "./fifthCountReducer";
import { sixthReducer } from "./sixthCountReducer";


const rootReducer = combineReducers({
  first: firstReducer,
  second: secondReducer,
  third: thirdReducer,
  four: fourthReducer,
  five: fifthReducer,
  six: sixthReducer,
});
export const store = createStore(rootReducer);
