import { generateClassModifiers } from "@functions";
import { OverlayView } from "../overlay/overlay.view.tsx";
import { DrawerContentView } from "./drawer.content.view.tsx";
import { IDrawerViewProps } from "./drawer.view.interface.ts";
import "./drawer.view.scss";

export const DrawerView = ({
	children,
	className,
	isOpened
}: IDrawerViewProps) => {
	const classModifiers = generateClassModifiers("drawer", [
		{ modifier: "opened", evaluate: () => isOpened }
	]);

	return (
		<OverlayView className={`drawer ${className} ${classModifiers}`}>
			<DrawerContentView>
				{children}
			</DrawerContentView>
		</OverlayView>
	);
};