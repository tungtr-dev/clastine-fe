import { useContext } from "react";
import { ThemeContext } from "@contexts/theme.context.ts";
import "./clastine.scss";
import "./clastine.theme.scss";
import { NavigationBarView } from "components/layout/index.ts";
import { SVGSource } from "@constants/svg-source.enum.ts";
import { useBreakpoint } from "utilities/hooks/index.ts";

export const Clastine = () => {
	const theme = useContext(ThemeContext);
	const breakpoint = useBreakpoint();

	return (
		<div
			className="clastine"
			clst-theme={theme}
			clst-breakpoint={breakpoint}
		>
			<NavigationBarView
				items={[
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
				]}
			/>
		</div>
	);
};