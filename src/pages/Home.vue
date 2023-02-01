<template>
	<div class="home-container" ref="home">
		<div
			v-for="item in articleList"
			@click="handlerClickArticle(item.articleId)"
			class="article-container"
			ref="articles"
			:key="item.articleId"
		>
			<div class="image-container">
				<img :src="item.articleCover" alt="" lazy />
			</div>
			<div class="card-detail">
				<div class="article-title">
					<h2>{{ item.articleTitle }}</h2>
				</div>
				<div class="article-desc">
					<span>{{ item.articleDescription }}</span>
				</div>
				<div class="article-tag">
					<span
						v-for="tag in item.tagList"
						:key="tag.tagId"
						class="tag"
						:style="{
							backgroundColor: `rgb(${getRandomInt()},${getRandomInt()},${getRandomInt()})`,
						}"
					>
						{{ tag.tagName }}
					</span>
				</div>

				<div class="article-info">
					<div class="view-count">
						<Icon>
							<EyeOutlined></EyeOutlined>
						</Icon>
						<span>{{ item.viewCount }}</span>
					</div>
					<div class="created-at">
						<Icon>
							<FieldTimeOutlined></FieldTimeOutlined>
						</Icon>
						<span v-time>{{ item.createdAt }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import useWaterFall from "@/hooks/useWaterFall";
import { Icon } from "@vicons/utils";
import { onMounted, onUnmounted, ref, nextTick } from "vue";
import { getArticleListApi } from "../api/article/ArticleApi";
import { getRandomInt } from "../utils";
import { EyeOutlined, FieldTimeOutlined } from "@vicons/antd";
import { useRouter } from "vue-router";
import { Article } from "@/api/article";
import appStore from "@/store";
const router = useRouter();
const articleList = ref<Article[]>();
const handlerClickArticle = (id: number) => {
	router.push(`/article/${id}`);
};
const articles = ref<HTMLDivElement[]>();
const home = ref<HTMLDivElement>();
const articleInfo = ref({
	pageSize: 10,
	currentPage: 1,
	searchText: "",
});
const { scrollFn, generateStart } = useWaterFall(
	articles,
	articleList,
	articleInfo,
	getArticleListApi
);
const { pageSize, currentPage, searchText } = articleInfo.value;
const { articleStore } = appStore;
const init = async () => {
	const { data } = await getArticleListApi(pageSize, currentPage, searchText);
	data.rows.forEach((item) => {
		item.height = getRandomInt(100, 200);
	});
	articleList.value = data.rows;
	nextTick(() => {
		generateStart();
	});
};

onMounted(() => {
	init();

	window.addEventListener("scroll", scrollFn);
});
onUnmounted(() => {
	window.removeEventListener("scroll", scrollFn);
});
</script>

<style scoped lang="scss">
.home-container {
	position: relative;
	height: 100%;
	.article-container {
		cursor: pointer;
		height: 190px;
		width: 100%;
		display: flex;
		background: var(--frBgColor);
		margin-bottom: 20px;
		border-radius: 10px;
		overflow: hidden;
		transition: transform 0.3s linear;

		&:hover {
			transform: scale(1.05);
		}
		.image-container {
			width: 350px;

			height: 100%;

			img {
				width: 100%;
				height: 100%;
			}
		}
		.card-detail {
			width: 100%;
			padding: 10px 15px 10px 30px;
			justify-content: space-around;
			.article-title {
				margin: 20px 0;
			}
			.article-desc {
				margin-bottom: 20px;
				height: 50px;
			}
			.article-tag {
				margin-bottom: 10px;
				.tag {
					font-size: 12px;
					color: white;
					padding: 2px 5px;
					margin-right: 10px;

					border-radius: 5px;
				}
			}
			.article-desc {
				margin: 10px 0;
			}
			.article-info {
				display: flex;
				justify-content: space-between;
			}
		}
	}
}
</style>
