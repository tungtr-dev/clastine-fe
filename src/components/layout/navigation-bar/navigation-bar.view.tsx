import { MenuItemView } from "@common/navigation/index.ts";
import { INavigationBarViewProperties } from "./navigation-bar.view.interface.ts";

export const NavigationBarView = ({
	items
}: INavigationBarViewProperties) => {
	return (<>
		{items.map(({ icon, label }) => (
			<MenuItemView
				icon={icon}
				label={label}
			/>
		))}
	</>);
};