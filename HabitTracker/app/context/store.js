import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "./reducers/habitReducer";

export default configureStore({
  reducer: {
    habit: habitReducer,
  },
});
