import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";

import Register from './components/Register'
Vue.component("Register",Register)

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
