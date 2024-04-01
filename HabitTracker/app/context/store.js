import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import habitReducer from "./reducers/habitReducer";
import tipReducer from "./reducers/tipReducer";
import badgeReducer from "./reducers/badgeReducer";

export default configureStore({
  reducer: {
    habit: habitReducer,
    tip: tipReducer,
    badge: badgeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
