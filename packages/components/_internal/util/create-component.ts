import type { ElementType, ReactNode } from "react";
import { createElement } from "react";
import type { PropsWithCommonAttributes } from "../primivties";

export const createComponent = <T extends ElementType = ElementType>(
  as: T,
  props: PropsWithCommonAttributes,
  children: ReactNode
) => {
  return createElement(as, props, children);
};
