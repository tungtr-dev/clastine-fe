import { ButtonView, ButtonViewVariant } from "@components/common/input";
import { SVGSource, Breakpoint } from "@constants";
import { useAppSelector } from "@hooks";
import { selectBreakpoint } from "@store";
import { useContext } from "react";
import { NavigationContext } from "../../utilities/contexts/navigation.context.ts";
import { NavigationHeaderButtonType } from "./enums/navigation-header.view.enum.ts";
import { INavigationHeaderViewProps } from "./navigation-header.view.interface.ts";
import "./navigation-header.view.scss";

export const NavigationHeaderView = ({
	buttonType
}: INavigationHeaderViewProps) => {
	const { drawerActions: { open, close } } = useContext(NavigationContext);

	const breakpoint = useAppSelector(selectBreakpoint);

	const hasMenuButton = buttonType === NavigationHeaderButtonType.Menu;

	return (
		<div className="navigation-header">
			<ButtonView
				label=""
				icon={SVGSource.Board}
			/>
			{breakpoint === Breakpoint.Small && (
				<ButtonView
					label=""
					icon={hasMenuButton ? SVGSource.Menu : SVGSource.Close}
					variant={ButtonViewVariant.Subtle}
					isCompact={true}
					onClick={ hasMenuButton ? open : close}
				/>
			)}
		</div>
	);
};