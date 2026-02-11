import { IAvatarViewProps } from "./avatar.view.interface.ts";
import { AvatarViewSize } from "./enums/avatar.view.enum.ts";
import "./avatar.view.scss";

export const AvatarView = ({
	source,
	size = AvatarViewSize.Small
}: IAvatarViewProps) => {
	return (
		<img
			className={`avatar avatar--${size}`}
			alt="avatar"
			src={source}
		/>
	);
}