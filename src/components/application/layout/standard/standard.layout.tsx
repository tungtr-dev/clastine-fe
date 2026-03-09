import { SVGSource, Breakpoint, ModalID, WebPSource } from "@constants";
import { useAppDispatch, useAppSelector, useDisclosure } from "@hooks";
import { modalActions, selectAccount, selectBreakpoint } from "@domain/store/slices";
import { NavigationDrawerView } from "./components/navigation-drawer/navigation-drawer.view.tsx";
import { NavigationBarView } from "./components/navigation-wrapper/navigation-bar.view.tsx";
import { INavigationLinkGroups } from "./utilities/contexts/navigation.context.interface.ts";
import { NavigationContext } from "./utilities/contexts/navigation.context.ts";
import "./standard.layout.scss";
import { CardView } from "@components/common/container";

export const StandardLayout = () => {
	const [isDrawerOpen, drawerActions] = useDisclosure(false);

	const [isNavigationBarCompact, { toggle }] = useDisclosure(false);

	const breakpoint = useAppSelector(selectBreakpoint);

	const account = useAppSelector(selectAccount);

	const dispatch = useAppDispatch();

	const links: INavigationLinkGroups = {
		main: [
			{
				source: SVGSource.Dashboard,
				label: "Dashboard"
			},
			{
				source: SVGSource.Education,
				label: "Classrooms"
			},
			{
				source: SVGSource.Calendar,
				label: "Calendar"
			}
		],
		footer: [
			{
				source: !isNavigationBarCompact
					? SVGSource.DoubleArrowLeft
					: SVGSource.DoubleArrowRight,
				label: "Collapse",
				onClick: () => toggle()
			},
			{
				source: account.token ? WebPSource.Placeholder : SVGSource.Account,
				label: account.displayName || "Account",
				onClick: () => dispatch(modalActions.open(ModalID.Account))
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
					<CardView>
						Main Content
					</CardView>
				</div>
			</div>
		</NavigationContext>
	);
};