import { IconView, TextView, TextViewTag } from "@components/common/data";
import { InputFieldType } from "./enums/input-field.view.enum.ts";
import { IInputFieldViewProps } from "./input-field.view.interface.ts";
import { SVGSource } from "@constants";
import { generateClassModifiers } from "@functions";
import "./input-field.view.scss";

export const InputFieldView = ({
	name,
	label = "",
	description = "",
	error = "",
	type = InputFieldType.Text,
	isRequired = false
}: IInputFieldViewProps) => {
	const classModifiers = generateClassModifiers("input-field", [
		{ modifier: "error", evaluate: () => !!error }
	]);

	return (
		<div className={`input-field ${classModifiers}`}>
			<TextView
				content={label}
				tag={TextViewTag.Label}
				inputName={name}
			/>
			{description &&
				<TextView
					className="input-field__description"
					content={description}
				/>
			}
			<input
				type={type}
				name={name}
				required={isRequired}
			></input>
			{error && 
				<div className="input-field__error">
					<IconView source={SVGSource.Error} />
					<TextView content={error} />
				</div>
			}
		</div>
	);
};