<template>
  <div>
    <van-button type="success" @click="login">登录</van-button>
    <input type="text" v-model="text" />
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  setup() {
    const router = useRouter();
    const text = ref("");
    const onClickLeft = () => {
      router.back();
    };
    const login = () => {
      localStorage.setItem('user','admin')
      router.replace("/");
    };
    return {
      onClickLeft,
      login,
      text,
    };
  },
};
</script>
<style scoped>
</style>