<template>
  <div>
    <van-button @click="goOther">去往其他1页面</van-button>
    <van-button @click="goSke">去往骨架屏页面</van-button>
    <van-button type="success" @click="get">接口</van-button>
    <van-button type="success" @click="lucky">去抽奖</van-button>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { getCode } from "../api/api.js";
export default {
  setup() {
    const router = useRouter();
    const goOther = () => {
      router.push("/other1");
    };
    const goSke = () => {
      router.push("/skeleton");
    };
    const get = () => {
      console.log("get");
      let data = {
        codeCount: "4",
        height: 100,
        phone: "",
        thickness: 5,
        width: 300,
      };
      getCode(data).then((res) => {
        console.log(res);
      });
    };
    const lucky=()=>{
      router.push('/lucky')
    }
    return {
      goOther,
      goSke,
      get,
      lucky
    };
  },
};
</script>