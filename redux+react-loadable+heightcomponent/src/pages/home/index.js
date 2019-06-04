import React, { Component } from 'react'
import './index.css'
import * as action from '../../redux/action/action';
import {connect} from 'react-redux';




const createstate=(state)=>{
  return state.mockreducer
}
const createdispatch=(dispatch)=>{
 return {
   update(data){
     dispatch(action.update(data));
     
   },
   add(index){
    dispatch(
      action.ADD(index)
     )
    
    
   },
   prev(index){
     dispatch(action.PREV(index))
   },
   all(){
     dispatch(action.ALL())

     
   
   }
 
   
 }
}


@connect(createstate,createdispatch)

 class  Home extends Component {
  constructor(props){
    super(props)
    this.state={
    
    }
  }

  addshop(index){
    const {add,all}=this.props;
   
   
    add(index)
    
    all()
    
  }
  prevshop(index){
     const {prev,all}=this.props;

     prev(index)
     all()
     

  }
  render() {
    const { list ,allprice} = this.props;
  
    

    return (
     
      <div>
         {
           list.length&&list.map((val,index)=>{
             return <p key={index}>
              <span className="btn" >{val.name}</span>
                <span onClick={()=>[
                this.addshop(index,val.price)
              ]}>+</span>
                <span>{val.num}</span>
                <span onClick={()=>{
                  this.prevshop(index)
                }}>-</span>
              <span>{val.price}</span>
             </p>
           })
         }
         <p >总价： <span>{allprice}</span> </p>
      </div>
    )
  }

  
 
}



export default Home


