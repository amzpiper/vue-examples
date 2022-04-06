import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Swiper, {Navigation, Pagination} from 'swiper'
import store from './store/index.js'
import 'babel-polyfill'
import 'swiper/swiper-bundle.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Swiper.use([Navigation, Pagination])

/* eslint-disable no-new */
/* 路由根据网址的不同,返回不同的内容给用户 */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
