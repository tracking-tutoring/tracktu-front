import React, { useEffect, useState } from 'react'
import { ServicesResqueteAPI } from '../../../Services/resquet.api';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { TUTEURS } from '../../../Services/path';
import { toast } from 'react-toastify';

export default function AddTuteur() {

   const [isLoading, setIsLoading] = useState(false);
   const navigate = useNavigate()




   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm({
      defaultValues: {
         role: "tutor",
         password: "password",
         password_confirmation : "password",
      }
   });




   const onSubmit = (data) => {

      setIsLoading(true);

      ServicesResqueteAPI.createUsers(data)
         .then(() => {
            reset()
            setIsLoading(false);
            toast.success("Tuteur ajouté avec succès");
            navigate(TUTEURS)
         })
         .catch(() => {
            setIsLoading(false);
            toast.error("Echec de l'edit");
         });
   };


   return (
      <div id='formulaire'>
         <div className='d-flex justify-content-center'>
            <form onSubmit={handleSubmit(onSubmit)} action="" className='form bg-white p-3 '>
               <h3 className='text-center'>Ajouter un tuteur</h3>
               <div className='form-group'>
                  <label htmlFor="#" className='form-label'>Nom du tuteur</label>
                  <input type="text" placeholder='Nom ' className='form-control' {...register("firstname", { required: true })} />
                  {errors.firstname && <p>This field is required</p>}
               </div>
               <div className='form-group'>
                  <label htmlFor="#" className='form-label'>Prénom du tuteur</label>
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
                  <input type="submit" value='Ajouter' className='btn btn-secondary' />
               </div>
            </form>
         </div>
      </div>
   )
}

