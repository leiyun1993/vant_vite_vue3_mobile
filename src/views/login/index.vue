<template>

  <div class="text-center pt-14">
    <img src="@icon/logo.png"
         alt=""
         class="w-20 inline-block">
    <div class="mt-2 text-lg text-black">青白江区教育一体化综合平台</div>

    <van-form @submit="onSubmit"
              class="m-7">
      <van-cell-group>
        <van-field v-model="phone"
                   name=""
                   label=""
                   placeholder="学号/手机号/身份证号"
                   clearable
                   :border="false"
                   class="input" />
        <van-field v-model="password"
                   :type="passwordType"
                   name=""
                   label=""
                   placeholder="请输入您的密码"
                   :border="false"
                   right-icon="eye"
                   class="input mt-3">
          <template #right-icon>
            <i class="iconfont icon-eye-fill"
               @click="toggle('text')"
               v-if="passwordType=='password'"></i>
            <i class="iconfont icon-eyeslash-fill"
               @click="toggle('password')"
               v-else></i>
          </template>
        </van-field>
      </van-cell-group>
      <div class="text-right mt-4 text-gray-500">忘记密码？</div>
      <div class="mt-4">
        <van-button block
                    type="primary"
                    class="rounded-md"
                    native-type="submit"
                    :loading="loginLoading">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Toast } from "vant";
import * as Api from "@/api/login.js";
import { useRouter } from "vue-router";
const phone = ref("18780170404");
const loginLoading = ref(false);
const password = ref("zxc123..");
const passwordType = ref("password");
const router = useRouter();


const onSubmit = async (val) => {
  console.log("onSubmit", val, phone.value, password);

  console.log('phone.value', !phone.value);
  if (!phone.value) {
    Toast("请输入登录名");
    return false;
  }
  if (!password.value) {
    Toast("请输入登录密码");
    return false;
  }
  let params = {
    phone: phone.value,
    password: password.value,
    original_password: password.value
  }
  try {
    loginLoading.value = true;
    let res = await Api.login(params);
    console.log('res', res);
    if (res.list.length > 1) {  //需要切换角色
      router.push(`/rolelist?token=${res.data.token}`)
    } else {

    }
  } catch (e) {
    console.log('e', e);
  } finally {
    loginLoading.value = false;
  }

}
const toggle = (val) => {
  passwordType.value = val;
}

</script>
<style lang="less" scoped>
.input {
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  background: #f5f5f5;
}
</style>