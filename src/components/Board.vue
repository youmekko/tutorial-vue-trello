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
