import { useContext } from "react";
import { NavigationContext } from "../../utilities/contexts/navigation.context.ts";
import { NavigationContentView } from "../navigation-content/navigation-content.view.tsx";
import { DrawerOverlayView } from "@components/common/overlay";
import "./navigation-drawer.view.scss";

export const NavigationDrawerView = () => {
	const { isDrawerOpen, drawerActions } = useContext(NavigationContext);

	return (
		<DrawerOverlayView
			className="navigation-drawer"
			isOpen={isDrawerOpen}
			disclosureActions={drawerActions}
		>
			<NavigationContentView />
		</DrawerOverlayView>
	)
};