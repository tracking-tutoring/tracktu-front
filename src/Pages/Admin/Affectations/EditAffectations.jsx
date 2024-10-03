import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { ServicesResqueteAPI } from '../../../Services/resquet.api';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { GROUPES } from '../../../Services/path';

export default function EditAffectations() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const userInfoString = JSON.parse(sessionStorage.getItem('userInfos'));
  const userId = userInfoString.id
  const { id } = useParams()


  const [groupes, setGroupes] = useState([])
  const [tuteurs, setTuteurs] = useState([])
  const [modules, setModules] = useState([])
  const [affectation, setAffectation] = useState([])

  const fetchData = async (id) => {

    setIsLoading(true);
    try {
      const [groupesResponse, tuteursResponse, modulesResponse, affectationResponse ] = await Promise.all([
        ServicesResqueteAPI.getGroupes(),
        ServicesResqueteAPI.getUsers("tutor"),
        ServicesResqueteAPI.getModules(),
        ServicesResqueteAPI.getAffectation(id)
      ]);

      setGroupes(groupesResponse.data.data.data);
      setTuteurs(tuteursResponse.data.data.data);
      setModules(modulesResponse.data.data.data);
      setAffectation(affectationResponse.data.data.data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      assigned_by: userId,
    }
  });


  useEffect(() => {
    if (!isLoading && affectation) {
      setValue("name", affectation.nom);
      setValue("group_id", affectation.group_id);
      setValue("tutor_id", affectation.tutor_id);
      setValue("module_id", affectation.module_id);
    }
  }, [isLoading, affectation, setValue]);


  const onSubmit = (data) => {

    setIsLoading(true);

    ServicesResqueteAPI.updateAffectation(data)
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

          <h3 className='text-center'>Modifier l'affectation</h3>

          <div className='form-group'>
            <label htmlFor="#" className='form-label'>Nom du groupe</label>
            <input type="text" placeholder='Nom ' className='form-control' {...register("name", { required: true })} />
            {errors.firstname && <p>This field is required</p>}
          </div>

          <div className='form-group'>
            <label className='form-label'>Selectionné un Groupe</label>
            <select className='form-control' {...register("group_id", { required: true, pattern: /^[0-9]+$/ })}>
              <option >Selectionné un groupe</option>
              {groupes?.map((groupe) => (
                <option key={groupe.id} value={groupe.id}>
                  {groupe?.name}
                </option>
              ))}
            </select>
            {errors.group_id && <p>This field is required</p>}
          </div>

          <div className='form-group'>
            <label className='form-label'>Selectionné un Tuteur</label>
            <select className='form-control' {...register("tutor_id", { required: true, pattern: /^[0-9]+$/ })}>
              <option >Selectionné un module</option>
              {tuteurs?.map((tuteur) => (
                <option key={tuteur.id} value={tuteur.id}>
                  {tuteur?.firstname} {tuteur?.lastname}
                </option>
              ))}
            </select>
            {errors.tutor_id && <p>This field is required</p>}
          </div>

          <div className='form-group'>
            <label className='form-label'>Selectionné une Module</label>
            <select className='form-control' {...register("module_id", { required: true, pattern: /^[0-9]+$/ })}>
              <option >Selectionné un module</option>
              {modules?.map((module) => (
                <option key={module.id} value={module.id}>
                  {module?.name}
                </option>
              ))}
            </select>
            {errors.module_id && <p>This field is required</p>}
          </div>

          <div className='form-group'>
            <input type="submit" value='Modifier' className='btn btn-secondary' />
          </div>
        </form>
      </div>
    </div>
  )
}

