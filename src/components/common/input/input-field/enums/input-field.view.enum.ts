import { PasswordInputView } from "../components/password.input.view.tsx";
import { TextInputView } from "../components/text.input.view.tsx";

export enum InputType {
	Text = "text",
	Password = "password"
}

export const InputViewByType = {
	[InputType.Text]: TextInputView,
	[InputType.Password]: PasswordInputView
};