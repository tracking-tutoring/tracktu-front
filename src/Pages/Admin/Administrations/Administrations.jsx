import React from 'react'
import { ADD_ADMIN } from '../../../Services/path'
import HeaderListes from '../../../Components/HeaderListes/HeaderListes'
import { Table } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa6'
import { RiDeleteBin6Line } from 'react-icons/ri'

export default function Administrations() {
   const data = [1, 2, 3, 4, 5]
   return (
      <div>
         <HeaderListes name={"Administrations"} link={ADD_ADMIN} />
         <Table responsive striped>
            <thead>
               <tr>
                  <th>#</th>
                  <th>Nom & Prénom</th>
                  <th>Email</th>
                  <th>Téléphone</th>
                  <th>Action</th>
               </tr>
            </thead>
            <tbody>
               {
                  data?.map((item, index) => {
                     return <tr key={index}>
                        <td>{item}</td>
                        <td>Barry Alpha Oumar</td>
                        <td>alphaoumar@gmail.com</td>
                        <td>+1 (567) 814-1285</td>
                        <td>
                           <div className='d-flex gap-2'>
                              <button className='btn btn-info'><FaEdit /></button>
                              <button className='btn btn-danger'><RiDeleteBin6Line /></button>
                              <button className='btn btn-secondary'><FaEye /></button>
                           </div>
                        </td>
                     </tr>
                  })
               }
            </tbody>
         </Table>
      </div>
   )
}

