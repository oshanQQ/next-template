import type { NextPage } from "next";
import { useState } from "react";
import { FirebaseTemplate } from "~/component/template/Firebase";
import { useAuth } from "~/hook/useAuth";
import { useText } from "~/hook/useText";
import { textInit } from "~/state/text";

const Firebase: NextPage = (): JSX.Element => {
  const { auth } = useAuth();
  const { addText } = useText();
  const [text, setText] = useState("");

  textInit();

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };
  const submit = () => {
    if (auth.currentUser) addText(auth.currentUser, text);
    setText("");
  };

  return (
    <FirebaseTemplate text={text} onChangeText={onChangeText} submit={submit} />
  );
};

export default Firebase;
