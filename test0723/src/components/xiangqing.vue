<template>
    <div>
      <button @click="editClick(product.producId)">编辑</button>
      <Detail :mbPrice="product.memberPrice"
              :mkPrice="product.marketPrice"
              :pdName="product.productName"
              :slCount="product.sellCount"
              :urlImg="product.shareImage">
      </Detail>
      {{this.$route.query.id}}
    </div>
</template>

<script>
  import Detail from '../pages/detail'
  import axios from 'axios'
    export default {
        name: "xiangqing",
        components:{
          Detail
        },
        data(){
          return{
            product:{}
          }
        },
        methods:{
            editClick(id){
              // alert();
              this.$router.push({
                name:'compile',
                query:id
              })
            }
        },
      created(){
        var goodsId=this.$route.query.id;
        var that = this;
        axios.get('../../static/shopdetail.json').then(function (res) {
          console.log(res)
          var item=eval("("+res.data+")");
          that.product=item.data;
          // console.log(that.arr)
        })
      }
    }
</script>

<style scoped>

</style>
