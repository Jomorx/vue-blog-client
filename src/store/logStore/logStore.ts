import { getLogListApi, ILog } from "@/api/log";
import { ReturnPageType } from "@/api/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useLogStore = defineStore("log", () => {
	// 标签云数据
	const logList = ref<ReturnPageType<ILog>["data"]>();
	const fetchLogListAction = async () => {
		if (!logList.value) {
			const { data } = await getLogListApi({
				pageSize: 100,
				currentPage: 1,
				searchText: "",
			});
			logList.value = data;
		}
	};
	return {
		logList,
		fetchLogListAction,
	};
});
