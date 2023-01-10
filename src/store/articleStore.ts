import { defineStore } from "pinia";
import { ref } from "vue";
import { Article } from "@/api/article";

export const useArticleStore = defineStore("article", () => {
	const articleList = ref<Article[]>([]);
	const getInitArticleList = () => {};

	return {
		articleList,
		getInitArticleList,
	};
});
