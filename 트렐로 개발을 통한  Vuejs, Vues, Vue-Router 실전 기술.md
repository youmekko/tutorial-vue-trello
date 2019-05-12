# 트렐로 개발을 통한  Vuejs, Vues, Vue-Router 실전 기술

# 시작하기

## 1강 강의소개

### 개발순서

* 요구사항 정리
* 기술 조사
* 기능 구현

#### 사용 하는 것들

* 상태 관리를 위한 vuex
* 라우팅을 위한  vue-router
* api  통신을 위한 axios
* drag and drop을 위한 dragular 

## 2강 요구사항 분석1

## 3강 요구사항 분석

* 인증 : 로그인, 로그아웃

* 보드작업

  |        | 생성               | 조회               | 수정                                   | 이동               | 삭제               |
  | ------ | ------------------ | ------------------ | -------------------------------------- | ------------------ | ------------------ |
  | 보드   | <strong>O</strong> | <strong>O</strong> | <strong>O</strong><br />(타이틀,색상)  | <strong>X</strong> | <strong>O</strong> |
  | 리스트 | <strong>O</strong> | <strong>X</strong> | <strong>O</strong><br />(타이틀)       | <strong>O</strong> | <strong>O</strong> |
  | 카드   | <strong>O</strong> | <strong>O</strong> | <strong>O</strong><br />(타이틀, 설명) | <strong>O</strong> | <strong>O</strong> |

* 기본 플로우

  * 홈페이지 접속 (비인가 요청은 로그인 페이지 이동)
  * 로그인 페이지 접속 : 로그인 수행
  * 홈페이지 리다이렉트
  * 보드 목록 조회
  * 보드 생성 : 생성한 보드 화면 이동
  * 보드 조회 : 자동 생성된 리스트 나열 (Todo, Doing, Done)
  * 카드 생성 : 타이틀 입력
  * 카드 상세 조회 : 모달창
  * 카드 수정 : 타이틀, 설명
  * 카드 이동1 : 리스트 내에서 이동
  * 카드 이동2 : 리스트 간 이동
  * 카드 삭제
  * 보드 세팅 : 사이드바
  * 보드 삭제 : 삭제 후 홈페이지 이동

* 추가 기능

  * 보드 수정: 색상 변경

  * 보드 수정 : 타이틀 변경
  * 리스트 생성
  * 리스트 수정 : 타이틀 변경
  * 리스트 이동
  * 리스트 삭제

## 4강 코드   스캐폴딩

* vue-cli 설치 `npm install -g vue-cli`
* 프로젝트 폴더 생성 
* `vue init webpack-simple`
* `npm i(install)`
* 개발서버 구동 `npm run dev` 

## 5강 라우터의 필요성

웹 서비스는 여러개의 웹 페이지로 이루어져있다. 각 페이지는 주소에 따라서 식별되는데 이것을 **라우팅**이라고 한다. 라우팅 하는 주체는 서버가 될수도 있고 브라우저가 될 수도 있다. 서버가 라우팅 하는 것을 서버 라우팅이라 하고 브라우저가 라우팅 하는 것을 브라우저 라우팅이라고 한다.

### 서버라우팅 

* 매번 주소를 요청할 때마다 화면이 갱신된다.
* 네이버, 구글 등

### 브라우저 라우팅

* 주소를 매번 요청하더라도 화면이 갱신되지 않는다.
* 대신, 화면에 필요한 데이터만 서버에 따로 요청해서 화면을 갱신하는 방법을 사용한다.
* 서버 라우팅과 비교해서 좀 더 효율적으로 화면을 갱신한다.
* 구글 메일, 트렐로 등
* 브라우저 라우팅은 주소 요청시 브라우저에서 처리하고 데이터는 백엔드 API를 통해서 서버로 부터 받아온 뒤에 마지막으로 그 데이터를 이용해 화면에 뿌리는 구조이다.
* 브라우저에서 동작하는 Vue.js는 이러한 라우팅 기능도 수행할 수 있다.

