import React, { useState } from 'react'
import './LayoutAdmin.css'
import SideBar from './SideBar/SideBar'
import NavBar from './NavBar/NavBar'
import { Outlet } from 'react-router-dom'

export default function LayoutAdmin() {
   const [isDimmed, setIsDimmed] = useState(false);

   const toggleDimClass = () => {
      setIsDimmed(!isDimmed);
   };

   return (
      <div id='fullScreen' className={`content ${isDimmed ? 'ControlDimSB' : ''}`}>
         {/* ==========SideBar========== */}
         <nav id='side-bar'>
            <SideBar toggleDimClass={toggleDimClass} />
         </nav>

         {/* ============NavBar============= */}
         <header id='nav-bar'>
            <NavBar />
         </header>

         {/* ============Containe-principale========== */}
         <div id='main-container'>
            <Outlet />
         </div>

      </div>
   )
}

