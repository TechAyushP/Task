import React, { useContext } from 'react'

import { GLOBALDATA } from '../Context/Context';
const RegisterUser = () => {
    let {registeruser,handleregisteruser}=useContext(GLOBALDATA)
    console.log(registeruser);
    
  return (
    <div>
      <h1>Register Here</h1>
      <h2>Sign up </h2>

      <form >
        <input type="text" placeholder='Enter email' name='email' value={registeruser.email}  onChange={handleregisteruser} />
        <input type="text" placeholder='Enter password' name='password' value={registeruser.password} onChange={handleregisteruser}  />
        <br />
        <input type="submit"  />

      </form>
    </div>
  )
}

export default RegisterUser
