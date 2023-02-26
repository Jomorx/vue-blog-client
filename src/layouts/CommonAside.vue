<template>
	<MoInfoCard />
	<div v-if="!route.path.includes(`article`)" class="tag-container">
		<div class="tag-cloud">标签云</div>
		<MoTagList />
	</div>
	<div class="menu-container" v-else>
		<MoMDSideMenu />
	</div>
</template>

<script setup lang="ts">
import MoInfoCard from "@/components/MoInfoCard.vue";
import MoTagList from "@/components/MoTagList.vue";
import { useRoute } from "vue-router";
import MoMDSideMenu from "@/components/MoMDSideMenu.vue";
const route = useRoute();
</script>

<style scoped lang="scss">
.tag-container {
	border-radius: 5px;
	padding: 10px 5px;
	background: var(--frBgColor);
	text-align: center;
	margin-top: 20px;
	font-weight: 500;
	font-size: 20px;
	position: sticky;
	top: 50px;
	.tag-cloud {
		padding: 10px 0;
	}
}
.menu-container {
	padding: 20px 10px;
	margin-top: 20px;
	background: var(--frBgColor);
	position: sticky;
	top: 50px;
}
</style>
