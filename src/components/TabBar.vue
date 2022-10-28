<template>
  <div class="container">
    <RouterView />
  </div>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="wap-home"
                     to="/index">首页</van-tabbar-item>
    <van-tabbar-item badge="3"
                     icon="wechat-moments"
                     to="/moment">动态</van-tabbar-item>
    <van-tabbar-item icon="manager"
                     to="/my">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  setup () {
  },
  mounted () {
    console.log('route', this.$route);
    this.initActive();
  },
  methods: {
    initActive () {
      const path = this.$route.path;

      switch (path) {
        case "/my":
          this.active = 2;
          break;
        case "/moment":
          this.active = 1;
          break;
        case "/index":
          this.active = 0;
          break;
      }
    }
  }
}

</script>
<style lang="less" scoped>
</style>