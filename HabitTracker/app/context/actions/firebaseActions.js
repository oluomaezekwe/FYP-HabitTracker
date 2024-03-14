import { getDocs } from "firebase/firestore";
import { habitsRef } from "../../../api/config/firebase";

export const FETCH_HABITS = "FETCH_HABITS";

export const fetchHabits = () => {
  return async (dispatch) => {
    try {
      // Fetch habits data from Firestore
      const querySnapshot = await getDocs(habitsRef);

      // Extract habits data from the query snapshot
      const habits = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Dispatch an action to update the local Redux store with the fetched habits data
      dispatch({ type: "FETCH_HABITS", payload: habits });
    } catch (error) {
      console.error("Error fetching habits from Firestore:", error);
    }
  };
};

// import { query, where, getDocs } from "firebase/firestore";
// import { habitsRef } from "../../../api/config/firebase";

// export const FETCH_HABITS = "FETCH_HABITS";

// export const fetchHabits = (uid) => {
//   return async (dispatch) => {
//     try {
//       // Construct a Firestore query to fetch habits for the current user
//       const q = query(habitsRef, where("uid", "==", uid));

//       // Execute the query and retrieve the matching habits
//       const querySnapshot = await getDocs(q);

//       querySnapshot.docs.forEach((doc) => {
//         console.log("Habit: ", doc.data());
//       });

//       // Extract habits data from the query snapshot
//       const habits = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));

//       // Dispatch an action to update the local Redux store with the fetched habits data
//       dispatch({ type: "FETCH_HABITS", payload: habits });
//     } catch (error) {
//       // Handle errors, if any
//       console.error("Error fetching habits from Firestore:", error);
//     }
//   };
// };
