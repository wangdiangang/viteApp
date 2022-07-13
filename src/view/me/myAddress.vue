<template>
  <div>
    <van-nav-bar fixed
      title="标题"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { ref, reactive, onMounted } from "vue";
import { Toast } from "vant";

const router = useRouter();
const chosenAddressId = ref("1");

onMounted(() => {
  let addressList = [
    {
      id: "1",
      name: "张三",
      tel: "13000000000",
      address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
      isDefault: true,
    },
    {
      id: "2",
      name: "李四",
      tel: "1310000000",
      address: "浙江省杭州市拱墅区莫干山路 50 号",
    },
  ];

  if (!localStorage.getItem("addressList")) {
    localStorage.setItem("addressList", JSON.stringify(addressList));
  }
});
const list = JSON.parse(localStorage.getItem("addressList"));
let chose = list.find((item) => {
  return (item.isDefault = true);
});
chosenAddressId.value = chose.id;
const disabledList = [
  {
    id: "3",
    name: "王五",
    tel: "1320000000",
    address: "浙江省杭州市滨江区江南大道 15 号",
  },
];
const onAdd = () => {
  router.push("/editAddress");
};
const onEdit = (item, index) => {
    console.log(item);
    // router.push("/editAddress");
    router.push({path:'/editAddress',query:{data:JSON.stringify(item)}})
};
const onClickLeft = () => {
  router.back();
};
</script>