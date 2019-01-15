import Vue from 'vue'
import router from './router'
import App from './App.vue'

new Vue({
  el: '#app',
  router,
  ///entry point
  render: h => h(App)
})

