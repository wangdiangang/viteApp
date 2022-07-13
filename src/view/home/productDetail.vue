<template>
  <div class="detail">
    <van-nav-bar fixed
      title="标题"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <p>这是个商品，是啥都行</p>
    <h4>￥{{route.query.data}}</h4>
    <ul>
        <li v-for="item in 25" :key="item">这些都是产品详情</li>
    </ul>
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" dot />
      <van-action-bar-icon icon="cart-o" text="购物车" badge="5" />
      <van-action-bar-icon icon="shop-o" text="店铺" badge="12" />
      <van-action-bar-button type="warning" text="加入购物车" />
      <van-action-bar-button type="danger" text="立即购买" @click="buy"/>
    </van-action-bar>
  </div>
</template>
<script setup>
import { useRouter,useRoute } from "vue-router";
import {Toast} from "vant"
const router = useRouter();
const route=useRoute()
const buy=()=>{
    Toast(`此商品${route.query.data}元`)
}
const onClickLeft = () => {
  router.back();
};
</script>
<style scoped lang='less'>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
p{
    font-size: 14px;
}
h4{
    font-size: 20px;
    color: red;
    text-align: right;
}
</style>