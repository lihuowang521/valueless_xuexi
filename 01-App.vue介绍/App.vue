<template>
  <div class="app">
    <div class="box" @click="fn">hello vue</div>
  </div>
</template>

<script>
// 导出的是当前组件的配置项
// 里面可以提供data(特殊) methods computed watch 生命周期函数等
export default {
  created() {
    console.log("我是created");
  },
  methods: {
    fn() {
      alert("点尼玛呢");
    },
  },
};
</script>

<style>
/* 如果要让style支持less
   1. 安装less相关的包 less 和 less-loader
   2. 给style添加lang="less"属性
      yarn add less less-loader -D
      或者 npm install less less-loader -D(开发依赖)
*/
.app {
  height: 400px;
  width: 400px;
  background-color: pink;
}
.app .box {
  width: 100px;
  height: 100px;
  background-color: aquamarine;
}
</style>

<!-- <template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
