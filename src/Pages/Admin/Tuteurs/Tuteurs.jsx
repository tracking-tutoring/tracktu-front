import React from 'react'
import { ADD_TUTEUR } from '../../../Services/path'
import HeaderListes from '../../../Components/HeaderListes/HeaderListes'
import { FaEdit } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa6'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Table } from 'react-bootstrap'

export default function Tuteurs() {
   const data = [1, 2, 3, 4, 5]
   return (
      <div>
         <HeaderListes name={"Tuteurs"} link={ADD_TUTEUR} />
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

