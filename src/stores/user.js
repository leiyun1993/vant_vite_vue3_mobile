import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment () {
    count.value++
  }

  return { count, doubleCount, increment }
})


export const useUserStore = defineStore("userInfo", () => {
  const userInfo = ref({});
  const userJson = JSON.parse(localStorage.getItem("userInfo"));
  console.log('userJson', userJson);
  if (userJson) {
    userJson.className = `${userJson.grade_name}${userJson.class_name}`
    userInfo.value = userJson;
  }
  return {
    userInfo: userInfo
  }
})