import { createStore } from "redux";
import habitReducer from "./reducers";

const store = createStore(habitReducer);

export default store;
