import React, { useEffect, useState } from 'react'
import { SlLogout } from "react-icons/sl";
import { BiUser } from "react-icons/bi";
import "./DropdownProfil.css"
import { Link, useNavigate } from 'react-router-dom';
import { PROFIL_ADMIN } from '../../Services/path';

export default function DropdownProfil() {
   const [dropdownActive, setDropdownActive] = useState(false)

   const userInfoString = JSON.parse(sessionStorage.getItem('userInfos'));


   useEffect(() => {
      const handleDocumentClick = (event) => {

         if (event.target instanceof Element && event.target.closest('.dropdownProf')) {
            return;
         }
         setDropdownActive(false);
      };
      document.addEventListener('click', handleDocumentClick);

      return () => {
         document.removeEventListener('click', handleDocumentClick);
      };
   }, []);

   const gesDropdown = () => {
      setDropdownActive(!dropdownActive)
   }

   const getInitials = (name) => {
      return name
         .split(' ')               // Divise le prénom en mots
         .map(word => word[0])      // Prend la première lettre de chaque mot
         .join('')                  // Combine toutes les lettres
         .toUpperCase();            // Met tout en majuscules
   };

   const navigate = useNavigate();

   const handleLogout = () => {
     sessionStorage.removeItem('userInfos');
     sessionStorage.removeItem('authInfo');

     navigate('/');  // Redirige vers la page d'accueil après la déconnexion
   };
   return (
      <div className="dropdownProf" id='DropdownProfil'>

         <button className="dropbtn text-uppercase" onClick={() => gesDropdown()}>
            <span>{getInitials(userInfoString.lastname)}</span>
            <span>{getInitials(userInfoString.firstname)}</span>
         </button>
         <div id="myDropdown" className={dropdownActive === false ? "dropdown-content" : "show dropdown-content"}>
            <p>{userInfoString.lastname} <span className='text-uppercase'>{userInfoString.firstname}</span></p>
            <Link to={PROFIL_ADMIN}><BiUser /> <span>Profil</span></Link>

            <button onClick={()=>handleLogout()}>
               <SlLogout /><span>Déconnexion</span>
            </button>
         </div>
      </div>
   )
}

