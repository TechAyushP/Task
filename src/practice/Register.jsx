import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    let[username,setUsername]=useState("")
    let[email,setEmail]=useState("")
    let[password,setPassword]=useState("")
    let nevigate=useNavigate()

    let handleName=(e)=>{
        setUsername(e.target.value)
    }

    let handleEmail=(e)=>{
        setEmail(e.target.value)
    }

    let handlePassword=(e)=>{
        setPassword(e.target.value)
    }

    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log(username,password,email);

        let resgisterUsers={

            username:username,
            password:password,
            email:email
    
        }
        console.log(resgisterUsers);
    try {
        if(resgisterUsers.email !=="" && resgisterUsers.password !==""){
            axios.post("http://localhost:5000/user",resgisterUsers).then(()=>{ // register user is payload
                console.log("data sent successfully");
                toast.success('register succesfully')
                setUsername('');
                setEmail('');
                setPassword('');
                nevigate('/login')
                
            }).catch(()=>{
                console.log("data not send");
                
            })
        }else(
            alert("plz send the data")
        )
       
        
    } catch (error) {
        console.log(error);
        
    }
}
  return (
    <div>
        <h1>Register Here:</h1>
        <form onSubmit={handleSubmit}>
            <div className='formGroup'>
                <label htmlFor="username">username:</label>
                <input type="text" id= "username" value={username} onChange={handleName}/>
            </div>
            <div className='formGroup'>
                <label htmlFor="email">email</label>
                <input type="text" id="email" value={email} onChange={handleEmail} />
            </div>
            <div className='formGroup'>
                <label htmlFor="password">password</label>
                <input type="text" id="password" value={password} onChange={handlePassword} />
            </div>
            <input type="submit" value="register"  />
        </form>
    </div>
  )
}

export default Register