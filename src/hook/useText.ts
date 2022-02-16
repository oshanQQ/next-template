import { User } from "firebase/auth";
import { addDoc, collection, query } from "firebase/firestore";
import { firestore } from "~/infra/firebase";

export const useText = () => {
  const addText = async (user: User, text: string) => {
    try {
      const docRef = await addDoc(collection(firestore, "texts"), {
        uid: user.uid,
        text: text
      });
      console.log(docRef);
    } catch (e) {
      console.error(e);
    }
  };

  return {
    addText
  };
};
