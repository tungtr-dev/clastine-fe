import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Clastine } from "@core/index.ts";
import { ThemeContext } from "@contexts/theme.context.ts";
import { Theme } from "@constants/theme.enum.ts";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeContext value={Theme.Light}>
			<Clastine />
		</ThemeContext>
	</StrictMode>,
);