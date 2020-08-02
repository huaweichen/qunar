// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from 'vue';
import App from './App'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'styles/reset.css'
import 'styles/border.css'
import 'styles/icofont/icofont.css'
import 'swiper/dist/css/swiper.css'

fastClick.attach(document.body)

/* eslint-disable no-new */
createApp(App).use(router).use(store).use(VueAwesomeSwiper).mount('#app')
