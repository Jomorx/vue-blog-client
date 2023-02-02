<template>
	<div class="main">
		<div class="title"><span>做过的一些小项目</span></div>
		<hr class="line" />
		<div class="cards">
			<div class="card" v-for="item in projectList?.rows" :key="item.projectId">
				<div class="bg" :style="`background-image: url(${item.projectCover})`"></div>
				<div class="shadow">
					<div class="shadow-item">
						<span class="name">{{ item.projectName }}</span>
						<div class="other">
							<span class="desc">{{ item.projectDescription }}</span>
							<n-button type="primary" round @click="navigateTo(item.projectLink)">
								预览
							</n-button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { navigateTo } from "../utils";
import appStore from "../store";
import { storeToRefs } from "pinia";
const { projectStore } = appStore;
const { projectList } = storeToRefs(projectStore);
const { fetchProjectListAction } = projectStore;
onMounted(() => {
	fetchProjectListAction();
});
</script>

<style scoped lang="scss">
.title {
	font-size: 30px;
	font-weight: 700;
	margin-bottom: 30px;
	text-align: center;
}

.cards {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	.card {
		width: 48%;
		position: relative;
		overflow: hidden;
		height: 200px;
		border-radius: 10px;
		margin-top: 20px;
		.bg {
			width: 100%;
			height: 200px;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: 50%;
			position: absolute;
			top: 0;
			opacity: 0.7;
		}

		.shadow {
			z-index: 10;
			position: relative;
			text-align: center;
			top: 100px;
			color: white;
			transition: all 1.4s cubic-bezier(0.19, 1, 0.22, 1);

			.shadow-item {
				position: relative;
				z-index: 20;

				.name {
					font-weight: 600;
					font-size: 20px;
				}

				.other {
					opacity: 0;

					.desc {
						font-weight: 600;
						font-size: 15px;
						display: block;
						margin: 15px 0;
					}

					.n-button {
						z-index: 2;
					}
				}
			}

			&::after {
				content: "";
				z-index: 0;
				display: block;
				position: absolute;
				width: 100%;
				height: 200px;
				top: 15px;
				background-image: linear-gradient(
					180deg,
					transparent,
					rgba(0, 0, 0, 0.009) 11.7%,
					rgba(0, 0, 0, 0.034) 22.1%,
					rgba(0, 0, 0, 0.072) 31.2%,
					rgba(0, 0, 0, 0.123) 39.4%,
					rgba(0, 0, 0, 0.182) 46.6%,
					rgba(0, 0, 0, 0.249) 53.1%,
					rgba(0, 0, 0, 0.32) 58.9%,
					rgba(0, 0, 0, 0.394) 64.3%,
					rgba(0, 0, 0, 0.468) 69.3%,
					rgba(0, 0, 0, 0.54) 74.1%,
					rgba(0, 0, 0, 0.607) 78.8%,
					rgba(0, 0, 0, 0.668) 83.6%,
					rgba(0, 0, 0, 0.721) 88.7%,
					rgba(0, 0, 0, 0.762) 94.1%,
					rgba(0, 0, 0, 0.79)
				);
			}
		}

		&:hover {
			.shadow {
				top: 60px;

				&::after {
					top: -60px;
				}

				.other {
					opacity: 1;
				}
			}
		}
	}
}
</style>
