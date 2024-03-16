import { collection, getDoc, getDocs } from "firebase/firestore";
import { database, pointsRef } from "../../../api/config/firebase";

export const FETCH_HABITS = "FETCH_HABITS";
export const FETCH_TIPS = "FETCH_TIPS";

export const fetchHabits = (uid) => {
  return async (dispatch) => {
    const userDocRef = collection(database, `userData/${uid}/habits`);
    try {
      // Fetch habits data from Firestore
      const querySnapshot = await getDocs(userDocRef);

      // Extract habits data from the query snapshot
      const habits = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Fetched habits from firebase. Habits: ", habits);
      // Dispatch an action to update the local Redux store with the fetched habits data
      dispatch({ type: "FETCH_HABITS", payload: habits });
    } catch (error) {
      console.error("Error fetching habits from Firestore:", error);
    }
  };
};

export const fetchTips = () => {
  return async (dispatch) => {
    const userDocRef = collection(database, "tips");
    try {
      // Fetch habits data from Firestore
      const querySnapshot = await getDocs(userDocRef);

      // Extract habits data from the query snapshot
      const tips = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      console.log("Fetched tips from firebase. Tips: ", tips);
      // Dispatch an action to update the local Redux store with the fetched habits data
      dispatch({ type: "FETCH_TIPS", payload: tips });
    } catch (error) {
      console.error("Error fetching tips from Firestore:", error);
    }
  };
};

export const fetchPoints = async (uid) => {
  const userDocRef = doc(pointsRef, uid);
  try {
    const docSnapshot = await getDoc(userDocRef);

    if (docSnapshot.exists()) {
      return docSnapshot.data().points;
    } else {
      console.log("User document does not exist");
      return null;
    }
  } catch (error) {
    console.error("Error fetching points from Firestore:", error);
    return null;
  }
};
