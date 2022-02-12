import { ComponentPropsWithRef, Fragment } from "react";
import { Container } from "~/component/layout/Container";
import { Header } from "~/component/shared/Header";
import { useAuth } from "~/hook/useAuth";
import { useText } from "~/hook/useText";

export interface FirebaseTemplateProps extends ComponentPropsWithRef<"div"> {
  text: string;
  onChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submit: () => void;
}

export const FirebaseTemplate = ({
  text,
  onChangeText,
  submit
}: FirebaseTemplateProps) => {
  const { auth, login, logout } = useAuth();
  console.log(auth.currentUser);

  const { getTexts } = useText();

  return (
    <Fragment>
      <Header />
      <main>
        <Container>
          <h1>{auth.currentUser ? auth.currentUser.displayName : "ahiahi"}</h1>
          <button onClick={login}>login</button>
          <button onClick={logout}>logout</button>
          {auth.currentUser && (
            <div>
              <input type={"text"} value={text} onChange={onChangeText} />
              <button onClick={submit}>add text</button>
            </div>
          )}
          <button onClick={getTexts}>test</button>
        </Container>
      </main>
    </Fragment>
  );
};
