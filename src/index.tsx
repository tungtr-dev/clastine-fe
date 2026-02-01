import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Clastine } from "@core/index.ts";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Clastine />
	</StrictMode>,
);