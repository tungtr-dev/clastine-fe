import { InputType } from "../enums/input-field.view.enum.ts";
import { IInputViewProps } from "../input-field.view.interface.ts";

export const TextInputView = ({
	registry,
	placeholder,
}: IInputViewProps) => {
	return (
		<input
			type={InputType.Text}
			placeholder={placeholder}
			{...registry}
		/>
	);
};