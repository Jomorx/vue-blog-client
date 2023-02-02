import { getTagListApi } from "@/api/tag";
import { ITag } from "@/api/tag/types";
import { ReturnPageType } from "@/api/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTagStore = defineStore("tag", () => {
	// 标签云数据
	const tagList = ref<ReturnPageType<ITag>["data"]>();
	const fetchTagListAction = async () => {
		const { data } = await getTagListApi({ pageSize: 100, currentPage: 1, searchText: "" });
		tagList.value = data;
	};
	return {
		tagList,
		fetchTagListAction,
	};
});
