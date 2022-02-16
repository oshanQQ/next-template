import { collection, getDocs, query } from "firebase/firestore";
import { useEffect } from "react";
import { atom, useSetRecoilState } from "recoil";
import { firestore } from "~/infra/firebase";

export interface Text {
  uid: string;
  text: string;
}

export interface TextsState {
  texts: Text[];
}

export const textsState = atom<TextsState>({
  key: "textsState",
  default: {
    texts: []
  },
  dangerouslyAllowMutability: true
});

export const textInit = () => {
  const setTextsState = useSetRecoilState(textsState);

  useEffect(() => {
    const texts: Text[] = [];
    const getTexts = async () => {
      const res = await getDocs(query(collection(firestore, "texts")));
      res.forEach((doc) => {
        texts.push(doc.data() as Text);
      });

      setTextsState({
        texts: texts
      });
    };

    getTexts();
  }, []);
};
