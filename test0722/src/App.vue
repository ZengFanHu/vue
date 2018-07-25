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
  *{
    margin:0;
    pdiing:0;
  }

</style>
