<template>
	<div class="markdown-body" v-html="html"></div>
</template>

<script setup lang="ts">
import { marked } from "marked";
import { ref, watch } from "vue";
import hljs from "highlight.js";
import appStore from "@/store";
const props = withDefaults(
	defineProps<{
		content: string;
	}>(),
	{
		content: "",
	}
);

const { articleStore } = appStore;
const { changeArticleSideMenuAction } = articleStore;
const toc = ref<{ id: string; level: number; raw: string; text: string }[]>([]);
const html = ref("");
const renderer = new marked.Renderer();
renderer.heading = (text, level, raw) => {
	const id = Math.random();
	const heading = { text, level, raw, id: id.toString() };
	toc.value.push(heading);
	return `
		  <h${level} id="${id}" color="red">
			${text}
		  </h${level}>
		`;
};
watch(
	() => props.content,
	() => {
		marked.setOptions({
			renderer,
			headerIds: false,
			gfm: true,
			breaks: true,
			highlight: (code, lang) => {
				return hljs.highlightAuto(code, [lang]).value;
			},
		});
		toc.value = [];
		html.value = marked(props.content);
		changeArticleSideMenuAction(toc.value);
	}
);
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
