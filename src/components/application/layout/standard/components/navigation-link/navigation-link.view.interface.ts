import { SVGSource, WebPSource } from "@constants";

export interface INavigationLinkProps {
	label: string;
	source: SVGSource | WebPSource;
	onClick?: () => void;
};