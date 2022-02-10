import type { NextPage } from "next";
import { Fragment } from "react";
import { Header } from "~/component/shared/Header";

const HomeTemplate: NextPage = (): JSX.Element => {
  return (
    <Fragment>
      <Header />
      <h1>Hello, world!</h1>
    </Fragment>
  );
};

export default HomeTemplate;
