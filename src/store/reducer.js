import Image from './Img';

const initialState={
    source:'https://codesaga.io/static/media/img1.f661a97d.png',
     images:['https://codesaga.io/static/media/img1.f661a97d.png',
     Image,
     'https://codesaga.io/static/media/img3.ff3b4a67.png',
     'https://codesaga.io/static/media/img4.3f414a1e.png',
     'https://codesaga.io/static/media/img5.1c9f720e.png',
     'https://codesaga.io/static/media/img6.fd89e4ac.png', 
   ],
   show:[false,false,false,false,false,false], 
   Id:0
}

const reducer=(state=initialState,action)=>{
    if(action.type==='MOUSEENTER')
    {  const newshow=[...state.show]
       newshow[action.index]=true;
       if(action.index!==state.Id)
        newshow[state.Id]=false  
       return{
        ...state, 
         show:newshow,
         Id:action.index,
         source:  state.images[action.index]
     }
    }
    return state 
}

export default reducer