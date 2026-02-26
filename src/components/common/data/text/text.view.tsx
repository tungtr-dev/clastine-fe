import { generateClassModifiers } from "@functions";
import { TextViewTag } from "./enums/text.view.enum.ts";
import { ITextViewProps } from "./text.view.interface.ts";
import "./text.view.scss";

export const TextView = ({
	className = "",
	content,
	tag: Tag = TextViewTag.Span,
	htmlFor = "",
	onClick
}: ITextViewProps) => {
	const classModifiers = generateClassModifiers("text", [
		{ modifier: "interactive", evaluate: () => !!onClick }
	]);

	const mainContent = typeof content === "string"
		? content
		: content.map((child, index) => {
			return <TextView key={index} {...child} />
		});

	return (<>
		{content &&
			<Tag
				className={`text ${className} ${classModifiers}`}
				htmlFor={htmlFor}
				onClick={onClick}
			>
				{mainContent}
			</Tag>
		}
	</>);
};