<template>
    <div class="main">
        <div class="title"><span>友链</span></div>
        <hr class="line">
        <div class="links">
            <div class="link" v-for="(item, key) in friendChainList" :key="key">
                <div class="info">
                    <div class="name">{{ item.friendChainName }}</div>
                    <div class="desc">{{ item.friendChainDescription }}</div>
                </div>
                <img class="avatar" :src="item.friendChainLink" alt="" />
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { getFriendChainListApi } from '../api/FrendChain'
import { onMounted, ref } from 'vue';

interface IFriendChain {
    friendChainName: string,
    friendChainDescription: string;
    friendChainAvatar: string;
    friendChainLink: string
}
const friendChainList = ref<IFriendChain[]>([])
const init = async () => {
    const { data } = await getFriendChainListApi<IFriendChain>(1, 10, '')
    friendChainList.value = data.rows
}
onMounted(() => {
    init()
})
</script>

<style scoped lang='scss'>

    .title{
        font-size: 30px;
        text-align: center;
        font-weight: 700;
        margin-bottom: 30px;
    }
    .links {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .link {
            z-index: 2;
            font-family: 楷体;
            width: 28%;
            height: 80px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            border-radius: 10px;
            border: 1px dashed rgb(177, 177, 177);
            position: relative;
            overflow: hidden;
            cursor: pointer;
            margin-top: 10px;

            .info {
                height: 100%;
                display: flex;
                flex-direction: column;
                color: rgb(32, 157, 123);
                justify-content: space-around;
                text-align: center;
                max-width: 173px;

                .name {
                    font-weight: bold;
                    font-size: 16px;

                }

                .desc {
                    color: #6bc30d;
                    font-size: 14px;
                    -webkit-box-orient: vertical;
                    border-top: 2px dashed rgb(238, 238, 238);
                    padding-top: 10px;
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-line-clamp: 2;
                    text-overflow: ellipsis;
                }
            }

            .avatar {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                transition: transform 0.3s ease;
            }

            &::after {
                z-index: -1;
                left: 0;
                position: absolute;
                content: '';
                width: 100%;
                height: 0;
                background-image: linear-gradient(-225deg, rgb(44, 216, 213) 0%, rgb(197, 193, 255) 56%, rgb(186, 217, 255) 100%);
                transform: rotate(45deg);
                transition: height 0.3s ease;
            }

            &:hover {
                box-shadow: rgb(0 255 228) 0px 0px 8px;

                &::after {
                    height: 700%;
                }

                .avatar {
                    transform: rotate(360deg);
                }
            }
        }
    }
</style>