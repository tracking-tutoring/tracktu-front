import React, { useState } from 'react'
import { DASHBOARD_TUTEUR, LOGIN, PROFIL_TUTOR, UPDATE_PASSWORD_TUTOR, UPDATE_PROFIL_TUTOR } from '../../Services/path'
import { CgLogOff } from 'react-icons/cg'
import { MdOutlineSecurity } from 'react-icons/md'
import { FaUserEdit } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { GrUserSettings } from 'react-icons/gr'
import { TfiLayoutGrid2Alt } from 'react-icons/tfi'

export default function LinkSideBarTutor() {
   const [accordionIsOpen, setAccordionIsOpen] = useState(false)
   const navigate = useNavigate()

   const gestionAccordion = () => {
      setAccordionIsOpen(!accordionIsOpen)
   }

   const logOut = () => {
      navigate(LOGIN)
   }

   return (
      <div id='LinkSideBar'>
         <Link to={DASHBOARD_TUTEUR}>
            <TfiLayoutGrid2Alt />
            <span>Dashboard</span>
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
                     <Link to={PROFIL_TUTOR}><FaRegUser /> <span>Profil</span> </Link>
                  </li>
                  <li>
                     <Link to={UPDATE_PROFIL_TUTOR}><FaUserEdit />
                        <span>Modifier</span> </Link>
                  </li>
                  <li>
                     <Link to={UPDATE_PASSWORD_TUTOR}><MdOutlineSecurity /> <span>Securité</span> </Link>
                  </li>
               </ul>
            </div>
         </div>

         <button onClick={() => logOut()}>
            <CgLogOff /> <span>Déconnexion</span>
         </button>
      </div>
   )
}
