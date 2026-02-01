import { IViewProperties } from "@common/types/view.interface.ts";
import { SVGSource } from "@constants/svg-source.enum.ts";

export interface IMenuItemViewProperties extends IViewProperties {
	icon?: SVGSource;
	onClick?: () => void;
};