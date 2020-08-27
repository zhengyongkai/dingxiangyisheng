<template>
  <div class="body">
    <van-tabbar v-model="active" active-color="#00C891" safe-area-inset-bottom>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="todo-list-o" to='/baike'>健康百科</van-tabbar-item>
      <van-tabbar-item icon="notes-o">问诊</van-tabbar-item>
      <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar).use(TabbarItem);
export default {
  name: "dxAdvise",
  data() {
    return {
      active: 0
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
