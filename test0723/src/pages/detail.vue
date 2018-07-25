<template>
    <div>
      <div><img :src="urlImg" alt=""></div>
        <span class="sp1">￥{{mbPrice}}</span>
        <span class="sp2">市场价：{{mkPrice}}</span>
        <p>{{pdName}}</p>
        <span>剩余库存：{{slCount}}</span>
        <span>快递：限时包邮</span>
    </div>
</template>

<script>
    export default {
        name: "detail",
      props:['mbPrice','mkPrice','pdName','slCount','urlImg']
    }
</script>

<style scoped>
img{
  width: 100%;
}
  .sp1{
    font-size: 2.5rem;
    color:red;
  }
  .sp2{
    font-size: 1.5rem;
    text-decoration:line-through;
    color: grey;
  }
  p{
    font-size:2.0rem ;
  }
</style>
