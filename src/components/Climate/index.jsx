import React,{useState} from 'react'
import './style.css';

const Climate=(props)=>{
    const [teplota, setTeplota]=useState(props.temperature)
    return(
        <div className="climate">
        <div className="climate__icon">
					<img src="/assets/temp.svg"/>
		</div>
        <div className="climate__content">
            <div className="climate__temperature"> {teplota}&deg;C</div>
			<div className="climate__humidity">Vlhost vzduchu {props.humidity}&nbsp;%</div>
        </div>
        
        <div className="climate__controls">
            <button className="button" onClick={()=>setTeplota(teplota+1)}>+</button>
            <button className="button" onClick={()=>setTeplota(teplota-1)}>-</button>
        </div>
        </div>
    )
}

export default Climate;