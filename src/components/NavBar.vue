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
