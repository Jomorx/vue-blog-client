<template>
	<div class="tag-list">
		<span
			class="tag"
			v-for="tag in tagList?.rows"
			:key="tag.tagId"
			:style="{
				backgroundColor: tag.tagColor,
			}"
			>{{ tag.tagName }}</span
		>
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
