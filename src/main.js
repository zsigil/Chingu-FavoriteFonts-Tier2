require('intersection-observer')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueHead from 'vue-head'
Vue.use(VueHead)

IntersectionObserver.prototype.POLL_INTERVAL = 100;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
