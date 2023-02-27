<template>
	<div class="info-card">
		<img class="avatar" :src="Avatar" alt="" />
		<div class="author-info">
			<div class="myname">
				<span>Jomorx</span>
			</div>
			<div class="instruction">
				<span>软件工程</span><br />
				<span>2020-2024学生</span>
			</div>
			<div class="location">
				<Icon>
					<EnvironmentOutlined></EnvironmentOutlined>
				</Icon>
				<span>四川-成都</span>
			</div>
			<div class="technology-stack">
				<span>前台:vue3 + naive</span>
				<span>后台:react + antd</span>
				<span>后端:nest.js + sequelize</span>
			</div>
		</div>

		<div class="contact-container">
			<div class="contact-info"><span>站点信息</span></div>
			<div class="contact-ways">
				<div class="contact-item">
					<div>
						<Icon @click="navigateTo('https://github.com/Jomorx')">
							<GithubOutlined></GithubOutlined>
						</Icon>
					</div>
					<div>Github</div>
				</div>
				<!-- <div class="contact-item">
					<div>
						<Icon>
							<WechatFilled></WechatFilled>
						</Icon>
					</div>
					<div>微信</div>
				</div> -->
				<div class="contact-item">
					<div>
						<Icon>
							<PieChartFilled />
						</Icon>
					</div>
					<div>后台</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Icon } from "@vicons/utils";
import { GithubOutlined, WechatFilled, EnvironmentOutlined, PieChartFilled } from "@vicons/antd";
import Avatar from "@/assets/avatar.gif";
import { navigateTo } from "@/utils";
</script>

<style scoped lang="scss">
.info-card {
	border-radius: 5px;
	background: var(--frBgColor);
	/* position: sticky; */
	/* top: 20px; */
	width: 100%;
	height: 370px;
	text-align: center;

	.avatar {
		padding-top: 20px;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		margin-bottom: 10px;
	}

	.author-info {
		color: rgb(127, 127, 127);

		.myname {
			font-size: 19px;
			color: #6bc30d;
		}

		.instruction {
			margin: 10px 0;
			color: #6bc30d;
		}

		.technology-stack {
			span {
				display: block;
				margin: 5px 0;
			}
		}

		/* background-color: ; */
	}

	.contact-container {
		margin-top: 20px;
		justify-content: space-around;

		.contact-info {
			position: relative;
			color: #6bc30d;
			font-size: 16px;

			&::before {
				content: "";
				height: 1px;
				width: 30%;
				background-color: #e8e8e8;
				position: absolute;
				left: 10px;
				bottom: 4px;
			}

			&::after {
				content: "";
				height: 1px;
				width: 30%;
				background-color: #e8e8e8;
				position: absolute;
				right: 10px;
				bottom: 4px;
			}
		}

		.contact-ways {
			display: flex;
			justify-content: space-around;
			padding: 15px;
			.contact-item {
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.xicon {
				width: 2em;
				height: 2em;
				cursor: pointer;
				&:hover {
					transform: rotate(-360deg);
					transition: transform 0.3s linear;
				}
				svg {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
}
</style>
