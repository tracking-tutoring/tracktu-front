import React from 'react'
import './NavBar.css'
import OffcanvasSideBar from '../OffcanvasSideBar/OffcanvasSideBar'
import DropdownProfil from '../../../Components/DropdownProfil/DropdownProfil'

export default function NavBar() {
  const userInfoString = window.sessionStorage.getItem('userInfos');
  const userInfo = userInfoString ? JSON.parse(userInfoString) : null;

  return (
    <div id='NavBar' className='d-flex justify-content-between'>
      <div className='d-lg-none'>
        <OffcanvasSideBar />
      </div>
      <strong>
      {
        userInfo.role === "tracking" ? "Admin" : "Tuteur"
      }
      </strong>
      <DropdownProfil />

    </div>
  )
}

