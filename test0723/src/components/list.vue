<template>
  <div>
      <Home :arr="arr">
      </Home>
  </div>
</template>

<script>
  import axios from 'axios'
  import Home from '../pages/home'
  export default {
    components: {
      Home
    },
    data() {
      return {
        arr: []
      }
    },
    created() {
      var that = this;
      axios.get('../../static/shoplist.json').then(function (res) {
        // console.log(res)
        that.arr = res.data.data.goodsList;
        // console.log(that.arr)
      })
    }
  }
</script>

<style scoped>

</style>






















