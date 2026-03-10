<template>
  <div class="App">
    <!-- 头部主件 -->
    <HmHeader></HmHeader>
    <!-- 主体主件 -->
    <HmMain></HmMain>
    <!-- 底部主件 -->
    <HmFooter></HmFooter>
  </div>
</template>

<script>
import HmHeader from "./components/HmHeader.vue";
import HmMain from "./components/HmMain.vue";
import HmFooter from "./components/HmFooter.vue";
export default {
  components: {
    // '组件标签名': 组件对象
    HmHeader: HmHeader,
    HmMain: HmMain,
    HmFooter: HmFooter,
  },
};
</script>

<style>
.App {
  height: 700px;
  width: 600px;
  background-color: #87cefa;
  margin: 0 auto;
  padding: 20px;
}
</style>
