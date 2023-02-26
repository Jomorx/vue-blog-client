<template>
	<div class="main">
		<header class="header">
			<h1 class="title">{{ article?.articleTitle }}</h1>
			<div class="describe">
				<div class="avatar">
					<img :src="article?.articleCover" alt="" />
				</div>
				<div class="category">
					<Icon>
						<FolderOpenOutlined />
					</Icon>
					<span>{{ article?.category.categoryName }}</span>
				</div>
				<div class="view-count">
					<Icon>
						<EyeOutlined />
					</Icon>
					<span>{{ article?.viewCount }}</span>
				</div>
			</div>
			<div class="createdAt">
				发表于:<span v-time> {{ article?.createdAt }}</span>
			</div>
		</header>
		<moMarkdown :content="article?.articleContent"></moMarkdown>
		<div class="tag-container">
			tags:
			<div
				class="tag"
				v-for="tag in article?.tagList"
				:key="tag.tagId"
				:style="{ background: tag.tagColor }"
			>
				{{ tag.tagName }}
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import moMarkdown from "@/components/MoMDContent.vue";

import { Icon } from "@vicons/utils";
import { FolderOpenOutlined, EyeOutlined } from "@vicons/antd";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { getArticleByIdApi, incrementViewCount } from "../api/article/ArticleApi";
import { IArticle } from "@/api/article";
const route = useRoute();
const article = ref<IArticle>();
const init = async () => {
	const { id } = route.params;

	await incrementViewCount(Number(id));
	const res = await getArticleByIdApi(Number(id));
	article.value = res.data;
};
watch(
	() => route.path,
	() => {
		init();
	}
);
onMounted(() => {
	init();
});
</script>

<style scoped lang="scss">
.header {
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 30px 0;
	background-repeat: no-repeat;
	background-size: contain;
	.describe {
		margin-top: 20px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 150px;
		.avatar {
			height: 30px;
			width: 30px;
			border-radius: 50%;
			overflow: hidden;
			margin-right: 5px;
			img {
				height: 100%;
				width: 100%;
				object-fit: cover;
			}
		}
		.xicon {
			padding-right: 5px;
		}
		.category {
			display: flex;
			align-items: center;
			margin-right: 10px;
		}
		.view-count {
			display: flex;
			align-items: center;
		}
	}
	.createdAt {
		margin-top: 10px;
	}
}
.tag-container {
	display: flex;
	align-items: center;
	justify-content: end;
	.tag {
		color: white;
		padding: 5px 10px;
		margin: 10px;
		border-radius: 10px;
	}
}
</style>
