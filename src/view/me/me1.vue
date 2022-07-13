<template>
  <div class="header_top">
    <van-nav-bar fixed
      title="标题"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- <div style="margin-top:20px">me----1</div> -->
    <div>这啥也不是啊</div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const onClickLeft = () => {
      router.back();
    };
    return {
      onClickLeft,
    };
  },
};
</script>