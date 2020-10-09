import Vue from 'vue'
// import Vue from 'vue/dist/vue.common.js'
import App from './App.vue'
// import router from '../src/router'
import 'swiper/css/swiper.css'
import router from '../src/router'


import { MessageBox, Message} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;

// Vue.use(MessageBox)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),

}).$mount('#app')
