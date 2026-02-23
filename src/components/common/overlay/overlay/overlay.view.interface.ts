import { IParentViewProps, IViewProps } from "@components/common/types";
import { IDisclosureHookActions } from "@hooks";

export interface IOverlayViewProps extends IViewProps, IParentViewProps {
	isOpen: boolean;
	disclosureActions: IDisclosureHookActions;
}

export interface IOverlayViewPrivateProps extends IOverlayViewProps {
	viewClassName: string;
}