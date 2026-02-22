import { SVGSource } from "@constants";

export interface INavigationLinkProps {
	label: string;
	icon: SVGSource;
	onClick?: () => void;
};