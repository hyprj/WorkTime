import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth, db, getData } from "../service/firebase";

export const AccessContext = createContext();

export const AccessProvider = ({ children }) => {
  const [savedUser, setSavedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkForAdditionalData = async ({ user, userId }) => {
    const checkInvitation = async () => {
      const hasInvitation = await getData(db, "invitations", userId);

      if (hasInvitation) {
        const organizationName = await getData(db, `organizations/${hasInvitation}`, "name");
        user.invitation = {orgName: organizationName, orgId: hasInvitation};
      }
    };
    const checkShifts = async () => {
      if (user.organization.length > 0) {
        console.log(user.organization)
        const shifts = await getData(db, `organizations/${user.organization}/shifts`, "18_04_2022-24_04_2022");
        console.log(shifts);
      }
    }

    if (user.organization.length === 0) {
      await checkInvitation();
    } else {
      await checkShifts();
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getData(db, "users", user.uid).then((userFromDb) => {
          // setSavedUser({ ...userFromDb, id: user.uid });
          checkForAdditionalData({ user: userFromDb, userId: user.uid }).then(
            () => setSavedUser({ user: userFromDb, userId: user.uid })
          );
          // setSavedUser({user: userFromDb, userId: user.uid});
          setLoading(false);
        });
      } else {
        setSavedUser(null);
        setLoading(false);
      }
    });
  }, []);

  return (
    <AccessContext.Provider value={savedUser}>
      {!loading && children}
    </AccessContext.Provider>
  );
};
