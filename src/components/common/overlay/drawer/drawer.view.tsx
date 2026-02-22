import { OverlayView } from "../overlay/overlay.view.tsx";
import { DrawerContentView } from "./drawer.content.view.tsx";
import { IDrawerViewProps } from "./drawer.view.interface.ts";
import "./drawer.view.scss";

export const DrawerView = ({
	children,
	className,
	isOpened
}: IDrawerViewProps) => {
	return (
		<OverlayView
			className={className}
			viewClassName="drawer"
			isOpened={isOpened}
		>
			<DrawerContentView>
				{children}
			</DrawerContentView>
		</OverlayView>
	);
};