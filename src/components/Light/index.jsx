import React,{useState} from 'react'
import './style.css';


const Light=(props)=>{
    const [svetlo, setSvetlo] = useState(Boolean(props.state));
    
    return(
      <div className="light" onClick={()=>setSvetlo(!Boolean(svetlo))}>
  
        <div className="light__icon">
          {svetlo ? <img src="/assets/light-on.svg" alt="poster" className="img"/>  :  <img src="/assets/light-off.svg" alt="poster" className="img"/>}
        </div>
     
       <div className="light__name" >
            {props.name}
      </div>
    
      </div>
    )
}

export default Light;