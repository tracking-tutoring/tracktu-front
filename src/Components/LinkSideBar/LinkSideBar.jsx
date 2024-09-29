import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { FaUsersRectangle } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiBookmarklet } from "react-icons/gi";
import { GrUserSettings } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { MdAdminPanelSettings, MdOutlineSecurity } from "react-icons/md";
import { CgLogOff } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import "./LinkSideBar.css"
import { ADMINISTRATION, DASHBOARD_ADMIN, LOGIN, MODULE_ADMIN, PROFIL_ADMIN, SEANCE_ADMIN, TUTEURS, UPDATE_PASSWORD_ADMIN, UPDATE_PROFIL_ADMIN } from '../../Services/path';

export default function LinkSideBar() {
   const [accordionIsOpen, setAccordionIsOpen] = useState(false)
   const navigate = useNavigate()

   const gestionAccordion = () => {
      setAccordionIsOpen(!accordionIsOpen)
   }

   const logOut = ()=>{
      navigate(LOGIN)
   }


   return (
      <div id='LinkSideBar'>
         <Link to={DASHBOARD_ADMIN}>
            <TfiLayoutGrid2Alt />
            <span>Dashboard</span>
         </Link>

         <Link to={ADMINISTRATION}>
            <MdAdminPanelSettings />
            <span>Administrations</span>
         </Link>

         <Link to={TUTEURS}>
            <FaChalkboardTeacher />
            <span>Tuteurs</span>
         </Link>

         <Link to={SEANCE_ADMIN}>
            <FaUsersRectangle />
            <span>Séances</span>
         </Link>

         <Link to={MODULE_ADMIN}>
            <GiBookmarklet />
            <span>Modules</span>
         </Link>


         <div>
            <button className="accordion" onClick={() => gestionAccordion()}>
               <GrUserSettings /> <span>Paramètres</span>
               {accordionIsOpen === false ? <IoIosArrowForward /> :
                  <IoIosArrowDown />}
            </button>
            <div className={accordionIsOpen === false ? "panel notActive" : "panel active"}>
               <ul>
                  <li>
                     <Link to={PROFIL_ADMIN}><FaRegUser /> <span>Profil</span> </Link>
                  </li>
                  <li>
                     <Link to={UPDATE_PROFIL_ADMIN}><FaUserEdit />
                        <span>Modifier</span> </Link>
                  </li>
                  <li>
                     <Link to={UPDATE_PASSWORD_ADMIN}><MdOutlineSecurity /> <span>Securité</span> </Link>
                  </li>
               </ul>
            </div>
         </div>

         <button onClick={()=>logOut()}>
            <CgLogOff /> <span>Déconnexion</span>
         </button>

      </div>
   )
}

