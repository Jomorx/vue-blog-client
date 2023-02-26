<template>
	<div class="article-menu" v-if="articleSideMenu.length">
		<div class="article-menu-title">文章目录</div>
		<ul>
			<li class="article-menu-item" v-for="heading in articleSideMenu" :key="heading.id">
				<component :is="`h${heading.level}`" @click="handleScroll(heading.id)">
					{{ heading.text }}
				</component>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import appStore from "../store";

const { articleStore } = appStore;
const { articleSideMenu } = storeToRefs(articleStore);
const handleScroll = (id: string) => {
	document.getElementById(`${id}`)?.scrollIntoView({ behavior: "smooth" });
};
</script>

<style lang="scss" scoped>
.article-menu {
	width: 100%;
	&-title {
		font-size: 16px;
		margin-bottom: 20px;
		font-weight: 600;
	}
	.article-menu-item {
		cursor: pointer;
	}
	.article-menu-item:not(:last-child) {
		margin-bottom: 10px;
	}
}
</style>
