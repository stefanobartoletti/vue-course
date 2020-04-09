import Vue from 'vue'
import App from './App.vue'

// components
import DashboardHeader from './DashboardHeader.vue'
import DashboardContent from './DashboardContent.vue'
import DashboardFooter from './DashboardFooter.vue'

Vue.component('dashboard-header', DashboardHeader);
Vue.component('dashboard-content', DashboardContent);
Vue.component('dashboard-footer', DashboardFooter);


new Vue({
  el: '#app',
  render: h => h(App)
})
