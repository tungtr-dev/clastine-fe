import { PasswordInputView } from "../components/password.input.view.tsx";
import { TextInputView } from "../components/text.input.view.tsx";
import { InputType } from "./input-type.enum.ts";

export const InputViewByType = {
	[InputType.Text]: TextInputView,
	[InputType.Password]: PasswordInputView
};