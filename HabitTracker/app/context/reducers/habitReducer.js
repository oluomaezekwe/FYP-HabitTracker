import { ADD_HABIT, DELETE_HABIT, TOGGLE_HABIT } from "../actions/habitActions";

const initialState = {
  habits: [],
};

const habitReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HABIT:
      return {
        ...state,
        habits: [
          ...state.habits,
          {
            id: Date.now(),
            uid: action.payload.uid,
            title: action.payload.title,
            frequency: action.payload.frequency,
            days: action.payload.days,
            completed: [],
          },
        ],
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
                completed: habit.completed.includes(date)
                  ? habit.completed.filter((d) => d !== date) // Remove date if already completed
                  : [...habit.completed, date], // Add date if not completed
              }
            : habit
        ),
      };

    // return {
    //   ...state,
    //   habits: state.habits.map((habit) =>
    //     habit.id === action.payload.id
    //       ? { ...habit, completed: !habit.completed }
    //       : habit
    //   ),
    // };
    default:
      return state;
  }
};

export default habitReducer;
