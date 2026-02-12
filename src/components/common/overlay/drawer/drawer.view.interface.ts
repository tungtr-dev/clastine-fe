import { IParentViewProps, IViewProps } from "@components/types";

export interface IDrawerContentViewProps extends IParentViewProps {}

export interface IDrawerViewProps extends IViewProps, IParentViewProps {
	isOpened: boolean;
}