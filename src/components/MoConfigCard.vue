<template>
	<div class="config-title">
		<Icon>
			<SettingOutlined />
		</Icon>
		<span>设置</span>
	</div>

	<div class="dark-config">
		<span>黑夜模式:</span>
		<n-switch v-model:value="isDark" size="small" style="padding-left: 20px" />
	</div>
</template>

<script setup lang="ts">
import { Icon } from "@vicons/utils";
import { SettingOutlined } from "@vicons/antd";
import appStore from "@/store";
import { storeToRefs } from "pinia";
const { configStore } = appStore;
const { isDark } = storeToRefs(configStore);
</script>

<style scoped lang="scss">
.config-title {
	display: flex;
	font-size: 16px;
	padding-bottom: 20px;
	font-weight: 600;
}
.dark-config {
	display: flex;
	font-size: 16px;
}
</style>
