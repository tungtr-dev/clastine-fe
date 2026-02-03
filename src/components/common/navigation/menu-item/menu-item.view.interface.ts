import { SVGSource } from "@constants/svg-source.enum.ts";

export interface IMenuItemViewProperties {
	label: string;
	icon: SVGSource;
	onClick?: () => void;
};