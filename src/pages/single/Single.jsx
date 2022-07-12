import React from 'react'
import './single.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { useLocation } from 'react-router-dom'

const Single = () => {
  const location=useLocation()
  console.log(location.pathname.split('/')[2])
  return (

<div className="single">
  <Sidebar/>
  <div className="singleContainer">
    <Navbar/>
  {  location.pathname.split('/')[2]}
  <p>suhan</p>
  </div>
  



</div>

  )
}

export default Single
