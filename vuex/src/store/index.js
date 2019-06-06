import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    price:30,
    list:[{
      name:"张三",
      age:24
    },{
      name:"李四",
      age:26
    },{
      name:"王五",
      age:28
    }],
    allprice:0
  },
  //改变状态
  mutations: {
    add(state) {
      state.count++;
    },
    prev(state) {
      if (state.count > 0) {
        state.count--;
      }
    },
    allprice(state){
    state.allprice=state.count*state.price
    }
  },
  //代替computed做一些重复计算操作,然后做到全局共享
  getters: {
      todo: (state, getters) => {
        state.list.filter((val,index)=>val.age>25)
    }
  },
  //1.提交mutations,2.做异步操作
  actions: {
    increment({ commit }) {
      commit('allprice')
      
      // setTimeout(() => {
      //   commit('allprice')
      // }, 1000)
     
     
    },
    ADD({ commit }){
      commit('add')
    
    },
    PREV({ commit }){
      commit('prev')
    }
  }
});
export default store;
