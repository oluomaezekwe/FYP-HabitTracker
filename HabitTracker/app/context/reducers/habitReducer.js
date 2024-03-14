import { ADD_HABIT, DELETE_HABIT, TOGGLE_HABIT } from "../actions/habitActions";
import { FETCH_HABITS } from "../actions/firebaseActions";
//jb

const initialState = {
  habits: [],
};

const habitReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HABIT:
      return {
        ...state,
        habits: [...state.habits, action.payload],
      };
    case DELETE_HABIT:
      return {
        ...state,
        habits: state.habits.filter((habit) => habit.id !== action.payload.id),
      };
    case TOGGLE_HABIT:
      const { id, date } = action.payload;
      return {
        ...state,
        habits: state.habits.map((habit) =>
          habit.id === id
            ? {
                ...habit,
                completed: [...habit.completed, date],
              }
            : habit
        ),
      };
    case FETCH_HABITS:
      return {
        ...state,
        habits: action.payload,
      };
    default:
      return state;
  }
};

export default habitReducer;
