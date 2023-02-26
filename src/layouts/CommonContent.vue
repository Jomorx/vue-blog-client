<template>
	<div class="container w">
		<main class="left">
			<router-view></router-view>
		</main>
		<div class="right">
			<CommonAside />
		</div>
	</div>
</template>

<script setup lang="ts">
import CommonAside from "@/layouts/CommonAside.vue";
</script>

<style scoped lang="scss">
.container {
	margin-top: 100px;
	display: flex;
	height: auto;
	justify-content: space-between;

	.left {
		width: 844px;
		/* background-color: white; */
	}

	.right {
		width: 260px;
	}
}
</style>
