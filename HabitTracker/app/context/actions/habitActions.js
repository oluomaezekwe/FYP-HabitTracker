import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { database } from "../../../api/config/firebase";

export const ADD_HABIT = "ADD_HABIT";
export const DELETE_HABIT = "DELETE_HABIT";
export const TOGGLE_HABIT = "TOGGLE_HABIT";
export const FETCH_HABITS = "FETCH_HABITS";

export const addHabit = (uid, frequency, days) => {
  return async (dispatch) => {
    const collRef = collection(database, `userData/${uid}/habits`);

    try {
      // Add the habit to Firestore database
      const habitDocRef = await addDoc(collRef, {
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
          id: habitDocRef.id, // Use the Firestore generated ID as the habit ID
          uid,
          title,
          frequency,
          days,
          completed: [],
        },
      });
    } catch (error) {
      console.error(
        "Error adding habit to user collection in Firestore:",
        error
      );
    }
  };
};

export const deleteHabit = (id, uid) => {
  return async (dispatch) => {
    const collRef = collection(database, `userData/${uid}/habits`);

    try {
      // Ensure id is a valid string
      if (!id || typeof id !== "string") {
        throw new Error("Invalid habit ID");
      }

      // Delete the habit from Firestore database
      await deleteDoc(doc(collRef, id));

      // Dispatch an action to delete the habit from the Redux store
      dispatch({
        type: DELETE_HABIT,
        payload: { id },
      });
    } catch (error) {
      console.error("Error deleting habit from Firestore:", error.message);
    }
  };
};

export const toggleHabit = (id, uid, date) => {
  return async (dispatch) => {
    const collRef = collection(database, `userData/${uid}/habits`);

    try {
      const habitDocRef = doc(collRef, id);
      // Get reference to the habit document in Firestore

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
      console.error("Error toggling habit in Firestore:", error);
    }
  };
};

export const fetchHabits = (uid) => {
  return async (dispatch) => {
    const collRef = collection(database, `userData/${uid}/habits`);
    try {
      // Fetch habits data from Firestore
      const querySnapshot = await getDocs(collRef);

      // Extract habits data from the query snapshot
      const habits = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Fetched habits from Firestore. Habits:", habits);

      // Dispatch an action to update the local Redux store with the fetched habits data
      dispatch({ type: "FETCH_HABITS", payload: habits });
    } catch (error) {
      console.error("Error fetching habits from Firestore:", error);
    }
  };
};
