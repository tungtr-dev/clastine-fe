import { IParentViewProps, IViewProps } from "@components/common/types";

export interface IOverlayViewProps extends IViewProps, IParentViewProps {
	isOpened: boolean;
}

export interface IOverlayViewPrivateProps extends IOverlayViewProps {
	viewClassName: string;
}