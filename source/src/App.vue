<template>
  <div id="app">
    <router-view />
    <Tabbar v-show="tabBarShow"></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/dxTabbar";
export default {
  name: "App",
  data() {
    return {
      tabBarShow: true
    };
  },
  components: {
    Tabbar
  },
  watch: {
    $route(to, from) {
      console.log("当前路由to.path: " + to.path);
      // Vue.prototype.$fromPage = from.path;
      //判断是否显示tabbar
      if (
        to.path == "/" ||
        to.path == "/baike" ||
        to.path == "/findPage" ||
        to.path == "/home"
      ) {
        this.tabBarShow = true;
      } else {
        this.tabBarShow = false;
      }
    }
  }
};
</script>

<style>
html,
body {
  font-size: 16px;
  padding: 0;
  margin: 0;
  -webkit-overflow-scrolling: touch;
  
}
::-webkit-scrollbar {
  width: 10px;
  height: 1px;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgb(175, 74, 240);
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 5px;
}
</style>
