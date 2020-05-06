import React,{useEffect} from 'react';
import {Card,Button} from 'react-bootstrap';
import './Card.css';
import * as Images from '../Image';
import {CSSTransition} from 'react-transition-group';
class Element extends React.Component{
   state={
     card1:['Highly Qualified Experts','Question Library','The Perfect PlayGround'],
     card2:['Highly Qualified Experts from Leading Tech Giants','100 Handpicked Questions For Coding Interviews In Leading Companies','The Perfect PlayGround To Practice Your Coding Interview Questions']
     ,showCard:true,
     id:0,
     image:[Images.Image1,Images.Image2,Images.Image3]
   }
   changeCard=(index)=>{
       if(index<2)
        index=index+1;
       else
        index=0;
       this.setState({...this.state,showCard:true,id:index}) 
   }

   render(){    
     return(
      <CSSTransition
        in={this.state.showCard}
        timeout={2000}
        appear
        classNames="disp1"
        onEntering={()=>setTimeout(()=>{this.setState({showCard:false})},1000)}
        onExiting={()=>setTimeout(()=>{this.changeCard(this.state.id)},1000)}
      > 
        <div className="disp"> 
        <Card className="card1">
          <Card.Img variant="top" src={this.state.image[this.state.id]} />
          <Card.Text className="text1">{this.state.card1[this.state.id]}</Card.Text> 
         </Card>
         <Card className="card2">
           <Card.Body>
               <Card.Text className="text2">
                  {this.state.card2[this.state.id]}
               </Card.Text>
           </Card.Body>
        </Card>
        </div>
      </CSSTransition>  
        
      
    )
 }
}
export default Element;