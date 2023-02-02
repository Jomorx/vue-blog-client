import { getConfigByIdApi, IConfig } from "@/api/config";
import { getTagListApi } from "@/api/tag";
import { ITag } from "@/api/tag/types";
import { ReturnPageType } from "@/api/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAboutStore = defineStore("about", () => {
	// 标签云数据
	const about = ref<IConfig>();
	const fetchAboutListAction = async () => {
		if (!about.value) {
			const { data } = await getConfigByIdApi(1);
			about.value = data;
		}
	};
	return {
		about,
		fetchAboutListAction,
	};
});
