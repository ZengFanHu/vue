<template>
    <div class="bigBox">
        <img src="../assets/img/yingyang.jpg" alt="">
        <div class="list" v-for="item in arr">
          <router-link :to="{name:'Xiangqing',query:{id:item.goodsId}}">
          <img :src="item.goodsImage" alt="">
            <p>{{item.goodsTitle}}</p>
            <span>￥{{item.price}}</span>
          </router-link>
        </div>
    </div>
</template>

<script>

export default{
  name:'home',
  props:["arr"],
}

</script>

<style scoped>
  .bigBox{
    width: 100%;
    height: 100%;
  }
  .bigBox img{
    width: 100%;
  }

  .list{
    width: 48%;
    float:left;
  }
  .list img{
    width: 100%;
  }
  .list p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.24rem;
    padding:0 10px;
  }
  .list span{
    color:red;
    padding:0 10px;
  }
</style>














