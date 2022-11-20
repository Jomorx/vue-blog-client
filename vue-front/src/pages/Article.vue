<template>
  <div v-html="articleContent"></div>
</template>

<script setup lang="ts">
import { onMounted,ref } from "vue";
import { marked } from "marked";
import { useRoute } from "vue-router";
import { getArticleByIdApi } from "../api/ArticleApi";
import {Article} from './Home.vue'
const route = useRoute();
const articleContent = ref()
const {id} =route.params
const init = async () => {
  const res = await getArticleByIdApi<Article>(id)
  articleContent.value= marked.parse(res.articleContent)

  
  
};
onMounted(() => {
  init()
});
</script>

<style scoped lang="scss">


</style>
