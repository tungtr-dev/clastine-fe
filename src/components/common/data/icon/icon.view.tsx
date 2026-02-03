import { IIconViewProperties } from "./icon.view.interface.ts";

export const IconView = ({
	source
}: IIconViewProperties) => {
	return <img
		className="icon"
		src={`/src/resources/svg/ic-${source}.svg`}
	/>;
};