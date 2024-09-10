import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
  return (
    <div>
      <Toaster></Toaster>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>

  )
}

export default Layout