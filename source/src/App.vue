<template>
  <div id="app">
    <router-view />
    <Tabbar v-show="tabBarShow" class="tabbar"></Tabbar>
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
@font-face {
  font-family: "fangping";
  src: url("~@/assets/fonts/fangping.ttf");
  /* font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Helvetica Neue",
    Helvetica, Segoe UI, Arial, Roboto, "PingFang SC", "miui",
    "Hiragino Sans GB", "Microsoft Yahei", sans-serif; */
}
* {
  -webkit-touch-callout: none; /*系统默认菜单被禁用*/
  -webkit-user-select: none; /*webkit浏览器*/
  -khtml-user-select: none; /*早期浏览器*/
  -moz-user-select: none; /*火狐*/
  -ms-user-select: none; /*IE10*/
  user-select: none;
}
input,
textarea {
  -webkit-user-select: auto; /*webkit浏览器*/
  margin: 0px;
  padding: 0px;
  outline: none;
}

html,
body {
  font-size: 16px;
  padding: 0;
  margin: 0;
  -webkit-overflow-scrolling: touch;
  color: #000;
}
::-webkit-scrollbar {
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: transparent;
}
/* ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #ededed;
  border-radius: 5px;
} */
.shadow {
  box-shadow: 0px 2px 2px #eee;
}
.hidden {
  overflow: hidden;
}
.van-toast__text {
  color: #fff;
}
.tabbar {
  z-index: 999;
}
</style>
