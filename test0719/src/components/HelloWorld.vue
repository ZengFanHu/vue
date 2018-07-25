<template>
  <div class="tabbarWarp">
      <!--3.调用组件名-->
      <Item txt="首页" mark="home" :select="msg" @change="getVal">
        <img src="../assets/images/ic_tab_home_normal.png" alt="" slot="normalImg">
        <img src="../assets/images/ic_tab_home_active.png" alt="" slot="activeImg">
      </Item>
      <Item txt="书影音" mark="broadcast" :select="msg" @change="getVal">
        <img src="../assets/images/ic_tab_subject_normal.png" alt="" slot="normalImg">
        <img src="../assets/images/ic_tab_subject_active.png" alt="" slot="activeImg">
      </Item>
      <Item txt="广播" mark="guangbo" :select="msg" @change="getVal">
        <img src="../assets/images/ic_tab_status_normal.png" alt="" slot="normalImg">
        <img src="../assets/images/ic_tab_status_active.png" alt="" slot="activeImg">
      </Item>
      <Item txt="小组" mark="group" :select="msg" @change="getVal">
        <img src="../assets/images/ic_tab_group_normal.png" alt="" slot="normalImg">
        <img src="../assets/images/ic_tab_group_active.png" alt="" slot="activeImg">
      </Item>
      <Item txt="我的" mark="mine" :select="msg" @change="getVal">
        <img src="../assets/images/ic_tab_profile_normal.png" alt="" slot="normalImg">
        <img src="../assets/images/ic_tab_profile_active.png" alt="" slot="activeImg">
      </Item>
  </div>
</template>

<script>
  //1.导入item Item 自定义的组件名
  import Item from './item'
  export default {
  name: 'HelloWorld',
  //2.注册组件名
  components:{
      Item
  },
  data(){
      return {
          //记录被选中的值
          msg:'home'
      }
  },
  methods:{
      getVal(val){
          // console.log("传过来的值"+val);
          this.msg=val;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tabbarWarp{
      width: 100%;
      position: fixed;
      bottom: 0;
      border-top: 1px solid #ccc;

    }
</style>
