<template>
  <div class="home-container" ref="home">
    <div
      v-for="item in articleList"
      @click="handlerClickArticle(item.articleId)"
      class="article-container"
      ref="articles"
    >
      <div class="image-container">
        <img
          :src="item.articleCover"
          alt=""
          lazy
          :style="{ height: item.height + 'px' }"
        />
      </div>
      <div class="card-detail">
        <div class="article-title">
          <h1>{{ item.articleTitle }}</h1>
        </div>
        <div class="article-content">
          <span>{{ item.articleContent }}</span>
        </div>
        <div class="article-info">
          <div class="created-at">
            <Icon>
              <FieldTimeOutlined></FieldTimeOutlined>
            </Icon>
            <span v-time>{{ item.createdAt }}</span>
          </div>
          <div class="view-count">
            <Icon>
              <EyeOutlined></EyeOutlined>
            </Icon>
            <span>{{ item.viewCount }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useWaterFall from "@/hooks/useWaterFall";
import { Icon } from "@vicons/utils";
import { onMounted, onUnmounted, ref, nextTick } from "vue";
import { getArticleListApi } from "../api/article/ArticleApi";
import { getRandomInt } from "../utils";
import { EyeOutlined, FieldTimeOutlined } from "@vicons/antd";
import { useRouter } from "vue-router";
import {Article} from '@/api/article'
const router = useRouter();
const articleList = ref<Article[]>();
const handlerClickArticle = (id: number) => {
  router.push(`/article/${id}`);
};
const articles = ref<HTMLDivElement[]>();
const home = ref<HTMLDivElement>();
const articleInfo = ref({
  pageSize: 10,
  currentPage: 1,
  searchText: "",
});
const { scrollFn, generateStart } = useWaterFall(
  articles,
  articleList,
  articleInfo,
  getArticleListApi
);

const init = async () => {
  const { data: res } = await getArticleListApi(
    articleInfo.value.pageSize,
    articleInfo.value.currentPage,
    articleInfo.value.searchText
  );
  res.rows.forEach((item) => {
    item.height = getRandomInt(100, 200);
  });
  articleList.value = res.rows;
  nextTick(() => {
    generateStart();
  });
};
onMounted(() => {
  window.addEventListener("scroll", scrollFn);
  init();
});
onUnmounted(() => {
  window.removeEventListener("scroll", scrollFn);
});
</script>

<style scoped lang="scss">
.home-container {
  position: relative;
  background-color: #f5f6fa;
  height: 100%;

  .article-container {
    background-color: white;
    position: absolute;
    width: 30%;
    cursor: pointer;

    .image-container {
      overflow: hidden;

      img {
        transition: transform 0.3s linear;

        width: 100%;
        &:hover {
          transform: scale(1.1);
        }
      }
    }

    .card-detail {
      padding: 0 5px 5px 5px;

      .article-title {
        margin: 10px 0;

        h1 {
          font-weight: 700;
          font-size: 17px;
        }
      }

      .article-content {
        margin: 8px 0;

        span {
          font-weight: 500;
          font-size: 15px;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 1;
          text-overflow: ellipsis;
        }
      }

      .article-info {
        display: flex;
        justify-content: space-between;

        span {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
