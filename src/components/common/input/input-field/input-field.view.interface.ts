import { Ref } from "react";
import { InputType } from "./enums/input-field.view.enum.ts";

export interface IInputViewProps {
	name: string;
	placeholder?: string;
	isRequired?: boolean;
	ref?: Ref<HTMLInputElement>;
}

export interface IInputFieldViewProps extends IInputViewProps {
	label?: string;
	description?: string;
	type?: InputType;
	error?: string;
}