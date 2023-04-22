import Dialog from "packages/components/dialog";
import { createRef } from "react";
import { Link } from "@remix-run/react";
import Flex from "../../packages/components/flex";

export default function Index() {
  const rootRef = createRef<HTMLDialogElement>();
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <button onClick={() => rootRef?.current?.showModal()}>Open</button>
      <Dialog
        ref={rootRef}
        className={"backdrop:bg-blue-700 backdrop:opacity-100"}
      >
        <Flex column>
          <Dialog.Title className={"text-xl"} as={Link}>
            Remove Collaborator
          </Dialog.Title>
          <Dialog.Description>
            Are you sure you want to remove this collaborator?
          </Dialog.Description>
        </Flex>
      </Dialog>
    </div>
  );
}
