import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "~/constant";

export const firebase = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebase);
export const firestore = getFirestore(firebase);
