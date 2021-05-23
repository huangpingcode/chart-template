<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['token'])
    },
    created () {
        if (!this.token && this.$route.name !== 'Login') {
            this.$router.push('/login')
        }
    }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
