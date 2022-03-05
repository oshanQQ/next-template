import { css } from "@emotion/react";
import { ComponentPropsWithRef, ForwardedRef } from "react";

// ComponentPropsWithRef<"div">: 一番外側の要素になる。
//   childrenとかいろいろデフォルトで使えるようになる。
// forwardRef: Next.jsのアニメーションで使うらしい.
// HTMLDivElement: divに関するやつ
export interface ContainerProps extends ComponentPropsWithRef<"div"> {
  forwardRef?: ForwardedRef<HTMLDivElement>;
}

// padding等をデザインによって変える
const container = css`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Container = ({
  forwardRef,
  children,
  ...props
}: ContainerProps): JSX.Element => {
  return (
    // <div ref={forwardRef} css={container} {...props}>: 一番外側にこういうやつを書く。
    // ...propsは、HTMLのdiv要素が受け取れる200くらいの引数を受け取れる。
    <div ref={forwardRef} css={container} {...props}>
      {children}
    </div>
  );
};