## 6강 라우터 직접 만들기

메인 페이지인 Root경로와 로그인을 위한 로그인 경로 라우팅 로직을 먼저 만들어보자.

현재 Vue 어플리케이션이 동작할 때 제일 처음 동작하는 부분은 main.js이다.

Webpack을 통해서 어플리케이션들이 번들링 되는데 entry 포인트가 src/main.js로 설정되어 있다.

그래서 main.js에 라우팅 로직을 만들면 된다.

루트 경로로 접속 했을 때 app 컴포넌트가 라우팅 되는 것이다.

~~~javascript
import Vue from 'vue'
import App from './App.vue'

const Login = { template: '<div>Login Page</div>' }

const routes  = {
  '/' : App,
  '/login' : Login
}

new Vue({
  el: '#app',
  computed: {
    VueComponent(){
      return routes[window.location.pathname] ||
        { template : '<div>Page not found</div>'}
    }
  },
  render(h){
    return h(this.VueComponent)
  }
})

~~~

이렇게 만든 라우팅 기능을 미리 구현해 둔것이 vue-router라는 라이브러리이다. vue 진영에서 가장 많이 사용하는 라이브러리이다.

## 7강 vue-router

vur-router 설치 `npm i vue-router --save`

우리는 서버라우팅이 아니라 브라우저 라우팅을 구현하려고 하고있다. 브라우저에서 라우팅 하는 것을 Single Page App이라고 하고 이것을 구현하기 위해서는 vue-router를 사용해야 하는 것이다. 

> Vue.js를 사용한다면 이미 컴포넌트로 앱을 구성하고 있을 것입니다. Vue 라우터를 함께 사용할 때 추가로 해야하는 것은 라우트에 컴포넌트를 매핑한 후, 어떤 주소에서 렌더링할 지 알려주는 것 뿐입니다.
> https://router.vuejs.org/kr/guide/

~~~javascript
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//미들웨어
Vue.use(VueRouter)

const Login = { template: '<div>Login Page</div>' }
const NotFound = { template: '<div>Page not found</div>' }


const router = new VueRouter({
  routes: [
    {path : '/', component : App},
    {path : '/login', component : Login },
    {path : '*', component: NotFound}
  ]
})


new Vue({
  el: '#app',
  router,
  render: h => h({template: '<router-view></router-view>'})
})

~~~

특이하게 #가 붙는데, 브라우저에서 라우팅 할때 해쉬뱅(hashbang) 모드라는게 동작하고 있기 때문이다. 브라우저 히스토리 API가 없을 때 해시뱅 모드를 사용하지만 크롬의 경우는 히스토리 API가 있기 때문에 해시뱅 모드가 아닌 히스토리 모드를 사용하면 된다.

~~~javascript
const router = new VueRouter({
  mode: 'history',
  routes: [
    {path : '/', component : App},
    {path : '/login', component : Login },
    {path : '*', component: NotFound}
  ]
})
~~~

## 8강 라우터 인스턴스

main.js 안에 라우팅 로직이 많이 들어있으므로 라우팅 로직만 따로 분리해보자.
src 디렉토리 아래 router 디렉토리를 만들고 index.js 파일을 만든다.
(index.js말고도 더 많은 서브 라우터를 만들 수 있다.)

router/index.js

~~~javascript
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'

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

export default router

~~~

main.js

~~~javascript
import Vue from 'vue'
import router from './router'


new Vue({
  el: '#app',
  router,
  render: h => h({template: '<router-view></router-view>'})
})

~~~

## 9강 라우터 뷰

main.js의 `<router-view></router-view>` 부분이 요청 URL에 따라서 화면이 바뀌는 부분이다.  그런데 이 프로젝트에서는 App.vue라는 것이 루트 컴포넌트 역할을 한다. 그래서 이 루트 컴포넌트를 기준으로 URL에 따라서 컴포넌트를 바꿔치기 해야한다. 그래서 main.js에 있는 <router-view></router-view>를 App.vue로 옮겨보자.

