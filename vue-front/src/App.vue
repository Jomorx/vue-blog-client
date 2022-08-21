<template>
  <!-- <n-scrollbar style="max-height: 100vh"> -->
    <CommonHeader />
    <CommonContent />
  <!-- </n-scrollbar> -->
</template>

<script setup lang='ts'>
import CommonHeader from './layouts/CommonHeader.vue';
import CommonContent from './layouts/CommonContent.vue';

</script>

<style lang='scss'>
@import './assets/init.css';

body {
  background-color: #f5f6fa;
  /* font-family: 楷体;  */
}

.w {
  width: 1200px;
  margin: 0 auto;
}

.line {
  height: 4px;
  border: 0px;
  background-color: rgb(221, 221, 221);
  margin: 20px 0px;
  background-image: repeating-linear-gradient(-45deg, rgb(255, 255, 255), rgb(87, 255, 87) 5px, transparent 0px, transparent 8px);
}
.main{
  padding: 35px;
}
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  position: absolute;
}

::-webkit-scrollbar-thumb {
  background-color: #1890ff
}

::-webkit-scrollbar-track {
  background-color: #ddd
}
</style>