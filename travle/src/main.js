import { createApp } from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/'
import 'babel-polyfill'
import 'swiper/swiper-bundle.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

createApp(App).use(store).use(router).use(VueAwesomeSwiper).mount('#app')
