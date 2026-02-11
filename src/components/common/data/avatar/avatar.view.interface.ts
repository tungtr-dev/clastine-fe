import { AvatarViewSize } from "./enums/avatar.view.enum.ts";

export interface IAvatarViewProps {
	source: string;
	size?: AvatarViewSize;
}