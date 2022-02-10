import type { NextPage } from "next";
import { Fragment } from "react";
import { useAuth } from "~/hook/useAuth";

const Home: NextPage = (): JSX.Element => {
  const { auth, login, logout } = useAuth();
  console.log(auth.currentUser);

  return (
    <Fragment>
      <h1>{auth.currentUser ? auth.currentUser.displayName : "ahiahi"}</h1>
      <button onClick={login}>login</button>
      <button onClick={logout}>logout</button>
    </Fragment>
  );
};

export default Home;
