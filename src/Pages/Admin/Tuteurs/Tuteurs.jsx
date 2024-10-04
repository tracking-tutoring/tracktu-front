import React, { useEffect, useState } from 'react'
import { ADD_TUTEUR, SHOW_TUTEUR, UPDATE_TUTEUR } from '../../../Services/path'
import HeaderListes from '../../../Components/HeaderListes/HeaderListes'
import { FaEdit } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa6'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Table } from 'react-bootstrap'
import { ServicesResqueteAPI } from '../../../Services/resquet.api'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

export default function Tuteurs() {

   const [tuteurs, setTuteurs] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   const fetchData = async () => {
      setIsLoading(true);
      try {
         ServicesResqueteAPI.getUsers("tutor").then((response) => {
            setTuteurs(response.data.data.data);
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

   const handleDelete = async (id) => {
      try {
         const result = await Swal.fire({
            title: 'Êtes-vous sûr?',
            text: "Vous ne pourrez pas revenir en arrière!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui, supprimer!',
            cancelButtonText: 'Annuler'
         });

         if (result.isConfirmed) {
            await ServicesResqueteAPI.deleteUsers(id).then(() => {
               toast.success('Le tuteur a été supprimé.');
               fetchData();
            })
         }
      } catch (error) {
         console.error("Error deleting tuteur:", error);
      }
   };

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
               {Array.isArray(tuteurs) && tuteurs.length > 0 ? (
                  tuteurs.map((item, index) => {
                     return (
                        <tr key={index}>
                           <td>{index + 1}</td>
                           <td>{item.firstname} {item.lastname}</td>
                           <td>{item.email}</td>
                           <td>{item.phone_number}</td>
                           <td>
                              <div className='d-flex gap-2'>
                                 <Link to={`${UPDATE_TUTEUR}/${item.id}`} className='btn btn-info'><FaEdit /></Link>
                                 <Link to={`${SHOW_TUTEUR}/${item.id}`} className='btn btn-secondary'><FaEye /></Link>
                                 <button onClick={()=>handleDelete(item.id)} className='btn btn-danger'><RiDeleteBin6Line /></button>
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

