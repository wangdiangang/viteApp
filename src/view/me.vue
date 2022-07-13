<template>
  <div>
    <van-button type="primary" @click="goMe1">去me1组件</van-button>
    <van-button type="primary" @click="goOut">退出登录</van-button>
    <van-cell  title="我的地址" is-link @click="goMyAddress" icon="location-o"/>
    <van-cell title="购物车" is-link @click="shoppingCart" icon="shopping-cart-o"/>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Toast } from "vant";

export default {
  components: {},
  setup() {
    const router = useRouter();
    const mine = ref("我的");
    const goMyAddress=()=>{

        router.push('/myAddress')
    }
    const goMe1 = () => {
      router.push("/me1");
    };
    const goOut = () => {
      if (localStorage.getItem("user")) {
        localStorage.clear();
        Toast.success("退出成功");
      }
    };
    const shoppingCart=()=>{
      router.push('/shoppingCart')
    }
    return {
      goMe1,
      goOut,
      goMyAddress,
      shoppingCart
    };
  },
};
</script>
