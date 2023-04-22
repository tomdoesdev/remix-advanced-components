import type {ForwardedRef, PropsWithChildren} from "react";
import {forwardRef} from "react";

type Ref = HTMLDialogElement;

const Root = forwardRef<HTMLDialogElement, PropsWithChildren>((props:PropsWithChildren, ref:ForwardedRef<Ref> ) => {
    return (
        <dialog ref={ref}>
            {props.children}
        </dialog>
    )
});

Root.displayName = 'Root';

export default Root;