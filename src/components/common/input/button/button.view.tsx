import { IconView } from "@components/common/data";
import { IButtonViewProps } from "./button.view.interface.ts";
import { ButtonViewVariant } from "./enums/button.view.enum.ts";
import { generateClassModifiers } from "@functions";
import "./styles/button.view.scss";

export const ButtonView = ({
	label,
	icon,
	variant = ButtonViewVariant.Filled,
	isCompact,
	isStretched,
	onClick = () => {}
}: IButtonViewProps) => {
	const classModifiers = generateClassModifiers("button", [
		{ modifier: "with-label", evaluate: () => !!label },
		{ modifier: "with-icon", evaluate: () => !!icon },
		{ modifier: variant },
		{ modifier: "compact", evaluate: () => isCompact },
		{ modifier: "stretched", evaluate: () => isStretched }
	]);

	return (
		<button
			className={`button ${classModifiers}`}
			type="button"
			onClick={onClick}
		>
			{icon && <IconView source={icon} />}
			{label}
		</button>
	);
}