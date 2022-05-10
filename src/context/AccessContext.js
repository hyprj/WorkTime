import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../service/firebase";
import { fetchAdditionalUserData, fetchUser } from "../service/api";

export const AccessContext = createContext();

export const AccessProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUser(user).then((res) => {
          // setData({ user: res });
          fetchAdditionalUserData(res).then((complete) => {
            setLoading(false);
            setData({ user: res, ...complete });
          });
        });
      } else {
        setData(null);
        setLoading(false);
      }
    });
  }, []);

  const val = useMemo(() => ({ data, setData }), [data]);
  return (
    <AccessContext.Provider value={val}>
      {!loading && children}
    </AccessContext.Provider>
  );
};

export const useAccess = () => {
  const context = useContext(AccessContext);

  if (context === undefined) {
    throw new Error("useAccess must be nested in AccessProvider");
  }
  return context;
};
