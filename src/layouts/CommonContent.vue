<template>
	<div class="container w">
		<main class="left">
			<router-view></router-view>
		</main>
		<div class="right">
			<MoInfoCard />
			<div class="article-info-container">
				<div class="article-info-container-child">
					<span>文章</span>
					<n-number-animation
						ref="numberAnimationInstRef"
						:from="0"
						:to="111"
						:active="true"
					/>
				</div>
				<div class="article-info-container-child">
					<span>分类</span>
					<n-number-animation
						ref="numberAnimationInstRef"
						:from="0"
						:to="111"
						:active="true"
					/>
				</div>
				<div class="article-info-container-child">
					<span>标签</span>
					<n-number-animation
						ref="numberAnimationInstRef"
						:from="0"
						:to="111"
						:active="true"
					/>
				</div>
			</div>
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

			&-child {
				&:nth-child(-n + 2) {
					position: relative;

					&::after {
						content: "";
						height: 100%;
						width: 1px;
						background-color: #e8e8e8;
						position: absolute;
						right: 0;
					}
				}

				display: flex;
				flex-direction: column;
				flex: 1;

				span {
					margin-bottom: 10px;
					display: block;
				}
			}
		}
	}
}
</style>
