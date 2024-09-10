import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const AllUsers = () => {
    let [all,setAll]=useState(null)

    // useEffect(()=>{
    //   async  function fetching(){
    //         let {data} = await axios.get("http://localhost:3000/user")
    //         setAll(data)


    //     }
    //     fetching()
    // },[])
    // diffrent way
    useEffect(()=>{
        axios.get("http://localhost:3000/user")
        .then((Response)=>
          {setAll(Response.data)})
    
      },[])
let handleDelete=(id)=>{
  axios.delete(`http://localhost:3000/user/${id}`).then(()=>{
    window.location.reload()
    toast.success('users deleted')
  })
}

  return (
    <div>
      {
        all?.map((val,i)=>{
            let{id,username,email} = val
            return(
                <div>
                    <p>{id}</p>
                    <p>{username}</p>
                    <p>{email}</p>
                    <button onClick={()=>{handleDelete(id)}}> delete</button>
                    <Link to={`/update/${id}`}>
                    <button> update</button>
                    </Link>
                </div>
            )
        }) 
      }
    </div>
  )
}

export default AllUsers
