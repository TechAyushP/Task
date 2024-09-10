import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateUser = () => {
    let nevigate=useNavigate()
    let[edituser,setedituser]=useState({
        username:'',
        email:'',
        password:''
    });

    // it retun object it will give id url vali  it will give user
   
    let {id} =useParams()

    // useEffect(()=>{
    //     async function getuser() {
    //         let {data}=await axios.get(`http://localhost:3000/user/${id}`);
    //         console.log(data);
    //         setedituser(data)
            
    //     }
    //     getuser()
    // },[])
 // alternative way
    useEffect(()=>{
        axios.get(`http://localhost:3000/user/${id}`).then(({data})=>{
            setedituser(data)

        })

    },[])


    let handleedit=((e)=>{
let {name,value}=e.target
setedituser({...edituser, [name]: value})
    })

    
    let formsubmit=(()=>{
        try{
            axios.put(`http://localhost:3000/user/${id}`,edituser).then(()=>{
                toast.success('user updated')
                nevigate('/all')
            }).catch(()=>{
                toast.fail('failled')
            })
        }
        catch(error){
            console.log(error);
            
        }

    })
    
  return (
    <div>
      <h1>Edit USer</h1>
      <label htmlFor="">Name</label>
      <input type="text" name='username' placeholder='Enter name'  value={edituser.username}  onChange={handleedit} />
      <br />
      <br />
      <label htmlFor="">Email</label>
      <input type="text" name='email' placeholder='Enter Email' value={edituser.email}  onChange={handleedit}/>
      <br />
      <br /><label htmlFor="">Password</label>
      <input type="text" name='password' placeholder='Enter Password'  value={edituser.password} onChange={handleedit}/>

      <br />
      <br />
      <button  onClick={formsubmit}> update</button>
    </div>
  )
}

export default UpdateUser
