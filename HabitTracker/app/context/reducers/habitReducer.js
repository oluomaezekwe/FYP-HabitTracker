import { ADD_HABIT, DELETE_HABIT, TOGGLE_HABIT } from "../actions/habitActions";

const initialState = {
  habits: [],
  dates: {},
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
            title: action.payload.title,
            frequency: action.payload.frequency,
            days: action.payload.days,
            completed: false,
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
      const updatedHabits = state.habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      );
      const updatedDates = {
        ...state.dates,
        [date]: {
          ...state.dates[date],
          [id]: !state.dates[date]?.[id],
        },
      };
      return {
        ...state,
        habits: updatedHabits,
        dates: updatedDates,
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
