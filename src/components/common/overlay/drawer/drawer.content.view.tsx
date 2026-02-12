import { IDrawerContentViewProps } from "./drawer.view.interface.ts";

export const DrawerContentView = ({
	children
}: IDrawerContentViewProps) => {
	return (
		<div className="drawer__content">
			{children}
		</div>
	);
};