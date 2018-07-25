

<template>
  <div class="bannerWarp">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <slot name="slide"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import '../assets/js/swiper'
  export default {
    name: "banner",
    mounted(){
      new Swiper('.swiper-container',{
        direction:'horizontal',
        loop:true,
        autoplay:2000,
      })
    }
  }
</script>
<style scoped>
  @import '../assets/css/swiper.css';
  .bannerWarp img{
    width: 100%;
  }
</style>
