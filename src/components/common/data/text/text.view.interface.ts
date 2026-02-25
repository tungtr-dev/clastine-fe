import { IViewProps } from "@components/common/types";
import { TextViewTag } from "./enums/text.view.enum.ts";

interface ILabelProps {
	inputName?: string;
}

export interface ITextViewProps extends IViewProps, ILabelProps {
	content: string;
	tag?: TextViewTag;
};