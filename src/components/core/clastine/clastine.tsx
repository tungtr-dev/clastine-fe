import { NavigationBarView } from "@components/layout";
import { SVGSource } from "@constants";
import { useBreakpoint } from "@hooks";
import { ThemeContext } from "@contexts";
import { useContext } from "react";
import "./clastine.scss";

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