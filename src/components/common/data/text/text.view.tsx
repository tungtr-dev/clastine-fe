import { TextViewType } from "./text.view.enum.ts";
import { ITextViewProperties } from "./text.view.interface.ts";

export const TextView = ({
	children,
	type: Tag = TextViewType.Label
}: ITextViewProperties) => {
	return <Tag>{children}</Tag>
};