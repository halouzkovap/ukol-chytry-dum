import React,{useState} from 'react'
import './style.css';
import Light from '../Light';

const Lights=(props)=>{
    return(
      <div className="lights">
      {props.lights.map(light=><Light name={light.name} state={light.state}/>)}
      </div>
    )
}

export default Lights;