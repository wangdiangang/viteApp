<template>
  <div>
    <van-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-edit
      :address-info="AddressEditInfo.data"
      :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import { areaList } from "@vant/area-data";

import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const searchResult = ref([]);
 const AddressEditInfo=reactive({
    data:{}
 })
console.log('route.query.data',route.query.data);
if (route.query.data) {
  let routeData = JSON.parse(route.query.data);
  console.log(routeData);
   AddressEditInfo.data = {
    name: routeData.name || "",
    tel: routeData.tel || "",
    isDefault: routeData.isDefault || "",
    addressDetail: routeData.addressDetail || "",
    areaCode: routeData.areaCode || "",
    id: routeData.id || "",
  };
}

const onSave = (content) => {
  console.log("content", content);
  let list = JSON.parse(localStorage.getItem("addressList"));
  if (content.isDefault) {
    list.forEach((item) => {
      item.isDefault = false;
    });
  }
  let obj = {
    id: content.id || Date.now() + "",
    name: content.name,
    tel: content.tel,
    address:
      content.province + content.city + content.county + content.addressDetail,
    isDefault: content.isDefault,
    areaCode: content.areaCode,
    addressDetail: content.addressDetail,
  };
  localStorage.setItem(
    "addressList",
    JSON.stringify(content.isDefault ? [obj, ...list] : [...list, obj])
  );
  router.back();
};
const onDelete = (item) => {
  console.log(item.id);
  let list = JSON.parse(localStorage.getItem("addressList"));
  let newList = list.filter((i) => {
    return i.id != item.id;
  });
  console.log("newList", newList);
  localStorage.setItem("addressList", JSON.stringify(newList));
  router.back();
};

const onClickLeft = () => {
  router.back();
};
</script>