import { ADD_BADGE, FETCH_BADGES } from "../actions/badgeActions";

const initialState = {
  badges: [],
};

const badgeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BADGE:
      return {
        ...state,
        badges: [...state.badges, action.payload],
      };
    case FETCH_BADGES:
      return {
        ...state,
        badges: action.payload,
      };
    default:
      return state;
  }
};

export default badgeReducer;
