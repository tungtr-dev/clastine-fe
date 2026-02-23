import { OverlayView } from "../overlay/overlay.view.tsx";
import { IDrawerOverlayViewProps } from "./drawer.view.interface.ts";
import { DrawerView } from "./drawer.view.tsx";
import "./drawer.view.scss";

export const DrawerOverlayView = ({
	children,
	className,
	isOpen,
	disclosureActions
}: IDrawerOverlayViewProps) => {
	return (
		<OverlayView
			className={className}
			viewClassName="drawer-overlay"
			isOpen={isOpen}
			disclosureActions={disclosureActions}
		>
			<DrawerView>
				{children}
			</DrawerView>
		</OverlayView>
	);
};