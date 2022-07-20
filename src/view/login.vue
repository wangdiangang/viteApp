<template>
  <div class="header_top">
    <van-nav-bar
      fixed
      title="抽奖"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
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
          提交
        </van-button>
      </div>
    </van-form>
    <van-button type="success" @click="login">登录</van-button>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  setup() {
    const router = useRouter();
    const text = ref("");
    const username=ref('')
    const password=ref('')
    const onClickLeft = () => {
      router.back();
    };
    const login = () => {
      localStorage.setItem("user", "admin");
      router.replace("/");
    };
    const onSubmit=(value)=>{
      console.log(value);
    }
    return {
      onClickLeft,
      login,
      text,
      password,
      username,
      onSubmit
    };
  },
};
</script>
<style scoped>
</style>