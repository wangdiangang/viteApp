<template>
  <div>
      <van-field v-model="value" label="文本" placeholder="请输入用户名" />
    <van-button @click="goOther">去往其他112页面</van-button>
    <van-button @click="goSke">去往骨架屏页面</van-button>
    <van-button type="success" @click="lucky">去抽奖</van-button>
    <van-button type="success" @click="get">接口qin</van-button>
    <van-button type="success" @click="login">post接口</van-button>
    <van-button type="success" @click="getName">get接口</van-button>
    <van-button type="success" @click="getAli">阿里服务器接口</van-button>
    <van-button type="success" @click="interface11">接口一</van-button>
    <van-button type="success" @click="interface12">接口二</van-button>
    <van-button type="success" @click="qita">测试一个其他的接口</van-button>
  </div>
</template>
<script>
import{ref} from "vue"
import { useRouter } from "vue-router";
import { getCode, interface1, interface2, getName1 } from "../api/api.js";
import axios from "axios";
import { Toast } from "vant";
export default {
  setup() {
    const value=ref('')
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
    const getAli = () => {
      axios.get("http://39.105.40.151:8080").then((res) => {
        console.log(res);
        Toast("获取node服务器接口成功" + res.request.responseText);
      });
    };
    const lucky = () => {
      router.push("/lucky");
    };
    const login = () => {
      axios
        .post("http://127.0.0.1:8000/service/login", {
          name: "121212",
          date: "哈哈哈",
        })
        .then((res) => {
          console.log(res);
        });
    };
    const getName = () => {
      getName1({ name: "wudaogang" }).then((res) => {
        console.log("resresresres", res);
      });
    };
    const interface11 = () => {
      interface1({ a: 10086 }).then((res) => {
        console.log(res);
        
      });
    };
    const interface12 = () => {
      interface2({}).then((res) => {
        console.log(res);
        Toast(`接口二获取${res}`)
      });
    };
    const qita=()=>{
      axios.post('http://localhost:3000/login',{userName:'你好啊'}).then(res=>{
        console.log('resresresres',res);
      })
    }
    return {
      value,
      qita,
      goOther,
      goSke,
      get,
      lucky,
      getAli,
      login,
      getName,
      interface11,
      interface12,
    };
  },
};
</script>