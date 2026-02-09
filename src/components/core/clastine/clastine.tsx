import { NavigationBarView } from "@components/layout";
import { SVGSource } from "@constants";
import { ThemeContext } from "@contexts";
import { useContext } from "react";
import "./clastine.scss";
import { useAppSelector } from "@hooks";
import { selectBreakpoint } from "@store";

export const Clastine = () => {
	const breakpoint = useAppSelector(selectBreakpoint);
	const theme = useContext(ThemeContext);

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