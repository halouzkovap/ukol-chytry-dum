import React,{useState} from 'react'
import './style.css';


const Blinds=(props)=>{
    let isOpen;
console.log(props.state)
    props.state=='open'?isOpen=true:isOpen=false;
    console.log(isOpen)
    
    const [open,setOpen]=useState(isOpen);
    return(
           <div className="blinds">
				<div className="blinds__icon">
                   {open? <img src="/assets/blinds-open.svg"/> : <img src="/assets/blinds-closed.svg"/>}
				</div>
				<div className="blinds__name">
					Žaluzie
				</div>
				<div className="blinds__controls">
					<button className="button button--active" onClick={()=>setOpen(true)}>Otevřeno</button>
					<button className="button" onClick={()=>setOpen(false)}>Zavřeno</button>
				</div>
			</div>
    )
}

export default Blinds;