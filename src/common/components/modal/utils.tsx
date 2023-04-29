import { createRoot } from "react-dom/client";
import { Button, Modal } from "@mantine/core";

import { CreateModalType } from "./types";

export const ModalMarker = () => <div id="modal-marker" />;

export const createModal = ({ title, render, size, standardFormat }: CreateModalType) => {
  const el = document.querySelector("#modal-marker");

  if (el) {
    const root = createRoot(el);
    const onClose = () => root.unmount();

    root.render(
      <Modal
        title={!standardFormat && title}
        opened
        centered
        closeOnEscape={false}
        closeOnClickOutside={false}
        withCloseButton={false}
        size={size ?? "md"}
        onClose={() => root.unmount()}
      >
        {standardFormat && (
          <div className="flex items-center justify-center flex-col">
            <p className="text-xl">{standardFormat?.title}</p>
            <span className="text-md mt-0">{standardFormat?.message}</span>
            <Button
              color="teal"
              mt={12}
              onClick={() => {
                if (standardFormat.onOk) standardFormat?.onOk();
                onClose();
              }}
            >
              OK
            </Button>
          </div>
        )}
        {!standardFormat && render && render(onClose)}
      </Modal>,
    );
  }
};
