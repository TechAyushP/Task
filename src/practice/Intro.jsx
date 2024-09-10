import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Service from './Service'
import Register from './Register'
import Login from './Login'
import Profile from './Profile'
import AllUsers from './AllUsers'
import UpdateUser from './UpdateUser'
const Intro = () => {
    let routs= createBrowserRouter([
        {
            path:"/",
            element:<Layout></Layout>,
            children:[
                {
                    path:"/",
                    // index:"true",
                    element:<Home></Home>
                },
                {
                    path:"/about",
                    element:<About></About>
                },
                {
                    path:"/service",
                    element:<Service></Service>
                },
                {
                    path:"/register",
                    element:<Register></Register>
                },
                {
                    path:"/login",
                    element:<Login></Login>
                }
                ,
                {
                    path:"/profile",
                    element:<Profile/>
                },
                {
                    path:"/all",
                    element:<AllUsers></AllUsers>
                },
                {
                    path:"/update/:id",
                    element:<UpdateUser/>
                }
            ]
        }
        
    ])


  return (
    <div>
       <RouterProvider router={routs}></RouterProvider>
    </div>
  )
}

export default Intro