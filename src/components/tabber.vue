<template>
  <div>
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/other">其他</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/me">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    const active = ref(0);
    return {
      active,
    };
  },
};
</script>