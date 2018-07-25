<template>
    <div>
      <div >
      <input type="text" v-model="product.productName">
      <input type="text" v-model="product.sellPrice">
      <input type="text" v-model="product.sellCount">
      <input type="text" v-model="product.memberPrice">
      <input type="text" v-model="product.marketPrice">
      </div>
      <textarea cols="50">
        {{product.productName}}
        {{product.sellPrice}}
        {{product.sellCount}}
        {{product.memberPrice}}
        {{product.marketPrice}}
      </textarea>
      <button @click="fn()">确定</button>
    </div>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "compile",
        data(){
          return{
            product:{}
          }
        },
      methods:{
        fn(){
          var thisProduct=JSON.stringify(this.product);
          this.$router.push({
            path:'/newcompile',
            query:{
              test:thisProduct
            }
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
    input{
      width: 48%;
    }
</style>
