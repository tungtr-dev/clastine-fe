import { SVGSource } from "@constants";
import { NavigationBarView } from "./components/navigation-bar/navigation-bar.view.tsx";
import { INavigationLinkProps } from "./components/navigation-link/navigation-link.view.interface.ts";
import "./common.layout.scss";

export const CommonLayout = () => {
	const items: INavigationLinkProps[] = [
		{
			icon: SVGSource.Dashboard,
			label: "Dashboard"
		},
		{
			icon: SVGSource.Dashboard,
			label: "Classrooms"
		},
		{
			icon: SVGSource.Dashboard,
			label: "Calendar"
		}
	];

	return (
		<div className="common-layout">
			<NavigationBarView items={items} />
			<div className="common-layout__content">
				Main Content
			</div>
		</div>
	);
};