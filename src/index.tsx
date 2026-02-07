import { Clastine } from "@components/core";
import { Theme } from "@constants";
import { ThemeContext } from "@contexts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeContext value={Theme.Light}>
			<Clastine />
		</ThemeContext>
	</StrictMode>,
);