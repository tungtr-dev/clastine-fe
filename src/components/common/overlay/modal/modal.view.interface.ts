import { IParentViewProps } from "@components/common/types";
import { IOverlayViewProps } from "../overlay/overlay.view.interface.ts";

export interface IModalViewCommonProps {
	header: string;
}

export interface IModalOverlayViewProps extends IOverlayViewProps, IModalViewCommonProps {}

export interface IModalViewProps extends IParentViewProps, IModalViewCommonProps {
	close: () => void;
}