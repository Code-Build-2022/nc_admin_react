import React from 'react'
import './single.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { useLocation } from 'react-router-dom'

const Single = () => {
  const location=useLocation()
  console.log(location.pathname.split('/')[2])
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("name");
  console.log(name)
  

  return (

<div className="single">
  <Sidebar/>
  <div className="singleContainer">
    <Navbar/>
  {  location.pathname.split('/')[2]}

  <p>single page</p>
  </div>
  



</div>

  )
}

export default Single
