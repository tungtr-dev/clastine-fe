import { IconView, TextView } from "@common/data/index.ts";
import { SVGSource } from "@constants/svg-source.enum.ts";
import "./clastine.css";

export const Clastine = () => {
	return (<>
		<IconView source={SVGSource.Dashboard} />
		<TextView>
			Clastine
		</TextView>
	</>);
};