import { ICardViewProps } from "./card.view.interface.ts";
import "./card.view.scss";

export const CardView = ({
	children
}: ICardViewProps) => {
	return (
		<div className="card">
			{children}
		</div>
	);
}