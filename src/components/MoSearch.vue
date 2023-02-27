<template>
	<div class="search-wrapper">
		<n-space vertical>
			<n-select
				filterable
				v-model:value="searchText"
				:options="searchValue"
				:loading="false"
				clearable
				remote
				@search="deHandleSearchArticle"
				@update:value="handleToArticle"
			>
				<template #empty>
					<div></div>
				</template>
				<template #arrow>
					<Icon class="search-icon" @click="handleSearchArticle">
						<SearchOutlined />
					</Icon>
				</template>
			</n-select>
		</n-space>
	</div>
</template>

<script setup lang="ts">
import _ from "lodash-es";
import { getArticleByKeyword, IArticle } from "../api/article";
import { Icon } from "@vicons/utils";
import { SearchOutlined } from "@vicons/antd";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const searchText = ref("");
const searchValue = ref<IArticle[]>([]);
const handleSearchArticle = async (keyword: string) => {
	const res = await getArticleByKeyword(keyword);
	searchValue.value = res.data;
};
const deHandleSearchArticle = _.debounce(handleSearchArticle, 1000);
const handleToArticle = (articleId: any) => {
	router.push(`/article/${articleId}`);
};
</script>

<style scoped lang="scss">
.search-wrapper {
	position: relative;
	font-weight: 500;
}
</style>
