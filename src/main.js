import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.prototype.$http = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    accept: 'application/vnd.github.v3+json'
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
