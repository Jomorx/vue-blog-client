import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { getArticleListApi, getArticleTimeLineApi, IArticle, IArticleList } from "@/api/article";
import { ReturnPageType, IReturnType } from "@/api/types";
import { IArticleSideMenu } from "./types";

export const useArticleStore = defineStore("article", () => {
	// Home页面文章数据
	const pageInfo = reactive({
		pageSize: 10,
		currentPage: 1,
		searchText: "",
	});
	const articleList = ref<ReturnPageType<IArticle>["data"]>({ count: 0, rows: [] });
	const fetchArticleDataAction = async () => {
		if (!articleList.value.count) {
			const { data } = await getArticleListApi({
				pageSize: pageInfo.pageSize,
				currentPage: pageInfo.currentPage,
				searchText: pageInfo.searchText,
			});
			articleList.value.count = data.count;
			articleList.value.rows.push(...data.rows);
			// 1 * 10  20
			// 2 * 10  20
		} else if (pageInfo.currentPage * pageInfo.pageSize < articleList.value.count) {
			pageInfo.currentPage++;
			const { data } = await getArticleListApi({
				pageSize: pageInfo.pageSize,
				currentPage: pageInfo.currentPage,
				searchText: pageInfo.searchText,
			});
			articleList.value.rows.push(...data.rows);
		}
	};
	//归档界面数据
	const articleTimeLine = ref<IArticleList[]>();
	const fetchArticleTimeLineAction = async () => {
		if (!articleTimeLine.value) {
			const res = await getArticleTimeLineApi();
			articleTimeLine.value = res.data;
		}
	};

	const articleSideMenu = ref<IArticleSideMenu[]>([]);
	const changeArticleSideMenuAction = (heading: IArticleSideMenu[]) => {
		articleSideMenu.value = heading;
	};
	return {
		articleList,
		fetchArticleDataAction,
		pageInfo,
		articleTimeLine,
		fetchArticleTimeLineAction,
		changeArticleSideMenuAction,
		articleSideMenu,
	};
});
