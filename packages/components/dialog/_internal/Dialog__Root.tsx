import type { ForwardedRef, PropsWithChildren } from "react";
import React, { forwardRef, useId } from "react";
import type { PropsWithCommonAttributes } from "../../_internal/primivties";
import DialogContext from "./context";

type Ref = HTMLDialogElement;

interface Props extends PropsWithChildren<PropsWithCommonAttributes> {}
const Dialog__Root = forwardRef<HTMLDialogElement, Props>(
  ({ children, ...rest }, ref: ForwardedRef<Ref>) => {
    const uid = useId();
    return (
      <DialogContext.Provider value={{ uid }}>
        <dialog
          ref={ref}
          {...rest}
          aria-labelledby={`Dialog${uid}_Title`}
          aria-describedby={`Dialog${uid}_Description`}
        >
          {children}
        </dialog>
      </DialogContext.Provider>
    );
  }
);

Dialog__Root.displayName = "Dialog__Root";

export default Dialog__Root;
