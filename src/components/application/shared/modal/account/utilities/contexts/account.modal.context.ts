import { Dispatch, SetStateAction } from "react";
import { AccountContentID } from "../../constants/account-content-id.enum.ts";

export interface IAccountModalContext {
	setForm: Dispatch<SetStateAction<AccountContentID>>;
}