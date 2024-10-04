import React, { useEffect, useState } from 'react'
import './SideBar.css'
import { TfiAlignLeft } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import LinkSideBar from '../../../Components/LinkSideBar/LinkSideBar';
import LinkSideBarTutor from '../../../Components/LinkSideBar/LinkSideBarTutor';
import logo from "../../../assets/logo.jpeg"



const SideBar = ({ toggleDimClass }) => {
   const userInfo = JSON.parse(sessionStorage.getItem('userInfos') || '{}');
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
         <img src={logo} alt="" className='img-fluid' style={{ width: 50, borderRadius: 100 }} />
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
         <div className='SB-Bottom mt-3'>
            <div>
               {
                  userInfo.role === "tutor" ? <LinkSideBarTutor/> :<LinkSideBar />
               }
            </div>
         </div>
      </div>
   )
}

export default SideBar;
