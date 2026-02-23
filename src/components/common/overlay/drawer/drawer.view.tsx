import { IDrawerViewProps } from "./drawer.view.interface.ts";

export const DrawerView = ({
	children
}: IDrawerViewProps) => {
	return (
		<div className="drawer">
			{children}
		</div>
	);
};