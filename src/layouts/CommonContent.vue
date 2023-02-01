<template>
	<div class="container w">
		<main class="left">
			<router-view></router-view>
		</main>
		<div class="right">
			<MoInfoCard />
			<div class="article-info-container"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import MoInfoCard from "@/components/MoInfoCard.vue";
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

		.article-info-container {
			border-radius: 5px;
			padding: 20px 0;
			background: var(--frBgColor);

			text-align: center;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 20px;
			font-weight: 500;
			font-size: 16px;
			position: sticky;
			top: 50px;
		}
	}
}
</style>
