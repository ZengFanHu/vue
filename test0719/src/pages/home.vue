<template>
    <div>
        <MyHome>
          <input type="text" slot="search">
          <img src="../assets/images/ic_create_group_chat_blue.png" alt="" slot="right" class="rightImg">
        </MyHome>
        <Banner>
            <div slot="slide" class="swiper-slide">
              <img src="../assets/images/banner/01.jpg" alt="">
            </div>
            <div slot="slide" class="swiper-slide">
              <img src="../assets/images/banner/02.jpg" alt="">
            </div>
            <div slot="slide" class="swiper-slide">
              <img src="../assets/images/banner/03.jpg" alt="">
            </div>
        </Banner>
    </div>
</template>

<script>

  import MyHome from '../components/headers';
  import Banner from '../components/banner'
  export default {
    components:{
      MyHome,Banner
    }
  }

</script>

<style scoped>

</style>
