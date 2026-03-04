import { AvatarView, IconView, TextView } from "@components/common/data";
import { INavigationLinkProps } from "./navigation-link.view.interface.ts";
import "./navigation-link.view.scss";
import { ResourceType, SVGSource } from "@constants";
import { getResourceType } from "@functions";

export const NavigationLinkView = ({
	label,
	source,
	onClick = () => {}
}: INavigationLinkProps) => {
	return <div
		className="navigation-link"
		onClick={onClick}
	>
		{getResourceType(source) === ResourceType.SVG
			? <IconView source={source as SVGSource} />
			: <AvatarView source={source} />
		}
		<TextView content={label} />
	</div>
};