import { generateClassModifiers } from "@functions";
import { IOverlayViewPrivateProps } from "./overlay.view.interface.ts";
import "./overlay.view.scss";

export const OverlayView = ({
	children,
	className = "",
	isOpened,
	viewClassName
}: IOverlayViewPrivateProps) => {
	const classModifiers = generateClassModifiers(viewClassName, [
		{ modifier: "opened", evaluate: () => isOpened }
	]);

	return (
		<div className={`overlay ${viewClassName} ${className} ${classModifiers}`}>
			{children}
		</div>
	);
};