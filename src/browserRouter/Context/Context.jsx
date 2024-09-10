import React, { createContext, useState } from 'react'
 export let GLOBALDATA=createContext()

const Context = (props) => {
    let [registeruser,setregisteruser]=useState({
        email:"",
        password:''
    });
    let handleregisteruser=(e)=>{
        let {name,value}=e.target
        setregisteruser({...registeruser,[name]:value})
    }
  return  <GLOBALDATA.Provider value={{registeruser,handleregisteruser}} >{props.children}</GLOBALDATA.Provider>
}

export default Context
