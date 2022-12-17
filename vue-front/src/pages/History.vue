<template>
    <div class="main">
        <!-- <div class="title">
            <span>归档</span>
        </div>
        <hr class="line"> -->
        <div v-for="item in articleList">
            <n-timeline>
                <n-timeline-item class="info" :title="`${item.days}年共发布了${item.count}篇文章`" />
                <n-timeline-item class="article" v-for="article in item.articles" type="success"
                    :title="article.articleTitle" :time="article.createdAt" />
            </n-timeline>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { ref, onMounted } from 'vue';
import { getArticleTimeLineApi } from '../api/article/ArticleApi';
interface IArticleList {
    days: string,
    articles: {
        articleId: number
        articleTitle: string,
        createdAt: Date
    }[],
    count: number
}

const articleList = ref<IArticleList[]>([])
const init = async () => {
    const res = await getArticleTimeLineApi<IArticleList>()
    articleList.value = res.data
}

onMounted(() => {
    init()
})
</script>

<style scoped lang='scss'>

    .title {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 30px;
        text-align: center;
    }

    .info {
        --n-title-font-size: 25px !important;
        --n-title-font-weight: 600 !important;
    }

    .article {
        --n-title-font-size: 18px !important;
    }
</style>
