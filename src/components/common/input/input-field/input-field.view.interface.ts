import { InputType } from "./enums/input-field.view.enum.ts";
import { ChangeHandler, RefCallBack } from "react-hook-form";

interface IInputRegistry {
	name: string;
	ref: RefCallBack;
	onChange: ChangeHandler;
	onBlur: ChangeHandler;
}

export interface IInputViewProps {
	registry: IInputRegistry;
	placeholder?: string;
}

export interface IInputFieldViewProps extends IInputViewProps {
	label?: string;
	description?: string;
	type?: InputType;
	error?: string;
}