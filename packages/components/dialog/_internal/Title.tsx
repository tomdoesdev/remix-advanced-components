import type {PropsWithChildren} from "react";
import type {PropsWithAs, PropsWithClassName} from "../../_internal/primivties";
import {createElement } from "react";

interface Props extends PropsWithChildren, PropsWithClassName, PropsWithAs {
}
export const Title = ({ as: Component = 'h1', children, ...rest }: Props) => {
    return createElement(Component, { ...rest }, children);
};

