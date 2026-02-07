import { TextViewType } from "./enums/text.view.enum.ts";

export interface ITextViewProps {
	content: string;
	type?: TextViewType;
};