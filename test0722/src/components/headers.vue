<template>
    <div class="headerWarp">
        <p>{{title}}</p>
        <slot name="search"></slot>
        <slot name="left"></slot>
        <slot name="right"></slot>
    </div>
</template>

<script>

  export default {
    props:['title','bol']
  }
</script>

<style scoped>
  .headerWarp{
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    text-align: center;
    position: relative;
    top:0;
    background: green;
  }
  .headerWarp img{
    width: 20px;
    position: absolute;
  }
  .headerWarp .rightImg{
    top:10px;
    right:10px;
  }
  .headerWarp .leftImg{
    top:10px;
    right:50px;
  }
</style>
