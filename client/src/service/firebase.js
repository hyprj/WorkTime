import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
  databaseURL:
    "https://worktime-f0e81-default-rtdb.europe-west1.firebasedatabase.app",
};

try {
  initializeApp(firebaseConfig);
} catch (err) {
  console.log(err);
}

export const fb = {
  auth: getAuth(),
  db: getDatabase(),
};

export const createUser = (auth, db, user, id) => {
  set(ref(db, `users/${id}`), user).then(() => console.log("User stored!"));
};

export const getData = async (db, from, id) => {
  let data = null;
  const dbRef = ref(db);
  await get(child(dbRef, `${from}/${id}`))
    .then((snapshot) => {
      data = snapshot.val();
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};
