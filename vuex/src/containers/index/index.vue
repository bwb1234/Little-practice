<template>
    <div class="wrap">
        <span @click="add" class="a1">+</span>
        <span class="sp_1">{{num}}</span>
        <span @click="next" class="a2">-</span>
        <p  class="box" ref="main"><b>总价:</b>{{price}}元</p>
        <div class="msg" >{{msg}}</div>
      
        <input class="input" type="text"  v-model="message"/>
        <div>{{message}}</div>
    </div>
</template>
<script>
import store from "../../store";
export default {
  name: "index",
  data(){
    return{
       msg:"hello",
       message:''
    }
  },
  mounted() {
    console.log(bus,'00')
    //  console.log(this.$refs.main)
    //state仓库  console.log(this.$store.state.count);
   // getters属性  console.log(store.getters.doneTodosCount)
   
    console.log(this.$store)
   //
  },

  //计算属性求值
  computed: {
    num() {
      return this.$store.state.count;
     
    },
    price(){
     return this.$store.state.allprice
    }
  
  },
  //提交点击事件或方法
  methods: {
    add() {
       //mutations直接提交
      // store.commit("add");
      //通过action提交
       store.dispatch('ADD')
       
      //总价
     store.dispatch('increment')
    },
  
    next() {
       //mutations直接提交
      // store.commit("prev");
       //通过action提交
       store.dispatch('PREV')
       //总价
     store.dispatch('increment')
    }
    
  }
};
</script>
<style>
.wrap{
  font-size: 21px;
  margin-left: 20px;
  margin-top: 20px;
}
.sp_1{
  font-size: 26px;
}
.box{
  font-size: 21px;
  margin-top: 20px;
  margin-left: 20px;
}
.a1{
  margin-right: 12px;
}
.a2{
   margin-left: 12px;
}
.msg{
  margin-top: 60px;
}
.input{
  border:none;
  border:1px solid #ccc;
}
</style>
