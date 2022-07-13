<template>
  <div>
    <van-notice-bar
      left-icon="volume-o"
      text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
    />

    <van-tabs v-model:active="active" swipeable>
      <van-tab :title="'标签' + index" v-for="index in 10" :key="index"
        >内容 {{ index }}</van-tab
      >
    </van-tabs>
    <van-button type="primary" @click="login">去登录页面了</van-button>
    <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    <h2>这是表头</h2>
    <div class="box"></div>
    <div>
      <span>轮播图</span>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  setup() {
    const router = useRouter();
    const value = ref("");
    const active = ref(0);
    const login = () => {
      console.log("登录");
      router.push("./login");
    };
    return {
      login,
      value,
      active,
    };
  },
};
</script>
<style scoped>
h2 {
  font-size: 20px;
}
.box {
  width: 20px;
  height: 20px;
  border: 1px solid blue;
}
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>