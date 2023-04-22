import Dialog from "packages/components/dialog";
import {createRef} from "react";
import {Link} from "@remix-run/react";

export default function Index() {
    const rootRef = createRef<HTMLDialogElement>()
  return (
    <div>
      <h1>Welcome to Remix</h1>
        <button onClick={()=> rootRef?.current?.showModal()} className={'text-xs'}>Open</button>
        <Dialog ref={rootRef}>
            <Dialog.Title className={'text-6xl'} as={Link}>Hello</Dialog.Title>
        </Dialog>
    </div>
  );
}
