import { IParentViewProps, IViewProps } from "@components/common/types";

export interface IOverlayViewProps extends IViewProps, IParentViewProps {
	isOpen: boolean;
	close: () => void;
}

export interface IOverlayViewPrivateProps extends IOverlayViewProps {
	viewClassName: string;
}