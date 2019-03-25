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
