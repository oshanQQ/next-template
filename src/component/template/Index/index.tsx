import type { NextPage } from "next";
import { Fragment } from "react";
import { Container } from "~/component/layout/Container";
import { Header } from "~/component/shared/Header";
import { useAuth } from "~/hook/useAuth";

const HomeTemplate: NextPage = (): JSX.Element => {
  const { auth, login, logout } = useAuth();
  console.log(auth.currentUser);

  return (
    <Fragment>
      <Header />
      <Container>
        <h1>{auth.currentUser ? auth.currentUser.displayName : "ahiahi"}</h1>
        <button onClick={login}>login</button>
        <button onClick={logout}>logout</button>
      </Container>
    </Fragment>
  );
};

export default HomeTemplate;
