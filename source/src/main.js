// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import { PullRefresh } from "vant";
import "vant/lib/icon/local.css";
import Mui from "vue-awesome-mui";
import dxElement from "@/components/dxElement";
import http from '@u/http';
import $api from '@/api'; //请求接口地址
import { Notify, Toast, ImagePreview } from "vant";
// 全局注册
Vue.use(ImagePreview);
Vue.use(PullRefresh);
Vue.use(Mui);
Vue.use(dxElement);
Vue.use(Notify).use(Toast);
Vue.config.productionTip = false;
Vue.prototype.$http = http;
Vue.prototype.$api = $api; //挂载请求接口
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
