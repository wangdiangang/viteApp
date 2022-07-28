<template>
  <div class="header_top">
    <van-nav-bar
      fixed
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="firefly">
      <div class="lightning">
        <ul>
          <li
            v-for="(item, index) in arr"
            :key="index"
            :style="{
              left: item.left,
              bottom: item.bottom,
              animationDuration: item.animationDuration,
            }"
          ></li>
        </ul>
      </div>
    </div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          autocomplete="off"
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          autocomplete="off"
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交登录
        </van-button>
      </div>
    </van-form>
    <!-- <van-button type="success" @click="login">登录</van-button> -->
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const router = useRouter();
const text = ref("");
const username = ref("");
const password = ref("");
const onClickLeft = () => {
  router.back();
};
const login = () => {
  localStorage.setItem("user", "admin");
  router.replace("/");
};
const onSubmit = (value) => {
  console.log(value);
  localStorage.setItem("user", "admin");
  router.replace("/");
};
const randomNum = (max, min) => {
  const num = Math.floor(Math.random() * (max - min + 1) + min);
  return num;
};
const arr = new Array(10);

for (let i = 0; i < arr.length; i++) {
  arr[i] = {
    left: i * (100 / arr.length) + "%",
    bottom: randomNum(-20, 10) + "%",
    animationDuration: randomNum(4, 15) + "s",
  };
}
setInterval(() => {
  arr.push({
    left: arr.length * (100 / arr.length) + "%",
    bottom: randomNum(-20, 10) + "%",
    animationDuration: randomNum(4, 15) + "s",
  });
  arr.shift();
}, 500);
</script>
<style scoped>
.header_top /deep/ .van-nav-bar {
  background: transparent;
  position: fixed;
}
.header_top /deep/ .van-nav-bar__title {
  color: #fff;
}
.header_top /deep/.van-nav-bar::after {
  border-bottom-width: 0;
}
.header_top {
  height: 100vh;
  background: url("../assets/images/logo_bg.webp")
    no-repeat 100% 100%;
  background-size: cover;
  margin-top: 0;
}

.lightning ul {
  opacity: 0.8;
  transition: 0.8s;
}

.lightning ul li {
  width: 5px;
  height: 5px;
  background-color: #91fa91;
  position: absolute;
  bottom: 10%;
  border-radius: 50%;
  opacity: 0.8;
  animation: move infinite linear;
}

@keyframes move {
  100% {
    bottom: 100%;
  }
}
.header_top /deep/.van-form {
  padding-top: 150px;
}
.header_top /deep/.van-form .van-cell,
.header_top /deep/.van-form .van-cell-group {
  background: transparent;
}
.header_top /deep/.van-form .van-cell label {
  color: #fff;
}
.header_top /deep/.van-form .van-cell input {
  color: #fff;
}
</style>