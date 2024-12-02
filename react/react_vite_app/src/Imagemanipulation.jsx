import React, { useState } from 'react'
import pik from './images.png'
function Imagemanipulation() {
    const[height,setheight]=useState(150);
    const[width,setwidth]=useState(150);
    const[red,setRed]=useState();
    const[green,setGreen]=useState();
    const[blue,setBlue]=useState();
    const[imgrotate,setImagerotate]=useState(0);
    function increaseheight(){
        setheight(height+10)
    }
    function increasewidth(){
        setwidth(width+10)
    }
    function colorChange(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);
    }
    function rotate(){
setImagerotate(imgrotate+30)
    }

  return (
    <div style={{height:'400px',width:'400px',border:'2px solid red'}}>
      <div style={{paddingLeft:'100px',backgroundColor:`RGB(${red},${green},${blue})`}}>
        <img src={pik}  height={height} width={width}></img>
      </div>
      <div style={{marginTop:'150px'}}>
        <button onClick={increaseheight}>enhance height</button>&nbsp;
        <button onClick={increasewidth}>enhance width</button>&nbsp..;
        <button onClick={rotate}>rotate</button>&nbsp;
        <button onClick={colorChange}>bg color</button>
      </div>
    </div>
  )
}

export default Imagemanipulation
