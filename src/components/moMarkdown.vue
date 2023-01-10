<template>
	<div class="markdown-body" v-html="content && marked.parse(content)"></div>
</template>

<script setup lang="ts">
import { marked } from "marked";
defineProps<{
	content: string | undefined;
}>();
</script>

<style scoped lang="scss">
.markdown-body {
	box-sizing: border-box;
	min-width: 200px;
	max-width: 980px;
	margin: 0 auto;
	color: var(--color);
	background: var(--frBgColor);
}
:deep(pre) {
	background-color: var(--thBgColor) !important;
}
:deep(th) {
	color: var(--color);
	background-color: var(--seBgColor);
	border-color: var(--thBgColor);
}
:deep(td) {
	color: var(--color);
	background-color: var(--seBgColor);
	border-color: var(--mdBorderColor) !important;
}
</style>
