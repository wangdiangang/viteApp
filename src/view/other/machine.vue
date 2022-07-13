<template>
  <div class="machine">
    <SlotMachine
      ref="machine"
      height="200px"
      width="240px"
      :prizes="prizes"
      :blocks="blocks"
      :buttons="buttons"
      :slots="slots"
      @start="startCallback"
      @end="endCallback"
    />
    <van-field v-model="machineStatus.digit1" type="digit" label="第一个" />
    <van-field v-model="machineStatus.digit2" type="digit" label="第二个" />
    <van-field v-model="machineStatus.digit3" type="digit" label="第三个" />

    <button @click="startCallback">开始</button>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { Toast } from "vant";

const machine = ref(null);
const machineStatus = reactive({
  digit1: 0,
  digit2: 0,
  digit3: 0,
});
const prizes = ref([
  { fonts: [{ text: "0", top: "15%" }] },
  { fonts: [{ text: "1", top: "15%" }] },
  { fonts: [{ text: "2", top: "15%" }] },
  { fonts: [{ text: "3", top: "15%" }] },
  { fonts: [{ text: "4", top: "15%" }] },
  { fonts: [{ text: "5", top: "15%" }] },
  { fonts: [{ text: "6", top: "15%" }] },
  { fonts: [{ text: "7", top: "15%" }] },
  { fonts: [{ text: "8", top: "15%" }] },
  { fonts: [{ text: "9", top: "15%" }] },
]);
const blocks = ref([
  { padding: "10px", background: "#869cfa" },
  { padding: "10px", background: "#e9e8fe" },
]);
const slots = ref([
  { order: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], direction: 1 },
  { order: [5, 6, 7, 8, 9, 0, 1, 2, 3, 4], direction: -1 },
  { order: [2, 3, 4, 5, 6, 7, 8, 9, 0, 1], direction: 1 },
]);
const buttons = ref([]);
const startCallback = () => {
  console.log(1212);
  machine.value.play();
  setTimeout(() => {
    machine.value.stop([
      machineStatus.digit1 / 1,
      machineStatus.digit2 / 1,
      machineStatus.digit3 / 1,
    ]);
  }, 1000);
};
const endCallback = (prize) => {
  console.log("结束", prize);
  Toast(
    `中奖${machineStatus.digit1 / 1}${machineStatus.digit2 / 1}${
      machineStatus.digit3 / 1}`
  );
};
</script>
<style scoped>
.machine {
  margin-top: 20px;
}
</style>