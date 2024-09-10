import React, { useState } from 'react'

const Counter = () => {
    let [count,setcount]=useState(0)
  return (
    <div>
     <div style={{height:'200px', width:'250px', backgroundColor:'yellow',display:''}}>
        <h1>Count:{count}</h1>
        <button onClick={()=>{setcount(count+1)}}>Increment</button>
        <button onClick={()=>{setcount(count-1)}}>Decrement</button>
        <button onClick={()=>{setcount(count=0)}}>Reset</button>

     </div>
    </div>
  )
}

export default Counter
