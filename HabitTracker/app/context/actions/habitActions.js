import { addDoc } from "firebase/firestore";
import { habitsRef } from "../../../api/config/firebase";

export const ADD_HABIT = "ADD_HABIT";
export const DELETE_HABIT = "DELETE_HABIT";
export const TOGGLE_HABIT = "TOGGLE_HABIT";

export const addHabit = (uid, title, frequency, days) => {
  return async (dispatch) => {
    try {
      // Add the habit to Firestore database
      await addDoc(habitsRef, {
        id: Date.now(),
        uid,
        title,
        frequency,
        days,
        completed: [],
      });

      dispatch({
        type: ADD_HABIT,
        payload: {
          id: Date.now(),
          uid,
          title,
          frequency,
          days,
          completed: [],
        },
      });
    } catch (error) {
      // Handle errors, if any
      console.error("Error adding habit to Firestore:", error);
    }
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
