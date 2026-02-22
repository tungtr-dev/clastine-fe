import { ModalID } from "@constants";

export type IModalState = Record<ModalID, boolean>;

export type IModalSelector = Record<ModalID, () => boolean>;