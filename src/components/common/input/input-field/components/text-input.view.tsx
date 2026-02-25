import { InputType } from "../enums/input-field.view.enum.ts";
import { IInputViewProps } from "../input-field.view.interface.ts";

export const TextInputView = ({
	name,
	placeholder,
	isRequired = false,
	ref
}: IInputViewProps) => {
	return (
		<input
			type={InputType.Text}
			placeholder={placeholder}
			name={name}
			required={isRequired}
			ref={ref}
		/>
	);
};