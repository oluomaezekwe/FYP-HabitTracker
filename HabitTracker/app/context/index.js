// combine reducers
import { combineReducers } from "redux";
import habitReducer from "./reducers/habitReducer";

function rootReducer() {
  return combineReducers({ habit: habitReducer });
}

export default rootReducer;
