<template>
      <div >
        <Detail :mbPrice="newProduct.memberPrice"
                :mkPrice="newProduct.marketPrice"
                :pdName="newProduct.productName"
                :slCount="newProduct.sellCount"
                :urlImg="newProduct.shareImage">
        </Detail>
    </div>
</template>

<script>
  import Detail from '../pages/detail'
  export default {
    name: "newcompile",
    components: {
      Detail
    },
    data() {
      return {
        newProduct: {}
      }
    },
    created(){
      var item=eval("("+this.$route.query.test+")");
      this.newProduct=item;
    }
  }
</script>

<style scoped>

</style>
