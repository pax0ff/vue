import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AppLayout from '@/layouts/AppLayout'
import VueMeta from 'vue-meta'
import Vuex from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import('./assets/css/custom.css')

Vue.use(VueMeta)
Vue.use(Vuex)
Vue.component('AppLayout', AppLayout)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
