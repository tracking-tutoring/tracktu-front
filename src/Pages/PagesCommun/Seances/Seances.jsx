import React from 'react'
import { ADD_SEANCE_ADMIN } from '../../../Services/path'
import HeaderListes from '../../../Components/HeaderListes/HeaderListes'

export default function Seances() {
   return (
      <div>
         <HeaderListes name={"Séances"} link={ADD_SEANCE_ADMIN} />

      </div>
   )
}

