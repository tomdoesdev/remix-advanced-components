import { createComponent } from "../../_internal/util/create-component";
import type { BaseComponentProps } from "../../_internal/primivties";
import { useDialogContext } from "./context";

export const Dialog__Description = ({
  as: Component = "p",
  children,
  ...rest
}: BaseComponentProps) => {
  const dialogContext = useDialogContext();
  return createComponent(
    Component,
    { ...rest, id: `Dialog${dialogContext.uid}_Description` },
    children
  );
};
