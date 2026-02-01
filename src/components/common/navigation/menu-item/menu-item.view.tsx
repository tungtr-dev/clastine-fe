import { IMenuItemViewProperties } from "./menu-item.view.interface.ts";
import { IconView, TextView } from "@common/data/index.ts";
import "./menu-item.view.scss";

export const MenuItemView = ({
	icon,
	children,
	onClick = () => {}
}: IMenuItemViewProperties) => {
	return <div
		className="menu-item"
		onClick={onClick}
	>
		{icon && <IconView source={icon} />}
		<TextView>
			{children}
		</TextView>
	</div>
};