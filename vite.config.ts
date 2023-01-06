// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			imports: [
				"vue",
				{
					"naive-ui": [],
				},
			],
		}),
		Components({
			resolvers: [NaiveUiResolver()],
		}),
	],
	server: {
		port: 80,
	},
	resolve: {
		alias: { "@": path.resolve(__dirname, "./src") },
	},
});
