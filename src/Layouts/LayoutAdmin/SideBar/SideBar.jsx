import React, { useEffect, useState } from 'react'
import './SideBar.css'
import { TfiAlignLeft } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";



const SideBar = ({ toggleDimClass }) => {

   const [isOpen, setIsOpen] = useState(true);

   const openSideBar = () => {
      toggleDimClass();
      setIsOpen(true)
   }

   const closeSideBar = () => {
      setIsOpen(false)
      toggleDimClass();
   }

   return (
      <div id='content-sidebar'>
         <div className="p-2 d-flex justify-content-between align-items-center sticky-top SB-Top" >
            <h6 className=''>Trac-tuto</h6>
            {isOpen === true ?
               <button onClick={() => closeSideBar()} className='bg-transparent fw-1 text-white border-0'>
                  <TfiClose className='fs-3' />
               </button> :
               <button onClick={() => openSideBar()} className='bg-transparent fw-1 text-white border-0'>
                  <TfiAlignLeft className='fs-3' />
               </button>
            }
         </div>
         <div className='SB-Bottom'>
            <div>
               <a href="#" className='text-white'>Dashboard</a>
            </div>
            <div>
               <a href="/" className='text-danger'>Deconnexion</a>
            </div>
         </div>
      </div>
   )
}

export default SideBar;
