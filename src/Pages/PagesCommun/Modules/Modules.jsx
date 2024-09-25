import React from 'react'
import HeaderListes from '../../../Components/HeaderListes/HeaderListes'
import CardModule from '../../../Components/CardModule/CardModule'
import { ADD_MODULE_ADMIN } from '../../../Services/path'


export default function Modules() {
  const Modules = [1,2,3,4,5,6]
  return (
    <div>
      <HeaderListes name={"Modules"} link={ADD_MODULE_ADMIN} />
      <div className="container-fluid">
        <div className="row g-3">
          {Modules.map((index)=>{
            return  <CardModule key={index}/>
          })}

        </div>
      </div>
    </div>
  )
}

