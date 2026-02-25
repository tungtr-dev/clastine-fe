import { InputFieldType } from "./enums/input-field.view.enum.ts";

export interface IInputFieldViewProps {
	name: string;
	label?: string;
	description?: string;
	error?: string;
	type?: InputFieldType;
	isRequired?: boolean;
}