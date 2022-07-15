<template>
  <div class="header_top">
    <van-nav-bar fixed
      title="其他啊"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div>other----1</div>
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