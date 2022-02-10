import { css } from "@emotion/react";
import Link from "next/link";
import { ComponentPropsWithRef, ForwardedRef } from "react";
import { colors } from "styles/themes";

export interface HeaderProps extends ComponentPropsWithRef<"header"> {
  forwardRef?: ForwardedRef<HTMLHeadingElement>;
}

const header = css`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  background: ${colors.black.primary};
  color: ${colors.white};
`;

const title = css`
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;

export const Header = ({ forwardRef }: HeaderProps): JSX.Element => {
  return (
    <header css={header} ref={forwardRef}>
      <Link href="/">
        <a css={title}>This is Header</a>
      </Link>
    </header>
  );
};
