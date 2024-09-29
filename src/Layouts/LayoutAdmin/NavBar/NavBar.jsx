import React from 'react'
import './NavBar.css'
import OffcanvasSideBar from '../OffcanvasSideBar/OffcanvasSideBar'
import DropdownProfil from '../../../Components/DropdownProfil/DropdownProfil'

export default function NavBar() {
  return (
    <div id='NavBar' className='d-flex justify-content-between'>
      <div className='d-lg-none'>
        <OffcanvasSideBar />
      </div>

      Tractu-front
      <DropdownProfil />

    </div>
  )
}

