import { createContext } from "react";
import { IAccountModalContext } from "./account.modal.context.ts";

export const AccountModalContext = createContext<IAccountModalContext>({
	setForm: () => {}
});