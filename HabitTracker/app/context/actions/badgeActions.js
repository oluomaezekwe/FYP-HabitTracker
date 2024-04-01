import { addDoc, collection, getDocs } from "firebase/firestore";
import { database } from "../../../api/config/firebase"; // Import your Firestore database configuration
export const ADD_BADGE = "ADD_BADGE";
export const FETCH_BADGES = "FETCH_BADGES";

// Action creator to add a badge to the user's collection in Firestore
export const addBadge = (uid, name) => {
  return async (dispatch) => {
    const collRef = collection(database, "userData", uid, "badges"); // Reference to the badge document

    try {
      const badgeDocRef = await addDoc(collRef, {
        name,
        uid,
        earned: false,
      });
      // Dispatch action to add badge locally
      dispatch({
        type: "ADD_BADGE",
        payload: {
          id: badgeDocRef.id,
          name,
          uid,
          earned: false,
        },
      });
    } catch (error) {
      console.error("Error adding badge to Firestore:", error);
    }
  };
};

// Action creator to fetch badges from the user's collection in Firestore
export const fetchBadges = (uid) => {
  return async (dispatch) => {
    const collRef = collection(database, "userData", uid, "badges"); // Reference to the badges collection

    try {
      const querySnapshot = await getDocs(collRef); // Get document snapshot

      if (!querySnapshot.empty) {
        const badges = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Dispatch action to update local state with badges
        dispatch({ type: "FETCH_BADGES", payload: badges });
      } else {
        console.log("No badges found for user:", uid);
      }
    } catch (error) {
      console.error("Error fetching badges from Firestore:", error);
    }
  };
};
