import { ButtonProps, ModalProps } from "@mantine/core";

export interface ModalType {
  title?: string;
  modalProps?: Omit<ModalProps, "opened" | "onClose" | "centered" | "title">;
  label: string;
  buttonProps?: ButtonProps;
  render: (close: () => void) => JSX.Element;
}

export interface ModalContextType {
  openModal: () => void;
}

export interface ModalProviderType {
  children: JSX.Element;
}

export interface OpenModalType {
  title?: string;
  size?: ModalProps["size"];
  render: ModalType["render"];
  modalProps?: Omit<ModalProps, "opened" | "onClose" | "centered" | "title">;
}
