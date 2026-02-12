import { IOverlayViewProps } from "./overlay.view.interface.ts";
import "./overlay.view.scss";

export const OverlayView = ({
	children,
	className = ""
}: IOverlayViewProps) => {
	return (
		<div className={`overlay ${className}`}>
			{children}
		</div>
	);
};