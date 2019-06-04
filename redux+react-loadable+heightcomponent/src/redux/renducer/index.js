const defaultlist={
    list:[{
        name:"苹果",
        price:30,
        id:0,
        num:0
    },
    {
        name:"梨子",
        price:20,
        id:1,
        num:0
    }],
    allprice:0
}

const mockreducer=(state=defaultlist,action)=>{
    const {type,payload}=action;     
    const {list,allprice}=state
    switch(type){
        case "UPDATE":
        return {...state,payload};
          
       
        case "ADD": 
        var n=list.map((val,index)=>{
            if(index==payload){
                ++val.num
            }
      })
         return  {...state,n};


         case "PREV":   
        var n=list.map((val,index)=>{
                if(index==payload){
                   if(val.num>0){
                    val.num--
                   }
                }
          })
         return  {...state,n};
         case "ALL":
            var a=0
             list.map((val,index)=>{
                a+=val.num*val.price
             })
             
            
              return {...state,allprice:a}
            
       
        default:
        return state;

    }

}

export default mockreducer