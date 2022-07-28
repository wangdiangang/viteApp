
<template>
  <div>
    <tab-bar v-if="$route.meta.showTabbar"></tab-bar>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :key="$route.name" :is="Component" v-if="$route.meta.keepAlive"/>
      </keep-alive>
      <component :is="Component" :key="$route.name"  v-if="!$route.meta.keepAlive"/>
    </router-view>
  </div>
</template>
<script>
import tabBar from "./components/tabber.vue";
export default {
  components: {
    tabBar,
  },
  setup() {},
};
</script>
<style>
#app {
}
</style>
