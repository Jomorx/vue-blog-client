<template>
    <div class="home-container" ref="home">
        <div v-for="item in articleList" class="article-container" ref="articles">
            <div class="image-container">
                <img :src="item.articleCover" alt="" lazy :style="{ height: item.height + 'px' }" />
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
                        <span>{{ formatTime(item.createdAt) }}</span>

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
import { Icon } from '@vicons/utils'
import { onMounted, onUnmounted, ref, nextTick, watch } from "vue";
import { getArticleListApi } from "../api/ArticleApi";
import { getRandomInt } from "../utils";
import { EyeOutlined, FieldTimeOutlined } from '@vicons/antd'
import { formatTime } from '../utils/index'
import { count } from 'console';
interface Article {
    articleContent: string,
    articleCover: string,
    articleId: string,
    articleTitle: string,
    category: {
        categoryName: string
    },
    createdAt: Date
    isTop: number
    tagList: { tagId: number, tagName: number }[],
    viewCount: number,
    height: number
}
let timer: any = null
const articleList = ref<Article[]>()
const scrollFn = () => {
    if (timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(() => {
        let st =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop;
        // 浏览器窗口（文档）的可视高度(windowHeight)：（就是你肉眼可见的那部分全屏高度）
        let windowHeight =
            window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight;
        // 文档的真实高度(scrollHeight)：
        let scrollHeight =
            document.documentElement.scrollHeight || document.body.scrollHeight;
        /* 这里提示：当 windowHeight + st >= scrollHeight  时就表示滚到底了。 */
        if (st + windowHeight >= scrollHeight - 10) {
            if (!loadAll) {
                articleInfo.value.currentPage++
            }
        }
    }, 200);
};
const articles = ref<HTMLDivElement[]>()
const home = ref<HTMLDivElement>()
const articleInfo = ref({
    pageSize: 10,
    currentPage: 1,
    searchText: ''
})
let loadAll = false
const init = async () => {
    const { data: res } = await getArticleListApi<Article>(articleInfo.value.pageSize,
        articleInfo.value.currentPage, articleInfo.value.searchText)
    res.rows.forEach(item => {
        item.height = getRandomInt(100, 200)
    })
    articleList.value = res.rows
    nextTick(() => {
        foo()
    })
}
watch(() => articleInfo, () => {
    getArticleListApi<Article>(articleInfo.value.pageSize, articleInfo.value.currentPage, articleInfo.value.searchText).then(data => {

        data.data.rows.forEach(item => {
            item.height = getRandomInt(100, 200)

        })
        articleList.value?.push(...data.data.rows)
        if (articleList.value?.length! >= data.data.count) {
            loadAll = true
        }
        nextTick(() => {
            generate((articleInfo.value.currentPage - 1) * articleInfo.value.pageSize, articleList.value?.length!)
        })

    })
}, { deep: true })

const arr: number[] = []
const foo = () => {
    for (let i = 0; i < 3; i++) {
        articles.value![i].style.left = `${i * 281}px`
        arr.push(articles.value![i].offsetHeight)
    }
    generate(3, articleList.value?.length!)
}

const generate = (start: number, end: number) => {
    console.log(start, end)
    for (let i = start; i < end; i++) {
        const min = Math.min(...arr)
        const index = findIndex(min, arr)
        articles.value![i].style.left = `${index * 281}px`
        articles.value![i].style.top = `${min + 20}px`
        arr[index] = arr[index] + articles.value![i].offsetHeight + 20
    }
}
const findIndex = (min: number, arr: number[]) => {
    for (let i = 0; i < arr.length; i++) {
        if (min === arr[i])
            return i
    }
    return 0
}
onMounted(() => {
    window.addEventListener("scroll", scrollFn);
    init()
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

        .image-container {

            img {
                width: 100%;
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
