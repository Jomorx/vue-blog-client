<template>
	<div class="main">
		<div v-for="item in articleTimeLine" :key="item.days">
			<n-timeline>
				<n-timeline-item
					class="info"
					:title="`${item.days}年共发布了${item.count}篇文章`"
				/>
				<n-timeline-item
					class="article"
					v-for="article in item.articles"
					:title="article.articleTitle"
					:time="article.createdAt"
					@click="router.push(`/article/${article.articleId}`)"
					:key="article.articleId"
				/>
			</n-timeline>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import appStore from "@/store";
import { storeToRefs } from "pinia";
const { articleStore } = appStore;
const { articleTimeLine } = storeToRefs(articleStore);
const { fetchArticleTimeLineAction } = articleStore;

const router = useRouter();
onMounted(() => {
	fetchArticleTimeLineAction();
});
</script>

<style scoped lang="scss">
.title {
	font-size: 30px;
	font-weight: 700;
	margin-bottom: 30px;
	text-align: center;
}

.info {
	--n-title-font-size: 25px !important;
	--n-title-font-weight: 600 !important;
}

.article {
	--n-title-font-size: 18px !important;
	cursor: pointer !important;
}
</style>
