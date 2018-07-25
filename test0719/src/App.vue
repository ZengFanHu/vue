<template>
  <div id="app">
    <Tabbar></Tabbar>
    <router-view/>
  </div>
</template>

<script>
  import Tabbar from'./components/HelloWorld'
export default {
  name: 'App',
  components:{
    Tabbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
