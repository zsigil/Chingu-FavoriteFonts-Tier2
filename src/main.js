// require('intersection-observer')

import IntersectionObserver from 'intersection-observer'
Vue.use(IntersectionObserver)


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueHead from 'vue-head'
Vue.use(VueHead)

import browserDetect from "vue-browser-detect-plugin";
Vue.use(browserDetect);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
