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
      <div>
        <ul>
          <li v-for="item in arr">
            <router-link :to="{name:'xiangqing',params:{id:item.id}}">
              <Xinwen :title="item.title" :des="item.des" :author="item.author">
                <img :src="item.src" alt="" slot="img">
              </Xinwen>
            </router-link>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
  import axios from "axios";
  import Xinwen from '../components/xinwen';
  import MyHome from '../components/headers';
  import Banner from '../components/banner';
  export default {
    components:{
      MyHome,Banner,Xinwen
    },
    data(){
      return{
        arr:[]
      }
    },
    created(){
      var that=this;
      axios.get('../../static/newslist.json').then(function (res) {
        // console.log(res.data);
        that.arr=res.data;
        // console.log(that.arr);
      })
    }
  };


</script>

<style scoped>
li{
  list-style: none;
}

  *{
    margin: 0;
    padding:0;
  }
</style>
