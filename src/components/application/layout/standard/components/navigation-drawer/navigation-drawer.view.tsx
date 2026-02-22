import { DrawerView } from "@components/common/overlay";
import { useContext } from "react";
import { NavigationContext } from "../../utilities/contexts/navigation.context.ts";
import { NavigationContentView } from "../navigation-content/navigation-content.view.tsx";
import "./navigation-drawer.view.scss";

export const NavigationDrawerView = () => {
	const { isDrawerOpened } = useContext(NavigationContext);

	return (
		<DrawerView
			className="navigation-drawer"
			isOpened={isDrawerOpened}
		>
			<NavigationContentView />
		</DrawerView>
	)
};