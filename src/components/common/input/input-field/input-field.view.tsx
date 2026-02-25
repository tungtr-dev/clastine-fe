import { useRef } from "react";
import { IconView, TextView, TextViewTag } from "@components/common/data";
import { SVGSource } from "@constants";
import { InputType, InputViewByType } from "./enums/input-field.view.enum.ts";
import { IInputFieldViewProps } from "./input-field.view.interface.ts";
import { generateClassModifiers } from "@functions";
import "./input-field.view.scss";

export const InputFieldView = ({
	registry,
	label = "",
	description = "",
	error = "",
	type = InputType.Text,
	placeholder
}: IInputFieldViewProps) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const classModifiers = generateClassModifiers("input-field", [
		{ modifier: "error", evaluate: () => !!error }
	]);

	const InputView = InputViewByType[type];

	return (
		<div className={`input-field ${classModifiers}`}>
			<TextView
				content={label}
				tag={TextViewTag.Label}
				inputName={registry.name}
			/>
			{description &&
				<TextView
					className="input-field__description"
					content={description}
				/>
			}
			<div
				className="input-field__wrapper"
				onClick={() => inputRef.current.focus()}
			>
				<InputView
					registry={{
						...registry,
						ref: (instance: HTMLInputElement) => {
							registry.ref(instance);
							inputRef.current = instance;
						}
					}}
					placeholder={placeholder}
				/>
			</div>
			{error && 
				<div className="input-field__error">
					<IconView source={SVGSource.Error} />
					<TextView content={error} />
				</div>
			}
		</div>
	);
};