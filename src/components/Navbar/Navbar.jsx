import React, { useState } from 'react'
import { assets } from '../../assets/assets'
<<<<<<< HEAD
import './Navbar.css'
=======
//import './Nabvar.css'
//This is to pull changes
>>>>>>> 8b9fd3d0c0b1254ceb50074d8132020bff66af97

const Navbar = () => {

  const [menu,setMenu]=useState("menu");
  return (
    <div className='navbar'>
      
      <img src ={assets.logo} alt="" clasName="logo"/>
      <ul className='navbar-menu'>
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
        <li onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt=""/>
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt=""/>
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
