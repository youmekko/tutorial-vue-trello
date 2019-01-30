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
