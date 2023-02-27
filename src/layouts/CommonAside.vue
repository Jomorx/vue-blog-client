<template>
	<MoInfoCard />
	<div class="config-container">
		<MoConfigCard />
	</div>
	<div v-if="!route.path.includes(`article`)" class="tag-container">
		<MoTagList />
	</div>

	<div class="menu-container" v-else>
		<MoMDSideMenu />
	</div>
</template>

<script setup lang="ts">
import MoInfoCard from "@/components/MoInfoCard.vue";
import MoTagList from "@/components/MoTagList.vue";
import MoConfigCard from "@/components/MoConfigCard.vue";
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
}
.config-container {
	border-radius: 5px;
	padding: 10px 5px;
	background: var(--frBgColor);
	text-align: center;
	padding: 10px;
	margin-top: 20px;
}
.menu-container {
	padding: 20px 10px;
	margin-top: 20px;
	background: var(--frBgColor);
	position: sticky;
	top: 50px;
}
</style>
