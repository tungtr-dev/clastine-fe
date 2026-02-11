import { TextViewType } from "./enums/text.view.enum.ts";
import { ITextViewProps } from "./text.view.interface.ts";

export const TextView = ({
	content,
	type: Tag = TextViewType.Label
}: ITextViewProps) => {
	return (
		<Tag className="text">
			{content}
		</Tag>
	);
};