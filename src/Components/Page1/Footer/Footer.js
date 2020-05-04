import React from 'react';
import './Footer.css';

const Footer=()=>{
    return(
        <div className="footer">
           <img src={require('../../../Logo/adobe.png') }/>
           <img src={require('../../../Logo/amazon.png') }/>
           <img src={require('../../../Logo/Google.png') }/>
           <img src={require('../../../Logo/microsoft.png') }/>
           <img src={require('../../../Logo/flipkart.png') }/>
           <img src={require('../../../Logo/paytm.png') }/>
        </div>
    )
}

export default Footer;