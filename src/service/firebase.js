import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child, push, update } from "firebase/database";
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

export const postDataWithUID = async (auth, db, where, data) => {
  try {
    return await push(ref(db, where), data).key;
  } catch (err) {
    console.log(err);
  }
};

export const postData = async (auth, db, where, data) => {
  try {
    await set(ref(db, where), data);
  } catch (err) {
    console.log(err);
  }
};

export const updateData = async (db, where, data) => {
  try {
    return await update(ref(db, where), data);
  } catch (err) {
    console.log(err);
  }
};

export const getData = async (db, from, id) => {
  try {
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, `${from}/${id}`));
    const data = snapshot.val();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};