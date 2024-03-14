import { addDoc, deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { habitsRef } from "../../../api/config/firebase";

export const ADD_HABIT = "ADD_HABIT";
export const DELETE_HABIT = "DELETE_HABIT";
export const TOGGLE_HABIT = "TOGGLE_HABIT";

export const addHabit = (uid, title, frequency, days) => {
  return async (dispatch) => {
    try {
      // Add the habit to Firestore database
      const habitDocRef = await addDoc(habitsRef, {
        uid,
        title,
        frequency,
        days,
        completed: [],
      });

      // Dispatch an action to update the local Redux store with the added habit data
      dispatch({
        type: ADD_HABIT,
        payload: {
          id: habitDocRef.id, // Use the generated ID as the habit ID
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
  return async (dispatch) => {
    try {
      // Ensure id is a valid string
      if (!id || typeof id !== "string") {
        throw new Error("Invalid habit ID");
      }

      // Delete the habit from Firestore database
      await deleteDoc(doc(habitsRef, id));

      // Dispatch an action to delete the habit from the Redux store
      dispatch({
        type: DELETE_HABIT,
        payload: { id },
      });
    } catch (error) {
      // Handle errors
      console.error("Error deleting habit from Firestore:", error.message);
    }
  };
};

export const toggleHabit = (id, date) => {
  return async (dispatch) => {
    try {
      // Get reference to the habit document in Firestore
      const habitDocRef = doc(habitsRef, id);

      // Fetch the habit document
      const habitDocSnapshot = await getDoc(habitDocRef);

      if (habitDocSnapshot.exists()) {
        // Get the habit data
        const habitData = habitDocSnapshot.data();

        // Toggle the completion status
        const updatedCompleted = [...habitData.completed, date];

        // Update the habit document in Firestore with the new completed array
        await setDoc(habitDocRef, {
          ...habitData,
          completed: updatedCompleted,
        });

        // Dispatch an action to update the local Redux store with the toggled habit data
        dispatch({
          type: TOGGLE_HABIT,
          payload: { id, date },
        });
      } else {
        console.error("Habit document does not exist");
      }
    } catch (error) {
      // Handle errors, if any
      console.error("Error toggling habit in Firestore:", error);
    }
  };
};
