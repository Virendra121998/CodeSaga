import React from 'react';
import './Header1.css';
import {Button} from 'react-bootstrap';

const Header1=()=>{
 return(
  <div>
  <div class="nav">
     <div className="block"> 
       <label className="l1">code saga</label>
       
     </div>
     <div className="options">
         <label className="left">Question Library</label>
         <label className="left">DS Foundation</label>
         <label className="left">Community</label>
         <label className="left">Subscribe</label>
         <button className="boot">Login</button>
     </div>
     
  </div>
  <label className="l2">An IOSD INITIATIVE</label>
  </div>
 ) 
}

export default Header1;