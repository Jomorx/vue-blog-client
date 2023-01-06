<template>
	<div class="container w">
		<main class="left">
			<router-view></router-view>
		</main>
		<div class="right">
			<div class="info-card">
				<img
					class="avatar"
					src="https://onecmshop.oss-cn-beijing.aliyuncs.com/avatar/202206016af6974df82147379a278aed05cf5cf7.jpg"
					alt=""
				/>
				<div class="author-info">
					<div class="myname">
						<span>HCH</span>
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
						<span>后端:nest.js + mysql</span>
					</div>
				</div>

				<div class="contact-container">
					<div class="contact-info"><span>联系我</span></div>
					<div class="contact-ways">
						<Icon>
							<GithubOutlined></GithubOutlined>
						</Icon>
						<Icon>
							<QqCircleFilled></QqCircleFilled>
						</Icon>
						<Icon>
							<WechatOutlined></WechatOutlined>
						</Icon>
					</div>
				</div>
			</div>
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
import { Icon } from "@vicons/utils";
import { GithubOutlined, QqCircleFilled, EnvironmentOutlined, WechatOutlined } from "@vicons/antd";
</script>

<style scoped lang="scss">
.container {
	margin-top: 100px;
	display: flex;
	height: auto;
	justify-content: space-between;

	.left {
		width: 844px;
		background-color: white;
	}

	.right {
		width: 260px;

		.info-card {
			border-radius: 5px;

			background-color: white;
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

			/* .avatar-line {
                margin: 0 auto;
                width: 90%;
                border-bottom: 1px solid gray;
            } */

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
					margin-top: 20px;

					.xicon {
						width: 2em;
						height: 2em;
						cursor: pointer;

						svg {
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}

		.article-info-container {
			border-radius: 5px;
			padding: 20px 0;
			background-color: white;
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
