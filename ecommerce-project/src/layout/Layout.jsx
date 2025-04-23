import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import SideBar from '../pages/SideBar'

const Layout = () => {
  return (
    <>
        <Header />
        <SideBar />
        <Outlet />
        <Footer /> 
    </>
  )
}

export default Layout