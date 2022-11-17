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

    <div class="top-grid grid-shadow">
      <van-grid class=""
                :border="false"
                :clickable="true">
        <van-grid-item text="学生成绩"
                       icon-prefix="iconfont">
          <template #icon>
            <i class="iconfont icon-chengji text-2xl text-blue-500"></i>
          </template>
        </van-grid-item>
        <van-grid-item text="家庭作业"
                       icon-prefix="iconfont">
          <template #icon>
            <i class="iconfont icon-zuoye text-2xl text-orange-500"></i>
          </template>
        </van-grid-item>
        <van-grid-item text="学校通知"
                       icon-prefix="iconfont">
          <template #icon>
            <i class="iconfont icon-tongzhi text-2xl text-red-500"></i>
          </template>
        </van-grid-item>
        <van-grid-item text="家长会"
                       icon-prefix="iconfont">
          <template #icon>
            <i class="iconfont icon-jiazhanghui text-2xl text-green-500"></i>
          </template>
        </van-grid-item>
      </van-grid>
    </div>
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
  .top-grid {
    border-radius: 10px;
    width: calc(100vw - 30px);
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    z-index: 2;
    max-width: 970px;
    /deep/ .van-grid-item__content {
      background-color: transparent;
    }
    /deep/ .van-grid-item__text {
      color: #333;
      font-size: 0.32rem;
      line-height: 1;
    }
  }
}
</style>

