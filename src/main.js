// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入vuex
import store from './store'// vuex

//加载mint-ui
import Mint from 'mint-ui';

//加载mint-ui样式
import "mint-ui/lib/style.css"

//引入基础css文件
import "./assets/css/common.css";
Vue.config.productionTip = false

//引入flexible,适配
import "./assets/js/flexible.js"

//引入插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(Mint);
Vue.use(VueAwesomeSwiper);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
