import React, { useState } from 'react'

const Timer = () => {
  let [hour,sethour] =  useState(0)
  let [minutes,setminutes] =  useState(0)
  let [second,setsecond] =  useState(0)
  let handlestart=()=>{
    setInterval(() => {
        setTime((Date.now))
    }, 10);

  }

  let handlepause=()=>{

  }
  let handlestop=()=>{

  }
  return (
    <div>
        <h1>Design a stopwatch in react</h1>
        <h2>stopwatch:00:00:00</h2>
      <h1>{hour}:{minutes}:{second}</h1>
      <button onClick={handlestart}>start</button>
      <button onClick={handlepause}>pause</button>
      <button onClick={handlestop}>stop</button>

    </div>
  )
}

export default Timer
