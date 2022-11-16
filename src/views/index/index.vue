<!--  -->
<template>
  <div class="user-info-box">
    <van-image width="50"
               height="50"
               fit="cover"
               round
               class="border border-white mt-8"
               src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
    <div class="justify-center">
      <div class="text-xl text-white inline-block align-middle">{{userStore.userInfo.user_name}}</div>
      <div class="text-mini ml-2 px-2 py-0 bg-black bg-opacity-10 text-white inline-block align-middle">{{userStore.userInfo.className}}</div>
    </div>
    <div class="mt-2 text-white text-sm">{{userStore.userInfo.school_name}}</div>
  </div>
</template>
<script setup>

import { useUserStore } from "@/stores/user";
const userStore = useUserStore();

</script>
<!-- 单页私有css -->
<style lang='less' scoped>
.user-info-box {
  height: 210px;
  background-image: linear-gradient(to top right, #30aaea, #1e66e8);
  text-align: center;
  position: relative;
}
</style>

