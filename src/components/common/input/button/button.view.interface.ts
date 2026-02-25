import { SVGSource } from "@constants";
import { ButtonType, ButtonViewVariant } from "./enums/button.view.enum.ts";

export interface IButtonViewProps {
	label: string;
	icon?: SVGSource;
	type?: ButtonType;
	variant?: ButtonViewVariant;
	isCompact?: boolean;
	isStretched?: boolean;
	onClick?: () => void;
}