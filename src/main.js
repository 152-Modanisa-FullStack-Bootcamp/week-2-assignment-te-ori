import Vue from 'vue'
import App from './App.vue'
import router from '@/routers/routers.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
