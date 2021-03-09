import Vue from 'vue'
import App from './App.vue'

import './assets/iconfont/iconfont.js'

Vue.config.productionTip = false


// 以下四行代码可以直接复制
import VueRouter from 'vue-router';
import routes from './routes/routes';
let router = new VueRouter({routes});
Vue.use(VueRouter);//这行带如果没有，在html中就不能使用router-view,router-link标签

// const originalPush = VueRouter.prototype.push
//    VueRouter.prototype.push = function push(location) {
//    return originalPush.call(this, location).catch(err => err)
// }
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios';
Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
