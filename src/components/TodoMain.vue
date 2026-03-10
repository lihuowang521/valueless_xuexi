<template>
  <!-- 列表区域 -->
  <section class="main">
    <ul class="todo-list">
      <li v-for="(aa, bb) in list" :key="aa.id" class="todo">
        <div class="view">
          <span class="index">{{ bb + 1 }}.</span> <label>{{ aa.name }}</label>
          <button class="destroy"></button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    list: Array,
  },
};
</script>

<style></style>
