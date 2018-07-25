<template>
  <div class="itemWarp" @click="fn()">
    <span v-show="bol"><slot name="normalImg"></slot></span>
    <span v-show="!bol"><slot name="activeImg"></slot></span>
    <p :class="{active:!bol}">{{txt}}</p>
  </div>
</template>

<script>
  export default {
    name: "item",
    props:['txt','mark','select'],
    data(){
      return{
      }
    },
    computed:{
      bol:function () {
        if (this.mark==this.select){
          return false
        }
        return true
      }
    },
    methods:{
      fn:function () {
        this.$emit('change',this.mark);
        this.$router.push('/'+this.mark);
      }
    }
  }
</script>

<style scoped>
  .itemWarp{
    width: 20%;
    float: left;
    text-align: center;
    background: white;
  }
  .itemWarp img{
    width: 27px;
  }
  .itemWarp p{
    font-size: 14px;
    margin:0;
  }
  .itemWarp .active{
    color:#42bd56
  }
</style>
