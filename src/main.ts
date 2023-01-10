import "@/assets/css/variable.css";
import "@/assets/css/init.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import plugin from "@/global";
import "github-markdown-css";
import { pinia } from "./store";

createApp(App).use(pinia).use(plugin).use(router).mount("#app");
