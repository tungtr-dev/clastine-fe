import { IconView, TextView } from "@components/common/data";
import { INavigationLinkProps } from "./navigation-link.view.interface.ts";
import "./navigation-link.view.scss";

export const NavigationLinkView = ({
	label,
	icon,
	onClick = () => {}
}: INavigationLinkProps) => {
	return <div
		className="navigation-link"
		onClick={onClick}
	>
		{icon && <IconView source={icon} />}
		<TextView content={label} />
	</div>
};