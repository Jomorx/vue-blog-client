<template>
	<header :class="{ 'hidden-header': isHidden, w: true }">
		<div class="container w">
			<div class="left">
				<span class="title" @click="navigateTo('/')">Jomorx</span>
			</div>
			<div class="right">
				<div
					class="nav-item"
					v-for="item in nav"
					:class="{ 'nav-item-active': item.path === route.path }"
					@click="navigateTo(item.path)"
					:key="item.path"
				>
					<span>
						{{ item.label }}
					</span>
				</div>
				<div class="search">
					<MoSearch />
				</div>
			</div>
		</div>
	</header>
	<div
		:class="{ 'back-top': true, 'hidden-back-top': !isHidden, 'show-back-top': isHidden }"
		@click="backTop"
	></div>
</template>

<script setup lang="ts">
import MoSearch from "@/components/MoSearch.vue";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
//导航栏
const nav: {
	label: string;
	path: string;
}[] = [
	{
		label: "首页",
		path: "/",
	},
	{
		label: "归档",
		path: "/history",
	},
	{
		label: "作品",
		path: "/project",
	},
	{
		label: "建站",
		path: "/log",
	},
	{
		label: "友链",
		path: "/friendChain",
	},
	{
		label: "关于",
		path: "/about",
	},
];
//是否显示顶部
const isHidden = ref<boolean>(false);
const backTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

onMounted(() => {
	window.addEventListener("scroll", () => {
		let scrollTop =
			window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
		if (scrollTop < 70) {
			isHidden.value = false;
		} else {
			isHidden.value = true;
		}
	});
});

const navigateTo = (path: string) => {
	router.push({ path });
};
</script>

<style scoped lang="scss">
header {
	background: var(--frBgColor);
	font-weight: 600;
	font-size: 16px;
	position: fixed;
	width: 100%;
	top: 0;
	transition: all 0.3s linear;
	z-index: 1;
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 60px;

		.left {
			margin-left: 20px;
			.title {
				cursor: pointer;
			}
		}

		.right {
			display: flex;
			height: 100%;
			align-items: center;

			.nav-item {
				margin: 0 20px;
				height: 100%;
				cursor: pointer;
				position: relative;
				line-height: 60px;

				&::before {
					background: linear-gradient(90deg, #2db7f5, #6bc30d);
					content: "";
					width: 0%;
					height: 2px;
					position: absolute;
					bottom: 10px;
					right: 50%;
					transition: all 0.2s linear;
				}

				&-active {
					color: #6bc30d;
					&::before {
						right: 0;
						width: 100%;
					}
				}

				&::after {
					background: linear-gradient(90deg, #2db7f5, #6bc30d);
					content: "";
					width: 0%;
					height: 2px;
					position: absolute;
					bottom: 10px;
					left: 50%;
					transition: all 0.2s linear;
				}

				&:hover::after {
					left: 0;
					width: 100%;
				}

				&:hover {
					color: green;
				}
			}
			.search {
				margin: 0 40px;

				.search-icon {
					cursor: pointer;
				}
			}
			.nav-item:last-child {
				margin-right: 20px;
			}
		}
	}
}

.hidden-header {
	top: -70px;
}

.back-top {
	background-image: url("https://resource.lsyboy.cn/blog/static/img/scroll.383487d.png");
	background-repeat: no-repeat;
	background-position: bottom;
	position: fixed;
	top: 0;
	right: 20px;
	width: 70px;
	height: 80%;
	transition: height 0.4s ease;
	cursor: pointer;
	background-color: transparent;
	z-index: 1000;
}

@keyframes back-top {
	0% {
		transform: translateY(0px);
	}

	50% {
		transform: translateY(-10px);
	}

	100% {
		transform: translateY(0px);
	}
}

.show-back-top {
	animation: back-top 2s linear infinite;
}

.hidden-back-top {
	height: 0;
}
</style>
