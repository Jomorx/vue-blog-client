<template>
	<n-config-provider :class="{ dark: isDark }" :theme="theme">
		<CommonHeader />
		<CommonContent />
	</n-config-provider>
</template>

<script setup lang="ts">
import CommonHeader from "./layouts/CommonHeader.vue";
import CommonContent from "./layouts/CommonContent.vue";
import { computed } from "vue";
import { darkTheme, lightTheme } from "naive-ui";

import appStore from "./store";
import { storeToRefs } from "pinia";
const { configStore } = appStore;
const { isDark } = storeToRefs(configStore);
const theme = computed(() => (isDark.value ? darkTheme : lightTheme));
</script>

<style lang="scss">
body {
	background: var(--seBgColor);
	color: var(--color);
}
// 版心
.w {
	width: 1200px;
	margin: 0 auto;
}
//线
.line {
	height: 4px;
	border: 0px;
	background-color: rgb(221, 221, 221);
	margin: 20px 0px;
	background-image: repeating-linear-gradient(
		-45deg,
		rgb(255, 255, 255),
		rgb(87, 255, 87) 5px,
		transparent 0px,
		transparent 8px
	);
}
.main {
	padding: 35px;
	background-color: var(--frBgColor);
}
::-webkit-scrollbar {
	width: 5px;
	height: 5px;
	position: absolute;
}

::-webkit-scrollbar-thumb {
	background-color: #1890ff;
}

::-webkit-scrollbar-track {
	background-color: #ddd;
}
</style>
