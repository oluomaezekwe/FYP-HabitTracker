import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import habitReducer from "./reducers/habitReducer";
import tipReducer from "./reducers/tipReducer";

export default configureStore({
  reducer: {
    habit: habitReducer,
    tip: tipReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
