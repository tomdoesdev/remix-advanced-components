import type {Attributes, ElementType} from "react";

export interface PropsWithClassName extends Attributes {className?: string}
export type PropsWithAs<E extends ElementType = ElementType> = {
    as?: E;
    [key: string]: any
}