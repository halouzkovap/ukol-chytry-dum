import React,{useState} from 'react'
import './style.css';
import Lights from '../Lights';
import Binds from '../Blinds';
import Energy from '../Energy';
import Climate from '../Climate';

const Dashbord=({data})=>{
    return(
        <main className="dashboard">
        <Lights lights={data.lights} />
        <Climate temperature={data.climate.temperature} humidity={data.climate.humidity}/>
        <Binds state={data.blinds}/>
        <Energy energy={data.energyConsumption.electricity} water={data.energyConsumption.water} />
        </main>
    )
}

export default Dashbord;