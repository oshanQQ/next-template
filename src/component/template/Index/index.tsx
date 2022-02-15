import { css } from "@emotion/react";
import type { NextPage } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { colors } from "styles/themes";
import { Container } from "~/component/layout/Container";
import { FlexContainer } from "~/component/layout/FlexContainer";
import { GridContainer } from "~/component/layout/GridContainer";
import { Header } from "~/component/shared/Header";

const main = css`
  width: 100%;
  height: calc(100vh - 44px);
  padding: 44px 0;
  background: ${colors.black.lighten[4]};
`;

const container = css`
  display: flex;
  flex-flow: column;
  gap: 32px;
`;

const title = css`
  font-size: 2.4rem;
  font-weight: bold;
`;

const paragraph = css`
  font-size: 1.6rem;
`;

const HomeTemplate: NextPage = (): JSX.Element => {
  return (
    <Fragment>
      <Header />
      <main css={main}>
        <Container css={container}>
          <FlexContainer flexDirection="column" gap={12}>
            <h1 css={title}>This is Next practice</h1>
            <p css={paragraph}>
              You can go to that page by pressing the card of your choice
            </p>
          </FlexContainer>
          <GridContainer cols={{ sp: 1, tablet: 2, pc: 3 }} gap={24}>
            <Link href="/firebase">
              <a>firebase</a>
            </Link>
          </GridContainer>
        </Container>
      </main>
    </Fragment>
  );
};

export default HomeTemplate;
