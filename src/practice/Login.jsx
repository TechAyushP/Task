import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
    let nevigate=useNavigate()
    let [login,setlogin]=useState({
        email:'',
        password:''
    })
    let [register,setregister]=useState(null)

    useEffect(()=>{
      async function fetchuser() {
        let {data}=await axios.get('http://localhost:5000/user')
        console.log(data);
        setregister(data)
        
        
      }
      fetchuser()
    },[])
    let handlechange=(e)=>{
let {name,value}=e.target
console.log({});
setlogin({...login,[name]:value})

}
let handlesubmit=(e)=>{
e.preventDefault()
console.log(login); //{}
console.log(register);// [{}, {},{}]
let authuser=register.find((user)=>{
    console.log(user);
    return user.email===login.email && user.password === login.password

});
console.log(authuser);
if (authuser) {
    {nevigate('/profile')}
}
else {
    nevigate('/register')
}



}
  return (
    <div>
        <h1>Login</h1>
      <form action="" onSubmit={handlesubmit}>
        <label htmlFor="">Email</label>
        <input type="text" placeholder='Enter Email' name='email' value={login.email} onChange={handlechange} /> <br /> <br />
        <label htmlFor="">Password</label>
        <input type="text" placeholder='Enter Password' name='password' value={login.password}  onChange={handlechange}/> <br /> <br />
        <input type="submit" value="login" />
      </form>
      <div>
      

      </div>
    </div>
  )
}

export default Login
