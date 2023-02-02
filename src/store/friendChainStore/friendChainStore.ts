import { getFriendChainListApi, IFriendChain } from "@/api/freindChain";
import { getLogListApi, ILog } from "@/api/log";
import { ReturnPageType } from "@/api/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useFriendChainStore = defineStore("friendChain", () => {
	// 标签云数据
	const friendChainList = ref<ReturnPageType<IFriendChain>["data"]>();
	const fetchFriendChainListAction = async () => {
		if (!friendChainList.value) {
			const { data } = await getFriendChainListApi({
				pageSize: 100,
				currentPage: 1,
				searchText: "",
			});
			friendChainList.value = data;
		}
	};
	return {
		friendChainList,
		fetchFriendChainListAction,
	};
});
