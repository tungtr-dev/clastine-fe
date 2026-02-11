import { CommonLayout } from "@components/layout";
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
			<CommonLayout />
		</div>
	);
};