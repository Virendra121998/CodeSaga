import React from 'react';
import './Footer.css';

const Footer=()=>{
    return(
        <div className="footer">
           <img id="img1" src={require('../../../Logo/adobe.png') }/>
           <img id="img2" src={require('../../../Logo/amazon.png') }/>
           <img id="img3" src={require('../../../Logo/Google.png') }/>
           <img id="img4" src={require('../../../Logo/microsoft.png') }/>
           <img id="img5"src={require('../../../Logo/flipkart.png') }/>
           <img id="img6" src={require('../../../Logo/paytm.png') }/>
        </div>
    )
}

export default Footer;