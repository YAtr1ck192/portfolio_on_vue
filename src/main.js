import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from "axios";
import router from './router'


Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

