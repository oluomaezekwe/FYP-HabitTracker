import { FETCH_TIPS } from "../actions/firebaseActions";

const initialState = {
  tips: [],
};

const tipReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TIPS:
      return {
        ...state,
        tips: action.payload,
      };
    default:
      return state;
  }
};

export default tipReducer;
