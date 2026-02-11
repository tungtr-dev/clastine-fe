
import { Breakpoint } from "@constants";
import { useAppSelector } from "@hooks";
import { selectBreakpoint } from "@store";
import { NavigationLinkView } from "../navigation-link/navigation-link.view.tsx";
import { INavigationBarViewProps } from "./navigation-bar.view.interface.ts";
import "./navigation-bar.view.scss";

export const NavigationBarView = ({
	items
}: INavigationBarViewProps) => {
	const breakpoint = useAppSelector(selectBreakpoint);

	const isMobile = breakpoint === Breakpoint.Small;

	return (
		<div className="navigation-bar">
			{!isMobile
				? items.map(({ icon, label }) => (
					<NavigationLinkView
						icon={icon}
						label={label}
					/>
				))
				: <div>
					Hamburger Menu
				</div>
			}
		</div>
	);
};