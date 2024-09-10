import React from 'react'
import { BrowserRouter,Route,Routes  } from 'react-router-dom'
import Navbar from './component/Navbar'
import RegisterUser from './component/RegisterUser'
import LoginUser from './component/LoginUser'

const RouterApp = () => {
  return (
    <div>
<h1>Router App Component</h1>

<BrowserRouter> 
<Navbar/>

<Routes>   
    <Route path='/' element={<RegisterUser/>}/>
    <Route path='/loginuser' element={<LoginUser/>}/>


</Routes>

</BrowserRouter>

</div>
  )
}

export default RouterApp
