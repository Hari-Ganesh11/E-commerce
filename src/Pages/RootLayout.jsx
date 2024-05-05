import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
const RootLayout = () => {
  return (
    <>
    <Navbar/>
    <main className='content'>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default RootLayout