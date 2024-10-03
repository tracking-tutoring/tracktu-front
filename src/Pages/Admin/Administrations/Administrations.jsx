import React, { useEffect, useState } from 'react'
import { ADD_ADMIN, SHOW_ADMIN, UPDATE_ADMIN } from '../../../Services/path'
import HeaderListes from '../../../Components/HeaderListes/HeaderListes'
import { Table } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa6'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { ServicesResqueteAPI } from '../../../Services/resquet.api'
import { Link } from 'react-router-dom'

export default function Administrations() {

   const [admins, setAdmins] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   const fetchData = async () => {
      setIsLoading(true);
      try {
         ServicesResqueteAPI.getUsers("tracking").then((response) => {
            setAdmins(response.data.data.data);
            setIsLoading(false);
         })
      } catch (error) {
         setIsLoading(false);
         console.error("Error fetching data:", error);
      }
   }

   useEffect(() => {
      fetchData();
   }, []);

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
               {Array.isArray(admins) && admins.length > 0 ? (
                  admins.map((item, index) => {
                     return (
                        <tr key={index}>
                           <td>{index+1}</td>
                           <td>{item.firstname} {item.lastname}</td>
                           <td>{item.email}</td>
                           <td>{item.phone_number}</td>
                           <td>
                              <div className='d-flex gap-2'>
                                 <Link to={`${UPDATE_ADMIN}/${item.id}`} className='btn btn-info'><FaEdit /></Link>
                                 <Link to={`${SHOW_ADMIN}/${item.id}`} className='btn btn-secondary'><FaEye /></Link>
                                 <button className='btn btn-danger'><RiDeleteBin6Line /></button>
                              </div>
                           </td>
                        </tr>
                     );
                  })
               ) : (
                  <tr>
                     <td colSpan="5">Aucun tuteur disponible</td>
                  </tr>
               )}
            </tbody>
         </Table>
      </div>
   )
}

