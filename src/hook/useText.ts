import { User } from "firebase/auth";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "~/infra/firebase";

export const useText = () => {
  const addText = async (user: User, text: string) => {
    try {
      console.log("大丈夫そ？");
      await addDoc(collection(firestore, "texts"), {
        uid: user.uid,
        text: text
      });
      console.log("OMG");
    } catch (e) {
      console.error(e);
    }
  };

  const getTexts = async () => {
    const res = await getDoc(doc(firestore, "texts", "id"));

    console.log(res);
  };

  return {
    addText,
    getTexts
  };
};
