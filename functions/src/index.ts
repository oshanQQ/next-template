import { config, logger, https } from "firebase-functions";
import { initializeApp, firestore } from "firebase-admin";

initializeApp(config().firebase);
const db = firestore();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = https.onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

// export const getTexts = https.onRequest((request, response) => {
//   const res = db.collection("texts").get();
//   console.log(res);
// });
