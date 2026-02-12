import { SVGSource } from "@constants";
import { ButtonViewVariant } from "./enums/button.view.enum.ts";

export interface IButtonViewProps {
	label: string;
	icon?: SVGSource;
	variant?: ButtonViewVariant;
	isCompact?: boolean;
	onClick?: () => void;
}