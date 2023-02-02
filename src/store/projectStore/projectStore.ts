import { getProjectListApi, IProject } from "@/api/project";
import { getTagListApi } from "@/api/tag";
import { ITag } from "@/api/tag/types";
import { ReturnPageType } from "@/api/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProjectStore = defineStore("project", () => {
	// 标签云数据
	const projectList = ref<ReturnPageType<IProject>["data"]>();
	const fetchProjectListAction = async () => {
		if (!projectList.value) {
			const { data } = await getProjectListApi({
				pageSize: 100,
				currentPage: 1,
				searchText: "",
			});
			projectList.value = data;
		}
	};
	return {
		projectList,
		fetchProjectListAction,
	};
});
