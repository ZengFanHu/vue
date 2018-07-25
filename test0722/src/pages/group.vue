<template>
  <div>
    <MyGroup title="小组" class="bj">
      <img src="../assets/images/ic_group_search.png" alt="" slot="left" class="leftImg">
      <img src="../assets/images/ic_create_group_chat_blue.png" alt="" slot="right" class="rightImg">
    </MyGroup>
  </div>
</template>

<script>
  import MyGroup from '../components/headers'
  export default {
    components:{
      MyGroup
    }
  }
</script>

<style scoped>
    .bj{
      background-color: white;
    }
</style>
