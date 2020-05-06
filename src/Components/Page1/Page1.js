import React from 'react';
import Header from './Header/Header1';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import './Page1.css';

const Page1=()=>{
    return(
        <div className="page1">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Page1;