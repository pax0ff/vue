import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AppLayout from '@/layouts/AppLayout'
import VueMeta from 'vue-meta'
import('./assets/css/custom.css')

Vue.use(VueMeta)
Vue.component('AppLayout', AppLayout)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
