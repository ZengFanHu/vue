<template>
    <div>
      <div class="newspb">
        <div class="newsLeft">
          <h3>{{title}}</h3>
          <p>{{des}}</p>
        </div>
        <div class="newsRight">
          <slot name="img"></slot>
        </div>
      </div>
      <p>{{author}}</p>
    </div>
</template>

<script>
    export default {
        name: "xinwen",
        props:['title','des','author']
    }
</script>

<style scoped>

.newsLeft{
  float: left;
  width: 60%;
}
  .newsRight{
    float: right;
    width: 40%;
  }
  .newsRight img{
    width:100%;
  }
</style>