App.vue

~~~javascript
<template>
  <div id="app">
    여기서부터 코드를 시작합니다.
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
</style>

~~~

router/index.js

~~~javascript
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'

//미들웨어
Vue.use(VueRouter)

const router = new VueRouter({
  /*
  브라우저에서 라우팅 할때는 해쉬뱅(Hashbang)모드라는게 동작하는데 (브라우저 히스토리 API가 없을 때 사용)
  크롬의 경우는 history API가 있기 때문에 해시뱅 모드가 아닌 히스토리 모드를 사용하면 된다.
  */
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '*', component: NotFound}
  ]
})

export default router
~~~

main.js

~~~javascript
import Vue from 'vue'
import router from './router'
import App from './App.vue'

new Vue({
  el: '#app',
  router,
  //entry po
  render: h => h(App)
})

~~~

src/components 들에 각  URL 별로 보여질 컴포넌트들도 만든다. (Home/Login/NotFound)

## 10강 라우터 링크

`<router-link>`는 라우터 지원 앱에서 사용자 내비게이션을 가능하게하는 컴포넌트이다. (뷰 라우터가 제공하는) 내비게이션을 위한 컴포넌트이다.

<router-link>는 다음과 같은 이유로 하드 코드된 `<a href="...">`보다 선호된다.

* HTML5 히스토리 모드와 해시 모드에서 모두 동일한 방식으로 작동하므로 모드를 트랜지션하기로 결정하거나 라우터가 IE9에서 해쉬모드로 트랜지션 한 경우 변경할 필요가 없다.
* HTML5 히스토리 모드에서 <router-link>는 클릭 이벤트를 차단해 부라우저가 페이지를 다시 로드하지 않도록 한다.
* ~~HTML5 히스토리 모드에서 base옵션을 사용할 때 `to` prop의 URL에 이를 포함 할 필요가 없다.~~

components/NavBar.vue  컴포넌트 추가

~~~javascript
<template>
    <div>
         <!--
          히스토리 모드를 쓸 때는  <a href="/">Home</a>
          해시뱅 모드르 사용할 때는 <a href="/#/> 이처럼 라우팅 해야한다.
          <router-link>를 쓰는 장점!
          -->
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>

</style>

~~~

App.vue

~~~javascript
<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/NavBar.vue'

export default {
  name: 'app',
  components : { navbar },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>

~~~

## 11강 동적 라우트 매칭

우리가 router를 설정할 때 Vue.use라는 함수를 통해서 VueRouter를 미들웨어로 추가했다. 그렇기  때문에 Vue를 통해서 만든 vue 인스턴스는 $route라는 변수를 통해서 라우터 정보에 접근할 수 있다. 

index.js

~~~javascript
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'
import Board from '../components/Board.vue'

//미들웨어
Vue.use(VueRouter)

const router = new VueRouter({
  /*
  브라우저에서 라우팅 할때는 해쉬뱅(Hashbang)모드라는게 동작하는데 (브라우저 히스토리 API가 없을 때 사용)
  크롬의 경우는 history API가 있기 때문에 해시뱅 모드가 아닌 히스토리 모드를 사용하면 된다.
  */
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/b/:bid', component: Board},
    {path: '*', component: NotFound}
  ]
})

export default router

~~~

Board.vue

~~~javascript
<template>
    <div>
      Board
      <div>bid: {{ bid }}</div>
    </div>
</template>

<script>
    export default {

      data(){
        return {
            bid: 0
        }
      },

      //Board가 생성될 때 실행되는 훅이 Create
      created(){
        //$route 객체 로그로 찍어보자
        console.log("@@@route", this.$route);
        console.log("@@@bid", this.$route.params.bid);

        //로그에서 확인할 수 있는 것처럼 this.$route 객체를 통해서 라우팅 정보를 받아낼 수 있다.
        this.bid = this.$route.params.bid;
      }
    }
</script>

<style scoped>

</style>

~~~



## 12강 중첩 라우트

