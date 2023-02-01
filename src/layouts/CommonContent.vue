<template>
	<div class="container w">
		<main class="left">
			<router-view></router-view>
		</main>
		<div class="right">
			<MoInfoCard />
			<div class="article-info-container">
				<div class="tag-cloud">标签云</div>
				<MoTagList />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import MoInfoCard from "@/components/MoInfoCard.vue";
import MoTagList from "@/components/MoTagList.vue";
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
	}
}
</style>
