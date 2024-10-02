import React from 'react'
import imgAngle from '../assets/imgangle.png'
import './style.css'
import { useState } from 'react'

const Index = () => {

  const [widhMatState,setWidthMat]=useState(7)
  const [heightState,setheightState]=useState(40)
  const [widthState,setwidhState]=useState(35)
  
  
const widthMat=(e)=>{
  setWidthMat(e.target.value)

}
const height=(e)=>{
  setheightState(e.target.value)


}
const width=(e)=>{
  setwidhState(e.target.value)



}

const Hipo=Math.sqrt(Math.pow(widthState,2)+Math.pow(heightState,2))
const AngleA=Math.atan(heightState/widthState)*(180/Math.PI)
const AngleB=Math.asin(widhMatState/Hipo)*(180/Math.PI)
const AngleC=(AngleA+AngleB).toFixed(2)
//AngleD=const HipoAngle=AngleC-180
const AngleD=(360-AngleC*2)/2
const LargeA=Math.sin(AngleA*Math.PI/180)
const LargeB=(Math.sin((180-AngleC)*Math.PI/180))/Hipo
const Large=(LargeA/LargeB).toFixed(2)

//((Math.sin(AngleA)*(180/Math.PI))/(Math.sin(Hipo)*(180/Math.PI))/AngleD)

const consologuear=()=>{
  console.log(LargeB)
}

  return (
    <div className='index'>
 
    <div className='imgContainer'>  <img src={imgAngle}/>
 
    {AngleC?<p className='AngleC'>{AngleC}°</p>:<p></p>}
    {AngleD?<p className='AngleD'>{AngleD}°</p>:<p></p>}
    {Large?<p className='Large'>{Large}</p>:<p></p>}
    {widhMatState?<p className='widhMatState'>{widhMatState}</p>:<p></p>}
    
    </div>
  
  <div className='inputs'>
  <p>ancho del material</p><input type='number' onChange={widthMat}></input>
 <p>alto</p><input type='number'onChange={height}></input>
 <p>ancho</p><input type='number' onChange={width}></input>
  <p><button onClick={consologuear}>Calcular</button></p></div>
  </div>

  )
}

export default Index
