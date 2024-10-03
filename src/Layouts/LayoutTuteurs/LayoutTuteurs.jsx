import React, { useState } from 'react'
import '../Layout.css'

import { Outlet } from 'react-router-dom'
import SideBar from '../LayoutAdmin/SideBar/SideBar';
import NavBar from '../LayoutAdmin/NavBar/NavBar';

export default function LayoutTuteurs() {
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

