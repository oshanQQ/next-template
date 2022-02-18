import { logger, https, pubsub, EventContext } from "firebase-functions";
import { initializeApp, firestore, credential } from "firebase-admin";

const app = initializeApp({
  credential: credential.applicationDefault(),
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DETABASE_URL
});
const db = firestore(app);

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = https.onRequest((request, response) => {
//   logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });

// export const getTexts = https.onRequest(async (request, response) => {
//   const texts: Text[] = [];
//   const res = await db.collection("texts").get();
//   res.forEach((doc) => {
//     texts.push(doc.data() as Text);
//   });
//   response.send(texts);
// });

export const scheduledTest = pubsub
  .schedule("every 3 minutes")
  .onRun(async (context: EventContext) => {
    await db.collection("texts").add({
      uid: "test",
      text: "ahiahi"
    });

    return null;
  });
