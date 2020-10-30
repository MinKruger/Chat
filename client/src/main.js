import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8000/api/'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
