import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../api/config/firebase";

export default function useAuth() {
  // const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({ user: null, uid: null });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      console.log("User: ", user);
      if (user) {
        // setUser(user);
        setUserData({ user: user, uid: user.uid });
      } else {
        // setUser(null);
        setUserData({ user: null, uid: null });
      }
    });
    return unsub;
  }, []);
  return userData;
}
