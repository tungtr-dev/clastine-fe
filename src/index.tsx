import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Clastine } from "@core/clastine.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Clastine />
	</StrictMode>,
);