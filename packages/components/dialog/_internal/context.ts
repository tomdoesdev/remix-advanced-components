import { createContext, useContext } from "react";
import invariant from "tiny-invariant";

interface IContext {
  uid: string;
}
const DialogContext = createContext<IContext | null>(null);

export const useDialogContext = () => {
  const ctx = useContext(DialogContext);

  invariant(
    ctx,
    "useDialogContext should only be used withing the context of a Dialog component"
  );

  return ctx;
};

export default DialogContext;
