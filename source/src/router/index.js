import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Index from "@/pages/index/IndexPage";
import BaikePage from "@/pages/index/baikePage";
import HomePage from "@/pages/index/HomePage";
import wysPage from "@/pages/baike/wysPage";
import kmPage from "@/pages/baike/kmPage"; 
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: Index
      // component: Index
    },
    {
      path: "/index",
      name: "index",
      component: Index
    },
    {
      path: "/baike",
      name: "baike",
      component: BaikePage
    },
    {
      path: "/home",
      name: "home",
      component: HomePage
    },
    {
      path: "/wyspage",
      name: "HelloWorld",
      component: wysPage
    },
    {
      path: "/kmPage",
      name: "kmPage",
      component: kmPage
    }
  ]
});
