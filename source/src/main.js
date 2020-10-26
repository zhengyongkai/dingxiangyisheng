// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import { PullRefresh } from "vant";
import "vant/lib/icon/local.css";
import Mui from "vue-awesome-mui";
import dxElement from "@/components/dxElement";
import { Notify } from "vant";
Vue.use(PullRefresh);
Vue.use(Mui);
Vue.use(dxElement);
Vue.use(Notify);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
