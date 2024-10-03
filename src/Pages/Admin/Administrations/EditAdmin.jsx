import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { ADMINISTRATION } from '../../../Services/path';
import { toast } from 'react-toastify';
import { ServicesResqueteAPI } from '../../../Services/resquet.api';

export default function EditAdmin() {
   const { id } = useParams()
   const [isLoading, setIsLoading] = useState(false);
   const [admins, setAdmins] = useState()
   const navigate = useNavigate()

   const fetchData = async (id) => {
      try {
         ServicesResqueteAPI.getUser("tracking",id).then((response) => {
            setAdmins(response.data.data)
         })
      } catch (error) {

      }
   }
   useEffect(() => {
      if (id !== undefined) {
         fetchData(id)
      }
   }, [])

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
      setValue,
   } = useForm();


   useEffect(() => {
      if (admins) {
         setValue("firstname", admins.firstname);
         setValue("lastname", admins.lastname);
         setValue("email", admins.email);
         setValue("phone_number", admins.phone_number);
      }
   }, [admins, setValue]);

   const onSubmit = (data) => {

      setIsLoading(true);

      ServicesResqueteAPI.updateUser("tracking",data, id)
         .then(() => {
            reset()
            setIsLoading(false);
            toast.success("admins modifié avec succès");
            navigate(ADMINISTRATION)
         })
         .catch(() => {
            setIsLoading(false);
            toast.error("Echec de l'ajout");
         });
   };


   return (
      <div id='formulaire'>
         <div className='d-flex justify-content-center'>
            <form onSubmit={handleSubmit(onSubmit)} action="" className='form bg-white p-3 '>
               <h3 className='text-center'>Ajouter un admin</h3>
               <div className='form-group'>
                  <label htmlFor="#" className='form-label'>Nom du admin</label>
                  <input type="text" placeholder='Nom ' className='form-control' {...register("firstname", { required: true })} />
                  {errors.firstname && <p>This field is required</p>}
               </div>
               <div className='form-group'>
                  <label htmlFor="#" className='form-label'>Prénom du admin</label>
                  <input type="text" placeholder='Prénom ' className='form-control' {...register("lastname", { required: true })} />
                  {errors.firstname && <p>This field is required</p>}
               </div>
               <div className='form-group'>
                  <label htmlFor="#" className='form-label'>Adresse mail</label>
                  <input type="text" placeholder='Email' className='form-control'  {...register("email", { required: true })} />
                  {errors.firstname && <p>This field is required</p>}
               </div>
               <div className='form-group'>
                  <label htmlFor="#" className='form-label'>Numero de téléphone</label>
                  <input type="phone" placeholder='Téléphone' className='form-control'  {...register("phone_number", { required: true })} />
                  {errors.firstname && <p>This field is required</p>}
               </div>

               <div className='form-group'>
                  <input
                     className='btn btn-secondary'
                     type="submit"
                     disabled={isLoading ? true : false}
                     value={!isLoading ? 'Modifier' : 'Modifie...'}
                  />
               </div>
            </form>
         </div>
      </div>
   )
}
