import { StandardLayout } from "@components/application/layout";
import { ThemeContext } from "@contexts";
import { useContext } from "react";
import "./clastine.scss";

export const Clastine = () => {
	const theme = useContext(ThemeContext);

	return (
		<div
			className="clastine"
			clst-theme={theme}
		>
			<StandardLayout />
		</div>
	);
};