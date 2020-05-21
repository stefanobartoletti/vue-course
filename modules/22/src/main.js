import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://sb-vue-axios.firebaseio.com';
axios.defaults.headers.common['Authorization'] = 'qwerty';
axios.defaults.headers.get['Accepts'] = 'application/json'

axios.interceptors.request.use(config => {
  console.log('Request interceptor', config)
  return config
})
axios.interceptors.response.use(res => {
  console.log('Response interceptor', res)
  return res
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
