import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../pages/shared/NavigationBar/NavigationBar'
import Footer from '../pages/shared/Footer/Footer'
import Home from '../pages/Home/Home/Home'

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Main
