import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import habitReducer from "./reducers/habitReducer";

export default configureStore({
  reducer: {
    habit: habitReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
