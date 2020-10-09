import Vue from "vue";
import VueRouter from "vue-router";
//引入路由routes
import routes from "./routes";
//声明使用插件，vue的插件都要声明使用。第三方插件不用声明
Vue.use(VueRouter);

const router = new VueRouter({
  //注入路由routes
  routes,
  //控制跳转过去之后滚动位置在哪里
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
