import type { FC, PropsWithChildren } from "react";
import { createElement } from "react";
import type { BaseComponentProps } from "../../_internal/primivties";
import clsx from "clsx";

interface Props extends PropsWithChildren<BaseComponentProps> {
  column?: boolean;
  reverse?: boolean;
}
export const Flex__Root: FC<PropsWithChildren<Props>> = ({
  as: Component = "div",
  column = false,
  reverse = false,
  children,
  ...rest
}: PropsWithChildren<Props>) => {
  const className = clsx("flex", {
    "flex-col": column && !reverse,
    "flex-col-reverse": column && reverse,
    "flex-row-reverse": !column && reverse,
  });
  return createElement(Component, { ...rest, className }, children);
};
