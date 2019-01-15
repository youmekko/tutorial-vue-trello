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
