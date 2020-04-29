import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,  // shortcut for "routes: routes" in ES6
  mode: 'history', // set modes for the URL; default is 'hash', while 'history' removes the hash from the URL
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
