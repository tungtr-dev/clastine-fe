import { Clastine } from "@components/application/core";
import { Theme } from "@constants";
import { ThemeContext } from "@contexts";
import { initialize } from "@initializer";
import { store } from "@domain/store";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { MantineProvider } from "@mantine/core";

initialize();

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<MantineProvider>
				<ThemeContext value={Theme.Light}>
					<Clastine />
				</ThemeContext>
			</MantineProvider>
		</Provider>
	</StrictMode>,
);