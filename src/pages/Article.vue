<template>
	<div class="main">
		<header class="header">
			<h1 class="title">{{ article?.articleTitle }}</h1>
			<div class="describe">
				<div class="avatar">
					<img
						src="https://onecmshop.oss-cn-beijing.aliyuncs.com/avatar/202206016af6974df82147379a278aed05cf5cf7.jpg"
						alt=""
					/>
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
			<div class="tag" v-for="item in article?.tagList" :key="item.tagId">
				{{ item.tagName }}
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import moMarkdown from "@/components/moMarkdown.vue";
import { Icon } from "@vicons/utils";
import { FolderOpenOutlined, EyeOutlined } from "@vicons/antd";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getArticleByIdApi, incrementViewCount } from "../api/article/ArticleApi";
import { IArticle } from "@/api/article";
const route = useRoute();
const article = ref<IArticle>();
const { id } = route.params;
const init = async () => {
	await incrementViewCount(Number(id));
	const res = await getArticleByIdApi(Number(id));
	article.value = res.data;
};
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
				object-fit: contain;
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
		background-color: rgb(67, 109, 130);
		border-radius: 10px;
	}
}
</style>
