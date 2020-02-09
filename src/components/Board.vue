<template>
  <div>
    Board

    <div v-if="loading">loading board...</div>
    <div v-else>
      <div>bid: {{ bid }}</div>
      <pre>{{ board }}</pre>
      <router-link :to="`/b/${bid}/c/1`">Card1</router-link>
      <router-link :to="`/b/${bid}/c/2`">Card2</router-link>
    </div>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {

    data(){
      return {
        bid: 0,
        loading: false
      }
    },
    computed: {
      ...mapState({
        board : 'board'
      })
    },
    //Board가 생성될 때 실행되는 훅이 Create
    created(){

      this.fetch();

      //$route 객체 로그로 찍어보자
      console.log("@@@route", this.$route);
      console.log("@@@bid", this.$route.params.bid);
    },

    methods: {
      ...mapActions([
        'FETCH_BOARD'
      ]),
      //백엔드 API 호출 데이터 요청하는 메서드
      fetch(){
        this.loading = true;

        this.FETCH_BOARD({ id : this.$route.params.bid })
          .then(() => this.loading = false)
      }
    }
  }
</script>

<style scoped>

</style>
