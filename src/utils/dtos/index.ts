import { ReactNode } from "react";

export type UserAPIDTO = {
  ID: string;
  Name: string;
  Email: string;
  Role: string;
  Status: boolean;
  AvatarUrl: string;
};

export interface ModalPropsDTO {
  title?: string;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  children: ReactNode;
}
