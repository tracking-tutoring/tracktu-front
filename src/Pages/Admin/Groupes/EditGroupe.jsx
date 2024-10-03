import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ServicesResqueteAPI } from '../../../Services/resquet.api';
import { useForm } from 'react-hook-form';
import { GROUPES } from '../../../Services/path';

export default function EditGroupe() {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false);
  const [group, setGroup] = useState()
  const navigate = useNavigate()

  const fetchData = async (id) => {
    try {
      ServicesResqueteAPI.getGroupe(id).then((response) => {
        setGroup(response.data.data)
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
    if (group) {
      setValue("name", group.name);

    }
  }, [group, setValue]);

  const onSubmit = (data) => {

    setIsLoading(true);

    ServicesResqueteAPI.updateGroupe( id, data )
      .then(() => {
        reset()
        setIsLoading(false);
        toast.success("group modifié avec succès");
        navigate(GROUPES)
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

          <h3 className='text-center'>Modifier le groupe</h3>
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
