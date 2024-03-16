import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../api/config/firebase";

export default function useAuth() {
  const [userData, setUserData] = useState({ user: null, uid: null });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      console.log("User: ", user);
      if (user) {
        setUserData({ user: user, uid: user.uid });
      } else {
        setUserData({ user: null, uid: null });
      }
    });
    return unsub;
  }, []);
  return userData;
}
