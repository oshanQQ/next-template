import { ComponentPropsWithRef, ForwardedRef } from "react";
import { css } from "@emotion/react";
import { breakpoints } from "styles/themes";

type Device = {
  sp: number;
  tablet: number;
  pc: number;
};

export interface GridProps extends ComponentPropsWithRef<"div"> {
  cols?: number | Device;
  gap?: number | Device;
  forwardRef?: ForwardedRef<HTMLDivElement>;
}

export const GridContainer = ({
  cols = 1,
  gap = 0,
  forwardRef,
  children,
  ...props
}: GridProps): JSX.Element => {
  const isColsNumber = typeof cols === "number";
  const isgapNumber = typeof gap === "number";

  const gridContainer = css`
    display: grid;
    grid-template-columns: repeat(
      ${isColsNumber ? cols : cols.sp},
      minmax(0, 1fr)
    );
    place-items: center;
    gap: ${isgapNumber ? gap : gap.sp}px;
    @media (min-width: ${breakpoints.sm}px) {
      grid-template-columns: repeat(
        ${isColsNumber ? cols : cols.tablet},
        minmax(0, 1fr)
      );
      gap: ${isgapNumber ? "inherit" : gap.tablet}px;
    }
    @media (min-width: ${breakpoints.md}px) {
      grid-template-columns: repeat(
        ${isColsNumber ? cols : cols.pc},
        minmax(0, 1fr)
      );
      gap: ${isgapNumber ? "inherit" : gap.pc}px;
    }
  `;

  return (
    <div css={gridContainer} ref={forwardRef} {...props}>
      {children}
    </div>
  );
};
