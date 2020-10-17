import Vue from 'vue'
import App from './App.vue'

import 'swiper/css/swiper.css'

import router from '../src/router'
import store from '../src/store'

import { MessageBox, Message, Dialog} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;

Vue.config.productionTip = false
Vue.use(Dialog)

new Vue({
  router,
  render: h => h(App),
  store

}).$mount('#app')
