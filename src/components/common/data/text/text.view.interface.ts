import { IViewProps } from "@components/common/types";
import { TextViewTag } from "./enums/text.view.enum.ts";

interface ILabelProps {
	htmlFor?: string;
}

interface ITextViewContentProps extends ILabelProps {
	content: string | ITextViewContentProps[];
	tag?: TextViewTag;
	onClick?: () => void;
}

export interface ITextViewProps extends IViewProps, ITextViewContentProps {};