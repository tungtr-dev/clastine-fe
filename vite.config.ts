import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
	server: {
		port: 5050
	},
	resolve: {
		alias: {
			"@styles": resolve(__dirname, "src/styles")
		}
	},
	plugins: [
		tsConfigPaths(),
		react({
			babel: {
				plugins: [["babel-plugin-react-compiler"]],
			},
		})
	],
});