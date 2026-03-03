import { ProfileFormView } from "../components/profile-form/profile.form.view.tsx";
import { RegisterFormView } from "../components/register-form/register.form.view.tsx";
import { SignInFormView } from "../components/sign-in-form/sign-in.form.view.tsx";
import { AccountFormId } from "./account-form.id.enum.ts";

export const AccountModalTitle: Record<AccountFormId, string> = {
	[AccountFormId.Register]: "Register",
	[AccountFormId.SignIn]: "Sign in",
	[AccountFormId.Profile]: "Your Profile"
};

export const AccountFormView = {
	[AccountFormId.Register]: RegisterFormView,
	[AccountFormId.SignIn]: SignInFormView,
	[AccountFormId.Profile]: ProfileFormView
};