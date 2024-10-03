import React from 'react'
import { TfiAlignLeft } from "react-icons/tfi";
import './OffcanvasSideBar.css'
import LinkSideBar from '../../../Components/LinkSideBar/LinkSideBar';
import LinkSideBarTutor from '../../../Components/LinkSideBar/LinkSideBarTutor';

export default function OffcanvasSideBar() {
   const userInfo = JSON.parse(sessionStorage.getItem('userInfos') || '{}');

   return (
      <div id='OffcanvasSideBar'>
         <button className="btn-toggle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
            <TfiAlignLeft className='fs-3' />
         </button>

         <div className="offcanvas offcanvas-start" data-bs-scroll="true" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div className="offcanvas-header">
               <div className="p-2 d-flex gap-2 justify-content-between align-items-center bg-white sticky-top SB-Top" >
                  <h6 className='text-center '>Trac-tuto</h6>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
               </div>
            </div>
            <div className="offcanvas-body">
               <div className='SB-Bottom mt-3'>
                  <div>
                     {
                        userInfo.role === "tutor" ? <LinkSideBarTutor /> : <LinkSideBar />
                     }
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

