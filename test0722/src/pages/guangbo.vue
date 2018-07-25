<template>
  <div>
      <MyGbo title="广播" class="bj">
        <img src="../assets/images/ic_status_search_user.png" alt="" slot="left" class="leftImg">
        <img src="../assets/images/ic_create_group_chat_blue.png" alt="" slot="right" class="rightImg">
      </MyGbo>
      <div class="nav">
        <span :class="{green:nowIndex==0}" @click="nowIndex=0"><router-link to="/guangbo/film">电影</router-link></span>
        <span :class="{green:nowIndex==1}" @click="nowIndex=1"><router-link to="/guangbo/read">读书</router-link></span>
        <span :class="{green:nowIndex==2}" @click="nowIndex=2"><router-link to="/guangbo/tv">电视</router-link></span>
        <span :class="{green:nowIndex==3}" @click="nowIndex=3"><router-link to="/guangbo/city">城市</router-link></span>
        <span :class="{green:nowIndex==4}" @click="nowIndex=4"><router-link to="/guangbo/music">音乐</router-link></span>
      </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import MyGbo from '../components/headers'
  export default {
    components:{
      MyGbo
    },
    data(){
      return{
        nowIndex:0
      }
    }
  }
</script>

<style scoped>
  .nav{
    display: flex;
  }
  .nav span{
    flex: 1;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .nav a{
    text-decoration: none;
    color:#999;
  }
  .green{
    border-bottom: 1px solid green;
  }
  .bj{
    background-color: white;
  }
</style>
