// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueRx from 'vue-rx'
import { Observable } from 'rxjs/Observable'

import App from './App'
import router from './router'
import store from './store'

Vue.use(VueResource) // alternatively, axios can be used like this: Vue.prototype.$http = axios
Vue.use(VueMaterial)
Vue.use(VueRx, {
  Observable
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
