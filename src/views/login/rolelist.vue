<template>
  <div class="p-5 pb-20">
    <div class="text-2xl text-black font-bold">请选择以那种身份进入：</div>

    <div class="mt-4">
      <van-radio-group v-model="uid">
        <div class="p-2 rounded-lg border border-gray-300 mb-3 relative "
             :class="uid===index?'border-blue-400':''"
             v-for="(item,index) of list"
             :key="index"
             @click="selectClick(item,index)">
          <div class="text-xl text-black">{{item.unit_name}}
          </div>
          <div class="text-sm text-gray-400 mt-2 pr-10">姓名：{{item.user_name}}</div>
          <div class="text-sm text-gray-400 mt-2 pr-10">角色：{{item.role_names||'--'}}</div>
          <van-radio :name="index"
                     class="absolute right-4 top-1/2 transform translate-y-n-1/2"></van-radio>
        </div>
      </van-radio-group>
    </div>
  </div>

  <div class="bottom-fixed">
    <van-button block
                type="primary"
                @click="onSubmitClick"
                :loading="submitLoading">
      立即进入
    </van-button>
  </div>
</template>
<script setup>
import * as Api from "@/api/login.js";
import * as rightApi from "@/api/rights.js";
import { Toast } from "vant";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const route = useRoute();
const router = useRouter();
const token = route.query.token;
const list = ref([]);
const uid = ref("");
const submitLoading = ref(false);
const userStore = useUserStore();

const getRoleList = async () => {
  let params = {
    token: token
  };
  try {
    let res = await Api.getRoleList(params);
    list.value = res.list;
  } catch (e) {
    console.log('e', e);

  }
}

const selectClick = (item, index) => {
  uid.value = index;
}


const onSubmitClick = async () => {
  if (!uid.value) {
    Toast("请选择要登录的身份！");
    return false;
  }
  let params = {
    ...list.value[uid.value],
    token: token
  };
  try {
    submitLoading.value = true;
    let res = await Api.switchLoginRole(params);
    let userRes = await Api.getUserLoginInfo({ token: res.data.token });
    userStore.userInfo = userRes.data;
    localStorage.userInfo = JSON.stringify(userRes.data);
		let unitRes = await rightApi.getUnitInfo({ unit_id: res.data.school_id });
    userStore.unitInfo = unitRes.data;
    localStorage.unitInfo = JSON.stringify(unitRes.data);
    router.push("/index")
  } catch (e) {
    console.log('e', e);
    Toast(e.msg || "操作失败，请重试！");
  } finally {
    submitLoading.value = false;
  }

}

onMounted(() => {
  getRoleList();
})

</script>
<style lang="less" scoped>
</style>