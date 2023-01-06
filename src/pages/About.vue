<template>
	<div class="about main">
		<!-- <div class="markdown-body" v-html="about?.configContent"></div> -->
		<moMarkdown :content="about?.configContent"></moMarkdown>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getConfigByIdApi, IConfig } from "@/api/config";
import { marked } from "marked";
import moMarkdown from "@/components/moMarkdown.vue";
const about = ref<IConfig>();
const init = async () => {
	const { data } = await getConfigByIdApi(1);
	about.value = data;
};
onMounted(init);
</script>

<style scoped lang="scss">
.markdown-body {
	box-sizing: border-box;
	min-width: 200px;
	max-width: 980px;
	margin: 0 auto;
}
</style>
