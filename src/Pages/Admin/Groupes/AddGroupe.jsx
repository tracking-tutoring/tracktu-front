import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { ServicesResqueteAPI } from '../../../Services/resquet.api';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { GROUPES } from '../../../Services/path';

export default function AddGroupe() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const userInfoString = JSON.parse(sessionStorage.getItem('userInfos'));
  const userId = userInfoString.id

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user_id: userId,
    }
  });




  const onSubmit = (data) => {

    setIsLoading(true);

    ServicesResqueteAPI.createGroupes(data)
      .then(() => {
        reset()
        setIsLoading(false);
        toast.success("Groupe ajouté avec succès");
        navigate(GROUPES)
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

          <h3 className='text-center'>Ajouter un groupe</h3>
          <div className='form-group'>
            <label htmlFor="#" className='form-label'>Nom du groupe</label>
            <input type="text" placeholder='Nom ' className='form-control' {...register("name", { required: true })} />
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

