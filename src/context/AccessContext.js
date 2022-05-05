import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth, getData } from "../service/firebase";
import { getCurrentWeek } from "../utils";

export const AccessContext = createContext();

export const AccessProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async (user) => {
    try {
      const userData = await getData("users", user.uid);
      const dataToSet = {
        user: userData,
      };
      if (userData.organization) {
        const organization = await getData("organizations", user.orgId);
        const { toDatabase } = getCurrentWeek();
        const currentShift = await getData(
          "organizations",
          user.orgId,
          toDatabase
        );
        dataToSet.organization = organization;
        dataToSet.shifts[toDatabase] = currentShift;
      }
      setData(dataToSet);
      setLoading(false);
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchData(user);
      } else {
        setData(null);
        setLoading(false);
      }
    });
  }, []);

  const val = useMemo(() => ({ data, refreshData: fetchData }), [data]);
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
