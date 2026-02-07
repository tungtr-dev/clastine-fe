import { INavigationBarViewProps } from "./navigation-bar.view.interface.ts";
import { NavigationLinkView } from "./navigation-link/navigation-link.view.tsx";

export const NavigationBarView = ({
	items
}: INavigationBarViewProps) => {
	return (<>
		{items.map(({ icon, label }) => (
			<NavigationLinkView
				icon={icon}
				label={label}
			/>
		))}
	</>);
};