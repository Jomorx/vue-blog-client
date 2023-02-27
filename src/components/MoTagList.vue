<template>
	<div class="tag-cloud">标签云</div>

	<div class="tag-list">
		<n-popover trigger="hover" v-for="tag in tagList?.rows" :key="tag.tagId">
			<template #trigger>
				<span
					class="tag"
					:style="{
						backgroundColor: tag.tagColor,
					}"
					>{{ tag.tagName }}</span
				>
			</template>
			该标签下有{{ tag.articleCount }}个文章
		</n-popover>
	</div>
</template>

<script setup lang="ts">
import appStore from "@/store";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
const { tagStore } = appStore;

const { tagList } = storeToRefs(tagStore);
const { fetchTagListAction } = tagStore;
onMounted(() => {
	fetchTagListAction();
});
</script>

<style scoped lang="scss">
.tag-cloud {
	padding: 10px 0;
}

.tag-list {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	.tag {
		font-size: 12px;
		color: white;
		padding: 6px 12px;
		margin: 5px 5px;
		border-radius: 5px;
	}
}
</style>
