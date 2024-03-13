export const ADD_HABIT = "ADD_HABIT";
export const DELETE_HABIT = "DELETE_HABIT";
export const TOGGLE_HABIT = "TOGGLE_HABIT";

export const addHabit = (title, frequency, days) => {
  return {
    type: ADD_HABIT,
    payload: { title, frequency, days },
  };
};

export const deleteHabit = (id) => {
  return {
    type: DELETE_HABIT,
    payload: { id },
  };
};

export const toggleHabit = (id, date) => {
  return {
    type: TOGGLE_HABIT,
    payload: { id, date },
  };
};
