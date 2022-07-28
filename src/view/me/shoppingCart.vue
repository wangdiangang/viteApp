
<template>
  <div class="shop header_top">
    <van-nav-bar fixed
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <ul class="cart">
      <li v-for="item in list" :key="item.id">
        <van-checkbox v-model="item.isSelect" shape="square" @change="checkBoxChange"></van-checkbox>
        <img src="https://www.lodashjs.com/img/lodash.png" alt="" />
        <div class="content">
          <h6>{{ item.title }}</h6>
          <p>{{ item.content }}</p>
          <div class="money">
            <van-stepper v-model="item.amount" theme="round" button-size="18" @change="changeStep"/>
            <span>￥{{ item.amount * item.money }}</span>
          </div>
        </div>
      </li>
    </ul>

    <van-action-bar style="padding-left:20px">
      <van-checkbox v-model="checked" @change="checkChange"></van-checkbox>
      <div class="total_money">￥{{totalMoney}}</div>
      <van-action-bar-button type="danger" text="结算" @click="jisuan" :disabled="totalMoney==0"/>
    </van-action-bar>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { Toast } from "vant";
const router = useRouter();
const list = ref([]);
const totalMoney=ref(0)
const checked=ref(false)
onMounted(() => {
  for (let i = 0; i < 20; i++) {
    list.value.push({
      id: i + 10,
      title: "标题" + i,
      content:
        "小小的纸啊四四方方东汉蔡伦造纸张南京用它包绸缎北京用它来包文章此纸落在我地手张张包的都是十三香夏天热冬天凉冬夏离不了那十三香亲朋好友来聚会挽挽袖子啊下厨房鸡鸭鱼肉那盆盆香赛过了王母蟠桃宴胜过老君的仙丹香八洞的神仙来拜访才知用了我的十三香",
      money: i + 2,
      amount: 1,
      isSelect: false,
    });
  }
});
const changeMoney=()=>{
    let moneyList=list.value.filter(item=>{
        return item.isSelect
    })
    let num=0
    moneyList.forEach(item=>{
        num+=(item.amount*item.money)
    })
    totalMoney.value=num
}
const checkBoxChange=(value)=>{
  console.log(value);
    changeMoney()
  
    
}
const changeStep=(val)=>{
    // console.log(val);
     changeMoney()
}
const checkChange=(val)=>{
    console.log(val);
    list.value.forEach(item=>{
        item.isSelect=true
    })
    changeMoney()
}
const jisuan=()=>{
    Toast(`总金额${totalMoney.value}`)
}
const onClickLeft = () => {
  router.back();
};
</script>
<style scoped lang='less'>
.shop {
  .cart {
    li {
      padding: 10px;
      border: 1px solid red;
      margin: 10px;
      //   height: 50px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      /deep/.van-checkbox {
        width: 110px;
      }
      & > div {
        // display: inline-block;
      }
      img {
        width: 40px;
        height: 40px;
      }
    }
    .content {
      h6,
      p {
        font-size: 13px;
      }
      P {
        overflow: hidden; //超出的文本隐藏
        text-overflow: ellipsis; //溢出用省略号显示
        display: -webkit-box;
        -webkit-line-clamp: 1; // 超出多少行
        -webkit-box-orient: vertical;
      }
      .money {
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {
          margin-left: 20px;
        }
        span {
          font-size: 16px;
          color: red;
          margin-right: 10px;
          margin-top: 10px;
        }
      }
    }
  }
  .total_money{
    width: 30%;
    text-align: right;
    font-size: 22px;
    color: red;
  }
}
</style>