Card.vue

~~~javascript
<template>
  <div>
    Card
    <div>cid: {{cid}}</div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        cid: 0
      }
    },
    watch:{
      '$route'() {
        this.cid = this.$route.params.cid;
      }
    },
    created(){
      this.cid = this.$route.params.cid;
    }
  }
</script>

<style scoped>

</style>

~~~

index.js

~~~javascript
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'
import Board from '../components/Board.vue'
import Card from '../components/Card.vue'

//미들웨어
Vue.use(VueRouter)

const router = new VueRouter({
  /*
  브라우저에서 라우팅 할때는 해쉬뱅(Hashbang)모드라는게 동작하는데 (브라우저 히스토리 API가 없을 때 사용)
  크롬의 경우는 history API가 있기 때문에 해시뱅 모드가 아닌 히스토리 모드를 사용하면 된다.
  */
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/b/:bid', component: Board, children:[
        {path: '/c/:cid', component: Card}
      ]},
    {path: '*', component: NotFound}
  ]
})

export default router

~~~



중첩 라우터를 사용하는 이유는 보드에서 카드를 선택해서 들어갈때 보드는 백그라운드에 깔려있고 카드 내용은 보드 위에 팝업으로 띄워졌기 때문이다.

Board.vue

~~~javascript
<template>
    <div>
      Board
      <div>bid: {{ bid }}</div>
      <router-link :to="`/b/${bid}/c/1`">Card1</router-link>
      <router-link :to="`/b/${bid}/c/2`">Card2</router-link>
      <hr/>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {

      data(){
        return {
            bid: 0
        }
      },

      //Board가 생성될 때 실행되는 훅이 Create
      created(){
        //$route 객체 로그로 찍어보자
        console.log("@@@route", this.$route);
        console.log("@@@bid", this.$route.params.bid);

        //로그에서 확인할 수 있는 것처럼 this.$route 객체를 통해서 라우팅 정보를 받아낼 수 있다.
        this.bid = this.$route.params.bid;
      }
    }
</script>

<style scoped>

</style>

~~~



## 13강 데이터 불러오기

vue router들을 통해서 백엔드 API 연동시 어떻게 화면을 만들수 있는지 살펴보자

Board.vue

~~~javascript
<template>
  <div>
    Board

    <div v-if="loading">loading board...</div>
    <div v-else>
      <div>bid: {{ bid }}</div>
      <router-link :to="`/b/${bid}/c/1`">Card1</router-link>
      <router-link :to="`/b/${bid}/c/2`">Card2</router-link>
    </div>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {

    data(){
      return {
        bid: 0,
        loading: false
      }
    },

    //Board가 생성될 때 실행되는 훅이 Create
    created(){

      this.fetch();

      //$route 객체 로그로 찍어보자
      console.log("@@@route", this.$route);
      console.log("@@@bid", this.$route.params.bid);
    },

    methods: {
      //백엔드 API 호출 데이터 요청하는 메서드
      fetch(){
        this.loading = true;

        //백엔드 데이터 로딩 시뮬레이션
        setTimeout(()=>{
          //로그에서 확인할 수 있는 것처럼 this.$route 객체를 통해서 라우팅 정보를 받아낼 수 있다.
          this.bid = this.$route.params.bid;
          this.loading = false;
        }, 500)


      }
    }
  }
</script>

<style scoped>

</style>

~~~

Card.vue

~~~javascript
<template>
  <div>
    Card
    <div v-if="loading">loading card...</div>
    <div v-else>
      <div>cid: {{cid}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        cid: 0,
        loading: false
      }
    },
    /***/
    watch:{
      '$route': {
        handler : 'fetchData',
        immediate: true
      }
    },
    methods: {
      fetchData(){
        this.loading = true;
        setTimeout(()=>{
          this.cid = this.$route.params.cid;
          this.loading = false;
        },500)

      }
    }
  }
</script>

<style scoped>

</style>

~~~

라우터 변경에 따라 어떻게 데이터를 호출할 수 있는지 알아봤다.



