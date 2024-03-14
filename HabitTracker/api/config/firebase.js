// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw2qO6W1ZLYtLs-dCc9der-C8x-vduFCs",
  authDomain: "fyp-habittracker.firebaseapp.com",
  projectId: "fyp-habittracker",
  storageBucket: "fyp-habittracker.appspot.com",
  messagingSenderId: "71946792683",
  appId: "1:71946792683:web:1bedad2c452d5e56bfd8ae",
  measurementId: "G-PDMJXNR4BD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);

export const habitsRef = collection(database, "habits");

export default app;
