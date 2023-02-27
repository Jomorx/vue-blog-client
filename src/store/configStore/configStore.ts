import { defineStore } from "pinia";
import { ref } from "vue";
export const useConfigStore = defineStore("config", () => {
	// 标签云数据
	const isDark = ref<boolean>(false);
	return {
		isDark,
	};
});
