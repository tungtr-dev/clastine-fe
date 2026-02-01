import { ReactNode } from "react";
import { TextViewType } from "./text.view.enum.ts";

export interface ITextViewProperties {
	children: ReactNode;
	type?: TextViewType;
};