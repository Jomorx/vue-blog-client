<template>
	<div class="home-container">
		<div
			v-for="item in articleList?.rows"
			@click="handlerClickArticle(item.articleId)"
			class="article-container"
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
							backgroundColor: tag.tagColor,
						}"
					>
						{{ tag.tagName }}
					</span>
				</div>

				<div class="article-info">
					<div class="article-left">
						<div class="view-count">
							<Icon>
								<EyeOutlined></EyeOutlined>
							</Icon>
							<span>{{ item.viewCount }}</span>
						</div>
						<div class="category">
							<Icon>
								<FolderOpenOutlined />
							</Icon>
							<span>{{ item.category.categoryName }}</span>
						</div>
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
import { useScrollToFetchData } from "@/hooks/useScrollToFetchData";
import { Icon } from "@vicons/utils";
import { onMounted, onUnmounted } from "vue";
import { getRandomInt } from "../utils";
import { EyeOutlined, FieldTimeOutlined, FolderOpenOutlined } from "@vicons/antd";
import { useRouter } from "vue-router";
import appStore from "@/store";
import { storeToRefs } from "pinia";
const router = useRouter();
const handlerClickArticle = (id: number) => {
	router.push(`/article/${id}`);
};
const { articleStore } = appStore;
const { articleList } = storeToRefs(articleStore);
const { fetchArticleDataAction } = articleStore;

const { scrollToFetchData } = useScrollToFetchData(fetchArticleDataAction);

onMounted(() => {
	fetchArticleDataAction();
	window.addEventListener("scroll", scrollToFetchData);
});
onUnmounted(() => {
	window.removeEventListener("scroll", scrollToFetchData);
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
				align-items: center;
				justify-content: space-between;
				.xicon {
					margin-right: 5px;
				}
				.article-left {
					display: flex;
					align-items: center;
					.view-count {
						display: flex;
						align-items: center;
						margin-right: 20px;
					}
					.category {
						display: flex;
						align-items: center;
					}
				}
			}
		}
	}
}
</style>
