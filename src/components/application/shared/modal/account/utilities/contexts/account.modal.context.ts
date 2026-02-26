import { Dispatch, SetStateAction } from "react";
import { AccountFormId } from "../../constants/account-form.id.enum.ts";

export interface IAccountModalContext {
	setForm: Dispatch<SetStateAction<AccountFormId>>;
}