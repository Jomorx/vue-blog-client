import { registerStore } from "@/store";
import { App } from "vue";
import { time } from "../directive";
const directives = {
	time,
};

export default (app: App) => {
	//注册指令
	Object.entries(directives).forEach(([name, directive]) => {
		app.directive(name, directive);
	});
	registerStore();
};