# API 통신

## 14강 백엔드 API 살펴보기

spa에서는 데이터를 백엔드 서버로부터 가지고 온다. 서버의 역할은 데이터 베이스에 있는 데이터를 클라이언트에게 제공하는 것이다. htpp프로토콜을 이용한 api형태로 데이터를 제공한다.

이 예제에서는 `http://github.com/jeonghwan-kim/lecture-vue-trello-sever.git` 을 clone해 진행한다.

해당 repository를 clone을 npm intstall하고 `npm run dev` 로 서버를 구동하면 API Document를 확인할 수 있다. 

`curl localhost:3000/health` 등 명령어를 그대로 복사해 터미널에 입력하면 데이터를 얻어 올수 있고 -v 옵션을 줄 시 더 디테일한 정보를 얻어 올 수 있는데 화살표가 오른쪽으로 `>` 되어있는 것은 request 정보고 왼쪽 `<` 으로 되어 있는 것은 response 정보다.

_추가로 homebrew를 통해 jq(Litteweight and flexible command-line JSON processor)도 설치해보자_



## 15강 Ajax - XMLHttpRequest 객체

이전 강의에서는 api를 호출할 때 터미널 도구인 curl을 이용해 데이터를 요청했다.  그런데 trello 서비스에서 api를 쓰려면, 즉 브라우저단에서 api를 호출하려면 Javascript를 이용해 호출해야한다.

Javascript에는 XMLHttpRequeset라는 객체가 있는데 이것이 바로 http호출을 만들때 사용하는 객체이다. 이것을 이용해 Api를 호출해보자.

Home.vue

~~~javascript
<template>
  <div>
    <div>Home</div>
    <div>
      Board List :
      <div v-if="loading">Loading....</div>
      <div v-else>
        API result : {{apiRes}}
      </div>
      <ul>
        <li>
          <router-link to="/b/1">Board 1</router-link>
        </li>
        <li>
          <router-link to="/b/2">Board 2</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        apiRes: ''
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.loading = true;

        const req = new XMLHttpRequest();

        //@Param (method, address)
        req.open('GET', 'http://localhost:3000/health')

        //클라이언트에서 백엔드 서버로 요청을 날라간다.
        req.send();

        //요청이 완료되면 load 라는 이벤트가 발생한다.
        req.addEventListener('load', () => {
          this.loading = false;
          this.apiRes = {
            status: req.status,
            statusText: req.statusText,
            response: JSON.parse(req.response)
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
~~~

요청이 잘 갔는지 확인하려면 chrom 개발자 도구에서 Network 탭을 열고  XHR(XMLHttpRequest)로 필터를 걸고 보면 된다.

이번 강의에서는 순수 브라우저 Api 만 이용해서  http콜을 날려봤다. 보통은 브라우저별로 XHR객체가 지원되지 않을 수도 있다. 그래서 보통 Jquery의 ajax 함수 등을 사용한다. 라이브러리를 사용하면 조금 더 단순하게 http 콜을 만들 수 있다는 장점이 있다. 다음 강의에서는 vuejs에서 가장 많이 사용하는 axios라는 http라이브러리를 소개한다.



## 16강 Axios

Axios는 Promise 기반의 Http 클라이언트다. 브라우저에서도 쓸 수 있고 노드에서도 쓸 수 있다.

* XMLHttpRequest 객체를 만들어준다.
* Nodejs에서 Http 리퀘스트를 만들어준다.
* 프로미스 기반이라 간결하게 비동기 로직을 처리할 수 있다.
* 요청과 응답사이에 인어떤 로직을 넣을 수 있다(Intercept).
* 요청하거나 응답 받을 때 데이터를 전달하는 역할을 한다. 
* 요청을 취소할 수도 있다.
* 자동으로 JSON 데이터를 변환해준다.

대부분의 브라우저에서 지원한다.

설치 `npm install axios`





## 17강 보드 조회 API 연동

## 18강 Axios 실전에서 사용하기





