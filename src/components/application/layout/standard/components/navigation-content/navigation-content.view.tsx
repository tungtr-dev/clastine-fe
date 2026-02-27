import { Breakpoint } from "@constants";
import { useAppSelector } from "@hooks";
import { selectBreakpoint } from "@store/slices";
import { useContext } from "react";
import { NavigationContext } from "../../utilities/contexts/navigation.context.ts";
import { NavigationHeaderButtonType } from "../navigation-header/enums/navigation-header.view.enum.ts";
import { NavigationHeaderView } from "../navigation-header/navigation-header.view.tsx";
import { INavigationLinkProps } from "../navigation-link/navigation-link.view.interface.ts";
import { NavigationLinkView } from "../navigation-link/navigation-link.view.tsx";
import "./navigation-content.view.scss";

const generateNavigationLinkViews = (
	links: INavigationLinkProps[],
	startIndex: number = 0
) => links
	.slice(startIndex)
	.map(({ icon, label, onClick }, index) =>
		<NavigationLinkView
			key={index}
			icon={icon}
			label={label}
			onClick={onClick}
		/>
	);

export const NavigationContentView = () => {
	const { links } = useContext(NavigationContext);

	const breakpoint = useAppSelector(selectBreakpoint);

	return (
		<div className="navigation-content">
			<div className="navigation-content__body">
				<NavigationHeaderView buttonType={NavigationHeaderButtonType.Close} />
				{generateNavigationLinkViews(links.main)}
			</div>
			<div className="navigation-content__footer">
				{generateNavigationLinkViews(links.footer, breakpoint === Breakpoint.Large ? 0 : 1)}
			</div>
		</div>
	);
}