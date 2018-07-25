<template>

    <div>
        <p>{{product.author}}</p>
        <p>{{product.des}}</p>
        <p>{{product.title}}</p>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "xiangqing",
        data(){
          return{
            product:[]
          }
        },
      created(){
        var NewId=this.$route.params.id;
        // console.log(NewId)
        var that=this;
        axios.get('../../static/newslist.json').then(function (res) {
          // console.log(res.data);
            for(var i=0;i<res.data.length;i++){
              var item=res.data[i];
              if (NewId==item.id){
                that.product=item;
              }
            }
        })
      },

    }

</script>

<style scoped>

</style>










