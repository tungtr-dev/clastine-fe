import { IIconViewProps } from "./icon.view.interface.ts";

export const IconView = ({
	source
}: IIconViewProps) => {
	return <img
		className="icon"
		src={`/src/resources/svg/ic-${source}.svg`}
	/>;
};