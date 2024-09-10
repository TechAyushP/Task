
import React, { useState } from 'react'

const ToggleButton = () => {
    let[toggle,settoggle]=useState(false)
  return (
    <div>
      <span>{toggle? 'Turn ON':'Turn OFF'}</span>
      <button onClick={()=>{settoggle(toggle=!toggle)}} >-Toggle</button>
    </div>
  )
}

export default ToggleButton
