import React from 'react';
import {Card,Button} from 'react-bootstrap';
import './Card.css';
import Image from '../Image';
const Element  = ()=>{
    return(
        <div className="disp"> 
        <Card className="card1">
          <Card.Img variant="top" src={Image} />
          <Card.Text className="text1">Highly Qualified Experts</Card.Text> 
         </Card>
         <Card className="card2">
           <Card.Body>
               <Card.Text className="text2">
                  Highly Qualified Experts from Leading Tech Giants
               </Card.Text>
               
           </Card.Body>
        </Card>
        </div>
    )
}

export default Element;