import { useState } from "react";
import { SVGSource } from "@constants";
import { ButtonView } from "../../button/button.view.tsx";
import { InputType } from "../enums/input-field.view.enum.ts";
import { IInputViewProps } from "../input-field.view.interface.ts";
import { ButtonViewVariant } from "../../button/enums/button.view.enum.ts";

export const PasswordInputView = ({
	name,
	isRequired = false,
	ref
}: IInputViewProps) => {
	const [isVisible, setIsVisible] = useState(false);

	const type = isVisible ? InputType.Text : InputType.Password;

	const icon = isVisible ? SVGSource.VisibilityOff : SVGSource.Visibility;

	return (
		<>
			<input
				type={type}
				name={name}
				required={isRequired}
				ref={ref}
			/>
			<ButtonView
				label=""
				icon={icon}
				variant={ButtonViewVariant.Subtle}
				isCompact={true}
				onClick={() => setIsVisible(!isVisible)}
			/>
		</>
	);
};