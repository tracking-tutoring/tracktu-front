import React from 'react'
import { TfiImport } from "react-icons/tfi";
import { TfiExport } from "react-icons/tfi";
import { IoMdAdd } from "react-icons/io";
import "./HeaderListes.css"
import { Link } from 'react-router-dom';


const HeaderListes = ({ name, link }) => {
   return (
      <div id='HeaderListes'>
         <div className='leftHeaderList'>
            <h2>{name}</h2>
         </div>
         <div className='rigthHeaderList'>
            <Link to={link} ><IoMdAdd /><span>Ajouter</span></Link>
         </div>
      </div>
   )
}

export default HeaderListes;
