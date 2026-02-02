import { MenuItemView } from "@common/navigation/index.ts";
import { SVGSource } from "@constants/svg-source.enum.ts";
import { useContext } from "react";
import { ThemeContext } from "@contexts/theme.context.ts";
import "./clastine.scss";
import "./clastine.theme.scss";

export const Clastine = () => {
	const theme = useContext(ThemeContext);

	return (
		<div className="clastine" current-theme={theme}>
			{[
				"Dashboard",
				"Classrooms",
				"Calendar"
			].map(label => (
				<MenuItemView icon={SVGSource.Dashboard}>
					{label}
				</MenuItemView>
			))}
		</div>
	);
};