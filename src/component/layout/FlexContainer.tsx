import { css } from "@emotion/react";
import { ComponentPropsWithRef, ForwardedRef } from "react";
import { breakpoints } from "styles/themes";

type Device = {
  sp: number;
  tablet: number;
  pc: number;
};

export interface FlexContainerProps extends ComponentPropsWithRef<"div"> {
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?:
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?:
    | "normal"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: number | Device;
  forwardRef?: ForwardedRef<HTMLDivElement>;
}

export const FlexContainer = ({
  flexDirection = "row",
  justifyContent = "start",
  alignItems = "normal",
  flexWrap = "nowrap",
  gap = 0,
  forwardRef,
  children,
  ...props
}: FlexContainerProps): JSX.Element => {
  const isGapNumber = typeof gap === "number";

  const flexContainer = css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-wrap: ${flexWrap};
    gap: ${isGapNumber ? gap : gap.sp}px;

    @media (min-width: ${breakpoints.sm}px) {
      gap: ${isGapNumber ? gap : gap.tablet}px;
    }

    @media (min-width: ${breakpoints.md}px) {
      gap: ${isGapNumber ? gap : gap.pc}px;
    }
  `;

  return (
    <div ref={forwardRef} css={flexContainer} {...props}>
      {children}
    </div>
  );
};
