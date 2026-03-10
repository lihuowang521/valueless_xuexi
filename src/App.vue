<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHeader></TodoHeader>
    <TodoMain :list="list"></TodoMain>
    <TodoFooter></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  data() {
    return {
      list: [
        { id: 1, name: "打篮球" },
        { id: 2, name: "踢足球" },
      ],
    };
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
};
</script>

<style></style>
