  <template>
      <div class="itemWarp" @click="fn()">
          <span v-show="bol"><slot name="normalImg"></slot></span>
          <span v-show="!bol"><slot name="activeImg"></slot></span>
          <p :class="{active:!bol}">{{txt}}</p>
      </div>
  </template>

  <script>
      export default {
          name: "item",
          props:['txt','mark','select'],
          data(){
              return{
                // bol:false
              }
          },
          //计算属性的一个配置项  用来定义需要通过简单的逻辑判断之后才能确定的值
          computed:{
              bol:function () {
                  // return false;
                  // return true;
                  // console.log("计算之后："+this.mark)
                  // console.log("计算之后："+this.select)
                  if (this.mark==this.select){
                      return false
                  }
                  return true
              }
          },
        //1.需要给每一个item一个唯一标识符
        //2.在父组件里去定义一个我当前被选中的值
        //作比较
          methods:{
              fn:function () {
                // console.log(this.mark)
                // console.log(this.select)
                this.$emit('change',this.mark);
                this.$router.push('/'+this.mark);
              }
          }
      }
  </script>

  <style scoped>
      .itemWarp{
        width: 20%;
        float: left;
        text-align: center;
      }
      .itemWarp img{
        width: 27px;
      }
      .itemWarp p{
        font-size: 14px;
        margin:0;
      }
      .itemWarp .active{
        color:#42bd56
      }
  </style>
