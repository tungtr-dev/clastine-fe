import { SVGSource, Breakpoint } from "@constants";
import { useDisclosure } from "@hooks";
import { selectBreakpoint } from "@store";
import { useSelector } from "react-redux";
import { NavigationDrawerView } from "./components/navigation-drawer/navigation-drawer.view.tsx";
import { NavigationBarView } from "./components/navigation-wrapper/navigation-bar.view.tsx";
import { INavigationLinkGroups } from "./utilities/contexts/navigation.context.interface.ts";
import { NavigationContext } from "./utilities/contexts/navigation.context.ts";
import "./standard.layout.scss";

export const StandardLayout = () => {
	const [isDrawerOpen, drawerActions] = useDisclosure(false);

	const [isNavigationBarCompact, { toggle }] = useDisclosure(false);

	const breakpoint = useSelector(selectBreakpoint);

	const links: INavigationLinkGroups = {
		main: [
			{
				icon: SVGSource.Dashboard,
				label: "Dashboard"
			},
			{
				icon: SVGSource.Education,
				label: "Classrooms"
			},
			{
				icon: SVGSource.Calendar,
				label: "Calendar"
			}
		],
		footer: [
			{
				icon: !isNavigationBarCompact
					? SVGSource.DoubleArrowLeft
					: SVGSource.DoubleArrowRight,
				label: "Collapse",
				onClick: () => toggle()
			},
			{
				icon: SVGSource.Account,
				label: "Login"
			}
		]
	};

	return (
		<NavigationContext value={{
			links,
			isDrawerOpen,
			drawerActions
		}}>
			<div className="standard-layout">
				{breakpoint === Breakpoint.Small && <NavigationDrawerView />}
				<NavigationBarView isCompact={isNavigationBarCompact} />
				<div className="standard-layout__content">
					Main Content
				</div>
			</div>
		</NavigationContext>
	);
};