import React,{useState} from 'react';
import {Collapse} from 'react-collapse';
import {connect} from 'react-redux';
import './Options.css';
import * as actionTypes from '../../../store/action';

const Options=(props)=>{
      
      return (
          <div className="menu" onMouseEnter={()=>props.mouseEnter(props.id)} >  
            <label>{props.title}</label>
      <Collapse isOpened={props.open[props.id]}><div className="items">{props.body}</div></Collapse> 
          </div>
    );
   }



 
 const MapStateToProps=state=>{
    return{
      open:state.show
    };
 };

 const MapDispatchToProps=dispatch=>{
   return{
     mouseEnter:(id)=>dispatch(actionTypes.MouseEnter(id))
   }
 }

 export default connect(MapStateToProps,MapDispatchToProps)(Options);
