<template>
	<div class="main">
		<div class="title"><span>网站更新日志</span></div>
		<hr class="line" />

		<div class="log">
			<div
				:class="{
					item: true,
					'item-first': index === 0,
					'item-left': index % 2 === 0,
					'item-right': index % 2 !== 0,
				}"
				v-for="(item, index) in logList?.rows"
				:key="item.logId"
			>
				<div>
					<span>{{ item.logContent }}</span>
				</div>
				<div class="log-time">
					<span v-time>{{ item.createdAt }}</span>
				</div>
			</div>
			<p class="clear-both"></p>
		</div>
	</div>
</template>

<script setup lang="ts">
import appStore from "@/store";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
const { logStore } = appStore;
const { logList } = storeToRefs(logStore);
const { fetchLogListAction } = logStore;
onMounted(fetchLogListAction);
</script>

<style scoped lang="scss">
.title {
	font-size: 30px;
	font-weight: 700;
	margin-bottom: 30px;
	text-align: center;
}

.log {
	position: relative;

	.item {
		z-index: 2;
		width: 40%;
		padding: 20px;
		/* background-color: #e5e7eb; */
		background-color: var(--seBgColor);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 50px;
		padding: 20px;
		position: relative;
		transition: transform 0.3s ease;
		.log-time {
			text-align: right;
		}
		//小三角
		&::before {
			content: "";
			border-top: 8px solid transparent;
			border-bottom: 8px solid transparent;
			top: calc(50% - 8px);
			position: absolute;
		}

		&::after {
			content: "";
			width: 6px;
			height: 6px;
			position: absolute;
			top: calc(50% - 5px);
			border: 4px solid rgb(47, 137, 252);
			border-radius: 50%;
			background-color: white;
		}

		&-left {
			float: left;
			margin-top: 48px;

			&::after {
				right: -45px;
			}

			&::before {
				border-right: 8px solid transparent;
				border-left: 8px solid var(--seBgColor);
				right: -16px;
			}
		}

		&-right {
			float: right;
			margin-top: 48px;

			&::after {
				left: -44px;
			}

			&::before {
				border-right: 8px solid var(--seBgColor);
				border-left: 8px solid transparent;
				left: -16px;
			}
		}

		&-first {
			margin: 0;
		}

		&:hover {
			transform: translateY(-5px);
		}
	}

	.clear-both {
		clear: both;
	}

	&::after {
		position: absolute;
		top: 0;
		left: 50%;
		content: "";
		height: 100%;
		width: 2px;
		background-color: rgb(47, 137, 252);
	}
}
</style>
