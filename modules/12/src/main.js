import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = "green";
    el.style.backgroundColor = binding.value;
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
