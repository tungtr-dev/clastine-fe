import { useContext } from "react";
import { ThemeContext } from "@contexts/theme.context.ts";
import "./clastine.scss";
import "./clastine.theme.scss";
import { NavigationBarView } from "components/layout/index.ts";
import { SVGSource } from "@constants/svg-source.enum.ts";

export const Clastine = () => {
	const theme = useContext(ThemeContext);

	return (
		<div className="clastine" current-theme={theme}>
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