import type { BaseComponentProps } from "../../_internal/primivties";
import { useDialogContext } from "./context";
import { createComponent } from "../../_internal/util/create-component";

export const Dialog__Title = ({
  as: Component = "h1",
  children,
  ...rest
}: BaseComponentProps) => {
  const ctx = useDialogContext();
  return createComponent(
    Component,
    { id: `Dialog${ctx.uid}_Title`, ...rest },
    children
  );
};
