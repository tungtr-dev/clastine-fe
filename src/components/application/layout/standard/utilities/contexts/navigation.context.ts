import { createContext } from "react";
import { INavigationContext } from "./navigation.context.interface.ts";
import { IDisclosureHookActions } from "@hooks";

const baseActions: IDisclosureHookActions = {
		open: () => {},
		close: () => {},
		toggle: () => {}
};

export const NavigationContext = createContext<INavigationContext>({
	links: {
		main: [],
		footer: []
	},
	isDrawerOpened: false,
	drawerActions: baseActions
});