import { RegisterFormView } from "../components/register.form.view.tsx";
import { SignInFormView } from "../components/sign-in.form.view.tsx";
import { AccountFormId } from "./account-form.id.enum.ts";

export const AccountModalTitle: Record<AccountFormId, string> = {
	[AccountFormId.Register]: "Register",
	[AccountFormId.SignIn]: "Sign in"
};

export const AccountFormView = {
	[AccountFormId.Register]: RegisterFormView,
	[AccountFormId.SignIn]: SignInFormView
};