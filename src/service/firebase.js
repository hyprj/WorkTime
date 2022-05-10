import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  query,
  collection,
  where,
  addDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
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
  throw new Error(err);
}

export const auth = getAuth();
export const db = getFirestore();

export const getData = async (...path) => {
  try {
    const docRef = await doc(db, ...path);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) return docSnap.data();
    return undefined;
  } catch (err) {
    throw new Error(err);
  }
};

export const getCollection = async (coll, cond) => {
  try {
    const q = query(collection(db, coll), where(...cond));
    const querySnapshot = await getDocs(q);
    const data = [];
    querySnapshot.forEach((document) => data.push(document.data()));
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const postData = async (coll, data) => {
  try {
    const docRef = await addDoc(collection(db, coll), data);
    return docRef.id;
  } catch (err) {
    throw new Error(err);
  }
};

export const postDatawithUID = async (coll, id, data) => {
  try {
    const docRef = await setDoc(doc(db, coll, id), data);
    return docRef;
  } catch (err) {
    throw new Error(err);
  }
};

export const updateData = async (coll, id, data) => {
  try {
    const docRef = await doc(db, coll, id);
    const updatedDoc = await updateDoc(docRef, data);
    return updatedDoc;
  } catch (err) {
    throw new Error(err);
  }
};
