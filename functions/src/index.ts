import { logger, https } from "firebase-functions";
import { initializeApp, firestore, credential } from "firebase-admin";

const app = initializeApp({
  credential: credential.applicationDefault(),
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DETABASE_URL
});
const db = firestore(app);

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = https.onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

export const getTexts = https.onRequest((request, response) => {
  const res = db.collection("texts").get();
  console.log(res);
  response.send(res);
});
