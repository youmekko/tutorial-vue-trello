import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//미들웨어
Vue.use(VueRouter)

const Login = {template: '<div>Login Page</div>'}
const NotFound = {template: '<div>Page not found</div>'}


const router = new VueRouter({
  /*
  브라우저에서 라우팅 할때는 해쉬뱅(Hashbang)모드라는게 동작하는데 (브라우저 히스토리 API가 없을 때 사용)
  크롬의 경우는 history API가 있기 때문에 해시뱅 모드가 아닌 히스토리 모드를 사용하면 된다.
  */
  mode: 'history',
  routes: [
    {path: '/', component: App},
    {path: '/login', component: Login},
    {path: '*', component: NotFound}
  ]
})


new Vue({
  el: '#app',
  router,
  render: h => h({template: '<router-view></router-view>'})
})
