import { TextViewTag } from "./enums/text.view.enum.ts";
import { ITextViewProps } from "./text.view.interface.ts";

export const TextView = ({
	className = "",
	content,
	tag: Tag = TextViewTag.Normal,
	inputName = ""
}: ITextViewProps) => {
	return (<>
		{content &&
			<Tag
				className={`text ${className}`}
				htmlFor={inputName}
			>
				{content}
			</Tag>
		}
	</>);
};