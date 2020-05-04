import React from 'react';
import './Main.css';
import Options from '../Options/Options';
import {connect} from 'react-redux';

class Main extends React.Component{
    
    render(){
       let title=['Question Library','Video Simplification','Optimap Time & Space Complexity AnaLysis','Hands On Learning','Dedicated Teaching Assistant Support','Solutions In All Programming Languages']; 
       let data=['We have Compiled 100 questions after intense research amongst recruiters and developers in leading companies for your coding interview preparations',
                 'Each Question contains video explanation that are designed to enhance your learning experience by creating a visual representation of the concepts in action as well as the code behind it',
                 'Space Time Complexity is integral part of a Coding Interview. The recruiter might ask the complexity or ask to further simplify the solution.We have got you covered with holistic overview on each way a question may be asked',
                 'Providing you with Hands on experience with an exclusive IDE to code the solutions and run them against industry level test cases.Every time you practice, your are a step closer to your dream job',
                 'A good mentor is all you need to climb the ladders of success. We have got them for you available 24*7 to guide you and make the journey fun',
                 'There is no language barrier when it comes to coding. We have got you covered with all major programming languages' 
    ];   
        return(
            <div className="Main">
                <div className="Left">
                   <Options id={0} title={title[0]} body={data[0]}/>
                   <Options id={1} title={title[1]} body={data[1]}/>
                   <Options id={2} title={title[2]} body={data[2]}/>
                   <Options id={3} title={title[3]} body={data[3]}/>
                   <Options id={4} title={title[4]} body={data[4]}/>
                   <Options id={5} title={title[5]} body={data[5]}/>
                </div>
                <div className="images">
                    <img src={this.props.src}/>
                </div>
            </div>
        )
    }
}

const MapStateToProps=state=>{
    return{
        src:state.source
    }
}

export default connect(MapStateToProps)(Main);