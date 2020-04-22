import Vue from 'vue'
import App from './App.vue'

Vue.filter('toLowercase', function(value) {
    return value.toLowerCase();
})

Vue.mixin({ // global mixins are rarely used, they are called for every Vue instance or component; they often are useful only when creating plugins for Vue
  created() {
    console.log('Created (global mixin)');
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
