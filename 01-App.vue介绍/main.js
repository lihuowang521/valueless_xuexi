// 此文件核心作用：导入app.vue文件，基于App.vue创建结构渲染index.html
// 1. 导入vue核心包

import Vue from "vue";
// 2. 导入app.vue根组件
import App from "./App.vue";

console.log("hello vue");

// 提示当前处于什么环境(开发环境/生产环境)
Vue.config.productionTip = false;

// 3.vue实例化，提供render方法 -> 基于app.vue渲染index.html
new Vue({
  // el: "#app",作用和$mount("选择器")相同，都用于指定vue实例管理的容器
  // render: (h) => h(App), 简写
  render: (createElement) => {
    return createElement(App);
  },
}).$mount("#app");
