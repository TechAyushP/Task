import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div >
        <ul style={{display:"flex" , justifyContent:"space-evenly" ,alignItems:"center" ,background:"red", color:"white" ,height:"10vh"}}>
            <li><Link to="/" style={{color:"white"}}>Home</Link></li>
            <li><Link to="/about" style={{color:"white"}}>About</Link></li>
            <li><Link to="/service" style={{color:"white"}}>Service</Link></li>
            <li><Link to="/register" style={{color:"white"}}>Register</Link></li>
            <li><Link to="/login" style={{color:"white"}}>login</Link></li>
            <li><Link to="/all" style={{color:"white"}}>Allusers</Link></li>

        </ul>
    </div>
  )
}

export default Navbar