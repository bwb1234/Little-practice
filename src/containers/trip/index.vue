<template>
    <div class="wrap">
      <Header :msg="msg"/>
      <dropdown   @parent='parent'/>
	  
	     <div class="box">
			   <div v-for="(val,index) in list" >
		       <div v-for="item in val.hot" >
					   <div v-for="value in item.all"  class="ul">
							 	 	<dt> <img class="pic" :src="value.img" alt=""></dt>
			    <dd>
					<p>
						<span class="span">{{value.title}}</span>
						<span class="bg">{{value.ad}}</span>
					</p>
						<p class="got">
							<span class="hot">{{value.out}}</span>
							<span class="hot2">{{value.mt}}</span>
						</p>
						<p class="font">
							<span class="color">{{value.num}}</span>
							<span class="pjia">{{value.tank}}</span>
							<span class="font1">
								￥
								<b class="size">{{value.price}}</b>
								起
							</span>
						</p>
						<p class="mt">
							<span>{{value.nm}}</span>
							<span>{{value.kt}}</span>
						</p>
				</dd>
						 </div>
					 </div>
		        </div>

		 </div>
		</div>
	
   
</template>
<script>
import Header from '../../components/header/header'
import dropdown from '../../components/dropdown/index'

import axios from 'axios'
import utils from '../../utils/utils'
export default {
  name: "trip",
  data(){
    return{
      msg:"全部景点",
      list:[]
    }
  },
  components:{
    Header,
    dropdown
	},

  mounted(){
	  utils('/api').then(res=>{
    
    console.log(res,'asd')
		  this.list=res
			})
		},
	methods:{
	 	parent(title,mk){
			 console.log(title,'11')
			  console.log(mk,'22')
		
	    
    
	}, 
	}
};
</script>
<style>
@import url("../../common/css/index.css");
.ul{
	display: flex;
	 padding: 14px 0;
	 border-bottom: 1px solid #ccc;
	 padding-left: 14px;
	
	
}
.ul dd{
	margin-left: 18px;
}


</style>

