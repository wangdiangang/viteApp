<template>
  <div class="home">
    <van-notice-bar
      left-icon="volume-o"
      text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
    />

    <van-tabs v-model:active="active" swipeable>
      <van-tab :title="'标签' + index" v-for="index in 10" :key="index">
        <div class="tab_content">内容 {{ index }}</div></van-tab
      >
    </van-tabs>
    <div class="wu_swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :offset='800'
    >
      <van-cell v-for="item in infoList" :key="item">
        <div class="info" @click="goDetail(item+10)">
          <img src="https://www.lodashjs.com/img/lodash.png" alt="" />
          <p>
            商品:无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他
          </p>
          <h3>￥{{ item + 10 }}</h3>
        </div>
      </van-cell>
    </van-list>
    <van-button type="primary" @click="login">去登录页面了</van-button>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
export default {
  setup() {
    const router = useRouter();
    const active = ref(0);
    const loading = ref(false);
    const finished = ref(false);
    const infoList = ref([]);
    const onLoad = () => {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          infoList.value.push(infoList.value.length + 1);
        }
        loading.value = false;
      }, 200);
    };
    onMounted(() => {
      for (let i = 0; i < 10; i++) {
        infoList.value.push(i);
      }
      loading.value = false;
    });
    const login = () => {
      console.log("登录");
      router.push("./login");
    };
    const goDetail=(item)=>{
      console.log('去产品详情',item);
      router.push({path:'productDetail',query:{data:JSON.stringify(item)}})
    }
    return {
      login,
      active,
      infoList,
      finished,
      loading,
      onLoad,
      goDetail
    };
  },
};
</script>
<style scoped lang='less'>
h2 {
  font-size: 20px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.home {
  .tab_content {
    height: 160px;
    background: rgb(228, 225, 225);
  }
  .info {
    // width: 130px;
    // height: 130px;
    border: 1px solid red;
    border-radius: 10px;
    padding: 4px;
      img {
        width: 140px;
        height: 30px;
      }
      p {
        margin-top: 10px;
        font-size: 12px;
        // height: 50px;
        overflow: hidden; //超出的文本隐藏
        text-overflow: ellipsis; //溢出用省略号显示
        display: -webkit-box;
        -webkit-line-clamp: 2; // 超出多少行
        -webkit-box-orient: vertical;
      }
      h3 {
        font-size: 14px;
        color: red;
        text-align: right;
      }
    
  }
  /deep/ .van-list{
    display: flex;
    flex-wrap: wrap;
    .van-cell{
      width: 50%;
    }
  }
}
</style>