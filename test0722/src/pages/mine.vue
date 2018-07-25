<template>
  <div>
    <Myheader title="我的" class="bj">
      <img src="../assets/images/ic_settings.png" alt="" slot="right" class="rightImg">
    </Myheader>
  </div>
</template>

<script>
  import Myheader from '../components/headers'
  export default {
    name: "home",
    components:{
      Myheader
    }
  }
</script>

<style scoped>
    .bj{
      background-color: white;
    }
</style>
