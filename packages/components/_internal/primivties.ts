import type { Attributes, ElementType, PropsWithChildren } from "react";

export interface BaseComponentProps
  extends PropsWithChildren<PropsWithCommonAttributes>,
    PropsWithAs {}
export interface PropsWithClassName extends Attributes {
  className?: string;
}
export interface PropsWithCommonAttributes
  extends Attributes,
    PropsWithClassName {
  id?: string;
  name?: string;
}

export type PropsWithAs<E extends ElementType = ElementType> = {
  as?: E;
  [key: string]: any;
};
