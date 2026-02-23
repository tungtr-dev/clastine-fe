import { IDrawerViewProps } from "./drawer.view.interface.ts";

export const DrawerView = ({
	children
}: IDrawerViewProps) => {
	return (
		<div
			className="drawer"
			onClick={event => event.stopPropagation()}
		>
			{children}
		</div>
	);
};