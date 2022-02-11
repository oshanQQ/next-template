import { Fragment } from "react";
import { Container } from "~/component/layout/Container";
import { Header } from "~/component/shared/Header";
import { useAuth } from "~/hook/useAuth";

export const FirebaseTemplate = () => {
  const { auth, login, logout } = useAuth();
  console.log(auth.currentUser);

  return (
    <Fragment>
      <Header />
      <main>
        <Container>
          <h1>{auth.currentUser ? auth.currentUser.displayName : "ahiahi"}</h1>
          <button onClick={login}>login</button>
          <button onClick={logout}>logout</button>
        </Container>
      </main>
    </Fragment>
  );
};
