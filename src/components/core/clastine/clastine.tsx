import { MenuItemView } from "@common/navigation/index.ts";
import { SVGSource } from "@constants/svg-source.enum.ts";
import "./clastine.scss";

export const Clastine = () => {
	return (<>
		{[
			"Dashboard",
			"Classrooms",
			"Calendar"
		].map(label => (
			<MenuItemView icon={SVGSource.Dashboard}>
				{label}
			</MenuItemView>
		))}
	</>);
};