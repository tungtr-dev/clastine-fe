import { TextViewType } from "./text.view.enum.ts";
import { IViewProperties } from "@common/types/view.interface.ts";

export interface ITextViewProperties extends IViewProperties {
	type?: TextViewType;
};