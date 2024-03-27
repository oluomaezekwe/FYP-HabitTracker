import { collection, getDocs } from "firebase/firestore";
import { database } from "../../../api/config/firebase";

export const FETCH_TIPS = "FETCH_TIPS";

export const fetchTips = () => {
  return async (dispatch) => {
    const docRef = collection(database, "tips");
    try {
      // Fetch tips data from Firestore
      const querySnapshot = await getDocs(docRef);

      // Extract tips data from the query snapshot
      const tips = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      console.log("Fetched tips from Firestore. Tips:", tips);

      // Dispatch an action to update the local Redux store with the fetched tips data
      dispatch({ type: "FETCH_TIPS", payload: tips });
    } catch (error) {
      console.error("Error fetching tips from Firestore:", error);
    }
  };
};
