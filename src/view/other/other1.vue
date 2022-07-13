<template>
  <div>
    <van-nav-bar
      title="标题"
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