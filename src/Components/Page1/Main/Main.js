import React from 'react';
import './Main1.css';
import Element from '../Card/Card';
import {Button} from 'react-bootstrap';

const Main=()=>{
     return(
         <div className="main">
            <div className="left"> 
              <label>Master Your Destiny</label>
              <br/>
              <label className="label2">With CodeSaga</label>
              <br/>
              <button variant="dark" className="bttn">View Samples</button>
             </div>
             <div className="right">
               <Element/>   
             </div> 
         </div>
     )   
}

export default Main