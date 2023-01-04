<template>
  <div class="main">
    <div class="title"><span>网站更新日志</span></div>
    <hr class="line" />

    <div class="log">
      <div
        :class="{
          item: true,
          'item-first': index === 0,
          'item-left': index % 2 === 0,
          'item-right': index % 2 !== 0,
        }"
        v-for="(item, index) in logList"
      >
        <span>{{ item.logContent }}</span>
      </div>
      <p class="clear-both"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getLogListApi, ILog } from "@/api/log";
import { onMounted, ref } from "vue";
const logList = ref<ILog[]>();
const init = async () => {
  const res = await getLogListApi({
    currentPage: 1,
    pageSize: 10,
    searchText: "",
  });
  logList.value = res.data.rows;
};
onMounted(init);
</script>

<style scoped lang="scss">
.title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
}

.log {
  position: relative;

  .item {
    z-index: 2;
    width: 40%;
    padding: 20px;
    background-color: #e5e7eb;
    min-height: 50px;
    padding: 20px;
    position: relative;
    transition: transform 0.3s ease;

    //小三角
    &::before {
      content: "";
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;

      top: calc(50% - 8px);
      position: absolute;
    }

    &::after {
      content: "";
      width: 6px;
      height: 6px;
      position: absolute;
      top: calc(50% - 5px);
      border: 4px solid rgb(47, 137, 252);
      border-radius: 50%;
      background-color: white;
    }

    &-left {
      float: left;
      margin-top: 48px;

      &::after {
        right: -45px;
      }

      &::before {
        border-right: 8px solid transparent;
        border-left: 8px solid #e5e7eb;
        right: -16px;
      }
    }

    &-right {
      float: right;
      margin-top: 48px;

      &::after {
        left: -44px;
      }

      &::before {
        border-right: 8px solid #e5e7eb;
        border-left: 8px solid transparent;
        left: -16px;
      }
    }

    &-first {
      margin: 0;
    }

    &:hover {
      transform: translateY(-5px);
    }
  }

  .clear-both {
    clear: both;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 50%;
    content: "";
    height: 100%;
    width: 2px;
    background-color: rgb(47, 137, 252);
  }
}
</style>
