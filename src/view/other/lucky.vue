<template>
  <van-nav-bar
    title="标题"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
  <van-field v-model="luckyNum" label="中奖数字" />
  <van-field v-model="luckyTime" label="转动时间/s" />
  <LuckyWheel
    ref="myLucky"
    width="300px"
    height="300px"
    :prizes="prizes"
    :blocks="blocks"
    :buttons="buttons"
    @start="startCallback"
    @end="endCallback"
  />
  <LuckyGrid
    ref="myLuckyGrid"
    width="300px"
    height="300px"
    :prizes="prizesGrid"
    :blocks="blocksGrid"
    :buttons="buttonsGrid"
    @start="startCallbackGrid"
    @end="endCallbackGrid"
  />
  <Machine />
</template>
<script setup>
import Machine from "./machine.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import {Toast} from "vant"
const components = {
  Machine,
};
const router = useRouter();
const myLucky = ref(null);
const myLuckyGrid = ref(null);
const luckyNum = ref(0);
const luckyTime = ref(3);
const blocks = ref([{ padding: "13px", background: "#617df2" }]);
const blocksGrid = ref([
  { padding: "13px", background: "#617df2", borderRadius: "20px" },
]);
const prizes = ref([
  { fonts: [{ text: "0", top: "10%" }], background: "#e9e8fe" },
  { fonts: [{ text: "1", top: "10%" }], background: "#b8c5f2" },
  { fonts: [{ text: "2", top: "10%" }], background: "#e9e8fe" },
  { fonts: [{ text: "3", top: "10%" }], background: "#b8c5f2" },
  { fonts: [{ text: "4", top: "10%" }], background: "#e9e8fe" },
  { fonts: [{ text: "5", top: "10%" }], background: "#b8c5f2" },
]);
const prizesGrid = ref([
  {
    x: 0,
    y: 0,
    fonts: [{ text: 0, fontColor: "red" }],
    imgs: [
      {
        src: "https://www.lodashjs.com/img/lodash.png",
        width: "50px",
        height: "50px",
      },
    ],
  },
  {
    x: 1,
    y: 0,
    fonts: [{ text: 1, fontColor: "red" }],
    imgs: [
      {
        src: "https://www.lodashjs.com/img/lodash.png",
        width: "50px",
        height: "50px",
      },
    ],
  },

  {
    x: 2,
    y: 0,
    fonts: [{ text: 2, fontColor: "red" }],
    imgs: [
      {
        src: "https://www.lodashjs.com/img/lodash.png",
        width: "50px",
        height: "50px",
      },
    ],
  },
  {
    x: 2,
    y: 1,
    fonts: [{ text: 3, fontColor: "red" }],
    imgs: [
      {
        src: "https://www.lodashjs.com/img/lodash.png",
        width: "50px",
        height: "50px",
      },
    ],
  },

  {
    x: 2,
    y: 2,
    fonts: [{ text: 4, fontColor: "red" }],
    imgs: [
      {
        src: "https://www.lodashjs.com/img/lodash.png",
        width: "50px",
        height: "50px",
      },
    ],
  },
  {
    x: 1,
    y: 2,
    fonts: [{ text: 5, fontColor: "red" }],
    imgs: [
      {
        src: "https://www.lodashjs.com/img/lodash.png",
        width: "50px",
        height: "50px",
      },
    ],
  },
  {
    x: 0,
    y: 2,
    fonts: [{ text: 6, fontColor: "red" }],
    imgs: [
      {
        src: "https://www.lodashjs.com/img/lodash.png",
        width: "50px",
        height: "50px",
      },
    ],
  },
  {
    x: 0,
    y: 1,
    fonts: [{ text: 7, fontColor: "red" }],
    imgs: [
      {
        src: "https://www.lodashjs.com/img/lodash.png",
        width: "50px",
        height: "50px",
      },
    ],
  },
]);
const buttons = ref([
  { radius: "50px", background: "#617df2" },
  { radius: "45px", background: "#afc8ff" },
  {
    radius: "40px",
    background: "#869cfa",
    pointer: true,
    fonts: [{ text: "开始\n抽奖", top: "-20px" }],
  },
]);
const buttonsGrid = ref([
  {
    x: 1,
    y: 1,
    background: "red",
    fonts: [
      { text: "开始旋转", fontColor: "#fff", top: "20px", lengthLimit: "60%" },
    ],
  },
]);
const startCallback = () => {
  // 调用抽奖组件的play方法开始游戏
  console.log(myLucky);
  myLucky.value.play();
  // 模拟调用接口异步抽奖
  setTimeout(() => {
    myLucky.value.stop(luckyNum.value);
  }, luckyTime.value * 1000);
};
const startCallbackGrid = () => {
  // 调用抽奖组件的play方法开始游戏
  console.log(myLuckyGrid);
  myLuckyGrid.value.play();
  // 模拟调用接口异步抽奖
  setTimeout(() => {
    myLuckyGrid.value.stop(luckyNum.value);
  }, luckyTime.value * 1000);
};
// 抽奖结束会触发end回调
const endCallback = (prize) => {
  console.log("中奖结束", prize);
  Toast(`中奖${luckyNum.value}`)
};
const endCallbackGrid = (prize) => {
  console.log("中奖结束", prize);
 Toast(`中奖${luckyNum.value}`)
};
const onClickLeft = () => {
  router.back();
};
</script>