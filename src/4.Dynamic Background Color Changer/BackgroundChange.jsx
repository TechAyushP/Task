

import React, { useState } from 'react'

const BackgroundChange = () => {
    let [inputcolor,setinputcolor]=useState('')
    let [color,setcolor]=useState('')
    let handlechange=(e)=>{
        setinputcolor(e.target.value)
    }
    let handleApplyColor=()=>{
        setcolor(inputcolor)
    }
  return (
    <div style={{height:'100vh',width:'100vw',backgroundColor:color}}>
      <div>
        <input type="text" placeholder='Enter the Color Name' value={inputcolor} onChange={handlechange}/>
        <button onClick={handleApplyColor}>Apply Color</button>
      </div>
    </div>
  )
}

export default BackgroundChange
