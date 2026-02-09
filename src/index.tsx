import { Clastine } from "@components/core";
import { Theme } from "@constants";
import { ThemeContext } from "@contexts";
import { initialize } from "@initializer";
import { store } from "@store";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

initialize();

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<ThemeContext value={Theme.Light}>
				<Clastine />
			</ThemeContext>
		</Provider>
	</StrictMode>,
);