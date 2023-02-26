<template>
	<div class="about main">
		<moMarkdown :content="about?.configContent"></moMarkdown>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import moMarkdown from "@/components/MoMDContent.vue";
import appStore from "../store";
import { storeToRefs } from "pinia";
const { aboutStore } = appStore;
const { about } = storeToRefs(aboutStore);
const { fetchAboutListAction } = aboutStore;
onMounted(fetchAboutListAction);
</script>

<style scoped lang="scss">
.markdown-body {
	box-sizing: border-box;
	min-width: 200px;
	max-width: 980px;
	margin: 0 auto;
}
</style>
