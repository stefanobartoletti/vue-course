import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource);

// vue-resource options
Vue.http.options.root = 'https://sb-vue-test.firebaseio.com/lesson15data.json';
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == 'POST') {
    request.method = 'PUT';
  }
  next(response => {
    response.json = () => {
      return { messages: response.body }
    }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
