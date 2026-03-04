import { ProfileView } from "../components/profile/profile.view.tsx";
import { RegisterFormView } from "../components/register-form/register.form.view.tsx";
import { SignInFormView } from "../components/sign-in-form/sign-in.form.view.tsx";
import { AccountContentID } from "./account-content-id.enum.ts";

export const AccountModalTitle: Record<AccountContentID, string> = {
	[AccountContentID.RegisterForm]: "Register",
	[AccountContentID.SignInForm]: "Sign in",
	[AccountContentID.Profile]: "Your Profile"
};

export const AccountFormView = {
	[AccountContentID.RegisterForm]: RegisterFormView,
	[AccountContentID.SignInForm]: SignInFormView,
	[AccountContentID.Profile]: ProfileView
};