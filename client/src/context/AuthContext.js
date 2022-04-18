import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { fb, getData } from "../service/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [savedUser, setSavedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(fb.auth, (user) => {
      if (user) {
        getData(fb.db, "users", user.uid).then((userFromDb) => {
          // setSavedUser({ ...userFromDb, id: user.uid });
            setSavedUser({user: userFromDb, userId: user.uid});
          setLoading(false);
        });
      } else {
        setSavedUser(null);
        setLoading(false);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={savedUser}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
