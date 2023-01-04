<template>
  <div class="markdown-body" v-html="content&&marked.parse(content)"></div>
</template>

<script setup lang="ts">
import { marked } from "marked";
defineProps<{
  content:string|undefined
}>()

</script>

<style scoped lang="scss">
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
}
</style>
