<template>
  <div>
    <van-skeleton title avatar :row="3" :loading="loading">
      <div>我是数据出来了</div>
    </van-skeleton>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const loading = ref(true);
    setTimeout(() => {
      loading.value = false;
    }, 2000);
    return {
      loading,
    };
  },
};
</script>