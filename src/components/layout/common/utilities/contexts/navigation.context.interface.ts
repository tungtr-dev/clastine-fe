import { IDisclosureHookActions } from "@hooks";
import { INavigationLinkProps } from "../../components/navigation-link/navigation-link.view.interface.ts";

export interface INavigationLinkGroups {
	main: INavigationLinkProps[];
	footer: INavigationLinkProps[];
}

export interface INavigationContext {
	links: INavigationLinkGroups;
	isDrawerOpened: boolean;
	drawerActions: IDisclosureHookActions;
}