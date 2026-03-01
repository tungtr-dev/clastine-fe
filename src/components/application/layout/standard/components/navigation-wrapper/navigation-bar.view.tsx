import { Breakpoint } from "@constants";
import { generateClassModifiers } from "@functions";
import { useAppSelector } from "@hooks";
import { selectBreakpoint } from "@domain/store/slices";
import { NavigationContentView } from "../navigation-content/navigation-content.view.tsx";
import { NavigationHeaderButtonType } from "../navigation-header/enums/navigation-header.view.enum.ts";
import { NavigationHeaderView } from "../navigation-header/navigation-header.view.tsx";
import { INavigationBarViewProps } from "./navigation-bar.view.interface.ts";
import "./navigation-bar.view.scss";

export const NavigationBarView = ({
	isCompact = false
}: INavigationBarViewProps) => {
	const breakpoint = useAppSelector(selectBreakpoint);

	const modifiers = generateClassModifiers("navigation-bar", [
		{ modifier: "compact", evaluate: () => isCompact }
	])

	return (
		<div className={`navigation-bar ${modifiers}`}>
			{breakpoint !== Breakpoint.Small
				? <NavigationContentView />
				: <NavigationHeaderView buttonType={NavigationHeaderButtonType.Menu} />
			}
		</div>
	);
};